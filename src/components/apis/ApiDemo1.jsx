import axios from 'axios';
import React, { useState } from 'react'
import { Await } from 'react-router-dom';

export const ApiDemo1 = () => {

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
        <h1>API DEMO 1 WITH TABLE</h1>
        <button onClick= {()=>{
            getUserData();
       }}>
        GET       </button>
        {users.length > 0 && (   
        <table class="table table-striped table-dark" >
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>AGE</th>
                <th>STATUS</th>
            </tr>
        </thead>
        <tbody>
        {users?.map((user) => (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                    {
                        user.isActive ==true?"Active" :"Not Active"
                    }
                </td>
              </tr>
            ))}
        </tbody>
         </table>
        )
    }

    </div>
  )
}
