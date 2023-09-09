'use strict;'
const Service = require('egg').Service;

// 获取数据库字段，
class CreateService extends Service {
    async index(tableName, data) {
        try {
            const result = await this.app.mysql.insert(tableName, data);
            return {
                error: 0,
                msg: 'ok'
            };
        } catch (e) {
            return {
                error: 1,
                msg: `发送了一个错误 ${e}`
            }
        }
    }
}

module.exports = CreateService;