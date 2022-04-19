import initialState from '../initialState';

export default function menu(state = initialState.menu, action) {
    switch(action.type) {      
        case "CHANGE_SORT_TYPE": {
            return {...state, sortType: action.vType};        
        }
        case "CHANGE_SORT_DIRECTION": {
            return {...state, sortDirection: action.vDirection};        
        }
        case "CHANGE_VIEW": {
            return {...state, view: action.value};        
        }          
        case "CHANGE_ALL": {
            return {...state, sortType: action.sortType, sortDirection: action.sortDirection, view: action.view};        
        }          
        default: return state;
    }
}