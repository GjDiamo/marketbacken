//业务逻辑层；对商品类层的增删改查
//service层要进行数据处理就应该链接数据库，即调用model层；
let Category = require("../model/category");
//使用配置文件
let config = require('../config');

//增：
async function addCategory(category) {
    return await Category.create(category)
}
//查：这个地方涉及的内容有（分页查询，每页最少内容，排序，减V）
async function getCategorysByPage(page=1) {
    return await Category.find().skip(config.PageCount*(page-1)).limit(config.PageCount).sort("created").select("-__v")
}
//一般在进行改或者删的时候我们会先判断ID是否存在；并且我们经常会用到这个方法！👇
async function isIdExist(id) {

    let c =await Category.findOne({_id:id});//最后是什么意思？
    if (!c){
        throw Error(`id为【${id}】的分类不存在`)
    }
}

//改：
async function updateCategory(id,update) {
    await isIdExist(id)
   let res= await Category.updateOne({_id:id},update);
    if(res.n<1){
        throw Error("update失败")
    }
    return res;
}
//删：
async  function deleteCategory(id) {
    await isIdExist(id)
    let res= await Category.deleteOne({_id:id});
    if(res.n<1){
        throw Error('delete失败')
    }
}
module.exports={
    addCategory,
    getCategorysByPage,
    updateCategory,
    deleteCategory
}