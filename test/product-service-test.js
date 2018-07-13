require("../db")
let productService = require("../service/product");
 async function testAddProduct(){
 let product=[
     {
         name:"外星人",
         price:'999',
         stock:'100',
         description:"上午写完，下午忘",
         //属于哪类商品的操作；
         category:"5b4745862821b30a4ee2b9f4"
     },
     {
         name:"戴尔",
         price:'1000',
         stock:'100',
         description:"",
         //属于哪类商品的操作；
         category:"5b4745862821b30a4ee2b9f4"
     },
     {
         name:"联想",
         price:'1999',
         stock:'100',
         description:"上午写完，下午忘",
         //属于哪类商品的操作；
         category:"5b4745862821b30a4ee2b9f4"
     }
 ]
 let p = await productService.addProduct(product)
    console.log(p)
}
async function testgetProductsByPage(){
   let list=await productService.getProductsByPage(1)
    console.log(list)
}
async function testupDateProduct(){
   await productService.upDateProduct("5b4748e895c8090a610320b8",{price:"999999"})
}
async function testdeleteOne(){
  await  productService.deleteOne("5b4748e895c8090a610320ba")
}
//调用测试类；
//testAddProduct()
//testgetProductsByPage()
//testupDateProduct()
testdeleteOne()