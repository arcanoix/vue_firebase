<template>

     <!-- <h1 :class="[$style.rojo]">Hola CSS Module</h1> -->
  <h1 :class="{[$style.subrayado] : subrayado}">Hola CSS Module</h1>

</template>

<script>
export default {
    data(){
        return {
            subrayado: true
        }
    }
}
</script>

<style module>
  .subrayado {
    text-decoration: underline;
  }

  .rojo {
    color:red;
  }
</style>
