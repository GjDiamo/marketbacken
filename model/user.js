const mongoose = require('mongoose')
const schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required:[true,"用户名不能为空"]
    },
    password:{
        type:String,
        required:[true,'密码不能为空']
    },
    age:{
        type:Number,
        min:[6,'年龄不能低于6岁'],
        max:[120,'年龄不得超过120'],
        default:10
    },
    role:{
        type:Number,
        default:0 //0表示商家用户，100表示超级会员
    },
     created:{
        type:Date,
         default:Date.now()
     }
});

module.exports = mongoose.model('users', schema)
