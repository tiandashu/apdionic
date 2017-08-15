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


//写个接口register
express.get('/register',function(req,res){
  //执行SQL语句 插入数据
  connection.query('select * from userinfo where username=tianlu', function(err, rows, fields) {
    console.log(111);
    if (err) {
        console.log('[query] - :'+err);
        return;
      }

    if(req.query.username == rows[0].username){//procedure
      console.log(222);
      res.status(200),
          res.json("存在此人");
      }else{
      console.log(333);
      res.status(200),
          res.send("输入的不对给我重新输入");
      }
     console.log(333);
  });

});

//关闭connection
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});
