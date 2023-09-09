'use strict;'

const Service = require('egg').Service;

class updateService extends Service {
    async index(tableName, data) {
        if (data.id) {
            try {
                const result = await this.app.mysql.update(tableName, data);
                if (result.affectedRows) {
                    return {
                        error: 0,
                        msg: 'ok'
                    };
                } else if (result.affectedRows === 0) {
                    return {
                        error: 1,
                        msg: 'not find'
                    };
                }
            } catch (e) {
                return {
                    error: 1,
                    msg: `发生了一个错误 ${e}`
                }
            }
        } else {
            return {
                error: 1,
                msg: 'ID must be passed'
            }
        }
    }
}

module.exports = updateService;