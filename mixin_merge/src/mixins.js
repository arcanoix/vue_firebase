// global mixin
import Vue from 'vue';

Vue.mixin({
    created(){
        //console.info('hola desde mixin global');
        this.saludar(this.$options.nombre);
    },
    methods: {
        saludar(nombre){
            alert(`hola desde ${nombre}`);
        }
    }
});



// local mixin
export const mixin = {
    created(){
        console.log("created desde el mixin");
        this.saludar();
    },
    data(){
        return {
            aprender: [
                {nombre: 'Ionic 3'},
                {nombre: 'Node'},
                {nombre: 'MongoDB'},
                {nombre: 'Angular'},
                {nombre: 'Laravel'},

            ],
            nuevaTecnologia: null,
        }
    },
    methods:{
        agregarTecnologia() {
            this.aprender.unshift({
                nombre: this.nuevaTecnologia,
            });
            this.nuevaTecnologia = null;
        },
    }
};