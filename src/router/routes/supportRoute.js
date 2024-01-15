export default [

    {
        path: '/support',
        // redirect:'Register',
        name: 'Support',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/support/index.vue')
    },

]