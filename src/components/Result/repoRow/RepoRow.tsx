import React from "react";
import styles from "../result.module.css";

type Props = {
  row: {
    watchers_count: number;
    watchers: number;
    stargazers_count: number;
    full_name: string;
    id: string;
    owner: {
      url: string;
      login: string;
      repos_url: string;
      avatar_url: string;
    };
    forks_url: string;
  };
};

const RepoRow: React.FC<Props> = ({ row }) => {
  return (
    <tr className={styles.Tr}>
      <td className={styles.Td}>{row.full_name}</td>
      <td className={styles.Td}>{row.owner.login}</td>
      <td className={styles.Td}>{row.stargazers_count}</td>
      <td className={styles.Td}>
        <button>
          <a href={row.forks_url}>Link</a>
        </button>
      </td>
    </tr>
  );
};

export default RepoRow;
