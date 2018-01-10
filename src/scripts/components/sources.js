import { selectSource } from "../actions/sources";
import {$create, $delegate} from "../util";

export default class Sources {

    constructor($sourceList, store){
        this.$sourceList = $sourceList;
        this.store = store;
        this.sources = [];

        this.onStoreUpdate = this.onStoreUpdate.bind(this);
        this.store.subscribe(this.onStoreUpdate);
        this._bindSelectSource();
    }

    render() {
        const sources = this.store.getSources();
        const sourcesFragment = document.createDocumentFragment();

        sources
            .map(source => $create(`<li data-id=${source.id} class="source_item">${source.name}</li>`))
            .reduce((fragment,source) => {
                fragment.appendChild(source);
                return fragment;
            },sourcesFragment);

        this.$sourceList.appendChild(sourcesFragment);
    }

    onSelectSource(source) {
        this.store.dispatch(selectSource(source));
    }

    onStoreUpdate() {
        const sources = this.store.getSources();
        if(this.sources !== sources){
            this.render();
        }
    }

    _bindSelectSource() {
        $delegate(this.$sourceList, 'li.source_item', 'click', (event) => {
            const target = event.target;
            const source = {
                id: target.getAttribute('data-id'),
                name: target.innerHTML,
            };
            this.onSelectSource(source);
        })
    }
}