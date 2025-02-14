import React, { useState } from 'react'

export const InputDemo = () => {

    const [name, setname] = useState ("")
    //useS ------ const [first, setfirst] = useState(second)
    const [email, setemail] = useState("")

    const nameHandler =(event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }



  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO</h1>
        <div>
            <label>NAME</label>
            <input type="text" placeholder='Enter name' onChange={(event)=>{nameHandler(event)}}>
            </input>
                {name}
        </div>

            <div>
                <label> Emial </label>
                <input type='text' placeholder='enter email'
                onChange={(event)=>{setemail(event.target.value)}}></input>
                {email}
            </div>

    </div>
  )
}
