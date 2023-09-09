const Service = require("egg").Service;
const jwt = require("jsonwebtoken");

class CheckTokenService extends Service {
    async index(token) {
        if (!token) {
            return {
                error: 1,
                msg: '缺少必要参数'
            }
        }
        try {
            // 验证token
            const decoded = jwt.verify(token, "lapland");
            return {
                error: 0,
                msg: "验证通过",
            };
        } catch (err) {
            return {
                error: 1,
                msg: "token不合法",
            };
        }
    }
}

module.exports = CheckTokenService;