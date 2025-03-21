import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const SearchMovie = () => {
    const [movieData, setmovieData] = useState([])
    const [query, setquery] = useState("")

    const searchMovie = async()=>{
        const res = await axios.get(
            // "http://www.omdbapi.com/?apikey=9d57be0b&s=avatar"
            "http://www.omdbapi.com/?apikey=9d57be0b&s=" + query
        )
        console.log(res.data)
        console.log(res.data.Search)
        setmovieData(res.data.Search)

    }

  return (
    <div style={{textAlign:"center"}}>

    <h1>SEARCH MOVIE</h1>
    <input type='text'
    onChange={(event)=>{
      setquery(event.target.value)

    }}></input>

    <button onClick={()=>{
        searchMovie()
    }}>Search</button>

    {/* <div class ="container">  */}                                                    {/*  This is a fixed-width container. */}
    <div class ="container sm-4">                                                      {/* This is a full-width container. */}
        <div class="row">
            
            {movieData?.map((movie) => {
              return (
                <div class="col">
                <div class="card">
                    <Link to={`/moviedetail/${movie.imdbID}`}>
                    <img src={movie.Poster} class="card-img-top" alt="Image" />
                    </Link>
           
                  <div class="card-body">
                    <h5 class="card-title">{movie.Title}</h5>
                    <p class="card-text">{movie.Year}</p>
                    <p class="card-text">{movie.imdbID}</p>
                  </div>
                </div>
                </div>

              );
            })}
         
        </div>
    </div>  
    </div>
  )
}
