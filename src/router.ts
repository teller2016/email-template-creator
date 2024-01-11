import { createRouter, createWebHistory } from 'vue-router';

const pages = import.meta.glob('./views/*.vue');

const routes = Object.keys(pages).map((path) => {
  const matchResult = path.match(/\.\/views(.*)\.vue$/);
  const name = matchResult ? matchResult[1].toLowerCase() : '';
  return {
    path: name === '/home' ? '/' : name,
    component: pages[path], // () => import('./pages/*.vue')
  };
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
