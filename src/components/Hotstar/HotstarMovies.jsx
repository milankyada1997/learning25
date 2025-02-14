import React from 'react'
import { Link } from 'react-router-dom'

export const HotstarMovies = () => {
  return (
    <div style={{textAlign:"center", height:"200px", backgroundColor:"blue", color:"white"}}>
       <h1>HOTSTAR MOVIES</h1>
       <ul>
        <li><Link to="/play/moneyheist">Money Heist</Link></li>
        <li><Link to="/play/1651">IND Test</Link></li>
        <li><Link to="/play/">ok</Link></li>
       </ul>

        </div>
  )
}
