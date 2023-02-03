import React,{useState} from 'react'
import { useEffect } from 'react';
import "../../genre.css"
const imgUrl = "https://image.tmdb.org/t/p/original";
const url = "https://api.themoviedb.org/3/genre/movie/list";
const apiKey = "dd1f4330b2cb3ce1746520bb86ae0382";
const Genre = () => {
  const [Genre, setGenre] = useState([]);
  useEffect(()=>{
   
  },[])
  return (
    <>
    <div className="row">

  {Genre && Genre.map((item)=>{return(
     <div className="column">
     <div className="card">
       <img src={`${imgUrl}/${item.poster_path}`} alt="cover" />
     </div>
   </div>
  )})
 
  }

  </div>
  </>
  )
}

export default Genre