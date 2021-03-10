const qiniu = require('qiniu')

// 自己可以到"www.qiniu.com" 申请自己的七牛空间
// 这个账号是我的，不是开放的哦
const ACCESS_KEY = "vbnl5aoTsGQGqh-vGPVpQ9yMW3xOa9vSxcj1gTdx";
const SECRET_KEY = "rJ1rvZ9tqGwcfk230RNjurskHNmlHDTPIUnBYTvx";

export default async function getUploadToken() {
    return new Promise((resolve, reject) => {
        let mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);
        let options = {
            scope: "zhenblog",
            expires: 7200
        };
        let putPolicy = new qiniu.rs.PutPolicy(options);
        let uploadToken = putPolicy.uploadToken(mac);

        if (uploadToken) {
            resolve({
                token: uploadToken
            })
        } else {
            reject()
        }
    })
}

