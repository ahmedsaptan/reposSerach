import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.topnav}>
      <Link className={styles.active} to={"/"}>
        Home
      </Link>
      <Link to="/search">Search</Link>
      <Link to={"/fav"}>My Favorites</Link>
    </div>
  );
};

export default Header;
