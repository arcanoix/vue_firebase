Vue.component('contrasena', {
    props:['contrasena'],
    template:`
        <input :value="contrasena" @input="comprobarcontrasena($event.target.value)" ref="pass">
    `,
    methods:{
        comprobarcontrasena(contrasena)
        {
            //console.log(contrasena);
            //
            if(this.noValida.includes(contrasena)) {
                this.$refs.pass.value = contrasena = '';
            }
            this.$emit('input', contrasena);
        }
    },
    data(){
        return {
            noValida:['abc','admin','root','123456'],
        }
    }
});


new Vue({
    el:'main',
    data:{
        contrasena: '123456'
    }
});