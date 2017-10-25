Vue.component('candidato', {
    //props: ['nombre','correo','imagen'],
    props:{
        nombre: {
            type: [String, Array],
            required: true
        },
        correo: {
            type: String,
            default: 'Gustavoh.2312@gmail.com'
        },
        imagen: String,
        location: {
            type: Object,
            default(){
                return {
                    ciudad:'Valencia'
                }
            }
        }
    },
    template:`#candidato-template`,
})

new Vue({
    el:'main',
    mounted(){
        this.obtenerCandidatos();
    },
    data: {
        candidatos:[]
    },
    methods: {
        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=10').then((respuesta) => {
                this.candidatos = respuesta.data.results;
            })
        }
    }
})