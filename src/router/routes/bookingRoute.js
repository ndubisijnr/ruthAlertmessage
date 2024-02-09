export default [
    {
        path: '/bookings/',
        // redirect:'create-account',
        name: 'Bookings',
        meta: { layout: 'dashboard', authRequired: true },
        component: () => import('../../views/bookings/Index.vue'),
        children: []
    },
    {
        path: '/bookings/details/:id',
        name: 'Bookings_Details',
        meta: { layout: 'dashboard', authRequired: true },
        component: () => import('../../views/bookings/FlightDetails.vue'),
        children: []
    }
]