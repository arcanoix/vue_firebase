import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';

import Usuario from './components/Usuario.vue';
import UsuarioFoto from './components/UsuarioFoto.vue';
import UsuarioBio from './components/UsuarioBio.vue';
import Contacto from './components/Contacto.vue';

export const routes = [
    {path: '/', component: Home, name:'home'},
    {path: '/prueba', alias:'/otraprueba', redirect: {name: 'home'}, component: Home},
    {path: '/equipo/:id', component: Equipo,  children: [
        {path: '', components: {
            default: Usuario,
            bio: UsuarioBio,
            fotos: UsuarioFoto
        }, name: 'equipo'},
    ]},
    {path:'/contacto', component: Contacto, name:'contacto', props:{newsletter:true}}
];