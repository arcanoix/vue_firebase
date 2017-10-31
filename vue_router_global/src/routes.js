import Contacto from './components/Contacto.vue'
import Home from './components/Home.vue'

import {store} from './store';

export const routes = [
    { beforeEnter: ((to, from, next) => {
        console.log('acceso a ruta home');
        next(store.state.auth);
    }),
        path:'/', component: Home, name: 'home'},
    {path:'/contacto', component: Contacto, name: 'contacto'}
]