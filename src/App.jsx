// import { useSelector,useDispatch} from 'react-redux'
import { useSelector} from 'react-redux'

// import styled, { ThemeProvider } from "styled-components";
import { ThemeProvider } from "styled-components";
// import Frame from './components/frame/frame';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
// import { TableFooter} from '@mui/material';

// import Sidedashboard from './components/Sidedashboard/sidedashboard';
// import Navbar from './components/Navbar/Navbar';
import "./index.css"
import Register from "./pages/registration"
import {Search} from "./pages/search"
import {Home }from './pages/home';
function App() {

const theme = useSelector((state) => state.currentTheme.theme)
  return (
    <>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/search" element={<Search/>}/>
              
            </Routes>              
          </BrowserRouter>
        </ThemeProvider>       
    </>
  )
}

export default App
