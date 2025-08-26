const express= require('express')

const {placeOrder,placeOrderStripe,allOrders,userOrders,updateStatus, verifyStripe} = require('../controllers/orderController')

const authUser= require('../middleware/auth')

const adminAuth= require('../middleware/adminAuth')

const orderRouter= express.Router()

//admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment features

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
// orderRouter.post('/razorpay',authUser,placeOrderRazorPay)

//user feature 

orderRouter.post('/userorders',authUser,userOrders)

//verify payment

orderRouter.post('/verifyStripe',authUser, verifyStripe)

module.exports= orderRouter


