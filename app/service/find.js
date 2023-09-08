"use strict;";

const Service = require("egg").Service;

class FindService extends Service {
    async index(tableName) {
        console.log(tableName)
        const result = await this.app.mysql.select(tableName);
        return result;
    }
}

module.exports = FindService;
