//调用后台的数据库
let User = require('../model/user');
//引用加密库；
let crypto = require('lxj-crypto');
//环境切换；
let config = require('../config');
//获取用户信息
async function getUserInfo (username) {
    let res=await User.findOne({username:username}).select('-_v-password')
    if(!res){
        throw Error(`用户名为${username}的用户不存在`)
    }
    return res;
}
// 删除用户
async function deleteUser(username) {

    let res = await User.deleteOne({username: username});
    if (res.n < 1) {
        throw Error("删除失败")
    }
}
//注册
async function registerUser(user){
    //首先判断user是否存在；
    let res= await User.findOne({username:user.username})
    if(res){
        throw Error(`用户名为${user.username}的用户已存在`)
    }
    //如果用户不存在对用户的信息进行加密处理
    user.password=crypto.sha1Hmac(user.password,user.username);
    //默认角色为客户端
    user.role=0;
     //生成时间厝
    user.created=Date.now();
      //存库
     res = await User.create(user);
     res.password='';
     return res;
}
//登陆：
async function loginUser(user){
    //1对密码进行加密
    user.password=crypto.sha1Hmac(user.password,user.username)
    //2数据库核对是否存在
    let res =await User.findOne({username: user.username, password: user.password})
    if(!res){
        throw Error("用户名或者密码错误")
    }
    //3. 给用户生成一个token，可以用aes算法生成
    let tokenData = {
        username: user.username,
        expire: Date.now() + config.TokenExpire
    };
    let token = crypto.aesEncrypt(JSON.stringify(tokenData), config.TokenKey);
    return token
}
module.exports={
    getUserInfo,
    registerUser,
    loginUser,
    deleteUser
}
