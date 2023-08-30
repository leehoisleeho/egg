"use strict;";

const {Controller} = require("egg");
const jwt = require("jsonwebtoken");
const secretKey = "lapland";

class CheckTokenController extends Controller {
    async index() {
        const {ctx} = this;
        try {
            const {token} = ctx.request.body;
            // 验证token
            const decoded = jwt.verify(token, "lapland");
            ctx.body = {
                code: 0,
                message: "验证通过",
            };
        } catch (err) {
            ctx.body = {
                code: 1,
                message: "token过期",
            };
        }
    }
}

module.exports = CheckTokenController;
