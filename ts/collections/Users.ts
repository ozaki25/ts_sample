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
    }
}
