<template>

  <section>
    <router-link to="/" active-class="activo" exect>home</router-link>
    <router-link to="/contacto" active-class="activo">Contacto</router-link>
    <router-link to="/usuario/77" active-class="activo">Usuario</router-link>
    <router-link to="/usuario/99" active-class="activo">Usuario</router-link>
    <hr>

    <router-view></router-view>
  </section>
</template>

<script>
    export default {

    }
</script>

<style>

  .activo {
    color:red;
  }

</style>
