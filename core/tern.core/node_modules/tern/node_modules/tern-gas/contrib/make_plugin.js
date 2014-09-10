#!/usr/bin/env node

gTaskFinished_Of = {};

var opts = require("opts");
var spawn = require("child_process").spawn;

opts.parse([{ short: "v",
              long: "verbose",
              description: "Show verbose.",
              value: false, }],
           true);

var verbose = opts.get("verbose");
var coptstr = verbose ? "--verbose" : "";
var sc_fetcher = "fetch_script_reference.js";
var sc_fetcher_path = __dirname+"/"+sc_fetcher;
var pg_maker = "build_reference.js";
var pg_maker_path = __dirname+"/"+pg_maker;
run_make_plugin();


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

function run_make_plugin() {
    var ctlist = [];
    var proc = spawn(process.argv[0], [sc_fetcher_path, "--category-list"]);
    proc.on("error", function (err) {
        console.error("Failed get category list : "+err);
        process.exit(1);
    });
    proc.stderr.on("data", function (data) {
        console.error("Failed get category list\n"+data);
        process.exit(1);
    });
    proc.stdout.on("data", function (data) {
        ctlist = data.toString().split(/\n+/);
    });
    proc.on("close", function (code, sig) {
        if ( code !== 0 ) process.exit(1);
        if ( ctlist.length == 0 ) {
            console.error("Failed get category list : please check '"+sc_fetcher+" --category-list'");
            process.exit(1);
        }
        ctlist.forEach(fetch_script_reference);
    });
}

function fetch_script_reference(category) {
    if ( ! category || category == "" ) return;
    start_task(category);
    var proc = spawn(process.argv[0], [sc_fetcher_path, "--category", category, coptstr]);
    proc.on("error", function (err) {
        console.error("Failed fetch script reference : "+err);
        process.exit(1);
    });
    proc.stderr.on("data", function (data) { console.log(data.toString().replace(/\s+$/, "")); });
    proc.stdout.on("data", function (data) { console.log(data.toString().replace(/\s+$/, "")); });
    proc.on("close", function (code, sig) {
        if ( code !== 0 ) process.exit(1);
        finish_task(category);
        if ( ! is_all_task_finished() ) return;
        build_reference();
    });
}

function build_reference() {
    var proc = spawn(process.argv[0], [pg_maker_path, "--output", __dirname+"/../gas.new.js", coptstr]);
    proc.on("error", function (err) {
        console.error("Failed build reference : "+err);
        process.exit(1);
    });
    proc.stderr.on("data", function (data) { console.log(data.toString().replace(/\s+$/, "")); });
    proc.stdout.on("data", function (data) { console.log(data.toString().replace(/\s+$/, "")); });
    proc.on("close", function (code, sig) {
        if ( code !== 0 ) process.exit(1);
    });
}

