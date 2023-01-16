import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "menuEntradas" */ './views/HelloWorldView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import(/* webpackChunkName: "menuEntradas" */ './views/ProductListView.vue')
    },
    {
      path: '/products/new',
      name: 'AddNewProduct',
      component: () => import(/* webpackChunkName: "menuEntradas" */ './views/AddNewProductView.vue')
    },
  ]
})

export default router;