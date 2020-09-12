<template>
    <div class="container">
        <h1 class="mb-5">Agregar</h1>
        <form class="" @submit.prevent="agregarTarea($v.nombre.$model)">
            
            <div class="input-group div-input centrar" >

                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                    
                </div>
                <input class="form-control" type="text" v-model="$v.nombre.$model" >
            </div>
            <small class="text-danger" v-if="!$v.nombre.required">Campo requerido</small>
            <small class="text-danger" v-if="!$v.nombre.minLength">Minimo 4 caracteres</small>
            <div class="centrar mt-4">
                <button class="btn btn-primary mb-2" type="submit" :disabled="$v.$invalid || carga">Agregar</button>
            </div>
        </form> 
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';
import {required, minLength} from 'vuelidate/lib/validators';

export default {

    name:'FormularioAgregar',
    data(){
        return{
            nombre:''
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    },
    validations:{
        nombre:{
            required,
            minLength:minLength(4)
        }
    },
    computed:{
        ...mapState(["carga"])
    }
}
</script>