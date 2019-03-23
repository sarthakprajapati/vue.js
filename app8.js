new Vue({
    el : '#vue-app',
    data : {
        a : 0,
        b : 0,
        age:20
    },
    methods : {},
        computed : {
            addA : function(){
                console.log("Function addA is called");
                return this.a + this.age;
            },
            addB : function(){
                console.log("Function addB is called");
                return this.b + this.age;
            }
        
    }
});