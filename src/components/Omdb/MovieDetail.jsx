import axios from 'axios'
import React, {useEffect, useState}from 'react'
import { get } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {

   const id = useParams().id
   const [detail, setdetail] = useState(null)

   const getDetail = async()=>{

    const res = await axios.get("http://www.omdbapi.com/?apikey=9d57be0b&i="+id)
    console.log(res.data)
    setdetail(res.data)
   }
   useEffect(()=>{
    getDetail()
   },[])
  return (
    <div style={{textAlign:"center"}}> 
        <h1>MOVIE DETAIL</h1>
        {/* <button onClick={()=>{getDetail()}}>Detail</button>
         */}
        {/* <h1 > Year:{detail?.Year}</h1> */}

      {detail && (
           
        
       <div class ="container-fluid" style={{}}>
        <div class="row" >
          <div class="col-md-" >
            <img src={detail.Poster} class="card-img-top" alt="Image"/>
          </div>  
        
          <div class="col-md-3" style={{marginLeft:"10px",textAlign:"left"}}>
            <h5 class="card-title">{detail.Title}</h5>
            <p class="card-text">IMDB Rating: {detail.imdbRating}</p>
            <p class="card-text">Year: {detail.Year}</p>
            <p class="card-text">Director & Writer: {detail.Director}</p>
            <p class="card-text">Genre: {detail.Genre}</p>
            <p class="card-text">Language: {detail.Language}</p>
            <p class="card-text">Plot:{detail.Plot}</p>
            <p class="card-text">Runtime:{detail.Runtime}</p>
            
          </div>
          </div>
      </div> 
    )
    }


    </div>

  )
}
