require('./db');
require('express-async-errors');
let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let config = require('./config');
let app=express();

app.use(morgan('combined'));
app.use(bodyParser.json());

//自定义的中间件
app.use(require('./middleWare/res_md'));
app.use(require('./middleWare/permission_md'))
app.use(require('./middleWare/token_md'))
//注册路由
app.use('/user',require('./router/user'))
app.use('/category',require('./router/category'))
app.use('/product',require('./router/product'))
app.use('/order',require('./router/order'))

//异常处理中间件；
app.use((err,req,res,next)=>{
    res.fail(err.toString());8
})

app.listen(config.PORT)