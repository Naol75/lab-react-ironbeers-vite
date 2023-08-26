import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { MoonLoader } from "react-spinners";
import "../App.css";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

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
        console.log(error)
    }
  };

  if (!beer) {
    return <MoonLoader color="#36d7b7" />
  }

  return (
    <div>
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} />
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Created by: {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
