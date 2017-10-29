<template>
    <h1>Tareas completadas {{ tareasCompletadas }} tareas completadas</h1>
</template>

<script>
    /*mapGetters es un helper de vuex para filtrar y obtener datos desde el store*/
    import {mapGetters} from 'vuex';

    export default {
        /*computed: {
            tareasCompletadas(){
                return this.$store.state.tareas.filter((tarea) => {
                    return tarea.completado;
                }).length;
            }
        }*/

        computed: mapGetters(['tareasCompletadas'])
    }
</script>