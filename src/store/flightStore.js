import { defineStore } from 'pinia'
import FlightService from "../service/FlightService";
import {catchErrorHandler} from "../mixins/ErrorHandler";
import storeUtils from "../utils/storeUtils";

export const useFlightStore = defineStore('flightStore', {
    state: () => ({
        airports: false,
        loading: false,
        flightLoading:false,
        bookingLoading:false,
        bookFlightId:null,
        errors:null,
        successMsg:null,
        airlines:null,
        flightSearchPayload:[],
        bookedFlightDetails:[],
        inbound:null,
        outbound:null,
        selectedFlight:null,
        bookingFlightErrors:null,
        checkout:false,
        traveller:[],
        showFlightDetailsModal:false,
        paymentLoading:false,
        txf_ref:null,
        query:null,
        invoicePayload:null,
        showingPaymentMethod:false
    }),

    getters: {
        getTravellers: state => state.traveller,
        getQuery: state => state.query,
        getCheckout:state => state.checkout,
        getLoading: state => state.loading,
        getInBound: state => state.inbound,
        getOutBound: state => state.outbound,
        getFlightLoading: state => state.flightLoading,
        getBookingLoading: state => state.bookingLoading,
        getErrors:state => state.errors,
        getBookingFlightErrors:state => state.bookingFlightErrors,
        getAirport: state => state.airports,
        getAirlines: state => state.airlines,
        getFlights: state => state.flightSearchPayload,
        getSelectedFlight: state => state.selectedFlight,
        getSuccess:state => state.successMsg,
        getBookFlightDetails:state => state.bookedFlightDetails,
        getPaymentLoading:state => state.paymentLoading,
        getInvoicePayload:state => state.invoicePayload,
        getShowingPaymentMethod:state => state.showingPaymentMethod,
    },

    actions: {

        handleGetAirport(){
            return FlightService.airports(storeUtils.fireAway().global?.getTenant_id).then(async response => {
                let responseData = response.data
                localStorage.airports = JSON.stringify(responseData)
            }).catch(e => {
                catchErrorHandler(e)
            })
        },

    }
})
