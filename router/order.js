'use strict'
let orderService = require('../service/order');

let router = require('express').Router();

router.get('/', async (req, res)=>{
    let orders = await orderService.getOrderByPage(req.query.page)
    res.success(orders)
});

router.post('/', async (req, res)=>{
    let o = await orderService.addOrder(req.body)
    res.success(o)
});

module.exports = router