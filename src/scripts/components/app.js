import {$qs} from '../util';
import Sources from "./sources";
import NewsList from "./newsList";
import {fetchSources} from "../actions/sources";
import ActionFactory from "../actions/actionFactory";
import {ACTION_TYPES} from "../actions/actionTypes";

export default class App {

    constructor(store) {
        this.$sourcesList = $qs('.sources-list');
        this.$newsList = $qs('.news-list');

        this.store = store;
        this.sources  = new Sources(this.$sourcesList,store);
        this.news = new NewsList(this.$newsList,store);

        this.store.dispatch(new ActionFactory().getAction(ACTION_TYPES.REQUEST_SOURCES));
    }

}