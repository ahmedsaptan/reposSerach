import React from "react";
import styles from "../result.module.css";
import { useDispatch } from "react-redux";
import { MODEL_OPEN } from "../../../constants/repoConstants";

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
    html_url: string;
  };
};

const RepoRow: React.FC<Props> = ({ row }) => {
  const dispatch = useDispatch();

  const addToFav = (e: any, repoName: string) => {
    dispatch({
      type: MODEL_OPEN,
      payload: row,
    });
  };

  return (
    <tr className={styles.Tr}>
      <td className={styles.Td}>{row.full_name}</td>
      <td className={styles.Td}>{row.owner.login}</td>
      <td className={styles.Td}>{row.stargazers_count}</td>
      <td className={styles.Td}>
        <button>
          <a href={row.html_url} target="_blank">
            Link
          </a>
        </button>
      </td>
      <td className={styles.Td}>
        <button onClick={(e) => addToFav(e, row.full_name)}>Add</button>
      </td>
    </tr>
  );
};

export default RepoRow;
