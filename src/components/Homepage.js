import "./homepage.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      <div className="root">
        <Link to="/">
          <h1>Chess Set Store</h1>
        </Link>
        <Link to="Shop">
          <h1>Shop</h1>
        </Link>
      </div>

      <div id="footer">
        <div>Made by Matthew Hardman</div>
        <div>
          <a href="https://github.com/MatthewHardman/shopping-cart/tree/main">
            <FaGithub />
          </a>
        </div>
        <div>
          This is not an actual store. The chess sets here can be found at
          chess.com
        </div>
      </div>
    </div>
  );
};

export default Homepage;
