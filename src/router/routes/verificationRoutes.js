export default [
    {
        path: '/verification/business/:token',
        // redirect:'create-account',
        name: 'BusinessInfo',
        meta: {layout: 'verification',authRequired:true},
        component: () => import('../../views/verification/BusinessInfo.vue')
    },
    {
        path: '/verification/document-upload/:token',
        // redirect:'create-account',
        name: 'UploadDocs',
        meta: {layout: 'verification',authRequired:true},
        component: () => import('../../views/verification/UploadDocs.vue')
    },
    {
        path: '/verification/success/:token',
        // redirect:'create-account',
        name: 'SuccessRegistrationCard',
        meta: {layout: 'verification',authRequired:true},
        component: () => import('../../views/verification/SuccessVerificationCard.vue')
    },
    
]