<template>
    <section>
        <h2>contacto</h2>

        <button @click="volverHome()">Volver a home</button>
    </section>
</template>

<script>
    export default {
        created() {
            setTimeout(() => this.$router.push('/'), 2000);
        },
        methods: {
            volverHome(){
                this.$router.push('/', () => console.log('ruta cambiada')); //home
            }
        }
    }
</script>