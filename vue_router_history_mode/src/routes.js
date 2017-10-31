import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import NoEncontrado from './components/NoEnctontrado.vue';

export const routes = [
    {path:'/', component: Home},
    {path: '/contacto', component: Contacto},
    {path:'*', component: NoEncontrado}
];