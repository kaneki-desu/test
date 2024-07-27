// import { createSlice } from '@reduxjs/toolkit'
// import movieTrailer from 'movie-trailer';
// import { LatestMovieList } from '../../utils/Data.js';
// const initialState = { movie:"Kung Fu Panda 4 " ,
//                         videourl:"www.youtube.com",}

// const counterSlice = createSlice({
//   name: 'movieState',
//   initialState,
//   reducers: {
//     setMovie:(state,moviename)=> {
//       state.movie=moviename;
//     },
//     getmovieUrl:async(state)=> {
//       await movieTrailer(state.movie).then((res) => {
//         console.log(res) 
//         state.videourl=res; })
//     },
//     MovieDetails:async(state)=>{
//         const movie= LatestMovieList.map(movie=>movie.title.includes(state.movie))
//         return movie;
//     }
    
//   },
// })

// export const { setMovie, getmovieUrl ,MovieDetails } = counterSlice.actions
// export default counterSlice.reducer