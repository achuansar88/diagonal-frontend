import * as constants from '../constants/action-types';

export interface RomanticComedies {
    type: constants.ROMANTIC_COMEDIES;
    payload: [{}]
}

export interface RomanticComediesSearch {
    type: constants.ROMANTIC_COMEDIES_SEARCH;
    payload: [{}]
}

export function addRomanticComedies(items: any):  RomanticComedies {
    
    return { type: constants.ROMANTIC_COMEDIES, payload: items }
};
export function searchRomanticComedies(items: any):  RomanticComediesSearch {
    
    return { type: constants.ROMANTIC_COMEDIES_SEARCH, payload: items }
};