import { chatworkComment } from "./tasks/chatworkComment";

let argvs = process.argv.slice(2).reduce((base: any, cur: string) => {
    let [key, val] = cur.split('=');
    base[key] = val;
    return base;
}, {});
if (argvs['cmd'] === 'chatworkComment') {
    if (!argvs['roomId']) {
        throw new Error(`roomId required`);
    }
    if (!process.env.CW_TOKEN) {
        throw new Error(`process.env.CW_TOKEN required`);
    }
    chatworkComment(argvs['roomId'], argvs['message'] || '');
} else {
    console.error(`Invalid cmd!`);
    console.error(`cmd=chatworkComment roomId=1 message=hoge`);
}
