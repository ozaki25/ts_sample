import * as Backbone from 'backbone';

export default class User extends Backbone.Model {
    constructor(attr: any = {}, options: any = {}) {
        const defaultOptions = {
            validation: {
                name: {
                    required: true,
                    msg: '必須項目です。'
                },
                age: [{
                    required: true,
                    msg: '必須項目です。'
                }, {
                    range: [0, 100],
                    msg: '0〜100を入力して下さい。'
                }]
            },
        };
        super(attr, Backbone.$.extend({}, defaultOptions, options));
    }
}
