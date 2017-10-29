<template>

    <main>
        <tarea-restante></tarea-restante>
        <ul>
            <li v-for="tarea in tareas">{{tarea.nombre}}</li>
        </ul>
    </main>

</template>

<script>
    import {mapState} from 'vuex';

    import TareaRestante from './components/TareasC.vue';

    export default {
       /* computed:{
            tareas(){
                return this.$store.state.tareas;
            }
        }*/
       components:{TareaRestante},
       computed: mapState(['tareas'])
    }
</script>