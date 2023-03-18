const express = require("express")
const mongoose= require("mongoose")
const app= express();
const bodyParser=require("body-parser")

const router =require('./routes/roomsRoute.js') 
app.use('/api/rooms',router);

app.use(bodyParser.json());

const runApp = async () => {

    mongoose.set('strictQuery', false);

    // const url = "mongodb+srv://" + process.env.mongo_user + ":" + process.env.mongopass + "@cluster0.ncrzato.mongodb.net/Clone?retryWrites=true&w=majority";
   // const url = "mongodb://localhost:27017"
    // const url = "mongodb+srv://ravindradto9:Ravindra@2001@cluster0.zyg83gf.mongodb.net/test";
    //-------- const url = "mongodb+srv://ravindradto9:8xE0jmqxH6WsL8jJ@cluster0.zyg83gf.mongodb.net/book-rooms=true&w=majority"
    const url ="mongodb+srv://ravindradto9:8xE0jmqxH6WsL8jJ@cluster0.zyg83gf.mongodb.net/mern-room"
    const connect = await mongoose.connect(url)
    console.log('connected to db')

    // mongoose.connect(url, (err, res) => {
    //     //console.log(err, res);
    //     if(err){
    //         // res.json({err:err.toString()})
    //         console.log({err:err.toString()})
    //     }
    //     else
    //     {
    //         console.log("connected to mongodb");
    //     }
    // });
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`App Listening To Port ${PORT}`)
    })
}
runApp();