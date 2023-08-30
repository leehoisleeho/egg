"use strict;";
const Service = require("egg").Service;

class DeleteService extends Service {
  async index(data, tableName) {
    const result = await this.app.mysql.delete(tableName, data);
    return result;
  }
}
module.exports = DeleteService;
