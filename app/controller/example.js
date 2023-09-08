'use strict';
const {Controller} = require('egg');
const tableName = 'article'
class ExampleController extends Controller {
    // 查询全部
    async find() {
        const {ctx} = this
        const result = await ctx.service.find.index(tableName)
        if (result) {
            ctx.body = {
                error: 0,
                msg: 'ok',
                data: result
            }
        }
    }
    // 查询单个
    async findOne() {
        const {ctx} = this
    }
    // 创建
    async create() {
        const {ctx} = this
    }
    // 更新
    async update() {
        const {ctx} = this
    }
    // 删除
    async delete() {
        const {ctx} = this
    }
}
module.exports = ExampleController;