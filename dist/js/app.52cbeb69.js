(function(e){function r(r){for(var n,a,u=r[0],s=r[1],c=r[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(r);while(d.length)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],n=!0,a=1;a<t.length;a++){var u=t[a];0!==i[u]&&(n=!1)}n&&(o.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},a={app:0},i={app:0},o=[];function u(e){return s.p+"js/"+({ingreso:"ingreso",inicio:"inicio",registro:"registro"}[e]||e)+"."+{ingreso:"23523ad3",inicio:"edda3e01",registro:"af778e37"}[e]+".js"}function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var r=[],t={ingreso:1,inicio:1,registro:1};a[e]?r.push(a[e]):0!==a[e]&&t[e]&&r.push(a[e]=new Promise((function(r,t){for(var n="css/"+({ingreso:"ingreso",inicio:"inicio",registro:"registro"}[e]||e)+"."+{ingreso:"2b692364",inicio:"3ec1cc6f",registro:"b767c832"}[e]+".css",i=s.p+n,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===i))return r()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===n||l===i)return r()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=r,f.onerror=function(r){var n=r&&r.target&&r.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),t(o)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,t){n=i[e]=[r,t]}));r.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;c=function(r){l.onerror=l.onload=null,clearTimeout(f);var t=i[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,t[1](d)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(r)},s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=r,c=c.slice();for(var d=0;d<c.length;d++)r(c[d]);var f=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"034f":function(e,r,t){"use strict";var n=t("85ec"),a=t.n(n);a.a},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar navbar-dark bg-dark mb-5",attrs:{id:"nav"}},[e.existeUsuario?t("router-link",{attrs:{to:{name:"inicio"}}},[e._v("Inicio")]):e._e(),e.existeUsuario?e._e():t("router-link",{attrs:{to:{name:"registro"}}},[e._v("Registro")]),e.existeUsuario?e._e():t("router-link",{attrs:{to:{name:"ingreso"}}},[e._v("Ingreso")]),e.existeUsuario?t("a",{on:{click:e.cerrarSesion}},[e._v("Cerrar sesion")]):e._e()],1),t("router-view")],1)},i=[],o=t("5530"),u=t("2f62"),s={name:"app",methods:Object(o["a"])({},Object(u["b"])(["cerrarSesion"])),computed:Object(o["a"])({},Object(u["c"])(["existeUsuario"]))},c=s,l=(t("034f"),t("2877")),d=Object(l["a"])(c,a,i,!1,null,null,null),f=d.exports,m=(t("45fc"),t("d3b7"),t("8c4f")),p=t("59ca");n["a"].use(m["a"]);var g=[{path:"/registro",name:"registro",component:function(){return t.e("registro").then(t.bind(null,"9180"))}},{path:"/",name:"inicio",component:function(){return t.e("inicio").then(t.bind(null,"c140"))},meta:{requiresAuth:!0}},{path:"/ingreso",name:"ingreso",component:function(){return t.e("ingreso").then(t.bind(null,"10bf"))}},{path:"/agregar",name:"agregar",component:function(){return t.e("ingreso").then(t.bind(null,"49dd"))},meta:{requiresAuth:!0}},{path:"/editar/:id",name:"editar",component:function(){return t.e("ingreso").then(t.bind(null,"93fb"))},meta:{requiresAuth:!0}}],h=new m["a"]({mode:"history",base:"/",routes:g});h.beforeEach((function(e,r,t){var n=e.matched.some((function(e){return e.meta.requiresAuth})),a=p.auth().currentUser;n&&null===a?t({name:"ingreso"}):t()}));var b=h,v=(t("4de4"),t("4160"),t("159b"),t("59ca"));n["a"].use(u["a"]);var y=new u["a"].Store({state:{usuario:"",error:"",tareas:[],tarea:{nombre:"",id:""},carga:!1},mutations:{setUsuario:function(e,r){e.usuario=r},setError:function(e,r){e.error=r},setTareas:function(e,r){e.tareas=r},setTarea:function(e,r){e.tarea=r},eliminarTarea:function(e,r){e.tareas=e.tareas.filter((function(e){return e.id!=r}))},cargarFirebase:function(e,r){e.carga=r}},actions:{crearUsuario:function(e,r){var t=e.commit;v.auth().createUserWithEmailAndPassword(r.email,r.pass).then((function(e){t("setUsuario",{email:e.user.email,uid:e.user.uid}),_.collection(e.user.email).add({nombre:"Tarea de ejemplo"}).then((function(){b.push({name:"inicio"})})),t("cargarFirebase",!1)})).catch((function(e){t("setError",e.message)}))},ingresoUsuario:function(e,r){var t=e.commit;v.auth().signInWithEmailAndPassword(r.email,r.pass).then((function(e){t("setUsuario",{email:e.user.email,uid:e.user.uid}),t("cargarFirebase",!1),b.push({name:"inicio"})})).catch((function(e){t("setError",e.message)}))},detectarUsuario:function(e,r){var t=e.commit;t("setUsuario",null!=r?{email:r.email,uid:r.uid}:null)},cerrarSesion:function(e){var r=e.commit;v.auth().signOut(),r("setUsuario",null),b.push({name:"ingreso"})},getTareas:function(e){var r=e.commit;r("cargarFirebase",!0);var t=v.auth().currentUser,n=[];_.collection(t.email).get().then((function(e){e.forEach((function(e){var r=e.data();r.id=e.id,n.push(r)})),r("cargarFirebase",!1)})),r("setTareas",n)},getTarea:function(e,r){var t=e.commit,n=v.auth().currentUser;_.collection(n.email).doc(r).get().then((function(e){var r=e.data();r.id=e.id,t("setTarea",r)}))},editarTarea:function(e,r){var t=e.commit;t("cargarFirebase",!0);var n=v.auth().currentUser;_.collection(n.email).doc(r.id).update({nombre:r.nombre}).then((function(){t("cargarFirebase",!1),b.push({name:"inicio"})}))},agregarTarea:function(e,r){var t=e.commit;t("cargarFirebase",!0);var n=v.auth().currentUser;_.collection(n.email).add({nombre:r}).then((function(e){b.push({name:"inicio"}),t("cargarFirebase",!1)}))},eliminarTarea:function(e,r){var t=e.commit,n=v.auth().currentUser;_.collection(n.email).doc(r).delete().then((function(){t("eliminarTarea",r)}))}},modules:{},getters:{existeUsuario:function(e){return null!==e.usuario&&""!==e.usuario&&void 0!==e.usuario}}}),U=t("1dce"),w=t.n(U);n["a"].use(w.a);var T=t("59ca");t("ea7b"),t("e71f");var O={apiKey:"AIzaSyA2gVn4BYtz5TsBhUzQkoTDnOOjwwZPTag",authDomain:"crud-firebase-623a9.firebaseapp.com",databaseURL:"https://crud-firebase-623a9.firebaseio.com",projectId:"crud-firebase-623a9",storageBucket:"crud-firebase-623a9.appspot.com",messagingSenderId:"672398570123",appId:"1:672398570123:web:1fe4677d2d2c9238ea9a8e"},j=T.initializeApp(O);j.firestore();var _=r["default"]=j.firestore();n["a"].config.productionTip=!1,T.auth().onAuthStateChanged((function(e){e?y.dispatch("detectarUsuario",{email:e.email,uid:e.uid}):y.dispatch("detectarUsuario",null),new n["a"]({router:b,store:y,render:function(e){return e(f)}}).$mount("#app")}))},"85ec":function(e,r,t){}});
//# sourceMappingURL=app.52cbeb69.js.map