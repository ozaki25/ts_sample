import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class SearchView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            template: '#search-view',
            className: 'container',
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
    events() {
        return {

        };
    }
}
