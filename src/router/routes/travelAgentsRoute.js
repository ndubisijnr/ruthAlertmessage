export default [
    {
        path: '/agents/:token',
        // redirect:'create-account',
        name: 'Travel Agents',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../views/travelAgents/Index.vue')
    },
    {
        path: '/agents/business-information/:token',
        // redirect:'create-account',
        name: 'Travel_Agents_Business_Information',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/travelAgents/BusinessInformation.vue')
    },
    {
        path: '/agents/document-verification/:token',
        // redirect:'create-account',
        name: 'Travel_Agents_Document_Verification',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/travelAgents/DocumentVerification.vue')
    },
    {
        path: '/agents/wallet/:token',
        // redirect:'create-account',
        name: 'Manage_Wallet',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/travelAgents/ManageWallet.vue')
    },
    {
        path: '/agents/flights/:token',
        // redirect:'create-account',
        name: 'Flight_Bookings',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/travelAgents/FlightBookings.vue')
    },
    {
        path: '/agents/acount-officers/:token',
        // redirect:'create-account',
        name: 'Account_Officers',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/travelAgents/AccountOfficers.vue')
    },
    {
        path: '/agents/manage-teams/:token',
        // redirect:'create-account',
        name: 'Manage_Teams',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/travelAgents/ManageTeams.vue')
    }
]