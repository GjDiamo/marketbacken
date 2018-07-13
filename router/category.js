let categoryService = require('../service/category');
let router = require('express').Router();
//获取所有的数据
router.get('/',async(req,res)=>{
   let categorys= await categoryService.getCategorysByPage(req.query.page)//这个是什么鬼？
    res.success(categorys)
});
//增
router.post('/',async(req,res)=>{
   let z= await categoryService.addCategory(req.body)//这又是什么鬼？
    res.success(z)
})
//改
router.put('/:id',async(req,res)=>{
     await categoryService.updateCategory(req.params.id,req.body)
     res.success()
})
//删
router.delete("/:id",async(req,res)=>{
    await categoryService.deleteCategory(req.params.id)//这这这
    res.success()
} )
module.exports=router
