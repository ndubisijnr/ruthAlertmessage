export default [

    {
        path: '/support',
        // redirect:'Register',
        name: 'Support',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/support/index.vue')
    },
    {
        path: '/support/details',
        // redirect:'Register',
        name: 'SupportDetails',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/support/SupportDetails.vue')
    },

]