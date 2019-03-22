"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpRequest_1 = require("./httpRequest");
function postChatwork(roomId, title, message) {
    return httpRequest_1.httpRequest({
        hostname: 'api.chatwork.com',
        port: 443,
        path: "/v2/rooms/" + roomId + "/messages",
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-ChatWorkToken': process.env.CW_TOKEN
        }
    }, {
        body: "[info][title]" + title + "[/title]" + message + "[/info]",
        self_unread: "1",
    });
}
exports.postChatwork = postChatwork;
