import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./SearchBar.module.css";
import { listRepos } from "../../actions/repoActions";
import { REPO_TITLE_ENTER } from "../../constants/repoConstants";
type Props = {};

const SearchBar: React.FC<Props> = () => {
  const [repoTitle, setRepoTitle] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(listRepos(repoTitle));
    dispatch({
      type: REPO_TITLE_ENTER,
      payload: repoTitle,
    });
  };
  return (
    <div className={styles.wrap}>
      <form onSubmit={onSubmit}>
        <div className={styles.search}>
          <input
            type="text"
            value={repoTitle}
            onChange={(e) => setRepoTitle(e.target.value)}
            className={styles.searchTerm}
            placeholder="What are you looking for?"
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
