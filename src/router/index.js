import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import member from '@/components/member'
import category from '@/components/category'
import personal from '@/components/personal'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/member',
        name: 'member',
        component: member
    },
    {
        path: '/personal',
        name: 'personal',
        component: personal
    },
    ]
})