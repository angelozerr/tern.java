#!/usr/bin/env node

gTypeHash = {};

var opts = require("opts");
var extend = require("node.extend");
var fs = require("fs");

opts.parse([{ short: "v",
              long: "verbose",
              description: "Show verbose.",
              value: false, },
            { long: "output",
              description: "Path of output file.",
              value: true,
              required: true, }],
           true);

var verbose = opts.get("verbose");
var filepath = opts.get("output");
make_plugin(filepath);


/////////////
// Utility

function logging(arg) {
    if ( ! verbose ) return;
    console.log(arg);
}

function fix_to_symbol(str) {
    return ! str ? ""
           :       str.replace(/\s+/g, "").replace(/-/g, "");
}


/////////////////
// Make Plugin

function make_plugin(fpath) {
    var refdir = __dirname+"/refs";
    logging("Start load reference from "+refdir);
    fs.readdir(refdir, function (err, files) {
        if ( err ) {
            console.error("Failed access '"+refdir+"' : "+err);
            process.exit(1);
        }

        files.filter(function (f) {
            return fs.statSync(refdir+"/"+f).isFile() && /.+\.json$/.test(f);
        }).forEach(function (f) {
            var category = f.replace(/\.json$/, "");
            console.info("Load reference of "+category+" ...");
            var currtypeh = JSON.parse(fs.readFileSync(refdir+"/"+f, "utf8"));
            gTypeHash = extend(gTypeHash, currtypeh);
        });

        var def = { "!name": "gas", "!define": build_local_type_definition() };
        def = extend(def, build_global_type_definition());

        logging("Start make plugin : "+fpath);
        var rbuff = fs.readFileSync(__dirname+"/template.js", "utf8");
        var wbuff = rbuff.replace(/'!def'/, JSON.stringify(def));
        fs.writeFile(fpath, wbuff, "utf8", function (err) {
            if ( err ) {
                console.error("Failed write plugin : "+err);
                process.exit(1);
            }
            console.info("Finished make plugin : "+fpath);
        });
    });
}

function build_global_type_definition() {
    var ret = {};
    var keys = Object.keys(gTypeHash);
    for ( var i = 0; i < keys.length; i++ ) {
        var t = gTypeHash[ keys[i] ];
        if ( ! t.global ) continue;
        ret[t.name] = build_type_definition(t, true);
    }
    return ret;
}

function build_local_type_definition() {
    var ret = {};
    var keys = Object.keys(gTypeHash);
    for ( var i = 0; i < keys.length; i++ ) {
        var t = gTypeHash[ keys[i] ];
        if ( t.global ) continue;
        var sctg = fix_to_symbol(t.category);
        if ( ! ret[sctg] ) ret[sctg] = {};
        var ctypeh = ret[sctg];
        ctypeh[t.name] = build_type_definition(t, false);
    }
    return ret;
}

function build_type_definition(type, asStatic) {
    logging("Start build definition : "+type.category+"."+type.name);
    var ret = {};
    ret["!url"] = type.url;
    ret["!doc"] = type.doc;
    if ( asStatic ) {
        ret = extend(ret, build_member_definition(type));
    }
    else {
        ret["prototype"] = build_member_definition(type);
    }
    return ret;
}

function build_member_definition(type) {
    var ret = {};
    var props = type.property;
    for ( var i = 0; i < props.length; i++ ) {
        var p = props[i];
        ret[p.name] = { "!type": build_type_attribute(p.type, true) || "?", "!doc": p.doc };
    }
    var mtds = type.method;
    for ( var i = 0; i < mtds.length; i++ ) {
        var m = mtds[i];
        ret[m.name] = { "!type": build_method_signature(m), "!url": m.url, "!doc": m.doc };
    }
    return ret;
}

function build_method_signature(mtd) {
    var argpart = "";
    var args = mtd.argument || [];
    for ( var i = 0; i < args.length; i++ ) {
        var a = args[i];
        if ( argpart != "" ) argpart += ", ";
        var typeinfo = build_type_attribute(a.type, false) || "?";
        argpart += a.name + ": " + typeinfo;
    }
    var retinfo = build_type_attribute(mtd.return, true);
    var retpart = retinfo ? " -> "+retinfo : "";
    return "fn(" + argpart + ")" + retpart;
}

function build_type_attribute(typeattr, asInstance) {
    if ( ! typeattr || typeattr == "" || typeattr == "void" ) return null;
    var arrnest = 0;
    var arrre = /\[\]$/;
    while ( typeattr.match(arrre) ) {
        arrnest++;
        typeattr = typeattr.replace(arrre, "");
    }
    var prefix = asInstance ? "+" : "";
    var ret = "";
    var type = gTypeHash[typeattr];
    if ( ! type && ! typeattr.match(/\./) ) {
        ret = typeattr == "Integer" ? "number"
            : typeattr == "Boolean" ? "bool"
            : typeattr == "Enum"    ? "string"
            :                         typeattr.toLowerCase();
    }
    else {
        ret = type && type.global ? prefix+type.name
            :                       prefix+typeattr;
    }
    for ( var i = 0; i < arrnest; i++ ) {
        ret = "["+ret+"]";
    }
    return ret;
}

