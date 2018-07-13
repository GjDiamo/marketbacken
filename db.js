//调用库
let mongoose = require("mongoose");
//使用模版
let config = require('./config');

//链接数据库；
mongoose.connect(`mongodb://127.0.0.1/${config.DB}`);

let db =mongoose.connection;
db.on('error',err=>{
    console.log("数据链接有错误")
    });
db.once('open',()=>{//打开数据库之后给他指定方法；
    console.log("数据库交接成功")
})