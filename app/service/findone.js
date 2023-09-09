"use strict;";
const Service = require("egg").Service;

class FindOneService extends Service {
    async index(tableName, id) {
        try {
            const result = await this.app.mysql.get(tableName, {id});
            if (result) {
                return {
                    error: 0,
                    msg: 'ok',
                    data: result
                }
            }else if(result===null){
                return {
                    error: 1,
                    msg: 'not find',
                }
            }
        } catch (e) {
            return {
                error: 1,
                msg: `发现一个错误 ${e}`
            }
        }
    }
}

module.exports = FindOneService;
