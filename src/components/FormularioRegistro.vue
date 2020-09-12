<template>
    <div class="container mt-5">

        <div class="mb-5">
            <h1>Registro</h1>
        </div>

        <form @submit.prevent="crearUsuario({email:$v.email.$model,pass:$v.pass2.$model})">

            <div class="form-group" >
                <label>Email address *</label>
                <input type="$v.email.$model" class="form-control" v-model="$v.email.$model" aria-describedby="emailHelp">
            </div>
            <small class="text-danger" v-if="!$v.email.required">Campo requerido</small>
            <small class="text-danger" v-if="!$v.email.email">Email invalido</small>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Password *</label>
                    <input type="password" class="form-control" v-model="$v.pass1.$model">
                    <small class="text-danger" v-if="!$v.pass1.required">Campo requerido</small>
                </div>
                <div class="form-group col-md-6">
                    <label>Confirm Password *</label>
                    <input type="password" class="form-control" v-model="$v.pass2.$model">
                    <small class="text-danger" v-if="!$v.pass2.sameAs">Las contrasegnas no son iguales</small>
                </div>
            </div>
            <p v-if="error" class="text-danger">El email ingresado ya esta asociado a un usuario!</p>
            <button  class="mt-5 btn btn-primary" type="submit" :disabled="$v.$invalid">Crear Usuario</button>
        </form>
    </div>
</template>

<script>

import {mapActions,mapState} from 'vuex';
import {required, minLength, email, sameAs} from 'vuelidate/lib/validators';

export default {
    name:'FormularioRegistro',
    data(){
        return{
            email:'',
            pass1:'',
            pass2:''
        }
    },
    methods:{
        ...mapActions(['crearUsuario'])
    },
    computed:{
        ...mapState(['error', 'carga'])
    },
    validations:{
        email:{
            required,
            email
        },
        pass1:{
            required,
            minLength:minLength(6)
        },
        pass2:{
            required,
            sameAs:sameAs('pass1')
        }
    }
}
</script>

<style lang="css" scoped>
    label{
        display: flex;
    }
</style>