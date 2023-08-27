import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { MoonLoader } from "react-spinners";
import "../App.css";
import { ThemeContext } from "../theme.context";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);
  const { titleThemeClassName } = useContext(ThemeContext);
  const { backgroundThemeClassName } = useContext(ThemeContext);
  const { cardThemeClassName } = useContext(ThemeContext);


  useEffect(() => {
    getOneBeer();
  }, [beerId]);

  const getOneBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!beer) {
    return (
      <div className={`moon-loader ${backgroundThemeClassName}`}>
        <MoonLoader color="rgb(117, 100, 75)" />
      </div>
    );
  }

  return (
    <div className={backgroundThemeClassName}>
      <h1 className={titleThemeClassName}>{beer.name}</h1>
      <div className={`wrapper random-beer-text-container ${cardThemeClassName}`}>
        <div>
          <img className="random-img" width={200} src={beer.image_url} alt={beer.name} />
        </div>
        <div className="random-beer-text-container" >
          <p>{beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetailsPage;