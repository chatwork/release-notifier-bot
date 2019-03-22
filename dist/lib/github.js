"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var execSync_1 = require("./execSync");
exports.getGitCommitId = function () {
    return String(execSync_1.execSync('git rev-parse HEAD')).trim();
};
exports.getPRTitle = function () {
    return execSync_1.execSync('git log -1 --pretty=%B').trim();
};
