import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', {
    state: () => ({
        isSkiping:false
    }),

    getters: {
        getIsSkiping: state => state.isSkiping
    },

    actions: {
        commitSkip(value) {
            this.isSkiping = value
        },
    }
})
