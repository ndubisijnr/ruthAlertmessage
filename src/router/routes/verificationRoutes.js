export default [
    {
        path: '/verification/business',
        // redirect:'create-account',
        name: 'BusinessInfo',
        meta: {layout: 'verification',authRequired:false},
        component: () => import('../../views/verification/BusinessInfo.vue')
    },
    {
        path: '/verification/document-upload',
        // redirect:'create-account',
        name: 'UploadDocs',
        meta: {layout: 'verification',authRequired:false},
        component: () => import('../../views/verification/UploadDocs.vue')
    },
    
]