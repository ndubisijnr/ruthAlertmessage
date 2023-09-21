export default [
    {
        path: '/bookings/:token',
        // redirect:'create-account',
        name: 'Bookings',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../views/bookings/Index.vue'),
        children:[]
    },
]