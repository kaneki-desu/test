
import { useEffect, useState } from "react"
// import { LatestMovieList } from "../../../utils/Data"
import "./card.css"
export function Card() {
  const [latestMovies, setLatestMovies]=useState([])

  useEffect(async()=>{
    try {
      const promise=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=792cd5f7222fa403d626b538323b04ae&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc")
      const Movielist=await promise.json()
      console.log(Movielist,"successfully loaded");
      setLatestMovies(Movielist.results);
  } catch (error) {
      console.error(error)
  }
  },[])
  
  return (<>
    {latestMovies.map((movie) => {
    

    return <><div 
          className='card' key={movie.id} 
          style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`}}
           >
         <div className="text-content">{movie.overview} </div>
         <button className="watch">Watch NOW</button>
     </div></>
    })}

    </>
  )
}
