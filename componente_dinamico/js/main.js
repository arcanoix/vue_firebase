Vue.component('lista-tareas', {
    template:`
        <div>
            <h1><slot></slot></h1>
            <ul>
                <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>    
            </ul>
            <hr>
        </div>
    `,
    data(){
        return {
            tareas:[
                'Finalizar seccion Componentes',
                'Iniciar workflow con Vue Cli y Webpack',
                'Terminar de estudiar la documentacion de Vuex',
                'Seguir jugando con Vue Router y grabar el primer video'
            ]
        }
    }
});

Vue.component('tarea', {
    props:['tarea'],
    template: `<li>{{tarea}}</li>`
})

Vue.component('contacto', {
        template:`
            <div><a href="mailto:gustavoh.2312@gmail.com">GustavoH.2312@gmail.com</a></div>
        `
});

Vue.component('bio', {
        template: `
            <div><p>Lorem opsum dolor sit amet</p></div>
        `
});



new Vue({
    el:'main',
    data:{
        seleccionado:'lista-tareas'
    }

});