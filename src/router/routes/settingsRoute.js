export default [
    {
        path: '/settings',
        // redirect:'create-account',
        name: 'Settings',
        meta: {layout: 'settings',authRequired:true},
        component: () => import('../../views/settings/Index.vue')
    },

]