import Vue from 'vue'
import Router from 'vue-router'
import Recommend from './views/recommend/Recommend'
import Rank from './views/rank/Rank'
import Search from './views/search/Search'
import Singer from "@/views/singer/Singer";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // },
        {
            path: '/singer',
            name: 'singer',
            component: Singer
        }, {
            path: '/rank',
            name: 'rank',
            component: Rank
        }, {
            path: '/search',
            name: 'search',
            component: Search
        },{
            path: '/',
            name: 'home',
            component: Home
        },
    ]
})
