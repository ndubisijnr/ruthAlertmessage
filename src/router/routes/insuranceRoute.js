export default [
    {
        path: '/insurance/:token',
        // redirect:'create-account',
        name: 'Insurance',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../views/insurance/Index.vue')
    }
]