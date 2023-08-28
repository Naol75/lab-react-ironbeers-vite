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
        <Link to="/beers" className={btnThemeClassName}>
          All Beers
        </Link>

        <Link to="/random-beer" className={btnThemeClassName}>
          Random Beer
        </Link>

        <Link to="/new-beer" className={btnThemeClassName}>
          Add a new Beer
        </Link>
      </div>
    </div>
  );
}

export default HomePage;