<template>
    <div>
        <div class="pb-5">
            <h1>Registro de usuarios</h1>
        </div>
        <FormularioRegistro></FormularioRegistro>
    </div>
</template>

<script>
import FormularioRegistro from '../components/FormularioRegistro.vue'
export default {
    name:'registro',
    components:{
        FormularioRegistro
    }
}
</script>