export default [
    {
        path: '/settings/:token',
        // redirect:'create-account',
        name: 'Settings',
        meta: {layout: 'settings',authRequired:true},
        component: () => import('../../views/settings/Index.vue')
    },

]