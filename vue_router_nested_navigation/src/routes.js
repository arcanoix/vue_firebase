import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';

import Usuario from './components/Usuario.vue';
import UsuarioFoto from './components/UsuarioFoto.vue';
import UsuarioBio from './components/UsuarioBio.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/equipo/:id', component: Equipo,  children: [
        {path: '', component: Usuario, name: 'equipo', children: [
            {path: 'fotos', component: UsuarioFoto, name: 'fotos'},
            {path: 'bio', component: UsuarioBio, name: 'bio'}
        ]},
    ]},
];