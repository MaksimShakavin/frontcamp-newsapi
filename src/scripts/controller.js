export default class Controller {

    //haha
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.initApp = this.initApp.bind(this);
        this._onSelectSource = this._onSelectSource.bind(this);

        this.view.bindSelectSource(this._onSelectSource);
    }

    initApp() {
        this.model.loadSources()
            .then(this.view.setSources)
            .catch(() => {this.view.showSourceLoadError()});
    }

    _onSelectSource(source) {
        this.model.loadNews(source.id)
            .then((sources) => this.view.setNews(sources,source.name))
            .catch(() => this.view.showNewsLoadError());
    }
}