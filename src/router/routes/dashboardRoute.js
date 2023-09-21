export default [
    {
        path: '/dashboard/:token',
        // redirect:'create-account',
        name: 'Dashboard',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/bookings/SearchForFlight.vue')
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
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/bookings/FlightResult.vue'),
    },

    {
        path: '/dashboard/traveller\n’s_info/:token',
        // redirect:'create-account',
        name: 'Traveller’s Info',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/bookings/TravellerInfo.vue')
    },

    {
        path: '/dashboard/payment/:token',
        // redirect:'create-account',
        name: 'Payment',
        meta: {layout: 'dashboard',authRequired:true},
        // component: () => import('../../components/bookings/TravellerInfo.vue')
    }
]