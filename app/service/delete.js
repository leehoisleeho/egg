"use strict;";
const Service = require("egg").Service;

class DeleteService extends Service {
    async index(tableName, id) {
        try {
            const result = await this.app.mysql.delete(tableName, {id});
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
                msg: `发现一个错误 ${e}`
            }
        }
    }
}

module.exports = DeleteService;
