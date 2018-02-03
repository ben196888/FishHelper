/*eslint-disable*/
import createActionCreator from 'utils/redux';

export const GET_FISHINFO = 'GET_FISHINFO';
export const GET_FISHINFO_SUCCESS = 'GET_FISHINFO_SUCCESS';

export const initialState = { 
   "tw_context":[  
      {  
         "ID":1,
         "class":"冷淡水",
         "name":"鱒魚",
         "feedname":"愛樂488EX 育成飼料",
         "src":"愛樂",
         "pirce":"",
         "nutrition":"蛋白54%、粗脂肪12%、碳水化合物15.5%、灰份10.3%、纖維1.2%、維生素A 10,000 (IE/kg)、維生素D3 500 (IE/kg)、維生素E 250 (μg/kg)",
         "comp":"魚粉、大豆、豆蛋白、麥粉、麥麩質、魚油、礦物質、維生素",
         "certification":"GLOBAL G.A.P. / Organic Fish Feed / Naturland Standard on Production of Organic Fish Feed / Compliance with ASC Fresh Water Trout Standard Compound Feed Manufacturing Standard",
         "intro":"廣泛的高蛋白質和較低脂質需要的魚種設計的飼料",
         "impact":"氮9.3%、磷1.5%",
         "efficiency":"",
         "fifo":"",
         "amount":"ID1",
         "tech":"https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&cad=rja&uact=8&ved=0ahUKEwiEz5-NqInZAhWIWrwKHZnDAOUQFghAMAQ&url=http%3A%2F%2Fwww.tfrin.gov.tw%2Fdl.asp%3FfileName%3D66211465371.pdf&usg=AOvVaw1q7sNEy1CpkjBb6Bk8v_Mx",
         "season":"",
         "temp":"12-18°C",
         "quality":"ID2",
         "density":"ID3"
      }
   ],
   "us_context":[  
      {  
         "ID":1,
         "class":"Cold Freshwater",
         "name":"Trout",
         "feedname":"ALLER 488EX",
         "src":"ALLER AQUA",
         "pirce":"",
         "nutrition":"Protein 54%, Crude fat 12%, Carbon dioxide  15.5%, Ash  10.3%, Fibre  1.2%, Vitamin A 10,000 (IE/kg), Vitamin D3 500 (IE/kg), Vitamin E 250 (μg/kg)",
         "comp":"Fish meal, Soya, Soy protein, Wheat, Wheat gluten, Fish oil, Minerals, Vitamins",
         "certification":"GLOBAL G.A.P. / Organic Fish Feed / Naturland Standard on Production of Organic Fish Feed / Compliance with ASC Fresh Water Trout Standard Compound Feed Manufacturing Standard",
         "intro":"Designed for high-protein and low-protein requirement fish",
         "impact":"N 9.3%, P 1.5%",
         "efficiency":"",
         "fifo":"",
         "amount":"ID1",
         "tech":"https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&cad=rja&uact=8&ved=0ahUKEwiEz5-NqInZAhWIWrwKHZnDAOUQFghAMAQ&url=http%3A%2F%2Fwww.tfrin.gov.tw%2Fdl.asp%3FfileName%3D66211465371.pdf&usg=AOvVaw1q7sNEy1CpkjBb6Bk8v_Mx",
         "season":"",
         "temp":"12-18°C",
         "quality":"ID2",
         "density":"ID3"
      }
   ],
   "cn_context":[  
      {  
         "ID":1,
         "class":"冷淡水",
         "name":"鳟鱼",
         "feedname":"爱乐488EX 育成饲料",
         "src":"爱乐",
         "pirce":"",
         "nutrition":"蛋白54%、粗脂肪12%、碳水化合物15.5%、灰份10.3%、纤维1.2%、维生素A 10,000 (IE/kg)、维生素D3 500 (IE/kg)、维生素E 250 (μg/kg)",
         "comp":"鱼粉、大豆、豆蛋白、麦粉、麦麸质、鱼油、矿物质、维生素",
         "certification":"GLOBAL G.A.P. / Organic Fish Feed / Naturland Standard on Production of Organic Fish Feed / Compliance with ASC Fresh Water Trout Standard Compound Feed Manufacturing Standard",
         "intro":"广泛的高蛋白质和较低脂质需要的鱼种设计的饲料",
         "impact":"氮9.3%、磷1.5%",
         "efficiency":"",
         "fifo":"",
         "amount":"ID1",
         "tech":"https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&cad=rja&uact=8&ved=0ahUKEwiEz5-NqInZAhWIWrwKHZnDAOUQFghAMAQ&url=http%3A%2F%2Fwww.tfrin.gov.tw%2Fdl.asp%3FfileName%3D66211465371.pdf&usg=AOvVaw1q7sNEy1CpkjBb6Bk8v_Mx",
         "season":"",
         "temp":"12-18°C",
         "quality":"ID2",
         "density":"ID3"
      }
   ],
   "for_consumer":[  
      {  
         "account_name":"Apple",
         "processing":{  
            "start_time":"2017/4/1",
            "density":"1.20",
            "feed_info":[  
               {  
                  "Name":"愛樂",
                  "Source":"琴渠",
                  "Price":330.00
               },
               {  
                  "Name":"石斑魚飼料",
                  "Source":"福壽",
                  "Price":90.00
               },
               {  
                  "Name":"鱸魚飼料",
                  "Source":"龍勝",
                  "Price":120.00
               }
            ]
         },
         "feed_method":[  
            {  
               "Name":"愛樂",
               "Source":"琴渠",
               "Price":330.00
            },
            {  
               "Name":"石斑魚飼料",
               "Source":"福壽",
               "Price":90.00
            },
            {  
               "Name":"鱸魚飼料",
               "Source":"龍勝",
               "Price":120.00
            }
         ],
         "score":4
      }
   ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FISHINFO_SUCCESS: return action.payload;
    default: return state;
  }
};

export const getFishInfo = createActionCreator(GET_FISHINFO);
export const getFishInfoSuccess = createActionCreator(GET_FISHINFO_SUCCESS);
