import { useEffect, useState } from 'react'
// import Frame from "../components/frame/frame"
import { Card } from '../components/frame/card/card';
export const Search = () => {
    let MovieList = [{}];
    const [Name,setName]=useState("")
    useEffect(()=>{
        const getMoveieLists = async()=>{
            // const Url= `http://www.omdbapi.com/?t={${Name}}&y={${year}}&plot={${full}}`
            const Url= `http://www.omdbapi.com/?t=${Name||"Deadpool"}`
            const response= await fetch(Url);
            MovieList =await response.json();
        }
    },[Name])
    const handleInput=(e)=>{
        console.log(e)
        let value=e.target.value
        setName(value);
        }
  return (<div>
    <input   
                type="text" 
                name="search" 
                placeholder="search" 
                id="search" 
                required 
                autoComplete="off" 
                onChange={handleInput}
          />
    {MovieList.map((movie,i)=>(
        <Card key={i} Poster={movie.Poster} Title={movie.Title} Year={movie.Year} Plot={movie.Plot}/>
    )
    )}
  </div>
  )
}

// sample{"Title":"Mushi-Shi","Year":"2005–2014","Rated":"TV-14","Released":"23 Oct 2005","Runtime":"25 min","Genre":"Animation, Drama, Fantasy","Director":"N/A","Writer":"N/A","Actors":"Yûto Nakano, Travis Willingham, Kôjun Itô","Plot":"Ginko is an expert travelling around to investigate a primeval life-form, the \"Mushi,\" and helping people with Mushi-related supernatural problems.","Language":"Portuguese, French, English, Spanish, Japanese","Country":"Japan","Awards":"2 wins","Poster":"https://m.media-amazon.com/images/M/MV5BOWRkM2E2NWMtZTQxZS00MGNkLWI4Y2UtMDgwYzFjNGJlMGMyL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"}],"Metascore":"N/A","imdbRating":"8.5","imdbVotes":"14,710","imdbID":"tt0807832","Type":"series","totalSeasons":"1","Response":"True"}