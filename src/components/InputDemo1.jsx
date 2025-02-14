import React, {useState} from 'react'

export const InputDemo1 = () => {

    const [fullname, setfullname] = useState("")
    const [dateOfTravel, setdateOfTravel] = useState("")
    const [destination, setdestination] = useState("")
    const [contactno, setcontactno] = useState("")
    const [paymentinfo, setpaymentinfo] = useState("")

  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"red"}}>TICKET BOOKING</h1>
        <div>
            <label>Full Name</label>
            <input type='text'
            placeholder='Full Name'
            onChange={(event)=>{setfullname(event.target.value)}}></input>
            {fullname}
        </div>
        <div>
            <label>Date Of Travel</label>
            <input type='date'
            placeholder='Date Of Tarvel'
            onChange={(event)=>{setdateOfTravel(event.target.value)}}></input>
            {dateOfTravel}
        </div>
        <div>
            <label>Destination</label>
            <input type='text'
            placeholder='Destination'
            onChange={(event)=>{setdestination(event.target.value)}}></input>
            {destination}
        </div>
        <div>
            <label>Contact No</label>
            <input type='tel'
            placeholder='+91 00000 00000'
            onChange={(event)=>{setcontactno(event.target.value)}}></input>
            {contactno}
        </div>
        <div>
            <label>Payment Info</label>
            <input type='text'
            placeholder='payment info'
            onChange={(event)=>{setpaymentinfo(event.target.value)}}></input>
            {paymentinfo}
        </div>

    </div>
  )
}
