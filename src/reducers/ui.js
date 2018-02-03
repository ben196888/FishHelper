import createActionCreator from 'utils/redux';

const TOGGLE_DIALOG = 'TOGGLE_DIALOG';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const SELECT_TYPE = 'SELECT_TYPE';

export const initialState = {
  dialog: {
    show: false,
    component: null,
  },
  isLoading: false,
  selectedType: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG: return {
      ...state,
      dialog: {
        show: !!action.payload,
        component: action.payload || null,
      },
    };
    case TOGGLE_LOADING: return {
      ...state,
      isLoading: action.payload || false,
    };
    case SELECT_TYPE: return {
      ...state,
      selectedType: action.payload,
    };
    default: return state;
  }
};

export const toggleDialog = createActionCreator(TOGGLE_DIALOG);
export const toggleLoading = createActionCreator(TOGGLE_LOADING);
export const selectType = createActionCreator(SELECT_TYPE);
