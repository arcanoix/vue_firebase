new Vue({
    el:'main',
    data:{
        tareas:[
            {titulo: 'hacer la compra', completado: false},
            {titulo: 'aprender vue', completado: false},
            {titulo: 'aprender firebase', completado: false},
            {titulo: 'dominar ES6', completado: false},
            {titulo: 'salir a correr', completado: false},
            {titulo: 'escuchar musica', completado: false}
        ]
    },
    methods:{
        completarTarea(tarea){
            tarea.completado =! tarea.completado;
        }
    },
    computed:{
        completada(){
            return this.tareas.filter((tarea) => tarea.completado);
        }
    }
})