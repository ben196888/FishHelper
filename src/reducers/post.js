import createActionCreator from 'utils/redux';

export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_SUCCESS: return action.payload;
    default: return state;
  }
};

export const getPost = createActionCreator(GET_POST);
export const getPostSuccess = createActionCreator(GET_POST_SUCCESS);
