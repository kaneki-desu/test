import styled from "styled-components";
import logoImg from "./colorful-bird-illustration-gradient.png";
import { Typography } from '@mui/material';
import { CloseRounded } from "@mui/icons-material";
import { makeInvisible } from "../../../redux/slideDashboard/dashboard";
import { useDispatch } from "react-redux";

const Image = styled.img`
    height: 100px`
const Logo = styled.div`
    display: flex;
    gap:-5px;
    justify-content: center;
    align-items: center;
    margin-left:-30px;
    color=${(theme)=>{theme.text_primary}}
    `

const Logofunc = (prop) => {
  const dispatch = useDispatch();
  return (
  <Logo theme={prop.theme}>
    <Image src={logoImg} />
    <Typography variant="h4" style={{color: prop.theme.text_primary }}>Starnet</Typography>
    <span className="absolute top-3 right-3" onClick={()=>{
      dispatch(makeInvisible())}}>
    <CloseRounded /></span>
  </Logo>
  )
}
export default Logofunc;