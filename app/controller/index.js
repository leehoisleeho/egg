'use strict';

const {Controller} = require('egg');

class IndexController extends Controller {
    async index() {
        const {ctx} = this
        ctx.body = "Hello World"
    }
}

module.exports = IndexController;