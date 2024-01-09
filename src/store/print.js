import { defineStore } from 'pinia'

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
        commitPrintLoading(loading, payload){
            console.log(payload)
            this.loading = loading
            this.data = payload
        }
    }
})
