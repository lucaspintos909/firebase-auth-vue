<template>
    <div class="container mt-5">
        <div class="mb-5">
            <h1>Ingreso</h1>
        </div>
        <form @submit.prevent="ingresoUsuario({email:$v.email.$model,pass:$v.pass.$model})">

            <div class="form-group" >
                <label>Email address *</label>
                <input type="email" class="form-control" v-model="$v.email.$model" aria-describedby="emailHelp">
                <small class="text-danger" v-if="!$v.email.required">Campo requerido</small>
                <small class="text-danger" v-if="!$v.email.email">Email invalido</small>
            </div>

            

            <div class="form-group">
                <label>Password *</label>
                <input type="password" class="form-control" v-model="$v.pass.$model">
                <small class="text-danger" v-if="!$v.pass.required">Campo requerido</small>
            </div>

            <p v-if="error" class="text-danger">Contrasegna o email no validos</p>
            <button  class="mt-5 btn btn-primary" type="submit" :disabled="$v.$invalid">Acceder</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import {required, minLength, email} from 'vuelidate/lib/validators';
export default {
    name:'FormularioIngreso',
    data(){
        return{
            email:'',
            pass:''
        }
    },
    methods:{
        ...mapActions(['ingresoUsuario']),
        
    },
    computed:{
        ...mapState(['error','carga'])
    },
    validations:{
        email:{
            required, 
            email
        },
        pass:{
            required,
            minLength:minLength(6)
        }
        
    }
}
</script>

<style lang="css" scoped>
    label{
        display: flex;
    }
</style>