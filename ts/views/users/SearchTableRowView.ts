import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class SearchTableRowView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            tagName: 'tr',
            template: '#search-table-row-view',
            ui: {
                'toEditLink': '.to-edit-link',
            }
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
    triggers() {
        return {
            'click @ui.toEditLink': 'click:edit',
        };
    }
}
