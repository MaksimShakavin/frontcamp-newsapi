import {ACTION_TYPES} from './actionTypes'
import service from '../service'
import ActionFactory from "./actionFactory";


export const selectSource = ({name,id}) => ({
    type: ACTION_TYPES.SELECT_SOURCE,
    sourceName: name,
    sourceId: id,
});

export const recieveSources = sources => ({
    type: ACTION_TYPES.RECEIVE_SOURCES,
    sources: sources
});

export const fetchSources = () => dispatch => {
    return service.load('/sources')
        .then(({sources}) => dispatch(new ActionFactory().getAction(ACTION_TYPES.RECEIVE_SOURCES,sources)));
};
