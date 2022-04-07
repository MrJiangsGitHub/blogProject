const mysql = require('mysql')
// 操作数据库
const dbConfig = require('../config/config.js')
var connection = mysql.createConnection(dbConfig);
//连接mysql
connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('mysql 连接成功');
});

function model(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}
//导出
module.exports = model