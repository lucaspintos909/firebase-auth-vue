<template>
    <div class="container">
        <h1> Editar </h1>

        <div class="mt-5">
            <form class=" " @submit.prevent="editarTarea(tarea)">
            
                <div class="centrar div-input input-group">

                    <div class="input-group-prepend">

                        <div class="input-group-text">Nombre</div>
                        
                    </div>
                    <input class="form-control" type="text" v-model="tarea.nombre" >
                </div>

                <div class="centrar mt-4">
                    <button class="btn btn-primary mb-2 centrar" type="submit">Editar</button>
                </div>
                
            </form>
        </div>

    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';

export default {
    name:'Editar',
    data(){
        return {
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(['getTarea','editarTarea'])
    },
    created(){
        this.getTarea(this.id)
    },
    computed:{
        ...mapState(['tarea'])
    }

}
</script>
<style lang="css">
    .centrar{
        display: flex!important;
        justify-content: center!important;
        margin:0 auto;
    }
    .div-input{
        max-width: 30rem;
    }
</style>