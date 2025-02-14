import React from 'react'

export const ArrayDemo1 = () => {
    var users = ["ram","shyam","amit","sumit"]
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"red"}}> ArrayDemo1</h1>
    {
        users.map((user)=>{
            return<li>{user}</li>
        })
    }

        </div>
  )
}
