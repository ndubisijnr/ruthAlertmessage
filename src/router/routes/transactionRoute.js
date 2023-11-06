export default [
    {
        path: '/transaction/:token',
        // redirect:'create-account',
        name: 'Transaction',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../views/transaction/Index.vue')
    },

    {
        path: '/add/funds/:token',
        // redirect:'create-account',
        name: 'AddFunds',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../views/transaction/AddFunds.vue')
    }
]