<template>
    <div>
        <h2>Tareas por hacer:</h2>
        <ul>
            <li v-for="tarea in tareasPendientes">
                <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>

        <h2>Las tareas finalizadas:</h2>
        <li v-for="tarea in tareasFinalizadas">
            <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
        </li>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                tareas:[
                    {
                        nombre:'Aprender Vuejs',
                        completado: false
                    },{
                        nombre:'Aprender Vuex',
                        completado: false
                    },{
                        nombre:'Aprender ESCMA6',
                        completado: false
                    },{
                        nombre:'Aprender practicar',
                        completado: false
                    },

                ],
                finalizadas: []
            }
        },
        methods:{
            actualizarTarea(tarea){
                tarea.completado = !tarea.completado;
            }
        },
        computed:{
            tareasPendientes(){
                return this.tareas.filter((tarea) => !tarea.completado);
            },
            tareasFinalizadas(){
                return this.tareas.filter((tarea) => tarea.completado);
            }
        }
    }
</script>

<style scoped>
    li a {
        color:red;
        text-decoration: none;
    }

</style>