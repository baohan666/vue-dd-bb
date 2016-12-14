'use strict';
import Vue from 'vue'
import Tpl from './template.html'
import Value from './value'
import './style.less'

import store from '../../vuex/store'
import {getRequestAuthCode} from '../../vuex/actions'

let Index = Vue.extend({
    template : Tpl,
    store: store,
    vuex: {
        getters: {
            route: (state) => state.route,
            isLoading: (state) => state.app.isLoading,
            direction: (state) => state.app.direction,
            ddConfigStatus: (state) => state.app.ddConfigStatus,
            code: (state) => state.app.code,
        },
        actions: {
            getRequestAuthCode
        }
    },
    ready : function(){
        console.log('APP ready 应该只执行一次');
        if(this.ddConfigStatus === true){
            this.getRequestAuthCode();
        }
    },
    data : ()=>{
        return Value
    },
    methods: {

    },
    computed : {
        showConfigErrorDialog(){
            return this.ddConfigStatus === false;
        },
        showCodeErrorDialog(){
            return this.code === false;
        }
    }
})

export default Index