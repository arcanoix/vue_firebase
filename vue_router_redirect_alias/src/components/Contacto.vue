<template>
    <section>
        <h2>Donde encontrarme</h2>
        <p>C/. Lo que sea, valencia</p>

     <!--   <h5>{{ $route.params.newsletter }}</h5>-->

        <h5>{{ newsletter }}</h5>


        <!--<template v-if="$route.params.newsletter === 'true'">-->
        <template v-if="newsletter">
            <form action="">
                <h2>Newsletter</h2>
                <label for="correoe">Correo-E</label>
                <input type="email" placeholder="Tu correo-e" id="correoe">
            </form>
        </template>

    </section>
</template>

<script>

    export default {
        props:['newsletter'],
        data(){
            return {

            }
        }
    }
</script>