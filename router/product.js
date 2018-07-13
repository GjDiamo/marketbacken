let productService = require("../service/product");
let router = require("express").Router();
//查
router.get("/", async (req, res) => {
    let products = await productService.getProductsByPage(req.query.page)
    res.success(products)
});
//增
router.post('/', async (req, res) => {
   let x= await productService.addProduct(req.body)
    res.success(x)
});
//改
router.put('/:id',async(req,res)=>{
    await productService.upDateProduct(req.params.id,req.body)
    res.success()
} )
//删
router.delete('/:id',async (req,res)=>{
    await productService.deleteOne(req.params.id)
    res.success()
})
module.exports=router
