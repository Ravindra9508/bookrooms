import React ,{useState,useEffect}from 'react' 

import axios from "axios";
import { Await } from 'react-router-dom';

function Homescreen() {

const[rooms,setrooms]= useState([])
  useEffect(async() => {
    try {
      const data = (await axios.get('/api/rooms/getallrooms')).data 
     setrooms(data)
    } catch (error) {
      console.log(error)
    }
    
  
   
  }, [])
  

  return (
    <div>
        <h1>Home screen</h1>
        <h2>There are total {rooms.length} rooms</h2>
    </div>
  )
}

export default Homescreen