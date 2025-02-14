import React from 'react'
import "../assets/content.css"

/* export const Content = () => { 
    var name = "amit"
    var age = "22"
    var isActive = "True"
    var user = {
      firstname:"jay",
      lastname:"agg",
      age:"23"
    }
  return (
    <div style={{position:'fixed',top:'106px',width:'100%',height:'100%',backgroundColor:"",color:"blue",textAlign:"center"}}>
    <h1>Content</h1>    
    <h1>Name = {name}</h1>
    <h2>Age = {age}</h2>
    <h2>active = {isActive == true? "active":"Not Active"}</h2>
    <h2>user firstname = {user.firstname}</h2>
    <h2>lastname = {user.lastname}</h2>     
    <h2>age = {user.age}</h2>
    </div>
  )
}*/
export const Content = () => {
  return (
<main className="main-content">
        <div className="box image-box">
          {/* <img src= alt= /> */}
          <p>Image</p>
        </div>
        <div className="box about-us-box">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </main>
  );
};