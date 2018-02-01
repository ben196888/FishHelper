import createActionCreator from 'utils/redux';
import us from 'intl/languages/en-us.json';
import tw from 'intl/languages/zh-tw.json';
import cn from 'intl/languages/zh-cn.json';

export const initialState = {
  locale: 'en-us',
  messages: us,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE: {
      let messages = null;
      switch (action.payload) {
        case 'zh-tw':
          messages = tw;
          break;
        case 'zh-cn':
          messages = cn;
          break;
        default:
          messages = us;
      }
      return {
        locale: action.payload,
        messages,
      };
    }
    default: return state;
  }
};

export const CHANGE_LOCALE = 'CHANGE_LOCALE';
export const changeLocale = createActionCreator(CHANGE_LOCALE);
