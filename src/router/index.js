import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import member from '@/components/member'
import category from '@/components/category'
import signIn from '@/components/signIn'
import trans from '@/components/transaction'
import chooseShop from '@/components/chooseShop'
import shopDetail from '@/components/shopDetail'
import evaluate from '@/components/evaluate'
import favorite from '@/components/favorite'
import orderDetail from '@/components/orderDetail'
import recommend from '@/components/recommend'
import branches from '@/components/branches'
import order from '@/components/order'
import changePwd from '@/components/changePwd'
import addConsignee from '@/components/addConsignee'
import changePhone from '@/components/changePhone'
import changeAddress from '@/components/changeAddress'
import productDetail from '@/components/productDetail'
import login from '@/components/login'
import weChat from '@/components/weChat'
import indentMange from '@/components/indentMange'
import shopMange from '@/components/shopMange'


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
            path: '/category',
            name: 'category',
            component: category
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
        {
            path: '/chooseShop',
            name: 'chooseShop',
            component: chooseShop
        },
        {
            path: '/shopDetail',
            name: 'shopDetail',
            component: shopDetail
        },
        {
            path: '/evaluate',
            name: 'evaluate',
            component: evaluate
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: favorite
        },
        {
            path: '/orderDetail',
            name: 'orderDetail',
            component: orderDetail
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: recommend
        },
        {
            path: '/branches',
            name: 'branches',
            component: branches
        },
        {
            path: '/order',
            name: 'order',
            component: order
        },
        {
            path: '/changePwd',
            name: 'changePwd',
            component: changePwd
        },
        {
            path: '/addConsignee',
            name: 'addConsignee',
            component: addConsignee
        },
        {
            path: '/changePhone',
            name: 'changePhone',
            component: changePhone
        },
        {
            path: '/changeAddress',
            name: 'changeAddress',
            component: changeAddress
        },
        {
            path: '/productDetail',
            name: 'productDetail',
            component: productDetail
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/weChat',
            name: 'weChat',
            component: weChat
        },
        {
            path: '/indentMange',
            name: 'indentMange',
            component: indentMange
        },
        {
            path: '/shopMange',
            name: 'shopMange',
            component: shopMange
        },
    ]
})