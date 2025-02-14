import React, { useState } from 'react'

export const UseStateDemo1 = () => {

    const [isLoading, setisLoading] = useState(true)
    const [users, setusers] = useState([])//array
    const [user, setuser] = useState({})
    const [name, setname] = useState("")

    const stopLoader = ()=>{
        setisLoading(false)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 1</h1>
        {
            isLoading == true ? "Loading..." :""
        }
        <button onClick={()=>{stopLoader()}}>stop</button>
    </div>
  )
}