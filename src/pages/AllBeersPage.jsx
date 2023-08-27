import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import "../App.css";
import { ThemeContext } from "../theme.context";
import { useContext } from "react";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const { cardThemeClassName } = useContext(ThemeContext);
  const { titleThemeClassName } = useContext(ThemeContext);
  const { backgroundThemeClassName } = useContext(ThemeContext);   
  
  const getAllBeers = async () => {

      try {
       const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
       console.log(response.data)
        setBeers(response.data)
      } 
      catch (error) {
        console.log(error)

      }
  }

  useEffect(() => {
    getAllBeers()


  }, []);


  if(beers.length === 0) {
    return <div className={`moon-loader ${backgroundThemeClassName}`}><MoonLoader color="rgb(117, 100, 75)" /></div>
  }


  return (
    <div className={backgroundThemeClassName}>
      <h1 className={titleThemeClassName}><span className="title-span">Check'em all</span></h1>
      <div>
        <ul>
        {beers.map((beer) => (
          <li key={beer._id} className={`wrapper ${cardThemeClassName}`} >
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} />
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            </Link>
          </li>
        ))}
        </ul>
      </div>

    </div>
  );
}

export default AllBeersPage;