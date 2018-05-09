/*
A dialog which allows a user to import a story from a file. This returns a
promise resolving to the stories that were imported, if any.
*/

const Vue = require('vue');
const importHTML = require('../data/import');
const load = require('../file/load');
const locale = require('../locale');
const { thenable } = require('../vue/mixins/thenable');

module.exports = Vue.extend({
	template: require('./share.html'),

	data: () => ({
		url: ''

	}),

	computed: {

	},
	
	ready() {
		if (this.immediateImport) {
			this.import(this.immediateImport);
		}
	},

	methods: {
        changeUrl(url){
			this.url = url;
			console.log(url)
		},
		close() {
			if (this.$refs.modal) {
				this.$refs.modal.close();
			}
		}
	},

	components: {
		'modal-dialog': require('../ui/modal-dialog')
	},

	mixins: [thenable],

	vuex: {

	}
});
