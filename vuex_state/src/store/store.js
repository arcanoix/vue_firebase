import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        nombre:'Gustavo',
        apellido:'Herrera',
        profesion:'Developer',
        ciudad:'Valencia'
    }
});