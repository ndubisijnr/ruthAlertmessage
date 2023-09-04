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
        name: 'RegisterOtpCard',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/authView/RegisterOtpCard.vue')
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

    {
        path: '/forgot/reset/password/verify-email',
        name: 'VerifyEmail',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/authView/forgotPassword/VerifyEmail.vue')
    },

    {
        path: '/forgot/reset/password/otp',
        name: 'OtpCard',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/authView/forgotPassword/OtpCard.vue')
    },

    {
        path: '/forgot/reset/password/complete-reset',
        name: 'PasswordAndSuccess',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/authView/forgotPassword/PasswordAndSuccess.vue')
    },


    {
        path: '/boarding/user/change-password',
        name: 'OnBoarding',
        meta: {layout: 'auth',authRequired:false},
        component: () => import('../../views/authView/onboarding/PasswordAndSuccessOnboarding.vue')
    },

]