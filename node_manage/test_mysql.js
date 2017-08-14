/**
 * Created by Administrator on 2017/8/7.
 */

var mysql  = require('mysql');  //调用MySQL模块
var express = require('express')();


express.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


//配置服务端口
var server = express.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
})


//创建一个connection
var connection = mysql.createConnection({
    host     : 'localhost',       //主机
    user     : 'root',            //MySQL认证用户名
    password : 'ionic123',        //MySQL认证用户密码
    port: '3306',                 //端口号
    database:'ionic-login'        //库名
});
//创建一个connection
connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

//执行SQL语句 插入数据
connection.query('select * from userinfo where id=1', function(err, rows, fields) {
    if (err) {
        console.log('[query] - :'+err);
        return;
    }
  //写个接口123
    express.get('/123',function(req,res){
      console.log(req);
      if(req.query.ionic == rows[0].username){//procedure
            res.status(200),
            res.json("存在此人");
        }else{
            res.status(200),
            res.send("输入的不对给我重新输入");
        }
    });
});
//关闭connection
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});
