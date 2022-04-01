import {createStore} from 'redux';
import reducer from '../reducers/mainReducer';

//Connecting store to the reducer;
let store = createStore(reducer);

export default store;
