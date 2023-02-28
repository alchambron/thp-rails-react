import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Navbar.scss";

const NavBar = () => {
  const cookie = Cookies.get("user_token");
  const navigate = useNavigate();

  function handleClick() {
    Cookies.remove("user_token");
    navigate("/");
  }

  return (
    <>
      <Link to="/">Home</Link>

      {cookie == null && cookie == undefined ? (
        <>
          <Link to="/user/sign_in">Se connecter</Link>
          <Link to="/user/sign_up">S'inscrire</Link>
        </>
      ) : (
        <>
          <Link to="/profile">Profile</Link>
          <Link onClick={handleClick}>Disconnect</Link>
        </>
      )}
    </>
  );
};
export default NavBar;
