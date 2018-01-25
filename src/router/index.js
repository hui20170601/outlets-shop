import Vue from 'vue'
import Router from 'vue-router'
import orderDetail from '@/components/orderDetail'
import order from '@/components/order'
import login from '@/components/login'
import weChat from '@/components/weChat'
import indentMange from '@/components/indentMange'
import shopMange from '@/components/shopMange'
import assess from '@/components/assess'
import changeInfo from '@/components/changeInfo'
import photo from '@/components/photo'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/orderDetail',
            name: 'orderDetail',
            component: orderDetail
        },
        {
            path: '/order',
            name: 'order',
            component: order
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
        {
            path: '/assess',
            name: 'assess',
            component: assess
        },
        {
            path: '/changeInfo',
            name: 'changeInfo',
            component: changeInfo
        },
        {
            path: '/photo',
            name: 'photo',
            component: photo
        },
    ]
})