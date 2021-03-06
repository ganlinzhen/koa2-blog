/**
 * @description 管理员的数据访问对象
 * @description Data Access Objects for Administrators
 * @author 梁凤波, Peter Liang
 */

const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')

class AdminDao {
    // 创建用管理员
    static async create(params) {
        const { email, password, nickname } = params
        console.log('查询是否已经存在管理员')
        const hasAdmin = await Admin.findOne({
            where: {
                email,
                deleted_at: null
            }
        });

        if (hasAdmin) {
            throw new global.errs.Existing('管理员已存在');
        }

        const admin = new Admin();
        admin.nickname = nickname
        admin.email = email
        admin.password = password
        admin.save();

        return {
            email: admin.email,
            nickname: admin.nickname
        }
    }

    // 验证密码
    static async verify(email, plainPassword) {

        // 查询用户是否存在
        const admin = await Admin.findOne({
            where: {
                email
            }
        })

        if (!admin) {
            throw new global.errs.AuthFailed('账号不存在或者密码不正确')
        }

        // 验证密码是否正确
        const correct = bcrypt.compareSync(plainPassword, admin.password);

        if (!correct) {
            throw new global.errs.AuthFailed('账号不存在或者密码不正确')
        }

        return admin
    }

    // 查询管理员信息
    static async detail(id) {
        const scope = 'bh';
        // 查询管理员是否存在
        const admin = await Admin.scope(scope).findOne({
            where: {
                id
            }
        })

        if (!admin) {
            throw new global.errs.AuthFailed('账号不存在或者密码不正确')
        }

        return admin
    }
}

module.exports = {
    AdminDao
}
