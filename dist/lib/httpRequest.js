"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var querystring = require("querystring");
var https = require("https");
function httpRequest(param, body) {
    return new Promise(function (resolve, reject) {
        var postData = querystring.stringify(body);
        param.headers = param.headers || {};
        param.headers['Content-Length'] = postData.length;
        var req = https.request(param, function (res) {
            res.on('data', function (d) {
                resolve(d);
            });
        });
        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}
exports.httpRequest = httpRequest;
