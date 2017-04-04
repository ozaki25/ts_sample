import 'jquery';
import 'bootstrap';
import 'bootstrap-datepicker';
import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import TopRootView from './views/users/TopRootView';
import SearchRootView from './views/users/SearchRootView';
import RegisterRootView from './views/users/RegisterRootView';

const app = new Marionette.Application({
    region: '#root-region',
    onStart: () => {
        new AppRouter();
        Backbone.history.start();
    }
});

class AppRouter extends Marionette.AppRouter {
    constructor() {
        const options: any = {
            appRoutes: {
                ''        : 'top',
                'top'     : 'top',
                'search'  : 'search',
                'register': 'register',
                'edit'    : 'edit',
            },
            controller: {
                top: () => {
                    app.getRegion().show(new TopRootView());
                },
                search: () => {
                    app.getRegion().show(new SearchRootView());
                },
                register: () => {
                    app.getRegion().show(new RegisterRootView());
                },
                edit: () => {
                    alert('Edit');
                    // app.getRegion().show(new EditRootView());
                },
            }
        };
        super(options);
    }
}

app.start();
