import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import member from '@/components/member'
import category from '@/components/category'
import personal from '@/components/personal'
import signIn from '@/components/signIn'
import trans from '@/components/transaction'

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
        {
            path: '/signIn',
            name: 'signIn',
            component: signIn
        },
        {
            path: '/trans',
            name: 'trans',
            component: trans
        },
    ]
})