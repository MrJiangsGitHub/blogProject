const path = require('path');
//sql语句
const model = require('../model/model.js')
const controller = {}


controller.index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
}
controller.login = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'))
}
controller.home = async (req, res) => {
    let sql = `select * from car`
    let rows = await model(sql)
    res.send(rows)
}


module.exports = controller;