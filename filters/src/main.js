import Vue from 'vue'
import App from './App.vue'

Vue.filter('mayuscula', function(valor) {
    return valor.toUpperCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
