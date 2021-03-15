/**
 * @description sequelize 同步数据库
 * @author zhenganlin
 */

const { sequelize } = require('./core/db')
const fs = require('fs');

// 挨个导入model
let files = fs.readdirSync(__dirname + '/app/models');

let js_files = files.filter((f)=>{
    return f.endsWith('.js');
}, files);

for (let f of js_files) {
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length - 3);
    require(__dirname + '/models/' + f);
    console.log('imported: ', name)
}
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