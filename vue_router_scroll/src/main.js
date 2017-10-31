import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//import Bio from './components/Bio.vue'
import Info from './components/Info.vue'

Vue.use(VueRouter);

const Bio = resolve => {
    require.ensure(['./components/Bio.vue'], () => {
        resolve(require('./components/Bio.vue'))
    })
}



const routes = [
    {path:'/', component: Info},
    {path:'/bio', component: Bio}
]


const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        const position ={};
        if(to.hash){
            position.selector = to.hash;
        }else{
            position.x = 100;
            position.y =100;
        }

        return position;
    }
})

new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
