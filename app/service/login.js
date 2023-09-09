"use strict;";
const Service = require("egg").Service;
const jwt = require('jsonwebtoken');

class LoginService extends Service {
    async index(tableName, data) {
        const {username, password} = data
        if (username === undefined || password === undefined) {
            return {
                error: 1,
                msg: '缺少必要参数'
            }
        }
        const result = await this.app.mysql.get(tableName, {username, password});
        if (result) {
            // 生成token
            const token = jwt.sign({username}, "lapland", {expiresIn: '24h'});
            return {
                error: 0,
                msg: 'ok',
                token
            }
        } else if (result === null) {
            return {
                error: 1,
                msg: 'login failed'
            }
        }
    }
}

module.exports = LoginService;
