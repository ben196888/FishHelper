import createActionCreator from 'utils/redux';

export const GET_FISHKIND = 'GET_FISHKIND';
export const GET_FISHKIND_SUCCESS = 'GET_FISHKIND_SUCCESS';

export const initialState = [{'ID':1,'Name_TW':'鱒魚','Name_CN':'鳟鱼','Name_EN':'Trout','Class':'CD','picURL':'https://i.imgur.com/iRIyjayl.jpg'},{'ID':2,'Name_TW':'比目魚','Name_CN':'比目鱼','Name_EN':'Flatfish','Class':'WD WS', 'picURL': 'https://i.imgur.com/GPGqX9C.png'},{'ID':3,'Name_TW':'石斑魚','Name_CN':'石斑鱼','Name_EN':'Grouper','Class':'WD WS', 'picURL': 'https://i.imgur.com/i7qODNx.png'},{'ID':5,'Name_TW':'鱸魚','Name_CN':'鲈鱼','Name_EN':'Sea Bass','Class':'WD WS', 'picURL': 'https://i.imgur.com/Ri0mps3.jpg'}];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FISHKIND_SUCCESS: return action.payload;
    default: return state;
  }
};

export const getFishKind = createActionCreator(GET_FISHKIND);
export const getFishKindSuccess = createActionCreator(GET_FISHKIND_SUCCESS);
