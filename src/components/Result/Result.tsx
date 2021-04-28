import React from "react";
import RepoRow from "./repoRow/RepoRow";
import styles from "./result.module.css";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
type Props = {
  // repos: {
  //   items: {
  //     watchers_count: number;
  //     watchers: number;
  //     stargazers_count: number;
  //     full_name: string;
  //     id: string;
  //     owner: {
  //       url: string;
  //       login: string;
  //       repos_url: string;
  //       avatar_url: string;
  //     };
  //     forks_url: string;
  //   }[];
  //   total_count: number;
  //   incomplete_results: boolean;
  // };
};

const ResultTable: React.FC<Props> = () => {
  const repoList = useSelector((state: any) => state.repoList);
  console.log("CHANGE", repoList);
  const { loading, error, repos } = repoList;
  const { items } = repos;

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        items &&
        items.length > 0 && (
          <div>
            <table className={styles.Table}>
              <thead>
                <tr className={styles.Tr}>
                  <th className={styles.Th}>Repo Full Name</th>
                  <th className={styles.Th}>Owner</th>
                  <th className={styles.Th}># Stars</th>
                  <th className={styles.Th}>Link</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item: any) => {
                  return <RepoRow row={item} key={item.id} />;
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
