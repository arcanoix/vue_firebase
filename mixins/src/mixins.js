export const mixin = {
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
        }
    }
};