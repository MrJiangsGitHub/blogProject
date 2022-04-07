// 路由文件（仅存放所有的路由信息）
const express = require('express');

// 创建路由中间件
const router = express.Router();

// 导入控制器模块
const controller = require('../controller/controller.js')

// 不同路由 分发 到不同的控制器处理方法
router.get('/login', controller.login)

router.get('/index', controller.index)
router.get('/home', controller.home)
module.exports = router;