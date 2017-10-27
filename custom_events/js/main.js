Vue.component('alerta', {
    props:['tipo','posicion'],
    template:`
                <section class="alerta" :class="[tipo, posicion]">
                    <header class="alerta__header">
                           
                            <a href="#" @click="ocultar">Cerrar</a>
                                <slot name="header">hola</slot>
                           
                    </header>
                    <div class="alerta__contenido">
                                <slot>
                                        lorem pusem dolor
                               </slot>
                    </div>
                    <footer class="alerta__footer">
                    <slot name="footer">
                            footer es es
                        </slot>
                    </footer>
                </section>`,
                methods:{
                    ocultar(){
                        this.$emit('ocultarw');
                        //console.log("probando");
                    }
                }
});

new Vue({
    el: 'main',
    data:{
        mostrarExito: false,
        mostrarError: false,
        mostrarAdvertencia: false
    }
    
});