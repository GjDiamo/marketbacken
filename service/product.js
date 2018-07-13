let Product = require("../model/product");
let config = require('../config');
//增
async function addProduct(product) {
    return await Product.create(product)
}
//查寻所有
async function getProductsByPage(page=1) {
    return await Product.find().skip((page-1)*config.PageCount).limit(config.PageCount).sort("created").select("-__v")
}
//判断id是否存在
async function isIdExist(id) {
  let p =await Product.findOne({_id:id});
  if(!p){
      throw Error(`id为${id}的商品不存在`)
  }
}
//改
async function upDateProduct(id,update) {
   await isIdExist(id);
   let res=await Product.updateOne({_id:id},update);
    if(res.n<1){
        throw Error("更新失败")
    }
}
//删除
async function deleteOne(id) {
    await isIdExist(id)
   let res= await Product.deleteOne({_id:id})
    if(res.n<1){
        throw Error("删除失败")
    }
}
async function getProductById(id){
    await isIdExist(id)
    return await Product.findOne({_id:id});
}
module.exports={
     addProduct,
     getProductsByPage,
     upDateProduct,
     deleteOne,
     getProductById
}