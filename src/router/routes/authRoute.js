export default [

    {
        path: '/register/:user_type',
        // redirect:'Register',
        name: 'Register',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/authView/Register.vue')
    },

    {
        path: '/register/verify',
        // redirect:'create-account',
        name: 'OtpCard',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/authView/OtpCard.vue')
    },
    {
        path: '/register/success/:token',
        // redirect:'create-account',
        name: 'SuccessRegistrationCard',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/authView/SuccessRegistrationCard.vue')
    },

    {
        path: '/login',
        name: 'Logon',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/authView/Logon.vue')
    },

    {
        path: '/',
        name: 'AccountType',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/authView/AccountType.vue')
    },

]