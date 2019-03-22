import { getTravisEnv, isReleaseTask, isTestSuccess } from "../lib/travis";
import { getPRTitle } from "../lib/github";
import { postChatwork } from "../lib/postChatwork";

export const chatworkComment = (roomId: string, message: string) => {
    // 投稿が許可されたブランチ以外のマージは無視
    if (!isReleaseTask()) {
        console.log(`not a release branch, ${JSON.stringify(getTravisEnv())}`);
        return;
    }
    // テスト失敗してたら無視
    if (!isTestSuccess()) {
        console.log(`test failed, ${JSON.stringify(getTravisEnv())}`);
        return;
    }
    let commitLog = getPRTitle();
    return postChatwork(roomId, 'PRがマージされました！', `${message ? `${message}\n` : ''}${commitLog}`);
};
