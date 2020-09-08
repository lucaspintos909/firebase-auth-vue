<template>
    <div>
        <h1>Lista de tareas</h1>
        <ComponenteInicio></ComponenteInicio>

        
    </div>
</template>

<script>
import ComponenteInicio from '../components/ComponenteInicio.vue';
import {mapState} from 'vuex';
export default {
    name:'inicio',
    components:{
        ComponenteInicio
    }
}
</script>