const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://ravindradto9:8xE0jmqxH6WsL8jJ@cluster0.zyg83gf.mongodb.net/?retryWrites=true&w=majority" 
mongoose.connect(mongoURL,{useUnifiedTopology :true , useNewUrlParser:true})
var connection = mongoose.conection 
connection.on('error',()=>{
    console.log("MongoDb connection failed");
})
connection.on('connected',()=>{
    console.log("Mongodb connected successful")
})

module.exports = mongoose