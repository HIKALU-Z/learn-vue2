/**
 * Created by hikalu on 17/6/20.
 */



Vue.component('task',{
    template:'<li><slot></slot></li>'
});

new Vue({
    el:'#root'
});
