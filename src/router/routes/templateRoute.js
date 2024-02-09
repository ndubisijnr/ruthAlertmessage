
export default [
    {
        path: '/bookings/details/print/:data',
        // redirect:'create-account',
        name: 'PrintItenaryModal',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/modals/PrintItenaryModal.vue'),
        children:[]
    },
    {
        path: '/templates_2',
        // redirect:'create-account',
        name: 'Template2',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/flightItenaryTemplate/Template2.vue'),
        children:[]
    },
    {
        path: '/templates_3',
        // redirect:'create-account',
        name: 'Template3',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/flightItenaryTemplate/Template3.vue'),
        children:[]
    },
]