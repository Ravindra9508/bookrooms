const express = require("express");
const router = express.Router();

const Rooms = require("../models/room.js")


 router.get("/getallrooms", async(req,res)=>{
    try {
        // const rooms = await Room.find({})
        // const rooms=await rooms.
        const rooms=await Rooms.find({});
        res.status(200).json({rooms:rooms});
        
        // req.json({rooms});
    } catch (error) {
        return res.status(404).json({message:error});
    }
 });

 module.exports = router;