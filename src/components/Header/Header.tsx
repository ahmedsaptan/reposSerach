import React from "react";
import styles from "./Header.module.css";
type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.Welcome}>
      <h1>Welcome to Repos Searcher</h1>
    </div>
  );
};

export default Header;
