export default [
    {
        path: '/bookings',
        // redirect:'create-account',
        name: 'Bookings',
        meta: {layout: 'dashboard',authRequired:false},
        component: () => import('../../views/bookings/Index.vue')
    }
]