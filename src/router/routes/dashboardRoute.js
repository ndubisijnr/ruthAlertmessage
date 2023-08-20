export default [
    {
        path: '/dashboard',
        // redirect:'create-account',
        name: 'Dashboard',
        meta: {layout: 'dashboard',authRequired:false},
        component: () => import('../../views/dashboard/Index.vue')
    }
]