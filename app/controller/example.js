'use strict';
const {Controller} = require('egg');
const tableName = 'user'

class ExampleController extends Controller {
    // 查询全部
    async find() {
        const {ctx} = this
        console.log( ctx.service)
        const result = await ctx.service.find.index(tableName)
        console.log(result)
        ctx.body = result
    }

    // 查询单个
    async findOne() {
        const {ctx} = this
        const id = ctx.params.id
        const result = await ctx.service.findone.index(tableName, id)
        ctx.body = result
    }

    // 创建
    async create() {
        const {ctx} = this
        const data = ctx.request.body
        const result = await ctx.service.create.index(tableName, data)
        ctx.body = result
    }

    // 更新
    async update() {
        const {ctx} = this
        const data = ctx.request.body
        const result = await ctx.service.update.index(tableName, data)
        ctx.body = result
    }

    // 删除
    async delete() {
        const {ctx} = this
        const id = ctx.params.id
        const result = await ctx.service.delete.index(tableName, id)
        ctx.body = result
    }
}

module.exports = ExampleController;