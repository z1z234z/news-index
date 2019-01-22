import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/',name: 'login',component: Login},
        {path: '/index',name: 'index',component: Index}
    ]
})