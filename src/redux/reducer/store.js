import {createStore} from 'redux';
import messageList from './reducer';

const store = createStore(messageList);
export default store;
