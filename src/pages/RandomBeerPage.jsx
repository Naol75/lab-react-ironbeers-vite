import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { MoonLoader } from "react-spinners";
import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "../theme.context";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);
  const { titleThemeClassName } = useContext(ThemeContext);
  const { cardThemeClassName } = useContext(ThemeContext);
  const { backgroundThemeClassName } = useContext(ThemeContext);
 

  useEffect(() => {
    getRandomBeer()
  }, []);

  const getRandomBeer = async () => {
    try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        console.log(response.data)
        setRandomBeer(response.data)
    } catch (error) {
        console.log(error)
    }
  }

  if (!randomBeer) {
    return <div className={`moon-loader ${backgroundThemeClassName}`} ><MoonLoader color="rgb(117, 100, 75)" /></div>
  }

  return (
    <div className={backgroundThemeClassName}>
        <h1 className={titleThemeClassName}>{randomBeer.name}</h1>
      <div className={`wrapper random-beer-text-container ${cardThemeClassName}`}>
        <div>
          <img className="random-img" width={170} src={randomBeer.image_url} alt={randomBeer.name} />
        </div>
        <div className="text-padding" >
          <p>{randomBeer.tagline}</p>
          <br />
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <br />
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <br />
          <p>{randomBeer.description}</p>
          <br />
          <p>Contributed by: {randomBeer.contributed_by}</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default RandomBeerPage;