import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import SearchTableView from './SearchTableView';

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
        this.getRegion('searchTableRegion').show(new SearchTableView({ collection: this.collection }));
    }
}
