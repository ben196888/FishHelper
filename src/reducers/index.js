import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import ui from './ui';
import post from './post';

export default combineReducers({
  routing,
  ui,
  post,
});
