//这个配置文件就是相当于一个选择器！是dev测试，还是走prod开发层；
let config=null;
if(process.env.NODE_ENV==="production"){
    config=require('./prod')
}else{
    config=require('./dev')
}
module.exports=config;