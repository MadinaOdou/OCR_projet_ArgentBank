import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/images/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Header({ loggedIn }) {
  const userData = useSelector((state) => state.user.userData);

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {loggedIn && userData ? (
            <Link className="main-nav-item" to="/">
              <FontAwesomeIcon icon={faCircleUser} />
              {userData.firstName}
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </Link>
          ) : (
            <Link className="main-nav-item" to="/sign-in">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
