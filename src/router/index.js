import Vue from 'vue'
import Router from 'vue-router'

/* --------------------- 引入页面 ----------------- */
const movieShow = () => import(/* webpackChunkName: "movie_show" */ '@/pages/movie_show/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'movie_show'
    },
    {
      path: '/movie_show',
      name: 'movie_show',
      component: movieShow
    }
  ]
})
