export default class View {

    constructor(template) {
        this.template = template;
        this.$sourcesList = document.querySelector('.sources-list');
        this.$newsContainer = document.querySelector('.news-container');
        this.$headerSource = document.querySelector('.header_source-name');

        this.setSources = this.setSources.bind(this);
        this.setNews = this.setNews.bind(this);
        this.showNewsLoadError = this.showNewsLoadError.bind(this);
        this.showSourceLoadError = this.showSourceLoadError.bind(this);
    }

    setSources(sources) {
        this.$sourcesList.innerHTML = this.template.sources(sources);
    }

    setNews(articles,sourceName) {
        this.$newsContainer.innerHTML = this.template.news(articles);
        this.$headerSource.innerText = sourceName;
    }

    showNewsLoadError() {
        this.$newsContainer.innerHTML = this.template.error('Error loading news');
    }

    showSourceLoadError() {
        this.$sourcesList.innerHTML = this.template.error('Error loading sources');
    }

    bindSelectSource(onSelectSource) {
        this._$delegate(this.$sourcesList,'li.source_item','click',(event) => {
            const target = event.target;
            const source = {
                id: target.dataset.id,
                name: target.innerHTML,
            };
            onSelectSource(source);
        })
    }

    _$delegate(root,selector,type,callback) {
        root.addEventListener(type,(event) => {
            if(event.target.matches(selector)){
                callback(event);
            }
        })
    }
}