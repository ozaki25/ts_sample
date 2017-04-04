import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import SearchTableBodyView from './SearchTableBodyView';

export default class SearchTableView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            tagName: 'table',
            className: 'table table-condensed',
            template: '#search-table-view',
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
    regions() {
        return {
            searchTableBodyRegion: {
                el: 'tbody',
                replaceElement: true,
            }
        };
    }
    onRender() {
        this.renderSearchTableBody();
    }
    renderSearchTableBody() {
        this.getRegion('searchTableBodyRegion').show(new SearchTableBodyView({ collection: this.collection }));
    }
}
