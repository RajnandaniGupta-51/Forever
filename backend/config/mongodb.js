const mongoose= require('mongoose');

const connectDB= async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("db connected");
    })
    
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

module.exports= connectDB;