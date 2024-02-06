export default [
    {
        path: '/dashboard/:token',
        // redirect:'create-account',
        name: 'Dashboard',
        meta: { layout: 'dashboard', authRequired: true },
        component: () => import('../../components/bookings/SearchForFlight.vue'),
        key: route => `${route.name}-${route.params.id || 'wdwdwdwdw'}`,
    },
    // {
    //     path: '/dashboard/create_new_booking/:token',
    //     // redirect:'create-account',
    //     name: 'Create new booking',
    //     meta: {layout: 'dashboard',authRequired:true},
    //     component: () => import('../../components/bookings/SearchForFlight.vue'),
    // },

    {
        path: '/dashboard/select_available_flights/:token',
        // redirect:'create-account',
        name: 'Select available flights',
        meta: { layout: 'dashboard', authRequired: true },
        component: () => import('../../components/bookings/FlightResult.vue'),
    },

    {
        path: '/dashboard/travellers_info/:token',
        // redirect:'create-account',
        name: 'Traveller’s Info',
        meta: { layout: 'dashboard', authRequired: true },
        component: () => import('../../components/bookings/TravellerInfo.vue')
    },

    {
        path: '/dashboard/payment',
        // redirect:'create-account',
        name: 'Flight Payment',
        meta: { layout: 'dashboard', authRequired: true },
        component: () => import('../../components/bookings/FlightPayment.vue')
    }
]