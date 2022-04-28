import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  //for reducer, instead of useState
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();

    let params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(
      `https://api.github.com/search/users?${params}`,
      {
        headers: {
          Authorization: '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',
        },
      }
    );

    const { items } = await response.json();
    //items comes from the array of items in the data we get back
    console.log(items, 'data');
    dispatch({
      type: 'GET_USERS',
      payload: items,
      //set payload to data pulled from the API
    });
  };

  //set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  //clear users from state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
