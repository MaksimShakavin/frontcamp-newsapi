import Article from "./article";
import {fetchNews} from "../actions/news";
import {$create} from "../util";

export default class NewsList {

    constructor($newsList,store) {
        this.store = store;
        this.$newList = $newsList;
        this.selectedSource = null;

        this.onStoreUpdate = this.onStoreUpdate.bind(this);
        store.subscribe(this.onStoreUpdate);
    }

    render() {
        this.$newList.innerHTML='';
        this.renderSourceHeader();
        this.renderNewsList();
    }

    renderSourceHeader() {
        const sourceName = this.store.getSelectedSource().sourceName;
        this.$newList.appendChild($create(`<header class="header"><h2 class="header_source-name">${sourceName}</h2></header>`));
    }

    renderNewsList() {
        const articles = this.store.getArticles();
        const articlesFragment = document.createDocumentFragment();

        articles
            .map(article => new Article(article))
            .map(article => $create(article.render()))
            .reduce((fragment,article) =>{
                fragment.appendChild(article);
                return fragment
            },articlesFragment);

        this.$newList.appendChild(articlesFragment);
    }

    onStoreUpdate() {
        const source = this.store.getSelectedSource();
        if(this.selectedSource !== source) {
            this.selectedSource = source;
            this.store.dispatch(fetchNews(source.sourceId));
            this.$newList.innerHTML = '';
            this.renderSourceHeader();
        } else if(source) {
            this.render();
        }
    }
}