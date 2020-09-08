<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark mb-5" id="nav">
      <router-link :to="{name:'inicio'}" v-if="existeUsuario">Inicio</router-link>
      <router-link :to="{name:'registro'}" v-if="!existeUsuario">Registro</router-link>
      <router-link :to="{name:'ingreso'}" v-if="!existeUsuario">Ingreso</router-link>
      <a @click="cerrarSesion" v-if="existeUsuario">Cerrar sesion</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name:'app',
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color:white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
