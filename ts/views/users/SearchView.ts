import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
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
            searchTableRegion: {
                el: '#search-table-region',
                replaceElement: true,
            }
        };
    }
    onRender() {
        this.renderSearchTable();
    }
    renderSearchTable() {
        const view = this.collection.length ? new SearchTableView({ collection: this.collection }) : new SearchEmptyView();
        this.getRegion('searchTableRegion').show(view);
    }
}
