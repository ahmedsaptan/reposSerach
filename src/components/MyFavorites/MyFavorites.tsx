import React from "react";
import styles from "./MyFavorites.module.css";
import RepoRow from "../Result/repoRow/RepoRow";
type Props = {};

const MyFavorites: React.FC<Props> = () => {
  let repos: any = localStorage.getItem("fav");
  repos = JSON.parse(repos);
  return (
    <>
      {repos && repos.length > 0 ? (
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
              {repos?.map((item: any) => {
                return <RepoRow row={item} key={item.id} addBtn={false} />;
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2>NO Data</h2>
        </div>
      )}
    </>
  );
};

export default MyFavorites;
