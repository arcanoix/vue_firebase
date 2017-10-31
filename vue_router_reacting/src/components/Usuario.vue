<template>
    <section>
        <h2>{{ id }}</h2>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                id: this.$route.params.id,
            }
        },
        watch:{
            '$route'(to) {
                this.id = to.params.id;
            }
        }
    }
</script>