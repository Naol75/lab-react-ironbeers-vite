import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import "../App.css";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  
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
    return  <MoonLoader color="#36d7b7" />
  }


  return (
    <div className="all-beers-page">
      <h1 className="title"><span className="title-span">All Beers</span></h1>
      <div className="card-container">
      <ul className="img-container">
        {beers.map((beer) => (
          <li key={beer._id}>
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