var express = require('express');
var app = express();

//mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ly586394',
    database : 'test'
});
connection.connect();


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var server = app.listen(8081,'localhost', function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})


var a={
    "user1" : {
        "name" : "mahesh",
        "password" : "password1",
        "profession" : "teacher",
        "id": 1
    },
    "user2" : {
        "name" : "suresh",
        "password" : "password2",
        "profession" : "librarian",
        "id": 2
    },
    "user3" : {
        "name" : "ramesh",
        "password" : "password3",
        "profession" : "clerk",
        "id": 3
    }
}

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send(a);
})


//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})



var sql='SELECT * FROM websites'
connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});





