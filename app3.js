new Vue({
    el : '#vue-app',
    data : {
        name : 'Sarthak Prajapati',
        branch : 'Information Technology',
        website : 'http://www.google.com/',
        websiteTag : '<a href ="http://www.google.com/">v-html</a>'
    },
    methods : {
        greeting : function(){
            return "Hello "+ this.name;
        }
    }
});