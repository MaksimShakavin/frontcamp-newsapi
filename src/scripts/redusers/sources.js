import {ACTION_TYPES} from '../actions/actionTypes';
export const defaultState = [];

export default function sources(state=defaultState, action) {
    switch (action.type) {
        case ACTION_TYPES.RECEIVE_SOURCES: {
            return action.sources
        }
        default:
            return state;
    }
}