// import Vue from 'vue'
// import Router from 'vue-router'
import Vue, { AsyncComponent } from "vue";
import Router, { RouteConfig, Route, NavigationGuard } from "vue-router";
//import HelloWorld from "@/components/HelloWorld.vue";
const main: AsyncComponent = (): any => import('@/views/main.vue');

Vue.use(Router)
const routes: RouteConfig[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
    component: main,
    meta: {
      keepAlive: true,
      title: '测试'
    }
  }
];
const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})
export default router;

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld,
//       meta: {
//         keepAlive: true,
//         title: '测试'
//       }
//     }
//   ]
// })
