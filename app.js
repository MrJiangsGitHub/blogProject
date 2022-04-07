// 入口文件：初始化项目，导入一个公共模块
const express = require('express');
const app = express();
const path = require('path')
// 导入路由中间件
const router = require('./router/router.js')

// 挂载路由中间件
app.use(router)
app.use('/assets', express.static(path.join(__dirname, '/assets')))
app.listen(4000, () => {
    console.log('server is running at port 4000')
})