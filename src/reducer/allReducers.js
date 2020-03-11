import counterReducer from './counter';
import loginReducer from './login';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogin: loginReducer
})
export default allReducers;