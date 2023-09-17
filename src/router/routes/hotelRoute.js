export default [
    {
        path: '/hotels/:token',
        // redirect:'create-account',
        name: 'Hotels',
        meta: {layout: 'dashboard',authRequired:true},
        component: () => import('../../views/hotels/Index.vue')
    }
]