import {defineStore} from "pinia"
import {catchErrorHandler} from "../mixins/ErrorHandler";
import BookingService from "../service/BookingService";
import storeUtils from "../utils/storeUtils";
import BookingsRequest from "../model/BookingsRequest";

export const useBookingStore = defineStore('bookingStore', {
    state:()=>({
        loadingBooking:false,
        loadingFlightSearch:false,
        loading:false,
        bookingLoading:false,
        loadingPayment:false,
        bookingSummary:null,
        bookings:null,
        bookingStage:'Flight Search',
        progressNav:[],
        agentBookings:null,
        agentSummarys:null


    }),

    getters:{
        getLoadingBooking:state => state.loadingBooking,
        getBookingLoading:state => state.bookingLoading,
        getLoadingFlightSearch:state => state.loadingFlightSearch,
        getLoading:state => state.loading,
        getLoadingPayment:state => state.loadingPayment,
        getBookingSummary:state => state.bookingSummary,
        getBookings:state => state.bookings,
        getAgentBookings:state => state.agentBookings,
        getAgentSummary: state => state.agentSummarys
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

        async getAllBooking(page){
            this.loadingBooking = true
            try{
                const response = await BookingService.getBookings(storeUtils.fireAway().global?.getTenant_id,page)
                let responseData = response.data
                if(responseData.success){
                    this.loadingBooking = false
                    this.bookings = responseData.data
                }

            }catch(err){
                this.loadingBooking = false
            }
        },

        async getAllAgentBooking(payload,page){
            this.bookingLoading = true
            try{
                const response = await BookingService.getAgentsBookings(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.loadingBooking = false
                    this.bookingLoading = false
                    this.agentBookings = responseData.data
                    this.bookings = responseData.data
                }

            }catch(err){
                this.bookingLoading = false
                
            }
        },

        async getAllAgentSummary(payload = BookingsRequest.bookingSummary, user_id){
            this.loadingBooking = true
            try{
                const response = await BookingService.getAgentBookingsSummary(storeUtils.fireAway().global?.getTenant_id,user_id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.loadingBooking = false
                    this.agentSummarys = responseData.data
                }

            }catch(err){
                this.loadingBooking = false
            }
        }


    }

})