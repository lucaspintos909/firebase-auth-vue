<template>
    
    <div>
        <div class="mt-5">
            <h3>Bienvenido {{usuario.email}}!</h3>
        </div>
        <div class="container div-padre mt-5">
            <!-- <form v-if="usuario != null" class="">
                <fieldset disabled>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Id </div>
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" v-model="usuario.uid">
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Email</div>
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername2"  v-model="usuario.email">
                    </div>
                </fieldset>
            </form> -->
            <ul class="list-group mt-5">
                <router-link :to="{name:'agregar'}">
                    <button class="btn btn-success btn-block boton-agregar">Agregar Tarea</button>
                </router-link>
                <li class="list-group-item" v-for="item of tareas" :key="item.id"> 
                    {{item.nombre}}
                    <div class="float-right">
                        <!--<span class="badge badge-primary badge-pill">{{item.id}}</span>-->
                        <router-link :to="{name:'editar', params:{id : item.id}}" >
                            <button class="btn btn-warning btn-sm ml-2 mr-2">Editar</button>
                        </router-link>
                        
                        <button class="btn btn-danger btn-sm" @click="eliminarTarea(item.id)">Eliminar</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name:'ComponenteInicio',
    computed:{
        ...mapState(['usuario','tareas'])
    },
    methods:{
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    created(){
        this.getTareas()
    },
}
</script>

<style lang="css">
    .div-pagdre{
        display: flex!important;
        justify-content: center!important;
        
    }
    .boton-agregar{
        margin-bottom: 2rem;
    }
</style>