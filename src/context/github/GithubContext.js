import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  //for reducer, instead of useState
  const initialState = {
    users: [],
    user: {},
    //user will be filled with the specific user object that is sent back from API call
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

  //get a single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(
      `https://api.github.com/search/users/${login}`,
      {
        headers: {
          Authorization: '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',
        },
      }
    );

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const data = await response.json();
      //items comes from the array of items in the data we get back
      console.log(data, 'data');
      dispatch({
        type: 'GET_USER',
        payload: data,
        //set payload to data pulled from the API
        //single user that comes back from response
      });
    }
  };

  //set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  //clear users from state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
