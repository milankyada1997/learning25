import axios from 'axios';
import React, { useState } from 'react'
import { Await } from 'react-router-dom';

export const ApiDemo = () => {

    const [messsage, setmessage] = useState("");
    const [users, setusers] = useState([]);

    const getUserData = async ()=>{
        const res = await axios.get("https://node5.onrender.com/user/user");
        console.log(res);
        console.log(res.data);
        console.log(res.data.messsage);
        setmessage(res.data.messsage)
        console.log(res.data.data);
        setusers(res.data.data);

    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO </h1>
        <button onClick= {()=>{
            getUserData();
       }}>
        GET     
        </button>
        {messsage}
    
            {users?.map((user)=>{
                return(
                    <li>{user.name}{user.age}
                    </li>
                );

            })}
    </div>
  )
}
