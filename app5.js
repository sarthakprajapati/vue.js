new Vue({
    el : '#vue-app',
    data : {
        age : 20,
        x : 0,
        y : 0
    },
    methods : {
        add : function (inc){
            this.age +=inc;
        },
        subtract : function (dec){
            this.age -=dec;
        },
        updateXY : function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        visit : function(){
            alert("Visit Function is Called");
        }
    }
});