/**
 * @description sequelize 同步数据库
 * @author zhenganlin
 */

const { sequelize } = require('./core/db')

// 测试连接
sequelize.authenticate().then(() => {
    console.log('auth ok')
}).catch(() => {
    console.log('auth err')
})

// 执行同步
sequelize.sync({ force: true }).then(async () => {
    console.log('sync ok')
    process.exit()
})