"use strict;";

const Service = require("egg").Service;

class FindOneService extends Service {
    async index(id, tableName) {
        if (id) {
            const result = await this.app.mysql.get(tableName, {id});
            return result;
        } else {
            const result = await this.app.mysql.select(tableName);
            return result;
        }
    }
}

module.exports = FindOneService;
