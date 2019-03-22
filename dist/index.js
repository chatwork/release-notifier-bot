"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatworkComment_1 = require("./tasks/chatworkComment");
var argvs = process.argv.slice(2).reduce(function (base, cur) {
    var _a = cur.split('='), key = _a[0], val = _a[1];
    base[key] = val;
    return base;
}, {});
if (argvs['cmd'] === 'chatworkComment') {
    if (!argvs['roomId']) {
        throw new Error("roomId required");
    }
    if (!process.env.CW_TOKEN) {
        throw new Error("process.env.CW_TOKEN required");
    }
    chatworkComment_1.chatworkComment(argvs['roomId'], argvs['message'] || '');
}
else {
    console.error("Invalid cmd!");
    console.error("cmd=chatworkComment roomId=1 message=hoge");
}
