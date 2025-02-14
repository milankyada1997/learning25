import React, {useState} from 'react'

export const InputDemo2 = () => {

        const [fullname, setfullname] = useState("")
        const [emailid, setemailid] = useState("")
        const [password, setpassword] = useState("")
        const [moblieno, setmoblieno] = useState("")
        const [login, setlogin] = useState("")

  
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"grey"}}> USER ADMIN</h1>

          <div>
                <label> Full Name</label>
                <input type='text'
                 placeholder='Full name'
                 onChange={(event)=> {setfullname(event.target.value)}}></input>
                 {fullname}
          </div>

          <div>
                <label>Email Id</label>
                <input type='email'
                 placeholder='abc@gmail.com'
                 onChange={(event)=>{setemailid(event.target.event)}}></input>
                 {emailid}
          </div>
          <div>
                <label>Password</label>
                <input type='password'
                onChange={(event)=>{setpassword(event.target.value)}}></input>
                {/* {password} */}
          </div>
          <div>
                <label>Moblieno</label>
                <input type='tel'
                onChange={(event)=>{setmoblieno(event.target.value)}}></input>
                {moblieno}
          </div>
          <div>
                <button type='login' 
                onChange={(event)=>{setlogin(event.target.value)}}>
                  Login</button>
                  {login}

          </div>
    </div>
  )
}
