import { defineStore } from 'pinia'
import router from "@/router";

export const usePrintStore = defineStore('PrintStore', {
    state: () => ({
        loading: false,
        data:null,
    }),

    getters: {
        getData:state => state.data,
        getLoading: state => state.loading,
    },

    actions: {
        async commitPrintLoading(loading, payload){
            console.log(payload)
            this.loading = loading
            this.data = payload
            await router.push({name:"PrintItenaryModal", params:{data:payload.reference}})
            // window.open(this.router.currentRoute.value.fullPath + '/print/'+payload, '_blank');

        }
    }
})
