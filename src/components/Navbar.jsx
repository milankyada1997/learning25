import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
      < Link className ="nav-link" to="/home">
       Home
      </Link>
      </li> */}
      {/* <li  className="nav-item">
      < Link className ="nav-link" to="/movies">
       Movies
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/formdemo">
       FormDemo
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/formdemo1">
       FormDemo1
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/formdemo2">
       FormDemo2
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/formdemo3">
       FormDemo3
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/formdemo4">
       FormDemo4
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/loginform">
       LoginForm
      </Link>
      </li> */}
      <li className="nav-item">
      < Link className ="nav-link" to="/apidemo">
       API DEMO
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/apidemo1">
       API DEMO 1
      </Link>
      </li> 
      <li className="nav-item">
      < Link className ="nav-link" to="/userlist">
      USER LIST
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/searchmovie">
      SEARCH
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/postdemo1">
      POST DEMO 1
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/postdemo2">
      POST DEMO 2
      </Link>
      </li>
      <li className="nav-item">
      < Link className ="nav-link" to="/useeffectdemo">
      USE EFFECT DEMO
      </Link>
      </li>
      
  </ul>
  </div>
</nav>
    </div>
  )
}
