const NEWS_API_URI = 'https://newsapi.org/v2';


export default class Model {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    loadSources() {
        return fetch(`${NEWS_API_URI}/sources?apiKey=${this.apiKey}`)
            .then(response => response.json())
            .then(({sources}) => sources);
    }

    loadNews(sourceId) {
        return fetch(`${NEWS_API_URI}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`)
            .then(response => response.json())
            .then(({articles}) => articles);
    }


}