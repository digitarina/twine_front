const Vue = require('vue');
const store = require('../../data/store');
const ImportDialogUrl = require('../../dialogs/story-import/importUrl');

module.exports = new Vue({
	methods: {
        checkStorage(){
            let newStoryId = localStorage.getItem('new-story')
            console.log(newStoryId)
            if(newStoryId == null){
                return
            }
            new ImportDialogUrl({store}).import('http://localhost:8000/story/' + newStoryId)
            this.delete()
        }
    },
    created: function(){
        this.checkStorage()
    }
});



