require('../db')
let useService = require('../service/user');
async function testRegisterUser() {
    let user={
        username:"果果",
        password:'123456',
        age:10,
        role:1000
    };
    let res=await useService.registerUser(user);
    console.log(res)
}
async function testGetUserinfor(){
    let res= await useService.getUserInfo("果果");
    console.log(res);
}
async function testDeleteUser(){
    await useService.deleteUser('小lan');
}
async  function testLoginUser() {
    let user={
        username:"果果",
        password:'123456'
    }
    let token=await useService.loginUser(user);
    console.log(token);
}
testLoginUser();