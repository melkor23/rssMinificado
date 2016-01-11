/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/getImages              ->  index
 */

'use strict';

var unirest = require('unirest');
var http = require('http');

var request = require("request");
var wait = require('wait.for');
var htmlparser = require("htmlparser2");

// Gets a list of GetImages
exports.index = function (req, res) {
        var body2 = wait.launchFiber(handleGet, req, res);
    }


function handleGet(req, res) {
    console.log(req.query.url);
    request(req.query.url, function (error, response, body) {
        //console.log("1111");
        var parser = new htmlparser.Parser({
            onopentag: function (name, attribs) {
                if (name === "img" && attribs.class === "thumbimg") {
                    console.log();
                    res.send(attribs.src);
                }
            },
            ontext: function (text) {
                //console.log("-->", text);
            },
            onclosetag: function (tagname) {
                if (tagname === "script") {
                  // console.log("That's it?!");
                }
            }
        }, {
            decodeEntities: true
        });
        parser.write(body);
        parser.end();
    });
}