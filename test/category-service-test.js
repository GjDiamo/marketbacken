require("../db")
let categoryService = require('../service/category');
async function testAddCategory() {
    let categorys = [
        { name: "电脑" },
        { name: "家具" },
        { name: "服装" },
        { name: "美妆" },
        { name: "鞋子" },
        { name: "母婴" },
    ]
    let c=await categoryService.addCategory(categorys)
    console.log(c);
}
async function testGetCategorysByPage(){
   let res= await categoryService.getCategorysByPage()
    console.log(res)
}

async function testUpdateCategory() {
  let af= await categoryService.updateCategory('5b471dce53f66d08b20b9c5c',{name:'守财'})
    console.log(JSON.stringify(af))
    testGetCategorysByPage();
}
async function  testDeleteCategory() {
    await  categoryService.deleteCategory('5b471dce53f66d08b20b9c5d')
    testGetCategorysByPage();
}
//testAddCategory()
testGetCategorysByPage()
// testUpdateCategory()
//testDeleteCategory()