import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class RegisterView extends Marionette.View<Backbone.Model> {
    constructor(options: any = {}) {
        const defaulregistertions = {
            template: '#register-view',
            className: 'container',
            ui: {
                inputName: '#input-name',
                inputAge: '#input-age',
                inputBlood: '#input-blood',
                inputSex: '#input-sex',
                submit: '#submit',
            }
        };
        super(Backbone.$.extend({}, defaulregistertions, options));
    }
    events() {
        return {
            'click @ui.submit': 'onClickSubmit',
        };
    }
    onClickSubmit(e: any) {
        e.preventDefault();
        console.log('create user');
        const data = this.getInput();
        this.collection.create(data, {
            wait: true,
            success: () => Backbone.history.navigate('top', { trigger: true })
        });
    }
    getInput() {
        return {
            name: this.ui.inputName.val(),
            age: this.ui.inputAge.val(),
            blood: this.ui.inputBlood.val(),
            sex: this.ui.inputSex.find(':checked').val(),
        };
    }
}
