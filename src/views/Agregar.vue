<template>
    <div>

        <FormularioAgregar></FormularioAgregar>

    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import FormularioAgregar from '../components/FormularioAgregar.vue'
export default {
    name:'agregar',
    components:{
        FormularioAgregar
    }
}
</script>