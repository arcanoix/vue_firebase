Vue.component('alerta', {
    props:['tipo','posicion'],
    template:`
                <section class="alerta" :class="[tipo, posicion]">
                    <header class="alerta__header">
                            <slot name="header">
                                hola
                            </slot>
                            
                           
                    </header>
                    <div class="alerta__contenido">
                                <slot>
                                        lorem pusem dolor
                               </slot>
                    </div>
                    <footer class="alerta__footer">
                    <slot name="footer">
                            footer es este
                        </slot>
                    </footer>
                </section>
    `
});

new Vue({
    el: 'main'
});