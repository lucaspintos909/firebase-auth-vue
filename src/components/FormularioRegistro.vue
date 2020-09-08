<template>
    <div class="container mt-5">
        <form @submit.prevent="crearUsuario({email:email,pass:pass1})">

            <div class="form-group" >
                <label>Email address *</label>
                <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp">
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Password *</label>
                    <input type="password" class="form-control" v-model="pass1">
                </div>
                <div class="form-group col-md-6">
                    <label>Confirm Password *</label>
                    <input type="password" class="form-control" v-model="pass2">
                </div>
            </div>
            <p>{{error}}</p>
            <button  class="mt-5 btn btn-primary" type="submit" :disabled="!desactivar">Crear Usuario</button>
        </form>
    </div>
</template>

<script>

import {mapActions,mapState} from 'vuex';

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
        ...mapState(['error']),
        desactivar(){
            return this.pass1 === this.pass2 && this.pass1 != '' && this.pass2 != '';
        }
    }
}
</script>

<style lang="css" scoped>
    label{
        display: flex;
    }
</style>