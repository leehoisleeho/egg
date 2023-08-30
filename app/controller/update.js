"use strict";
const path = require("path");
const fs = require("fs");
const {Controller} = require("egg");
// 引入config
const {config} = require("../config");
const BaseUrl = config.Base_url;

class UpdateImgController extends Controller {
    async index() {
        const {ctx} = this;
        const file = ctx.request.files[0];
        // 指定文件存储的目录，这里使用 app/public/uploads
        const uploadDir = path.join(this.config.baseDir, "app/public/uploads");
        // 根据传过来的文件名，生成文件名
        const filename = file.filename;
        try {
            // 将文件从临时目录移动到指定目录
            await fs.promises.rename(file.filepath, path.join(uploadDir, filename));
            // 将图片地址返回给前端
            ctx.body = {
                errno: 0, data: {
                    url: "/public/uploads/" + filename, full_url: BaseUrl + "/public/uploads/" + filename
                }
            };
        } catch (err) {
            ctx.body = {
                errno: 1, message: '上传失败',
            }
        }
    }
}

module.exports = UpdateImgController;
