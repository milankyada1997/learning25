import React, {useState} from 'react'

export const InputDemo3 = () => {

      const [name, setname] = useState ("")
      const [mobile, setmobile] = useState ("")
      const [email, setemail] = useState('')
      const [gender, setgender] = useState('')
      const [bloodgroup, setbloodgroup] = useState('')
      
  
      const nameHandler =(event)=>{
          console.log(event.target.value)
          setname(event.target.value)  }

      const mobileHandler =(event)=>{
          console.log(event.target.value)
          setmobile(event.target.value)  }

      const emailHandler =(event)=>{ 
        console.log(event.target.value)
        setemail(event.target.value)
      }
      const genderHandler =(event)=>{ 
        console.log(event.target.value)
        setgender(event.target.value)
      }      
      const bloodgroupHandler =(event) =>{
        console.log(event.target.value)
        setbloodgroup(event.target.value)
      }
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{color:"yellow"}}>BLOOD DONATION</h1>

    <div>
    <label>NAME</label>
      <input type="text" placeholder='Enter name' onChange={(event)=>{nameHandler(event)}}>
      </input>    
      {name}
    </div>

    <div>
      <label>Contact Number</label>
      <input type='tel' placeholder='+91 00000 00000' onChange={(event)=>{mobileHandler(event)}}></input>
      {mobile}
    </div>

    <div>
      <label>Email Id</label>
      <input type='email' placeholder='abc@gmail.com' onChange={(event)=>{emailHandler(event)}}></input>
      {email}
    </div>

    <div>
      <label>Gender: </label>
      <input type='radio' id='male' name='gender' value="Male"></input>
      <label for="male">Male</label> <br/>
      <input type='radio' id='female' name='gender' value="Female"></input>  
      <label for="female">Female</label> <br/>
      <input type='radio' id='other' name='gender' value="Other"></input>  
      <label for="Other">Other</label>

      {/* <select name="" id="">
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select> */}
    </div>

    <div>
        <label>Blood Group:</label>
        <select name="" id="" 
        onChange={(event)=>{bloodgroupHandler(event)}}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
        </select>
        {bloodgroup}
    </div>

    </div>
  )
}
