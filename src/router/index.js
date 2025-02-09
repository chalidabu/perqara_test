import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Movie from '@/pages/Movies.vue';
import MovieDetail from '@/pages/MovieDetail.vue';
import Search from '@/pages/Search.vue';


const routes = [
  { 
    path: '/', 
    component: Home,
    props: true
  },
  { path: '/movies', component: Movie },
  { path: '/movies/:id', component: MovieDetail, props: true },
  { path: '/search', component: Search},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
});

export default router;