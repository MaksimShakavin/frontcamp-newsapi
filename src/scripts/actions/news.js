import {ACTION_TYPES} from './actionTypes'
import service from '../service'
import ActionFactory from "./actionFactory";

export const receiveNews = articles => ({
    type: ACTION_TYPES.RECEIVE_NEWS,
    articles: articles
});

export const fetchNews = (sourceId) => dispatch => {
    return service.load('/top-headlines',[{key:'sources',value:sourceId}])
        .then(({articles}) => dispatch(new ActionFactory().getAction(ACTION_TYPES.RECEIVE_NEWS,articles)));
};