import React from "react";
import styles from "./Footer.module.css";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <div className={styles.row}>
      <div className={styles.textCenter}>Copyright &copy; Ahmad Sayed</div>
    </div>
  );
};

export default Footer;
