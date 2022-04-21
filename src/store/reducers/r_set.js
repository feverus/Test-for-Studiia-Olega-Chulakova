import initialState from '../initialState';


export default function set(state = initialState.set, action) {
    switch(action.type) {
        case "SET_IS_LOADED": {
            return {...state, isLoaded: action.value};        
        }
        case "SET_LANG":
        case "LOAD_LANG_PACK": {
            return {...state, lang: action.value};        
        }        
        case "CHANGE_ALL": {
            return {...state, lang: action.lang, queryParsed: true};        
        }        
        case "SET_SEARCH": {
            return {...state, filter: action.value};        
        }        
        case "STOP_AUTO_PLAY": {
            return {...state, autoPlayOn: false};        
        }        
        case "PLAY_PAUSE_VIDEO": {
            return {...state, played: action.id};       
        }      
        default: return state;
    }
}