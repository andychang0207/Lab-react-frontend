import { message } from 'antd';
import { combineReducers } from 'redux';
import {FETCH_DATA,ADD_MESSAGE} from '../action/messsageaction';

// message default 格式
// {
//     name: 'andy',
//     text: '測試一號',
//     time: '1990-07-8 12:00:00'
// }
const defaultMessage = {
    messagebox:[]
}


export default function messageList(state = defaultMessage, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return Object.assign({},state,{
                messagebox:[
                    ...state.messagebox,
                    action.info
                ]
            })
        default:
            return state;
    }
}

// combineReducers 能把多個 reducers 合在一起
// const rootReducer = combineReducers({
//     messageList,
// });

// export default rootReducer;