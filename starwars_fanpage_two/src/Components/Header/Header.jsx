import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const welcomeMessage = "STAR WARS";

  return (
    <header>
      <nav className="navigation">
        <h3>{welcomeMessage}</h3>
        <ul className="navlinks">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/people">People</Link>
          </li>

          <li>
            <Link to="/planets">Planets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
