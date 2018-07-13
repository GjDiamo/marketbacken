let router = require('express').Router();
let userService= require("../service/user");

router.get('/:username',async(req,res)=>{
  let user = await userService.getUserInfo(req.params.username);
  res.success(user)
});
router.post('/register',async (req,res)=>{
  console.log("hahha")
 let user= await userService.registerUser(req.body);
  res.success(user)
})
router.post('/login',async(req,res)=>{
    let token = await userService.loginUser(req.body);
    res.success({
        token
    });
});
router.delete('/:username', async (req, res)=>{
    let a =await userService.deleteUser(req.params.username)
    res.success(a)
});

module.exports=router

