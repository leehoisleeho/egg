"use strict";
const {Controller} = require("egg");

class FileController extends Controller {
    // 上传
    async upload() {
        const {ctx} = this;
        const file = ctx.request.files[0];
        const result = await ctx.service.upload.index(file)
        ctx.body = result
    }

    // 删除
    async remove() {
        const {ctx} = this;
        const fileName = ctx.request.body.fileName
        const result = await ctx.service.remove.index(fileName)
        ctx.body = result
    }
}

module.exports = FileController;
