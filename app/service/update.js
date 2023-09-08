'use strict;'

const Service = require('egg').Service;

class updateService extends Service {
    async index(data, tableName) {
        const result = await this.app.mysql.update(tableName, data);
        return result;
    }
}

module.exports = updateService;