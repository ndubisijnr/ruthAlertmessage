export default [
    {
        path: '/transaction/:token',
        // redirect:'create-account',
        name: 'Transaction',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../views/transaction/Index.vue')
    }
]