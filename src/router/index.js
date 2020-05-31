import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue';
import Movie from '../views/movies/index.vue';
import MovieDetail from '../views/movies/_id/index.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movies',
    name: 'movie',
    component: Movie
  },
  {
    path: '/movies/:id',
    name: 'movie-detail',
    component: MovieDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
