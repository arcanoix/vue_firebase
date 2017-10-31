<template>
    <main>
        <h1>bienvenido</h1>

            <button @click="cambiar">cambiar auth</button>


            <router-link to="/">Home</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <hr>
            <router-view></router-view>
    </main>
</template>

<script>
    import {mapMutations} from 'vuex';

export default {
    methods: mapMutations(['cambiar']),


}
</script>

<style>

</style>
