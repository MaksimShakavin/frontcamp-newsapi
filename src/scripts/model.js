const NEWS_API_URI = 'https://newsapi.org/v2';


export default class Model {
    constructor(apiKey) {
        this.apiKey = 'e2d9e5feaf2a47cd823a16fd53c12359';
    }

    loadSources() {
        return window.fetch(`${NEWS_API_URI}/sources?apiKey=${this.apiKey}`)
            .then(response => response.json())
            .then(responseDto => responseDto.sources);
    }

    loadNews(sourceId) {
        return window.fetch(`${NEWS_API_URI}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`)
            .then(response => response.json())
            .then(responseDto => responseDto.articles);
    }


}