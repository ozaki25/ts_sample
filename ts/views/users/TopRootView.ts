import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import Users from '../../collections/Users';
import HeaderView from '../HeaderView';
import TopView from './TopView';

export default class TopRootView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaultOptions = {
            template: '#root-view'
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
    regions() {
        return {
            headerRegion: '#header-region',
            mainRegion  : '#main-region',
        };
    }
    onRender() {
        this.renderHeader();
        this.renderMain();
    }
    renderHeader() {
        this.getRegion('headerRegion').show(new HeaderView());
    }
    renderMain() {
        const users = new Users();
        users.fetch().done(() => {
            this.getRegion('mainRegion').show(new TopView({ collection: users }));
        });
    }
}
