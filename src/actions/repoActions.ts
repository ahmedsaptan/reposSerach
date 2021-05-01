import {
  REPO_LIST_ERROR,
  REPO_LIST_REQUEST,
  REPO_LIST_SUCCESS,
  REPOS_GET_COUNT,
} from "../constants/repoConstants";

import axios from "axios";

export const listRepos = (
  owner: string,
  repoName: string,
  page: number = 1,
  per_page: number = 10
) => async (dispatch: any) => {
  try {
    dispatch({
      type: REPO_LIST_REQUEST,
    });

    const { data } = await axios.get(
      `https://api.github.com/repos/${owner}/${repoName}/forks`,
      {
        params: {
          page,
          per_page,
        },
      }
    );
    console.log(data);
    dispatch({
      type: REPO_LIST_SUCCESS,
      payload: data,
    });
    dispatch({
      type: REPOS_GET_COUNT,
      payload: data.total_count,
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
