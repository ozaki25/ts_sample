import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class SearchEmptyView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            tagName: 'ul',
            className: 'list-group',
            template: '#search-empty-view',
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
}
