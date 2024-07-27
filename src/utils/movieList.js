const getMovies= async()=>{
    try {
        const promise=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=792cd5f7222fa403d626b538323b04ae&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc")
        const Movielist=await promise.json()
        console.log(Movielist,"successfully loaded");
        
    } catch (error) {
        console.error(error)
    }
}