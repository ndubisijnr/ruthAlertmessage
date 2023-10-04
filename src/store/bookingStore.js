import {defineStore} from "pinia"
import {catchErrorHandler} from "../mixins/ErrorHandler";
import BookingService from "../service/BookingService";
import storeUtils from "../utils/storeUtils";

export const useBookingStore = defineStore('bookingStore', {
    state:()=>({
        loadingBooking:false,
        loadingFlightSearch:false,
        loading:false,
        loadingPayment:false,
        bookingSummary:null,
        bookings:null,
        bookingStage:'Flight Search',
        progressNav:[],


    }),

    getters:{
        getLoadingBooking:state => state.loadingBooking,
        getLoadingFlightSearch:state => state.loadingFlightSearch,
        getLoading:state => state.loading,
        getLoadingPayment:state => state.loadingPayment,
        getBookingSummary:state => state.bookingSummary,
        getBookings:state => state.bookings,


    },

    actions:{
    
        resetProgressNav(){
           localStorage.progressNav = []
        },

        async getSummary(){
            this.loadingBooking = true
            const userid = JSON.parse(localStorage?.businessProfile)
            try{
            const response = await BookingService.getBookingsSummary(storeUtils.fireAway().global?.getTenant_id,userid.id)
            let responseData = response.data
            if(responseData.success){
                this.loadingBooking = false

                this.bookingSummary = responseData.data
            }

        }catch(err){
                this.loadingBooking = false
            }
        },

        async getAllBooking(){
            this.loadingBooking = true
            const userid = JSON.parse(localStorage?.businessProfile)
            try{
                const response = await BookingService.getBookings(storeUtils.fireAway().global?.getTenant_id,userid.id)
                let responseData = response.data
                if(responseData.success){
                    this.loadingBooking = false
                    this.bookings = responseData.data
                }

            }catch(err){
                this.loadingBooking = false
            }
        }

    }

})