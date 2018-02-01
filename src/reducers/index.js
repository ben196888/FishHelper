import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import ui from './ui';
import post from './post';
import intl from './intl';

export default combineReducers({
  routing,
  ui,
  post,
  intl,
});
