import * as Backbone from 'backbone';

export default class User extends Backbone.Model {
    static properties = {
        name: '名前',
        age: '年齢',
    };
    constructor(attr: any = {}, options: any = {}) {
        const defaultOptions = {};
        super(attr, Backbone.$.extend({}, defaultOptions, options));
    }
}
