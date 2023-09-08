'use strict;'
const  Service  = require('egg').Service;
   
class CreateService extends Service {
  async index(data, tableName) {
    const result = await this.app.mysql.insert(tableName,data);
    return result;
  }
}
module.exports = CreateService;