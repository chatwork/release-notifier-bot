import * as querystring from "querystring";
import * as https from "https";

export function httpRequest(param: https.RequestOptions, body: {[key: string]: string}) {
    return new Promise((resolve, reject) => {
        let postData = querystring.stringify(body);
        param.headers = param.headers || {};
        param.headers['Content-Length'] = postData.length;
        let req = https.request(param, (res) => {
            res.on('data', (d) => {
                resolve(d);
            });
        });
        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}
