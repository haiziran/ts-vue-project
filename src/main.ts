// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import VueLazyload from "vue-lazyload";
import "./assets/mock";
Vue.use(VueLazyload, { preLoad: 1 });
Vue.config.productionTip = false

/* eslint-disable no-new */

export default new Vue({
  el: "#app",
  store, //挂载到vue实例上
  router,
  render: h => h(App)
});
router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
