"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PRか否かを返す
 */
exports.isPR = function () {
    return process.env.TRAVIS_PULL_REQUEST !== 'false';
};
/**
 * main branch(develop or master)か否かを返す
 *
 * biwa-liveはmaster、biwa-frontendはdevelopのみを使用しているため、どちらもtrueとする
 */
exports.isMainBranch = function () {
    return process.env.TRAVIS_BRANCH === "develop" || process.env.TRAVIS_BRANCH === "master";
};
/**
 * リリース対象タスクか否かを返す
 */
exports.isReleaseTask = function isReleaseTask() {
    // PRを出した時は無視（merge taskのみを使う）
    if (exports.isPR()) {
        return false;
    }
    // 投稿が許可されたブランチ以外のマージは無視
    return exports.isMainBranch();
};
/**
 * テストが成功したか否かを返す
 */
exports.isTestSuccess = function () {
    if (!process.env || !process.env.TRAVIS_TEST_RESULT) {
        return false;
    }
    var status = parseInt(process.env.TRAVIS_TEST_RESULT, 10);
    return 0 === status;
};
/**
 * Travisのbuild URLを返す
 */
exports.getBuildUrl = function () {
    return "https://travis-ci.com/" + process.env.TRAVIS_REPO_SLUG + "/builds/" + process.env.TRAVIS_BUILD_ID;
};
exports.getTravisEnv = function () {
    return Object.keys(process.env)
        .filter(function (key) { return key.match(/^TRAVIS_/); })
        .reduce(function (base, cur) {
        base[cur] = process.env[cur];
        return base;
    }, {});
};
