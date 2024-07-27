// import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../frame/style.js';
import ReactPlayer from "react-player/"
// import { getmovieUrl } from '../../redux/setMovie/setMovie.js';

import "./background-video.css"
import { useState } from 'react';
const VideoSection = () => {
    const [running,setPlaying]=useState(false)
    const dispatch= useDispatch();
    // const videoUrl= useSelector((state)=>state.movieState.movie)
    // dispatch(getmovieUrl())
    // let videoUrl=useSelector((state)=>state.movieState.videourl)
    // console.log(videoUrl);
    // document.querySelector(".bgvideo").click()
     
  return (
    <ReactPlayer width="100%"  className="bgvideo" 
    playing
    loop
    // onPlay={()=>{if(getCurrentTime()===2)setPlaying(true)}}
    style={running? {visibility:"hidden"}:{visibility:"visible"}
     }
    config={{ youtube: { playerVars: { disablekb: 1 } } }}
    url={["https://www.youtube.com/watch?v=laNA2HgwYXU",]}/>
    // <div className='background-home-video'></div>

      // <iframe width="750" height="480" src="https://www.youtube.com/embed/laNA2HgwYXU" title="Deadpool &amp; Wolverine | Final Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  )
}
export default VideoSection;

