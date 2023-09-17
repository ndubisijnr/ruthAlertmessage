export default [
    {
        path: '/visa/:token',
        // redirect:'create-account',
        name: 'Visa',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../views/visa/Index.vue')
    }
]