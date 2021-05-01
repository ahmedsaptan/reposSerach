import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { listRepos } from "../../actions/repoActions";
import { PAGE_NUMBER_GET } from "../../constants/repoConstants";
type Props = {};

const Pagination: React.FC<Props> = () => {
  const res = useSelector((state: any) => state.reposCount);
  const pageNumRes = useSelector((state: any) => state.pageNumber);
  const pageNumber: number = pageNumRes.pageNumber;
  useEffect(() => {
    setCurrentPage((current) => pageNumber);
  }, [pageNumRes]);
  const dispatch = useDispatch();
  const result = useSelector((state: any) => state.repoTitle);
  const [currentPage, setCurrentPage] = useState(() => {
    return pageNumber;
  });

  const next = (e: any) => {
    e.preventDefault();
    if (currentPage == res?.reposCount / 10) {
      return;
    }
    // dispatch(listRepos(result.repoTitle, currentPage + 1));
    dispatch({
      type: PAGE_NUMBER_GET,
      payload: currentPage + 1,
    });
  };
  const prev = (e: any) => {
    e.preventDefault();
    if (currentPage <= 1) {
      return;
    }
    // dispatch(listRepos(result.repoTitle, currentPage - 1));
    dispatch({
      type: PAGE_NUMBER_GET,
      payload: currentPage - 1,
    });
  };
  return (
    <div>
      {res?.reposCount > 0 && (
        <div className={styles.Center}>
          <p>
            Showing {(currentPage - 1) * 10} to {currentPage * 10} of{" "}
            {res?.reposCount} entries
          </p>
          <div className={styles.Pagination}>
            <a className={styles.A} onClick={(e) => prev(e)}>
              &laquo;
            </a>
            <a className={`${styles.ButtonBlue} ${styles.CButton} ${styles.A}`}>
              {currentPage}
            </a>

            <a className={styles.A} onClick={(e) => next(e)}>
              &raquo;
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
