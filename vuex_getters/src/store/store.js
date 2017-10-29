import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        tareas:[
            {nombre:'Aprender Vue Routing', completado:false},
            {nombre:'Aprender ES6', completado:true},
            {nombre:'Aprender Vuex', completado:false},

        ]
    },
    getters:{
        tareasCompletadas: (state) => {
            return state.tareas.filter((tarea) => tarea.completado).length;
        }
    }
})