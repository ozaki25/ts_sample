import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class SearchTableRowView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            tagName: 'tr',
            template: '#search-table-row-view',
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
}
