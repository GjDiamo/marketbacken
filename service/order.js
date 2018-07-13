//order层只有两个任务（用户只可以添加货物；并且查询所有订单）
let Order = require('../model/order');
let productService = require("../service/product");
let Big = require('big.js');
let config = require('../config');
//添加货物
async function addOrder(order) {
    let p=await productService.getProductById(order.productId);
    //库存判断
    if(p.stock<order.count){
        throw Error('商品库存不够')
    }
    //给order的字段进行复制（此处便可防止信息被串改）
    order.productName=p.name;
    order.productPrice = p.price;
    order.totalPrice = Big(order.productPrice).times(order.count)
    let o=await Order.create(order);
    //减库存
    await productService.upDateProduct(p._id,{stock:p.stock-order.count})
    return o;
}

//获取订单信息
async  function getOrderByPage(page=1) {
    return await Order.findOne().skip( (page-1)*config.PageCount ).limit(config.PageCount).sort("created").select("-__v")
}
module.exports={
    addOrder,
    getOrderByPage
}