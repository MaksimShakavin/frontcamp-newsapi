import thunkMiddleware from '../redux/middleware/redux-thunk'
import { createLogger } from '../redux/middleware/redux-logger'
import { createStore, applyMiddleware } from '../redux'
import rootReducer from '../redusers';

const loggerMiddleware = createLogger();

export default class Store {
    constructor() {
        this.store = createStore(
            rootReducer,
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        );
    }

    subscribe(onChange) {
        this.store.subscribe(onChange);
    }


    dispatch(action) {
        this.store.dispatch(action);
    }

    getSources() {
        const state = this.store.getState();
        return state.sources;
    }

    getSelectedSource() {
        const state = this.store.getState();
        return state.news.selectedSource;
    }

    getArticles() {
        const state = this.store.getState();
        return state.news.articles;
    }
}