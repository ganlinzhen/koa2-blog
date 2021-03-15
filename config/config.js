const { isDev } = require('../app/lib/env')
module.exports = {
    environment: 'dev',
    database: {
        dbName: 'boblog',
        host: '127.0.0.1',
        port: 3306,
        user: isDev ? 'root' : 'root',
        password: isDev ? '12345678' : 'Zgl428415@mysql',
    },
    REDIS_CONF: {
        port: 6379,
        host: '127.0.0.1',
    },
    security: {
        secretKey: "secretKey",
        // 过期时间 1小时
        expiresIn: 60 * 60
    },
    wx: {
        appId: '',
        appSecret: '',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    },
    // 七牛配置
    qiniu: {

    }
}