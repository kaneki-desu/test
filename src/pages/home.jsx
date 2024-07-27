// import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import styled from "styled-components";

import { makeInvisible } from '../redux/slideDashboard/dashboard';

import Frame from '../components/frame/frame';
import { TableFooter} from '@mui/material';

import Sidedashboard from '../components/Sidedashboard/sidedashboard';
import Navbar from '../components/Navbar/Navbar';
import VideoSection from '../components/videoframe/videoSection';

const Heading = styled.div`
  background: ${ ({theme})=>theme.bg};
  width:100%;
  height:100vh;
`

export const Home = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.currentTheme.theme)
  return (
    <>
        <Sidedashboard ></Sidedashboard>
        <Heading  theme={theme} onClick={(e)=>{
          if(e.target!==document.querySelector(".Menu")){dispatch(makeInvisible())}
          } 
        }
          >
            <Navbar />
            <VideoSection />
            <Frame></Frame>
        </Heading>
        <TableFooter></TableFooter>
    </>
  )
}

