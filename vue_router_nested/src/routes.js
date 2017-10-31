import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import EquipoJuan from './components/EquipoJuan.vue'


export const routes = [
    {path: '/', component: Home},
    {path: '/Equipo', component: Equipo, children:[
        {path:'juan', component: EquipoJuan}
    ]},
];