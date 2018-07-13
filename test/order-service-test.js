require("../db");
let orderService = require("../service/order");
async function testAddOrder() {
    let o={
        productId:"5b4748e895c8090a610320b8",
        count:1,
        productPrice:1
    };
    let res=await orderService.addOrder(o)
    console.log(res);
}
async  function testGetOrdersBypage() {
    let list=await orderService.getOrderByPage(1)
    console.log(list);
}
//testAddOrder();
testGetOrdersBypage()