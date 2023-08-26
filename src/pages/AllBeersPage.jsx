import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


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
    <div>
        <h2>Trying to fetch all beers, please be patient!</h2>
    </div>
  }


  return (
    <div>
      <h1>All Beers</h1>
      <ul>
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
  );
}

export default AllBeersPage;