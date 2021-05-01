import {
  REPO_LIST_ERROR,
  REPO_LIST_REQUEST,
  REPO_LIST_SUCCESS,
  REPOS_GET_COUNT,
} from "../constants/repoConstants";

import axios from "axios";

export const listRepos = (
  repoTitle: string,
  page: number = 1,
  per_page: number = 10
) => async (dispatch: any) => {
  const newTrimValue = repoTitle.replace(/ /g, "");
  if (!newTrimValue.includes("/:")) {
    return;
  }
  const [owner, repoName] = repoTitle.split("/:");

  try {
    dispatch({
      type: REPO_LIST_REQUEST,
    });

    const repoInfo = await axios.get(
      `https://api.github.com/repos/${owner}/${repoName}`,
      {
        params: {
          page,
          per_page,
        },
      }
    );
    console.log("DDDD", repoInfo.data);
    const forks = await axios.get(
      `https://api.github.com/repos/${owner}/${repoName}/forks`,
      {
        params: {
          page,
          per_page,
        },
      }
    );
    console.log("data1", forks.data);
    dispatch({
      type: REPO_LIST_SUCCESS,
      payload: forks.data,
    });
    dispatch({
      type: REPOS_GET_COUNT,
      payload: repoInfo.data?.forks,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: REPO_LIST_ERROR,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
