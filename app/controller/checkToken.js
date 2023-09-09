"use strict;";

const {Controller} = require("egg");

class CheckTokenController extends Controller {
    async index() {
        const {ctx} = this;
        const {token} = ctx.request.body;
        const result = await ctx.service.checkToken.index(token)
        ctx.body = result
    }
}

module.exports = CheckTokenController;
