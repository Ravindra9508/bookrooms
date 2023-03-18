import React ,{useState,useEffect}from 'react' 

import axios from "axios";
import { Await } from 'react-router-dom';

function Homescreen() {


const getAllRooms = async() => {
  try {
    const data = (await axios.get('/api/rooms/getallrooms')).data 
    setrooms(data)
    console.log("hii",data);
  } catch (error) {
    console.log(error)
  }
}

  useEffect(()=>{
    getAllRooms();
  },[])

  

  return (
    <div>
        <h1>Home screen</h1>
        <h2>There are total {rooms.length} rooms</h2>
    </div>
  )
}

export default Homescreen
