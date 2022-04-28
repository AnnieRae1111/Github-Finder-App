import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GitHubContext = createContext();

// const GITHUB_URL = 'https://api.github.com';
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GitHubProvider = ({ children }) => {
  //for reducer, instead of useState
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch('https://api.github.com/users', {
      headers: {
        Authorization: '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',
      },
    });

    const data = await response.json();
    console.log(data, 'data');
    dispatch({
      type: 'GET_USERS',
      payload: data,
      //set payload to data pulled from the API
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
