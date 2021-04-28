import React from "react";
import styles from "./Loading.module.css";
type Props = {};

const Loading: React.FC<Props> = () => {
  return <div className={styles.loader}></div>;
};

export default Loading;
