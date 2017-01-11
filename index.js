var Metalsmith = require("metalsmith");
var layouts = require ("metalsmith-layouts");
var markdown = require("metalsmith-markdown");
var permalinks = require("metalsmith-permalinks");

Metalsmith(__dirname)
    .metadata({
        title: "Metalsmithing 101",
        description: "Learning all the things about metalsmithing"
    })
    .source("./src")
    .destination("./")
    .clean(true)
    .use(markdown())
    .use(permalinks({
        relative: false
    }))
    .use(layouts({
        engine: 'handlebars'
    }))
    .build(function(err) {
        if(err) throw err;
    });
