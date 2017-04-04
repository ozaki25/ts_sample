import 'jquery';
import 'bootstrap';
import 'bootstrap-datepicker';
import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import TopRootView from './views/users/TopRootView';
import SearchRootView from './views/users/SearchRootView';

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
            },
            controller: {
                top: () => {
                    app.getRegion().show(new TopRootView());
                },
                search: () => {
                    app.getRegion().show(new SearchRootView());
                },
                register: () => {
                    // app.getRegion().show(new TopRootView());
                },
            }
        };
        super(options);
    }
}

app.start();
