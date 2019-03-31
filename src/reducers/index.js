import { combineReducers } from 'redux';
import { FETCH_WEATHER } from '../actions/weatherActions';

function weatherReducer(state = {}, action) {
    switch (action.type)  {
        case FETCH_WEATHER:
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    weather: weatherReducer
});

export default rootReducer;