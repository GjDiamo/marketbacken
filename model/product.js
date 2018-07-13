const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name: {
        type: String,
        unique:true,
        required: [true,"商品不能为空"]
    },
    price:{
        type: String,
        required: [true,"价格不能为空"]
    },
    stock:{//库存
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        required: [true,"商品分类不能为空"]
    },
    description:{
        type: String
    },
    isOnSale:{//默认上架
        type:Boolean,
        default:true
    },
    create:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('products', schema)
