//程序的入口
import Vue from './vue.js';
import App from './App.js';

new Vue({
    el:'#app',
    components:{
        app:App
    },
    template:`<app/>`
});