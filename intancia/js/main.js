const vm = new Vue({
    el: 'main',
    data:{
        mensaje: 'Instancia vue 1'
    },
    methods: {
        alReves(){
            this.mensaje = this.mensaje.split('').reverse().join('');
            vm2.mensaje = vm2.mensaje.split('').reverse().join('');
        }
    },
    computed: {
            mensajeMayuscula() {
                return this.mensaje.toUpperCase();
            }
    }
});

const vm2 = new Vue({
    el:'#app',
    data: {
        mensaje:'instanciando vue 2'
    }
});