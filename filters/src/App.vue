<template>
  <div id="app">
      <h1>{{ msg | invertir }}</h1>
    <h2>{{ saludo | mayuscula | invertir}}</h2>
  </div>
</template>

<script>
export default {
    name:'app',
    data(){
        return {
            msg:'bienvenido',
            saludo: 'hola desde el curso de vue and firebase'
        }
    },
    filters: {
        invertir(valor){
            return valor.split('').reverse().join('');
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
