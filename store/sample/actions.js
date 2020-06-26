import * as types from './types';

export const getPosts = () => (dispatch) => {
  dispatch({ type: types.LOADING, isLoading: true });
  dispatch({ type: types.GET_POSTS, posts: [1, 2, 3], error: false });
  dispatch({ type: types.LOADING, isLoading: false });
};
