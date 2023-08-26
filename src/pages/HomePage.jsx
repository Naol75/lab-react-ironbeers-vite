import { Link } from "react-router-dom";
import "../App.css";

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="title"><span className="title-span">Welcome to IronBeers</span></h1>
      <div className="links-div">
        <Link to="/beers">
          <a href="#" className="fancy-btn">
            All Beers
          </a>
        </Link>

        <Link to="/random-beer">
          <a href="#" className="fancy-btn">
            Random Beer
          </a>
        </Link>

        <Link to="/new-beer">
          <a href="#" className="fancy-btn">
            Add a new Beer
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
