const vm = new Vue({
    el: 'main',
    data:{
        nuevaTarea: null,
        tareas: [
            'Aprender Vue.js',
            'Aprender ES6',
            'Publicar algo todos los dias'
        ]
    },
    methods:{
        agregarTarea(){
            // this hace la referencia a la instancia Vue
            this.tareas.unshift(this.nuevaTarea); 
            this.nuevaTarea = '';
        }
    }
})

//vanilla javascript
/*
function agregarTarea() {
    const input = document.querySelector('input[type=text]');
    vm.tareas.unshift(input.value);
    input.value = '';
}*/