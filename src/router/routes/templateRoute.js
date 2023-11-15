export default [
    {
        path: '/templates_1/:token',
        // redirect:'create-account',
        name: 'Template1',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/flightItenaryTemplate/Template1.vue'),
        children:[]
    },
    {
        path: '/templates_2/:token',
        // redirect:'create-account',
        name: 'Template2',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/flightItenaryTemplate/Template2.vue'),
        children:[]
    },
    {
        path: '/templates_3/:token',
        // redirect:'create-account',
        name: 'Template3',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../components/flightItenaryTemplate/Template3.vue'),
        children:[]
    },
]