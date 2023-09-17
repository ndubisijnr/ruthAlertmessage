export default [
    {
        path: '/bookings/:token',
        // redirect:'create-account',
        name: 'Bookings',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../views/bookings/Index.vue'),
        children:[]
    },
    {
        path: '/bookings/create_new_booking/:token',
        // redirect:'create-account',
        name: 'Create new booking',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/bookings/SearchForFlight.vue'),
    },

    {
        path: '/bookings/select_available_flights/:token',
        // redirect:'create-account',
        name: 'Select available flights',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/bookings/FlightResult.vue'),
    },

    {
        path: '/bookings/traveller\n’s_info/:token',
        // redirect:'create-account',
        name: 'Traveller’s Info',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/bookings/TravellerInfo.vue')
    },

    {
        path: '/bookings/payment/:token',
        // redirect:'create-account',
        name: 'Payment',
        meta: {layout: 'dashboard',authRequired:true},
        // component: () => import('../../components/bookings/TravellerInfo.vue')
    }


]