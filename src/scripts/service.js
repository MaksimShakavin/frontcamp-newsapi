class Service {
    constructor() {
        this.apiKey = 'ccf9b82a27804d9e92d8b6d9a5ef5342';
        this.uri = 'https://newsapi.org/v2';
    }

    load(path, params=[]) {
        params.push({key:'apiKey',value: this.apiKey});
        const url = this.buildUrl(path,params);
        return fetch(url)
            .then(response => response.json());
    }

    buildUrl(path, params){
        const paramsStr = params.map(({key,value}) => `${key}=${value}`).join('&');
        return `${this.uri}${path}?${paramsStr}`;
    }
}

export default new Service()