import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { MoonLoader } from "react-spinners";
import "../App.css";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

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
    return <MoonLoader color="#36d7b7" />
  }

  return (
    <div>
      <h1>{randomBeer.name}</h1>
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;