<template>
    <section>
        <h1>el Identificador es: {{ $route.params.id }}</h1>
        <h2>Gustavo Herrera</h2>
        <h3>gustavoh.2312@gmail.com</h3>

        <router-link :to="{ name: 'fotos', params: {id: $route.params.id}}">Fotos</router-link>
        <router-link :to="{ name: 'bio', params: {id: $route.params.id }}">Bio</router-link>

                 <router-view></router-view>
    </section>
</template>

<script>
        export default {

        }
</script>