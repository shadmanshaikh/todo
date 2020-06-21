var app = new Vue({
    el: '#app',
    data: {
       todos:'',
       lists:[],
    
    },
    methods:{
        addTask: function(){

            this.lists.push({
                id:this.lists.length+1,
                title: this.todos,
                isComplete:false

            });
            this.todos='';
        },
       
    }
    
  })