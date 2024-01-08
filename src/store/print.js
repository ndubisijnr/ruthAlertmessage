import { defineStore } from 'pinia'
import {RuthdoAlert} from "ruthly";

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
        commitPrintLoadind(loading, payload){
            this.loading = loading
            this.data = payload
        }
    }
})
