import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import SearchTableRowView from './SearchTableRowView';

export default class SearchBodyView extends Marionette.CollectionView<Backbone.Model, SearchTableRowView> {
    constructor(options: any = {}) {
        const defaultOptions = {
            tagName: 'tbody',
            childView: SearchTableRowView,
        };
        super(Backbone.$.extend({}, defaultOptions, options));
    }
}
