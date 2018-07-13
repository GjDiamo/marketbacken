let role_permission=[
    {
        role:0,//商家用户
        permission:[
            /.*\/product/,
            /.*\/order/,
            /.*\/category/,
        ]
    },

    {
        role:100,//超级管理员
        permission:[
            /.*/
        ]
    }
]
module.exports=(req,res,next)=>{
    //检查req.user对象不为空才进行检查
    if(req.user){
        //取出user的role，然后遍历数组，判断对应的role的权限是否包含当前请求的url
         let isLetGo=false;
         role_permission.forEach(obj=>{
             if(req.user.role===obj.role){
                 // 则遍历当前obj的permissions，看看是否能够访问req.url
                 obj.permission.forEach(p=>{
                     if(p.test(req.url)){
                         //说明能够访问req.url
                         isLetGo = true;
                     }
                 })
             }
         })
        if(!isLetGo){
            throw Error("当前用户权限不足")
        }
    }
    next();
}