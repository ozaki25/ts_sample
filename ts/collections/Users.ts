import * as _ from 'underscore';
import * as Backbone from 'backbone';
import 'backbone.localstorage';
import User from '../models/User';

export default class Users extends Backbone.Collection<User> {
    localStorage: Store;
    constructor(models: User[] = [], options = {}) {
        const defaultOptions = {
            model: User,
        };
        super(models, Backbone.$.extend({}, defaultOptions, options));
        this.localStorage = new Backbone.LocalStorage('ts_sample_users');
        // this.setDefault();
    }
    setDefault() {
        _.each([{ name: 'Test1', age: 25 }, { name: 'Test2', age: 30 }, { name: 'Test3', age: 35 }], (data) => this.create(data));
    }
}
