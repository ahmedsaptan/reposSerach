import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ResultTable from "../Result/Result";
import styles from "./home.module.css";
import Pagination from "../Pagination/Pagination";
import Header from "../Header/Header";
type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.column}>
        <SearchBar />
        <div className={styles.Table}>
          <ResultTable />
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Home;
