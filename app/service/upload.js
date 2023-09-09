'use strict;'
const Service = require('egg').Service;
const path = require("path");
const fs = require("fs");
const {currenTime, randomUUID} = require('../tools')

class uploadService extends Service {
    async index(file) {
        const {ctx} = this;
        /**
         * 根据当前日期创建文件夹，如果有就不创建。
         */
        const folderName = currenTime()
        const folderPath = path.join(__dirname, `../public/uploads/${folderName}`);
        if (!fs.existsSync(folderPath)) {
            await fs.mkdirSync(folderPath, 0o755);
        }
        // 使用正则表达式提取文件扩展名
        const fileExtension = file.filename.match(/\.([^.]+)$/);
        // 根据传过来的文件名，生成文件名
        const filename = `${Date.now()}${fileExtension[0]}`;
        try {
            const targetFilePath = path.join(folderPath, filename);
            // 将文件从临时目录移动到指定目录
            await fs.promises.rename(file.filepath, targetFilePath);
            // 将图片地址返回给前端
            return {
                error: 0,
                msg: 'ok',
                src:`/public/uploads/${folderName}/${filename}`
            }
        } catch (err) {
            return {
                error: 1,
                msg: 'upload failed'
            }
        }
    }
}

module.exports = uploadService;