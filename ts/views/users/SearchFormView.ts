import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import User from '../../models/User';

export default class SearchFormView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            tagName: 'form',
            className: 'form-inline',
            template: '#search-form-view',
            ui: {
                'name': '#search-name',
                'age': '#search-age',
                'search': '#search',
            }
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
    events() {
        return {
            'click @ui.search': 'onClickSearch'
        };
    }
    onClickSearch(e: any) {
        e.preventDefault();
        this.triggerMethod('search', this, this.getInput());
    }
    getInput() {
        const query = {};
        const properties = _.keys(User.properties);
        _.each(properties, (prop) => {
            const input = this.ui[prop].val().trim();
            if(input) query[prop] = input;
        });
        return query;
    }
}
