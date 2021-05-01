import React from "react";
import RepoRow from "./repoRow/RepoRow";
import styles from "./result.module.css";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
type Props = {};

const ResultTable: React.FC<Props> = () => {
  const repoList = useSelector((state: any) => state.repoList);
  const { loading, error, repos } = repoList;
  console.log(repos);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        repos &&
        repos.length > 0 && (
          <div>
            <table className={styles.Table}>
              <thead>
                <tr className={styles.Tr}>
                  <th className={styles.Th}>Repo Full Name</th>
                  <th className={styles.Th}>Owner</th>
                  <th className={styles.Th}># Stars</th>
                  <th className={styles.Th}>Link</th>
                  <th className={styles.Th}>Favourite</th>
                </tr>
              </thead>
              <tbody>
                {repos?.map((item: any) => {
                  return <RepoRow row={item} key={item.id} addBtn={true} />;
                })}
              </tbody>
            </table>
          </div>
        )
      )}
    </>
  );
};

export default ResultTable;
