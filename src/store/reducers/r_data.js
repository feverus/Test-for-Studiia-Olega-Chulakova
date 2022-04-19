import initialState from '../initialState';



export default function data(state = initialState.data, action) {
    switch(action.type) {
        case "LOAD_DATA": {
            return action.value;        
        }
        case "CHANGE_FAV": {
            let copy = state.slice();
            copy[action.id].favourite = !(action.value);
            return copy;        
        }        
        case "CHANGE_VISIBLE": {
            let copy = state.slice();
            copy[action.id].visible = action.value;
            return copy;        
        }          
        default: return state;
    }
}