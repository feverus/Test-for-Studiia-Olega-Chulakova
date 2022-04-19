import initialState from '../initialState';


export default function langpack(state = initialState.langpack, action) {
    switch(action.type) {
        case "LOAD_LANG_PACK": {
            return action.langpack;
        }       
        default: return state;
    }
}