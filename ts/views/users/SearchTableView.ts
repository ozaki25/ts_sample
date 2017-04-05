import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import SearchTableBodyView from './SearchTableBodyView';

export default class SearchTableView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            tagName: 'table',
            className: 'table',
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
    childViewEvents() {
        return {
            'click:edit': 'onClickEdit'
        };
    }
    onRender() {
        this.renderSearchTableBody();
    }
    renderSearchTableBody() {
        this.getRegion('searchTableBodyRegion').show(new SearchTableBodyView({ collection: this.collection }));
    }
    onClickEdit(view: any, e: any) {
        e.preventDefault();
        console.log(`to edit, id: ${view.model.id}`);
        Backbone.history.navigate('edit', { trigger: true });
    }
}
