import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import SearchFormView from './SearchFormView';
import SearchTableView from './SearchTableView';
import SearchEmptyView from './SearchEmptyView';

export default class SearchView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            template: '#search-view',
            className: 'container',
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
    regions() {
        return {
            searchFormRegion: '#search-form-region',
            searchTableRegion: {
                el: '#search-table-region',
                replaceElement: true,
            }
        };
    }
    childViewEvents() {
        return {
            'search': 'onSearch',
        };
    }
    onRender() {
        this.renderSearchForm();
        this.renderSearchTable();
    }
    renderSearchForm() {
        this.getRegion('searchFormRegion').show(new SearchFormView());
    }
    renderSearchTable() {
        const view = this.collection.length ? new SearchTableView({ collection: this.collection }) : new SearchEmptyView();
        this.getRegion('searchTableRegion').show(view);
    }
    onSearch(view: any, query: any) {
        console.log(query);
    }
}
