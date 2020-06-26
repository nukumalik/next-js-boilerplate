import * as types from './types';

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const sampleReducer = (state = initialState, action) => {
  const { error, isLoading, posts, type } = action;

  switch (type) {
    case types.GET_POSTS: {
      return {
        ...state,
        error,
        posts,
      };
    }
    case types.LOADING: {
      return {
        ...state,
        isLoading,
      };
    }
    default:
      return state;
  }
};

export default sampleReducer;
