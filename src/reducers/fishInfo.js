/*eslint-disable*/
import createActionCreator from 'utils/redux';

export const GET_FISHINFO = 'GET_FISHINFO';
export const GET_FISHINFO_SUCCESS = 'GET_FISHINFO_SUCCESS';

export const initialState = {
  'tw_context': [{
    'class': '冷淡水',
    'name': '鱒魚',
    'feedname': '愛樂488EX 育成飼料',
    'src': '中文飼料來源',
    'pirce': 30,
    'nutrition': '',
    'comp': '',
    'certification': '',
    'intro': '',
    'inpect': '',
    'efficiency': '',
    'fifo': '',
    'amount': '',
    'tech': '',
    'season': '',
    'temp': '',
    'quality': '',
    'density': '',
  },{
    'class': '冷淡水',
    'name': '鱒魚',
    'feedname': '愛樂488EX 育成飼料',
    'src': '中文飼料來源',
    'pirce': 30,
    'nutrition': '',
    'comp': '',
    'certification': '',
    'intro': '',
    'inpect': '',
    'efficiency': '',
    'fifo': '',
    'amount': '',
    'tech': '',
    'season': '',
    'temp': '',
    'quality': '',
    'density': ''
  }],
  'us_context': [{
    'class': '冷淡水',
    'name': '鱒魚',
    'feedname': '愛樂488EX 育成飼料',
    'src': '中文飼料來源',
    'pirce': 30,
    'nutrition': '',
    'comp': '',
    'certification': '',
    'intro': '',
    'inpect': '',
    'efficiency': '',
    'fifo': '',
    'amount': '',
    'tech': '',
    'season': '',
    'temp': '',
    'quality': '',
    'density': ''
  },{
    'class': '冷淡水',
    'name': '鱒魚',
    'feedname': '愛樂488EX 育成飼料',
    'src': '中文飼料來源',
    'pirce': 30,
    'nutrition': '',
    'comp': '',
    'certification': '',
    'intro': '',
    'inpect': '',
    'efficiency': '',
    'fifo': '',
    'amount': '',
    'tech': '',
    'season': '',
    'temp': '',
    'quality': '',
    'density': ''
    
  }],
  'cn_context':[{
    'class': '冷淡水',
    'name': '鱒魚',
    'feedname': '愛樂488EX 育成飼料',
    'src': '中文飼料來源',
    'pirce': 30,
    'nutrition': '',
    'comp': '',
    'certification': '',
    'intro': '',
    'inpect': '',
    'efficiency': '',
    'fifo': '',
    'amount': '',
    'tech': '',
    'season': '',
    'temp': '',
    'quality': '',
    'density': '' 
  }],
  'for_consumer': {
    'account_A':{
      'processing': {
        'start_time': '2017/01/01',
        'density': '1.2',
        'feed_info': [
          {
            'name': '飼料A',
            'src': '飼料',
            'price': '300'
            
          },
          {
            'name': '飼料B',
            'src': '飼料',
            'price': '300'
            
          },
          {
            'name': '飼料C',
            'src': '飼料',
            'price': '300'
          }
        ],
        'feed_method': [
          {
            'time': '2018/01/02 14:00',
            'amount': 20,
            'pic': 'pic_url'
            
          },
          {
            'time': '2018/01/02 14:00',
            'amount': 40,
            'pic': 'pic_url'
            
          },
          {
            'time': '2018/01/02 14:00',
            'amount': 30,
            'pic': 'pic_url'
          }          
        ]
      },
      'score':5
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FISHINFO_SUCCESS: return action.payload;
    default: return state;
  }
};

export const getFishInfo = createActionCreator(GET_FISHINFO);
export const getFishInfoSuccess = createActionCreator(GET_FISHINFO_SUCCESS);
