new Vue({
    el: '#vue-app',
    data: {
        name: "naveed",
        x:0,
        y:0,
        available:false
    },

    methods: {
        greet: function () {
            return name;
        },
        updateXY:function(event){           
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        alertoption: function(){
            alert("i am alert");
        }
    }

});