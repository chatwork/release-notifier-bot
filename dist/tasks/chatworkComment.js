"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var travis_1 = require("../lib/travis");
var github_1 = require("../lib/github");
var postChatwork_1 = require("../lib/postChatwork");
exports.chatworkComment = function (roomId, message) {
    // 投稿が許可されたブランチ以外のマージは無視
    if (!travis_1.isReleaseTask()) {
        console.log("not a release branch, " + JSON.stringify(travis_1.getTravisEnv()));
        return;
    }
    // テスト失敗してたら無視
    if (!travis_1.isTestSuccess()) {
        console.log("test failed, " + JSON.stringify(travis_1.getTravisEnv()));
        return;
    }
    var commitLog = github_1.getPRTitle();
    return postChatwork_1.postChatwork(roomId, 'PRがマージされました！', "" + (message ? message + "\n" : '') + commitLog);
};
