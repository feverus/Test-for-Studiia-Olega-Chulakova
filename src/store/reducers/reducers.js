import { combineReducers } from 'redux';
import set from './r_set';
import menu from './r_menu';
import data from './r_data';
import langpack from './r_langpack';

const reducers = combineReducers({
    data,
    set,
    menu,    
    langpack
});

export default reducers;