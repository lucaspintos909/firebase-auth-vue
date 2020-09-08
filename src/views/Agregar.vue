<template>
    <div class="container">
        <h1 class="mb-5">Agregar</h1>
        <form class="" @submit.prevent="agregarTarea(nombre)">
            
            <div class="input-group div-input centrar" >

                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                    
                </div>
                <input class="form-control" type="text" v-model="nombre" >
            </div>

            <div class="centrar mt-4">
                <button class="btn btn-primary mb-2" type="submit">Agregar</button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:'agregar',
    data(){
        return{
            nombre:''
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    }
}
</script>