const express = require ('express');
const cors= require('cors');
const  connectDB = require('./config/mongodb');
const { default: connectCloudinary } = require('./config/cloudlinary');
const  userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');
require('dotenv').config();
const cartRouter= require('./routes/cartRoute');
const orderRouter = require('./routes/orderRoute');

//App config

const app= express();
const port= process.env.PORT || 4000;
connectDB()
connectCloudinary()

//middlewares

app.use(express.json());
app.use(cors());
app.use('/api/user',userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

//api endpoints

app.get('/',(req,res)=>{
    res.send("API WORKING...")
})

app.listen(port,()=> console.log("server started on port :" +port))