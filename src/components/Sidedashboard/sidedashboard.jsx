import { Typography } from "@mui/material";
import  Logo from "./logo/logo";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import {Search , Favorite, LightMode, DarkMode} from '@mui/icons-material/';

import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDark, setLight } from "../../redux/setTheme/setTheme";
import { useState } from "react";
import { makeInvisible } from "../../redux/slideDashboard/dashboard.js";


const Dashboard = styled.div`{
    background: ${ ({theme})=>theme.bg};
    height:100vh;
    max-width:300px;
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:15px 30px;
    padding-right:75px;
    border:5px solid black;
    border-radius:10px;
    align-items:flex-start;
    position:fixed;
    z-index:500;
    transition: ${({display})=>display.visible?"ease-out":"ease-in"} 1000ms;
    left:${({display})=>display.left}px;
    }`

const Element = styled.div`
    display:flex;
    justify-content:center;
    align-items:end;
    gap:10px; 
    text-decoration: none !important; 
    color:${ ({theme})=>theme.text_primary};

`
const menuItems=[{
    link:"/search",
    name: "Search",
    icons:<Search sx={{ fontSize: 35 }}/>
},{
    link:"/favourites",
    name: "Favourites",
    icons:<Favorite sx={{ fontSize: 30 }}/>
},{}]


const toggleIcon=[{
    icon:<LightMode sx={{ fontSize: 35 }}/>,
    text:"Light Mode"
},{
    icon:<DarkMode sx={{ fontSize: 35 }}/>,
    text:"Dark Mode"
}];


const Sidedashboard = () =>{
  
const theme = useSelector((state)=>state.currentTheme.theme)
  const [Dark,setstate]=useState(true)
  const [DarkElement,setDarkElement]=useState({
    icon:<DarkMode sx={{ fontSize: 35 }}/>,
    text:"Dark Mode"
})
  const dispatch =useDispatch();

  const display=useSelector((state)=>state.dash)
  return (
    <Dashboard theme={theme} display={display}  >
        <Logo theme={theme}></Logo>
        <Link  to="/" style={{textDecoration:"none"}} >
            <Element theme={theme} onClick={()=>{dispatch(makeInvisible())}}>
            {/* <Element theme={theme}  > */}
                <HomeIcon sx={{ fontSize: 35 }} className=" pointer-events-none" /> 
                <Typography variant="h5">Dashboard</Typography>
            </Element>
        </Link>
        {menuItems.map((element, index)=>(
            
            <Link  to={element.link} key={index} style={{textDecoration:"none"}} >
            <Element theme={theme} >
                {element.icons} 
                <Typography variant="h5">{element.name}</Typography>
            </Element>
            </Link>
        ))}

        <Element theme={theme} onClick={()=>{
            
            if(Dark){
                setstate(false)
                setDarkElement(toggleIcon[0])
                dispatch(setLight())}
                else{
                setDarkElement(toggleIcon[1])
                dispatch(setDark())
                setstate(true)
            } }}>
                        {DarkElement.icon} 
                        <Typography variant="h5">{DarkElement.text}</Typography>
        </Element>
    </Dashboard>

  )
}

export default Sidedashboard;
