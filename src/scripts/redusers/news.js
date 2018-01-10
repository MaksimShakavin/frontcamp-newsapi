import {ACTION_TYPES} from '../actions/actionTypes';
export const defaultState = {
    articles:[],
    selectedSource: null
};

export default function news(state=defaultState, action) {
    switch (action.type) {
        case ACTION_TYPES.SELECT_SOURCE: {
            return {
                ...state,
                selectedSource: {
                    sourceName: action.sourceName,
                    sourceId: action.sourceId
                }
            }
        }
        case ACTION_TYPES.RECEIVE_NEWS: {
            return {
                ...state,
                articles: action.articles
            }
        }
        default:
            return state;
    }
}