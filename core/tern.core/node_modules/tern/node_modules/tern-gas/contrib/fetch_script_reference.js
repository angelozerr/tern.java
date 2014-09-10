#!/usr/bin/env node

JQUERY_URL = "http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js";
GOOGLE_DOC_SERVER = "http://developers.google.com";
ROOT_URI = "/apps-script/reference/";
SCRIPT_CATEGORIES = ["base", "cache", "charts", "content", "html", "jdbc", "lock", "mail",
                     "properties", "script", "ui", "url-fetch", "utilities", "xml-service",
                     "calendar", "contacts", "docs-list", "document", "drive", "forms",
                     "gmail", "groups", "language", "maps", "sites", "spreadsheet" ];

gTypeHash = {};
gTaskFinished_Of = {};
gFetchQueue = [];
gFetchRunning = false;

var opts = require("opts");
var request = require("request");
var jsdom = require("jsdom");
var fs = require("fs");

opts.parse([{ short: "v",
              long: "verbose",
              description: "Show verbose.",
              value: false, },
            { long: "category",
              description: "Target category. use category-list option to see the list.",
              value: true,
              required: true, },
            { long: "category-list",
              description: "Just show category list.",
              value: false,
              callback: function () { console.info(SCRIPT_CATEGORIES.join("\n")); process.exit(); }}],
           true);

var verbose = opts.get("verbose");
var category = opts.get("category");
if ( SCRIPT_CATEGORIES.indexOf(category) == -1 ) {
    console.error("Unknown category : "+category);
    console.error("You can see the category list by using category-list option");
    process.exit(1);
}
fetch_script_category(category);


/////////////
// Utility

function logging(arg) {
    if ( ! verbose ) return;
    console.log(arg);
}

function start_task(tasknm) {
    gTaskFinished_Of[tasknm] = false;
}

function finish_task(tasknm) {
    gTaskFinished_Of[tasknm] = true;
}

function is_all_task_finished() {
    for ( var task in gTaskFinished_Of ) {
        if ( ! gTaskFinished_Of[task] ) return false;
    }
    return true;
}

function fix_to_symbol(str) {
    return ! str ? ""
           :       str.replace(/\s+/g, "").replace(/-/g, "");
}

function is_symbol(str) {
    return str && str.match(/^[a-zA-Z0-9._]+$/) ? true : false;
}


//////////////////////
// Fetch Definition

function fetch_script_category(category) {
    start_task(category);
    var url = get_category_url(category);
    fetch_document(category, url, function ($) {
        parse_category_document(category, $);
        logging("Finished fetch category : "+category);
        finish_task(category);
        if ( ! is_all_task_finished() ) return;
        make_reference(category);
    });
}

function fetch_script_type(category, typenm, url) {
    var typefullnm = get_type_fullnm(category, typenm);
    start_task(typefullnm);
    fetch_document(typefullnm, url, function ($) {
        parse_type_document(category, typenm, $);
        logging("Finished fetch type : "+typefullnm);
        finish_task(typefullnm);
        if ( ! is_all_task_finished() ) return;
        make_reference(category);
    });
}

function fetch_document(desc, url, success_func) {
    gFetchQueue.push({ description: desc, url: url, cb: success_func });
    if ( gFetchRunning ) return;
    fetch_next_document();
};

function fetch_next_document() {
    if ( gFetchQueue.length == 0 ) return;
    var next = gFetchQueue.shift();
    run_fetch_document(next.description, next.url, next.cb);
}

function run_fetch_document(desc, url, success_func) {
    console.info("Fetch reference of "+desc+" ...");
    gFetchRunning = true;
    request.get({ url: url, pool: { agent: false } }, function(err, res, body) {
        gFetchRunning = false;
        fetch_next_document();
        if ( err ) {
            console.error("Failed fetch '"+desc+"' : "+err);
            process.exit(1);
        }
        if ( res.statusCode != 200 ) {
            console.error("Failed fetch '"+desc+"' : Returned status is "+res.statusCode);
            process.exit(1);
        }
        jsdom.env({ html: body, scripts: [ JQUERY_URL ] , done: function(err, window) {
            if ( err ) {
                console.error("Failed do jsdom : "+err);
                process.exit(1);
            }
            success_func(window.jQuery);
        }});
    });
}

function parse_category_document(category, $) {
    // Collect type from sidebar
    logging("Start parse to category : "+category);
    var types = find_types_in_sidebar(category, $);
    if ( ! types ) return;
    var kind = "class";
    var global = true;
    for ( var i = 0; i < types.length; i++ ) {
        var tlink = types.eq(i).find("a");
        if ( tlink.length > 0 ) {
            var typenm = tlink.eq(0).attr("title");
            if ( ! is_symbol(typenm) ) continue;
            var url = get_refer_url( category, tlink.eq(0) );
            var key = get_type_fullnm(category, typenm);
            gTypeHash[key] = { name: typenm, kind: kind, global: global, category: category, url: url };
            logging("Found type : name:'"+typenm+"' kind:'"+kind+"' global:'"+global+"'");
            fetch_script_type(category, typenm, url);
        }
        else {
            var kindval = types.eq(i).find(".tlw-title").text();
            kind = kindval.match(/CLASSES/)    ? "class"
                 : kindval.match(/INTERFACES/) ? "interface"
                 : kindval.match(/ENUMS/)      ? "enum"
                 :                               "";
            global = false;
        }
    }
}

function parse_type_document(category, typenm, $) {
    var maincontent = $("#gc-content");
    var key = get_type_fullnm(category, typenm);
    var type = gTypeHash[key];
    if ( ! type ) return;
    
    // Get doc of type
    type.doc = get_documentation_from_element( maincontent.find(".type.doc") );
    logging("Got doc of type:'"+typenm+"' : "+type.doc);
    
    // Get property
    var props = [];
    var propdefs = maincontent.find(".type.toc table.members.property");
    if ( propdefs.length > 0 ) {
        var propentries = propdefs.eq(0).find("tr");
        for ( var i = 1; i < propentries.length; i++ ) {
            var e = propentries.eq(i).find("td");
            var propnm = get_symbol_from_element( e.eq(0) );
            var ptype = get_type_from_cell( category, e.eq(1) );
            var doc = get_documentation_from_element( e.eq(2) );
            props.push( { name: propnm, type: ptype, doc: doc } );
            logging("Got prop '"+typenm+"' : name:'"+propnm+"' type:'"+ptype+"' doc:'"+doc+"'");
        }
    }
    type.property = props;
    
    // Get method
    var mtds = [];
    var mtdsigh = {};
    var mtddefs = maincontent.find(".type.toc table.members.function");
    if ( mtddefs.length > 0 ) {
        var mtdentries = mtddefs.eq(0).find("tr");
        for ( var i = 1; i < mtdentries.length; i++ ) {
            var e = mtdentries.eq(i).find("td");
            var sig = get_signature_from_element( e.eq(0).find("a") );
            var mtdnm = sig.replace(/\(.+$/, "");
            var url = get_refer_url( category, e.eq(0).find("a").eq(0) );
            var ret = get_type_from_cell( category, e.eq(1) );
            var doc = get_documentation_from_element( e.eq(2) );
            var mtd = { name: mtdnm, signature: sig, return: ret, doc: doc, url: url };
            mtds.push(mtd);
            mtdsigh[sig] = mtd;
            logging("Got method of '"+typenm+"' : sig:'"+sig+"' ret:'"+ret+"' doc:'"+doc+"'"+"' url:'"+url+"'");
        }
    }
    var mtddetails = maincontent.find(".function.doc");
    for ( var i = 0; i < mtddetails.length; i++ ) {
        var sig = get_signature_from_element( mtddetails.eq(i).find("h3") );
        var mtd = mtdsigh[sig];
        if ( ! mtd ) {
            // console.warn("Found unrecognized method of '"+typenm+"' : "+sig);
            continue;
        }
        var args = [];
        var argdefs = mtddetails.eq(i).find("table.function.param tr");
        for ( var ii = 1; ii < argdefs.length; ii++ ) {
            var e = argdefs.eq(ii).find("td");
            var argnm = get_symbol_from_element( e.eq(0) );
            var argtype = get_type_from_cell( category, e.eq(1) );
            var doc = get_documentation_from_element( e.eq(2) );
            args.push({ name: argnm, type: argtype, doc: doc });
            logging("Got arg of '"+mtd["name"]+"' : name:'"+argnm+"' type:'"+argtype+"' doc:'"+doc+"'");
        }
        mtd.argument = args;
    }
    type.method = mtds;
}

function find_types_in_sidebar(category, $) {
    var titles = $("#gc-sidebar a");
    var categoryurl = get_category_url(category);
    for ( var i = 0; i < titles.length; i++ ) {
        var url = get_refer_url( category, titles.eq(i) );
        if ( ! url || url != categoryurl ) continue;
        logging("Found category element in sidebar : "+category);
        return titles.eq(i).parent().find("li");
    }
    console.error("Failed find category element in sidebar : "+category);
    return;
}

function get_category_url(category) {
    return GOOGLE_DOC_SERVER + ROOT_URI + category;
}

function get_refer_url(category, a) {
    var href = a ? a.attr("href") : null;
    if ( ! href || href == "" ) {
        return null;
    }
    else if ( href.match(/^\//) ) {
        return GOOGLE_DOC_SERVER + href;
    }
    else {
        return GOOGLE_DOC_SERVER + ROOT_URI + category + "/" + href;
    }
}

function get_type_fullnm(category, typenm) {
    var ctg = fix_to_symbol(category);
    return ! typenm || typenm == "" ? ""
         : ctg == ""                ? typenm
         :                            ctg+"."+typenm;
}

function get_type_from_cell(category, td) {
    var re = /\/([^/]+)\/[^/]+$/;
    var a = td.find("a");
    var typecategory = a.length != 1              ? null
                     : ! a.attr("href")           ? null
                     : ! a.attr("href").match(re) ? category
                     :                              ( a.attr("href").match(re) )[1];
    var typenm = get_symbol_from_element( a.length == 1 ? a : td );
    return get_type_fullnm(typecategory, typenm);
}

function get_symbol_from_element(e) {
    return fix_to_symbol( e.text() );
}

function get_signature_from_element(e) {
    return e.text().replace(/[\t\n]+/g, "").replace(/ +/g, " ");
}

function get_documentation_from_element(e) {
    return e.text().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
}


////////////////////
// Make Reference

function make_reference(category) {
    logging("Start make reference : "+category);
    var fpath = __dirname + "/refs/" + category + ".json";
    fs.writeFile(fpath, JSON.stringify(gTypeHash), "utf8", function (err) {
        if ( err ) {
            console.error("Failed write plugin : "+err);
            process.exit(1);
        }
        console.info("Finished make reference : "+fpath);
    });
}

