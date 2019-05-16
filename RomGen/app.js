//var u = require('utils');

Vue.component('greeting', {
    template: '<p>Am reusable {{name}}<button v-on:click="changeName" >Change name</button></p> ',
    data: function () {
        return {
            name: 'praveen',
            output:''
        }
    },
    methods: {
        changeName: function () {
            this.name = 'Mario';
            
            
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! ' ,
        output:''
    },
//    template:'<p>{{output}}</p>',
    methods: {
        submit:function(){
            this.output = this.$refs.input.value;
        }
    }
});

//var app2 = new Vue({
//  el: '#app-2',
//  data: {
//    message: 'You loaded this page on ' + new Date().toLocaleString(),
//    message2: '2222 ' + new Date().toLocaleString()
//  }
//});
//
//var app3 = new Vue({
//  el: '#app-3',
//  data: {
//    seen: true
//  }
//});
//
//var app4 = new Vue({
//  el: '#app-4',
//  data: {
//    todos: [
//      { text: 'Learn JavaScript' },
//      { text: 'Learn Vue' },
//      { text: 'Build something awesome' }
//    ]
//  }
//});
//
//function revMsg(message){
//    return message.split('').reverse().join('');
//}
//
//
//
//var app5 = new Vue({
//  el: '#app-5',
//  data: {
//    message: 'Hello Vue.js!'
//  },
//  methods: {
//    reverseMessage: function () {
//        
//        var u = new utils();
//        
////        this.message = revMsg(this.message);
//        this.message = u.revMsg(this.message);
//      
//    }
//  }
//});
//
//var app6 = new Vue({
//  el: '#app-6',
//  data: {
//    messager: 'Hello Vue!'
//  }
//})
//
//Vue.component('todo-item', {
//  props: ['todo'],
//  template: '<li>{{ todo.text }}</li>'
//})
//
//var app7 = new Vue({
//  el: '#app-7',
//  data: {
//    groceryList: [
//      { id: 0, text: 'Vegetables' },
//      { id: 1, text: 'Cheese' },
//      { id: 2, text: 'Whatever else humans are supposed to eat' }
//    ]
//  }
//})
