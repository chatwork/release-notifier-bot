import { httpRequest } from "./httpRequest";

export function postChatwork(roomId: string, title: string, message: string) {
    return httpRequest({
        hostname: 'api.chatwork.com',
        port: 443,
        path: `/v2/rooms/${roomId}/messages`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-ChatWorkToken': process.env.CW_TOKEN
        }
    }, {
        body: `[info][title]${title}[/title]${message}[/info]`,
        self_unread: "1",
    });
}
