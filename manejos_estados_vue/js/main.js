const compartido = {
    usuario: {
        nombre:'gustavo herrera'
    }
}

new Vue({
    el:'#app',
    data:compartido
});

new Vue({
    el:'#app2',
    data:compartido
});