import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";
import { listRepos } from "../../actions/repoActions";
import {
  PAGE_NUMBER_GET,
  REPO_TITLE_ENTER,
} from "../../constants/repoConstants";
type Props = {};

const SearchBar: React.FC<Props> = () => {
  const [repoTitle, setRepoTitle] = useState("");
  const [wrongFormatError, setWrongFormatError] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (e: any) => {
    e.preventDefault();

    if ((repoTitle && repoTitle.length < 1) || !repoTitle) {
      return;
    }
    const newTrimValue = repoTitle.replace(/ /g, "");
    if (!newTrimValue.includes("/:")) {
      setWrongFormatError(true);
      return;
    }
    setWrongFormatError(false);

    dispatch(listRepos(repoTitle));
    dispatch({
      type: PAGE_NUMBER_GET,
      payload: 1,
    });
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
            placeholder="What are you looking for? owner/:repoName"
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </div>
        {wrongFormatError && (
          <div className={styles.wrongFormatError}>
            <p>Wrong format</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
