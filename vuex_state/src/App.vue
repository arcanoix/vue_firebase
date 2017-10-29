<template>
        <h1>Hola me llamo {{ nombre }} {{ apellido }} y soy {{ profesion }}</h1>
</template>

<script>
    //mapState es un helpers de Vuex
    import {mapState} from 'vuex';

export default {
    /*computed:{
            nombre(){
                return this.$store.state.nombre;
            }
    }*/
    /*computed: mapState({
        nombre: (state) => state.nombre,
        apellido: (state) => state.apellido,
        profesion: (state) => state.profesion,

    })*/
    /*las tres computed funcionan, se puede usar cualquiera de los casos, pero usando el helper seria lo mas ideal*/
    computed: mapState(['nombre', 'apellido','profesion'])
}
</script>

<style>

</style>
