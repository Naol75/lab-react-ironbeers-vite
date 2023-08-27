import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";
import DayNightToggle from "react-day-and-night-toggle";
import { useContext } from "react";
import { ThemeContext } from "../theme.context";

function Navbar() {
  const { isThemeDark, handleSwitchTheme } = useContext(ThemeContext);

  return (
    <nav className="nav-bar">
      <Link to="/">
        <div className="home-icon">
          <img src={homeIcon} alt="Home" />
        </div>
      </Link>
      <div className="toggle-container">
        <DayNightToggle onClick={handleSwitchTheme} size={30} />
      </div>
    </nav>
  );
}

export default Navbar;