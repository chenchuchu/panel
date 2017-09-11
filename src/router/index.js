import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/pages/root'
import homePage from '@/components/homePage/homePage.vue'
import pageOne from '@/components/pages/pageOne.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'root',
            component: Root
        }, {
            path: '/homePage',
            name: 'homePage',
            components: {
                homePage: homePage
            }
        },
        {
            path: '/pageOne',
            name: 'pageOne',
            component: pageOne
        }
    ]
})