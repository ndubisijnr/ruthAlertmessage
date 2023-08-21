export default [
    {
        path: '/dashboard/:token',
        // redirect:'create-account',
        name: 'Dashboard',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../views/dashboard/Index.vue')
    }
]