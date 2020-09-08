<template>
    <div class="container mt-5">
        <form @submit.prevent="ingresoUsuario({email:email,pass:pass})">

            <div class="form-group" >
                <label>Email address *</label>
                <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp">
            </div>

            <div class="form-group">
                <label>Password *</label>
                <input type="password" class="form-control" v-model="pass">
            </div>
            <p>{{error}}</p>
            <button  class="mt-5 btn btn-primary" type="submit" :disabled="!desactivar">Acceder</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
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
        ...mapState(['error']),
        desactivar(){
            return this.pass != '' && this.email != ''
        }
    }
}
</script>

<style lang="css" scoped>
    label{
        display: flex;
    }
</style>