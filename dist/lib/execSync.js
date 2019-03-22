"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process = require("child_process");
exports.execSync = function (command) {
    try {
        return child_process.execSync(command).toString();
    }
    catch (e) {
        console.error("execSync error. \n" + e.stderr.toString() + "\n'" + command + "'");
        throw e;
    }
};
