import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class TopRootView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            template: '#top-view',
            className: 'container',
            ui: {
                toRegisterLink: '#to-register-link',
                toSearchLink: '#to-search-link',
            }
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
    events() {
        return {
            'click @ui.toRegisterLink': 'onClickToRegister',
            'click @ui.toSearchLink': 'onClickToSearch',
        };
    }
    onClickToRegister(e: any) {
        e.preventDefault();
        console.log('to register page');
    }
    onClickToSearch(e: any) {
        e.preventDefault();
        console.log('to search page');
    }
}
