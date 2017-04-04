import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import Users from '../../collections/Users';
import HeaderView from '../HeaderView';
import RegisterView from './RegisterView';

export default class RegisterRootView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaulregistertions = {
            template: '#root-view'
        };
        super(Backbone.$.extend({}, defaulregistertions, options));
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
        this.getRegion('mainRegion').show(new RegisterView({ collection: new Users() }));
    }
}
