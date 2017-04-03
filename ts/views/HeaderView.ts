import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class HeaderView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            template: '#header-view'
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
}

