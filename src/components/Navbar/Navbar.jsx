import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch} from 'react-redux';
import { makeVisible } from '../../redux/slideDashboard/dashboard.js';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const dispatch =useDispatch();
  return (
    < div className='fixed w-full m-auto top-0 left-0 z-50'>
      <div className='relative flex justify-between text-center px-10 py-4'>
          <button className=' Menu  hover:text-white hover:scale-125 transition ease-in-out hover:transition-all '
              onClick={
                ()=>{
                  dispatch(makeVisible());}}
                  ><MenuIcon className=' pointer-events-none'></MenuIcon></button>
          <Link to="/register">
          <button className='Logout button-default'>Logout</button>
          </Link>
      </div>
    </div >
  )
}

export default Navbar