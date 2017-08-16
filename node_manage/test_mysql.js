/**
 * Created by Administrator on 2017/8/7.
 */

var mysql  = require('mysql');  //调用MySQL模块
var express = require('express');
var app = express();

/*设置API响应头*/
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//配置api接口端口
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
});



//写个register api
app.post('/register',function(req,res){
  //创建一个connection 配置数据库信息
  var connection = mysql.createConnection({
    host     : 'localhost',       //主机
    user     : 'root',            //MySQL认证用户名
    password : 'ionic123',        //MySQL认证用户密码
    port: '3306',                 //端口号
    database:'ionic-login'        //库名
  });

  //connection 开始连接数据库
    connection.connect(function(err){
      if(err){
        console.log('[connection start]:'+err);
        return;
      }
      console.log('[connection start]: open mysql succeed!');
    });


    //执行SQL语句 插入数据
    connection.query("select * from userinfo where username='"+req.query.username+"'", function(err, rows, fields) {

      if (err) {//查询失败
        console.log('[query] - :'+err);
        return;
      }

      if(rows[0]== undefined){
        res.status(200),
        res.send("该账号可以使用");
      }else if(req.query.username == rows[0].username){//procedure
        res.status(200),
        res.send("此账号已存在，请重新输入");
      }

      //关闭connection
      connection.end(function(err){
        if(err){
          console.log('[connection end]:'+err);
          return;
        }
        console.log('[connection end]close mysql succeed!');
      });


    });


});


