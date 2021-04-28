import {
  REPO_LIST_ERROR,
  REPO_LIST_REQUEST,
  REPO_LIST_SUCCESS,
  REPO_TITLE_ENTER,
  REPOS_GET_COUNT,
} from "../constants/repoConstants";

export const repoReducer = (
  state = { repos: [] },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case REPO_LIST_REQUEST:
      return { loading: true, repos: [] };
    case REPO_LIST_SUCCESS:
      return { loading: false, repos: action.payload };
    case REPO_LIST_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const repoTitle = (
  state = { repoTitle: "" },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case REPO_TITLE_ENTER:
      return { repoTitle: action.payload };
    default:
      return state;
  }
};

export const reposCount = (
  state = { reposCount: 0 },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case REPOS_GET_COUNT:
      return { reposCount: action.payload };
    default:
      return state;
  }
};
