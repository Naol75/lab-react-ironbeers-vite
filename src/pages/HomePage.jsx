import { Link } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "../theme.context";


function HomePage() {

  const { titleThemeClassName } = useContext(ThemeContext);
  const { btnThemeClassName } = useContext(ThemeContext);
  const { backgroundThemeClassName } = useContext(ThemeContext); 

  return (
    <div className={`home-container ${backgroundThemeClassName}`}>
      <h1 className={titleThemeClassName}><span className="title-span">Welcome to IronBeers</span></h1>
      <div className="links-div">
        <Link to="/beers">
          <a href="#" className={btnThemeClassName}>
            All Beers
          </a>
        </Link>

        <Link to="/random-beer">
          <a href="#" className={btnThemeClassName}>
            Random Beer
          </a>
        </Link>

        <Link to="/new-beer">
          <a href="#" className={btnThemeClassName}>
            Add a new Beer
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
