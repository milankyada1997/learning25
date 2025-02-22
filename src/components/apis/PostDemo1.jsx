import axios from 'axios'
import React from 'react'


export const PostDemo1 = () => {

    const postData = async () => {

         var userObj = {
            name:"tillu",
            age:12,
            email:"mainBAbaTILLU@gmail.com",
            isActive:true
        }

    
    const res = await axios.post("https://node5.onrender.com/user/user",userObj)
    console.log(res)
    console.log(res.status)
    console.log(res.data)

        if(res.status == 201){
            alert("user created successfully")
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>POST DATA</h1>
        <button onClick={()=>{postData()}}>ADD</button>
    </div>
  )
}
