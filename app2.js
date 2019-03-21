new Vue({
    el : '#vue-app',
    data : {
        name : 'Sarthak Prajapati',
        branch : 'Information Technology'
    },
    methods : {
        greeting : function(){
            return "Hello "+ this.name;
        }
    }
});