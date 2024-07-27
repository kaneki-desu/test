
import {Container,Header} from './style.js';
import './card/card.css';
import { Card } from './card/card.jsx';
import { LatestMovieList } from '../../utils/Data.js';
export default function Frame(){
  LatestMovieList.map((movie)=>{
    
  })
  return (<>
    <Container>
    <Header><topography style={{fontSize : "xx-large"}}>Latest Movies</topography><button className="show-all">Show all</button></Header>

      <div className='card-wrapper'>
        <Card></Card>       
             
      </div >
    </Container></>
  )
}
