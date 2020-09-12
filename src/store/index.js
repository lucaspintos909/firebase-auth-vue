import Vue from 'vue'
import Vuex from 'vuex'
var firebase = require("firebase/app");
import router from '../router';

import db from '../main';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:'',
    error:'',
    tareas:[],
    tarea:{ nombre:'', id:''},
    carga : false
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario=payload;
    },
    setError(state,payload){
      state.error=payload;
    },
    setTareas(state, tareas){
      state.tareas = tareas;
    },
    setTarea(state, tarea){
      state.tarea = tarea;
    },
    eliminarTarea(state, id){
      state.tareas= state.tareas.filter( doc => {
        return doc.id != id;
      });
    },
    cargarFirebase(state, payload){
      state.carga=payload;
    }
  },
  actions: {
    crearUsuario({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.pass)
        .then(res=>{
          ///console.log(res);
          commit('setUsuario',{email:res.user.email, uid:res.user.uid});

          db.collection(res.user.email).add({
            nombre:'Tarea de ejemplo'
          })
            .then(()=>{
              
              router.push({name:'inicio'});
            })
            commit('cargarFirebase',false);
        })
        .catch(err=>{
          commit('setError',err.message);
        });
    },
    ingresoUsuario({commit}, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
          commit('setUsuario',{
            email:res.user.email,
            uid:res.user.uid
          });
          commit('cargarFirebase',false);
          router.push({name:'inicio'});
        })
        .catch(err => {
          commit('setError',err.message);
        })
    },
    detectarUsuario({commit},payload){
      if(payload != null){
        commit('setUsuario',{email:payload.email, uid:payload.uid});
      }else{
        commit('setUsuario',null);
      }
      
    },
    cerrarSesion({commit}){
      firebase.auth().signOut();
      commit('setUsuario',null);
      router.push({name:'ingreso'});
    },
    getTareas({commit}){

      commit('cargarFirebase',true);

      const usuario = firebase.auth().currentUser;
      const tareas = [];
      db.collection(usuario.email).get()
        .then(documentos => {
          documentos.forEach(documento => {
            //console.log(doc.id);
            //console.log(doc.data());
            let tarea = documento.data();
            tarea.id=documento.id;
            tareas.push(tarea );
          });
          
            commit('cargarFirebase',false);
          
        });
      
      commit('setTareas',tareas);
    },
    getTarea({commit}, id){
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc( id ).get()
        .then(doc=>{
            //console.log(doc.data())
            
            let tarea = doc.data();
            tarea.id = doc.id;
            commit('setTarea', tarea);
        });
    },
    editarTarea({commit},tarea){
      commit('cargarFirebase',true);
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc(tarea.id).update({
        nombre:tarea.nombre
      })
        .then(()=>{
          commit('cargarFirebase',false);
          router.push({name:'inicio'});
        });
    },
    agregarTarea({commit}, nombre){
      commit('cargarFirebase',true);
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).add({
        nombre: nombre
      })
        .then(doc => {
          
          router.push({name:'inicio'});
          commit('cargarFirebase',false);
        });
    },
    eliminarTarea({commit}, id){
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc(id).delete()
        .then( () => {
          commit('eliminarTarea',id)
        });
    },

  },
  modules: {
  },
  getters:{
    existeUsuario(state){
      if(state.usuario === null || state.usuario === '' || state.usuario === undefined){
        return false;
      }else{
        return true;
      }
    }
  }
})
