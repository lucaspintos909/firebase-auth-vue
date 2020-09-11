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

            <div id="div-loader" v-if="carga">
                <ul id="loader">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <ul class="list-group mt-5" v-if="!carga">
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

import { mapState, mapActions } from 'vuex';
export default {
    name:'ComponenteInicio',
    computed:{
        ...mapState(['usuario','tareas','carga'])
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


    ul#loader {
    list-style-type: none;
    display: flex;
    padding: 0;
    }

    ul#loader li {
    margin: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #42b983;
    
    animation: dotanimation 0.4s ease infinite alternate both;
    }

    ul#loader li:nth-child(2) {
    animation-delay: 0.2s;
    }

    ul#loader li:nth-child(3) {
    animation-delay: 0.4s;
    }

    ul#loader li:nth-child(4) {
    animation-delay: 0.6s;
    }

    @keyframes dotanimation {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-1rem);
    }
    }
    #div-loader{
        display: flex;
        text-align: center;
        justify-content: center;
    }
</style>