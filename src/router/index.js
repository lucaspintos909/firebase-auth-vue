import Vue from 'vue';
import VueRouter from 'vue-router';
var firebase = require("firebase/app");

Vue.use(VueRouter)

  const routes = [
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "registro" */ '../components/FormularioRegistro.vue')
  },
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../components/ComponenteInicio.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import(/* webpackChunkName: "ingreso" */ '../components/FormularioIngreso.vue')
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: () => import(/* webpackChunkName: "ingreso" */ '../components/FormularioAgregar.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: () => import(/* webpackChunkName: "ingreso" */ '../components/FormularioEditar.vue'),
    meta:{requiresAuth:true}
  }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth);
  const user = firebase.auth().currentUser;

  if(rutaProtegida && user === null){
    next({name:'ingreso'});
  }else{
    next()
  }

});

export default router
