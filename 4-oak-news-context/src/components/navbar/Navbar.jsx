import React from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <ul className={styles.topUl}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <p>Categories</p>
        <ul className={styles.bottomUl}>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "business" } })
            }
          >
            Business
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "general" } })
            }
          >
            General
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "health" } })
            }
          >
            Health
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "science" } })
            }
          >
            Science
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "sports" } })
            }
          >
            Sports
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
