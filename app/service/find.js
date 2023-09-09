"use strict;";

const Service = require("egg").Service;

class FindService extends Service {
    async index(tableName) {
        console.log(tableName)
        try {
            const result = await this.app.mysql.select(tableName);
            return {
                error:0,
                msg:'ok',
                data: result
            };
        } catch (e) {
            return {
                error: 1,
                msg: `发送了一个错误${e}`
            }
        }
    }
}

module.exports = FindService;
