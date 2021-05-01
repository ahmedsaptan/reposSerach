import React from "react";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";
type Props = {};

const Welcome: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.bgimg}>
        <div className={styles.middle}>
          <h3>Welcome TO Repo Forks Search</h3>
          <hr />
          <button className={styles.LinkWapper}>
            <Link to={"/search"} className={styles.Link}>
              Find It Here
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
