import createActionCreator from 'utils/redux';

export const GET_FISHKIND = 'GET_FISHKIND';
export const GET_FISHKIND_SUCCESS = 'GET_FISHKIND_SUCCESS';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FISHKIND_SUCCESS: return action.payload;
    default: return state;
  }
};

export const getFishKind = createActionCreator(GET_FISHKIND);
export const getFishKindSuccess = createActionCreator(GET_FISHKIND_SUCCESS);
