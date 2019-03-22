/**
 * PRか否かを返す
 */
export const isPR = () => {
    return process.env.TRAVIS_PULL_REQUEST !== 'false';
};

/**
 * main branch(develop or master)か否かを返す
 */
export const isMainBranch = () => {
    return process.env.TRAVIS_BRANCH === "develop" || process.env.TRAVIS_BRANCH === "master";
};

/**
 * リリース対象タスクか否かを返す
 */
export const isReleaseTask = function isReleaseTask() {
    // PRを出した時は無視（merge taskのみを使う）
    if (isPR()) {
        return false;
    }

    // 投稿が許可されたブランチ以外のマージは無視
    return isMainBranch();
};

/**
 * テストが成功したか否かを返す
 */
export const isTestSuccess = (): boolean => {
    if (!process.env || !process.env.TRAVIS_TEST_RESULT) {
        return false;
    }
    let status = parseInt(process.env.TRAVIS_TEST_RESULT, 10);
    return 0 === status;
};

/**
 * Travisのbuild URLを返す
 */
export const getBuildUrl = () => {
    return `https://travis-ci.com/${process.env.TRAVIS_REPO_SLUG}/builds/${process.env.TRAVIS_BUILD_ID}`;
};

export const getTravisEnv = () => {
    return Object.keys(process.env)
        .filter((key) => key.match(/^TRAVIS_/))
        .reduce((base: any, cur: string) => {
            base[cur] = process.env[cur];
            return base;
        }, {})
    ;
};
