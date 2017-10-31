import Vue from 'vue';
import Vuex from 'vuex';
import productos from './modules/productos';
Vue.use(Vuex);


export const store = new Vuex.Store({
state: {
        carro:[],
    },
    getters: {
        totalCompra: (state) => state.carro.reduce((total, producto) => total + producto.precio)
    },
    mutations: {

        comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
        eliminarProducto: (state, indice) => state.carro.splice(indice, 1),
    },
    modules: {
        productos
    }

});