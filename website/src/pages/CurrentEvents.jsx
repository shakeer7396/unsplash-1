

import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {fetchData} from "../Redux/CurrentEvents/action";

const CurrentEvents = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [data,setData] =useState([]);

    useEffect(() => {
        dispatch(fetchData());
    },[])
    // const handleClick=(id)=>{
    //     nav
    // }
    const CurrentEvents = useSelector((store) => {
        return store.data.products;
      });
  return (
    <div>CurrentEvents
        {CurrentEvents.map((e)=>{
            <div key={data.image}>
                
            </div>
        })}

        
    </div>
  )
}

export default CurrentEvents