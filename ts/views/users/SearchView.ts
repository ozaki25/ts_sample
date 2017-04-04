import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import User from '../../models/User';
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
            'submit:query': 'search',
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
    search(query: any) {
        console.log(query);
        this.collection.fetch().done(() => {
            const result = this.collection.filter(query);
            this.collection.reset(result);
        });
    }
}
