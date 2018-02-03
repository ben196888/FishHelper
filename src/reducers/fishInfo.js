/*eslint-disable*/
import createActionCreator from 'utils/redux';

export const GET_FISHINFO = 'GET_FISHINFO';
export const GET_FISHINFO_SUCCESS = 'GET_FISHINFO_SUCCESS';

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FISHINFO_SUCCESS: return action.payload;
    default: return state;
  }
};

export const getFishInfo = createActionCreator(GET_FISHINFO);
export const getFishInfoSuccess = createActionCreator(GET_FISHINFO_SUCCESS);
