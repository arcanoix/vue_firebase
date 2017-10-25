Vue.component('autor', {
    props: ['nombre','edad'],
    mounted(){
        // las props son accesibles desde this (proxy)
        //console.log(this.nombre)
    },
    template:`<h1>{{ nombre }} ! {{ edad }}</h1>`
})


new Vue({
    el: 'main',
    data: {
        autor: 'Gustavo Herrera',
    }
})