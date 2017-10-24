const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        mensaje: 'Hola Mundo :) !',
        tareas:[
            {
            titulo: 'Aprender Vuejs',
            prioridad: true,
            antiguedad: 23
        },
        {
            titulo: 'aprender ES6',
            prioridad: false,
            antiguedad: 135
        }]
    },
    methods:{
        agregarTarea(){
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                proridad: false,
                antiguedad : 0
            });
            this.nuevaTarea = null;
        }
    },
    computed: {
        mensajeAlReves(){
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad(){
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
})