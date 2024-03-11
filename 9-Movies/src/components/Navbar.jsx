import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <nav>
      <ul className={styles.navWrapper}>
        {user?.name && <li>Welcome {user.name} </li>}

        <li>
          <NavLink to={"/"}>Movies</NavLink>
        </li>
        <li>
          <NavLink to={"login"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
