import { ROMANTIC_COMEDIES, ROMANTIC_COMEDIES_SEARCH } from '../constants/action-types';
import { RomanticComedies } from '../actions';
import { StoreState } from '../types';

export function rootReducer(state: StoreState, action: RomanticComedies): StoreState {
    console.log(action);
    if (action.type === ROMANTIC_COMEDIES) {
        return { ...state, romanticComedies:state.romanticComedies.concat(action.payload)};
    } else if (action.type === ROMANTIC_COMEDIES_SEARCH) {
        return { ...state, romanticComedies:state.romanticComedies=(action.payload)};
    } else {
        return state;
    }
      
};
