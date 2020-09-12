<template>
    <div class="container mt-5">
        <form @submit.prevent="ingresoUsuario({email:$v.email.$model,pass:$v.pass.$model})">

            <div class="form-group" >
                <label>Email address *</label>
                <input type="email" class="form-control" v-model="$v.email.$model" aria-describedby="emailHelp">
            </div>

            <small class="text-danger" v-if="!$v.email.required">Campo requerido</small>
            <small class="text-danger" v-if="!$v.email.email">Email invalido</small>

            <div class="form-group">
                <label>Password *</label>
                <input type="password" class="form-control" v-model="$v.pass.$model">
            </div>

            <small class="text-danger" v-if="!$v.pass.required">Campo requerido</small>

            <p>{{error}}</p>
            <button  class="mt-5 btn btn-primary" type="submit" :disabled="$v.$invalid || carga">Acceder</button>
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