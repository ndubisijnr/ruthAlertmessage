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
    }
]