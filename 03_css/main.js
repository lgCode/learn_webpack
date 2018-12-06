//程序的入口
//引入css
// import CssObj from './main.css';
import './main.css';

import Vue from './vue.js';
import App from './App.js';

new Vue({
    el:"#app",
    components:{
        app:App
    },
    template:'<app/>'
})