import { defineStore } from 'pinia'
import FlightService from "../service/FlightService";
import {catchErrorHandler} from "../mixins/ErrorHandler";
import storeUtils from "../utils/storeUtils";
import FlightRequest from '../model/FlightRequest';
import router from '../router';
import { RuthdoAlert } from 'ruthly';
import ItineraryService from "@/service/ItineraryService";
import Whoosh from "@/assets/mixkit-air-woosh-1489.wav";

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
        showingPaymentMethod:false,
        flightResults:null,
        wallet:null,
        filteredFlightResult:[],
        confirmingBookingLoading:false,
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
        getSelectedFlight: () => {return localStorage?.selectedFlight ? JSON.parse(localStorage?.selectedFlight):[]},
        getSuccess:state => state.successMsg,
        getBookFlightDetails:state => state.bookedFlightDetails,
        getPaymentLoading:state => state.paymentLoading,
        getInvoicePayload:state => state.invoicePayload,
        getShowingPaymentMethod:state => state.showingPaymentMethod,
        getFlightResults: () => {return localStorage.flightResults ?  JSON.parse(localStorage?.flightResults) : []},
        getWallet: state => state.wallet,
        getBookingStage: () => {return localStorage.bookingStage},
        getProgressNav:() => {return localStorage.progressNav},
        getFilteredFlight:state  => state.filteredFlightResult,
        // .slice().sort((a, b) => a - b).reverse(),
        getConfirmingBookingLoading:state => state.confirmingBookingLoading
    },

    actions: {

        commitFilteredFlightResult(payload) {
            console.log("before ===> ", this.filteredFlightResult)

            this.filteredFlightResult.push(...payload)

            console.log("after ===> ", this.filteredFlightResult)

        },

        deleteFliteredFlightResult(payload) {
            this.filteredFlightResult = payload

        },

        handleGetAirport() {
            return FlightService.airports(storeUtils.fireAway().global?.getTenant_id).then(async response => {
                let responseData = response.data
                localStorage.airports = JSON.stringify(responseData)
            }).catch(e => {
                catchErrorHandler(e)
            })
        },

        commitSelectedFlight(obj) {


        },

        async handleFlightSearch(payload = FlightRequest.flight) {
            const user = JSON.parse(localStorage?.user)
            this.loading = true
            try {
                const response = await FlightService.doSearch(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                this.loading = false
                if (responseData.success) {
                    if (responseData.data.length > 0) {
                        localStorage.flightResults = JSON.stringify(responseData.data)
                        const bookingprogressarray = JSON.parse(localStorage.progressNav)
                        bookingprogressarray.push('Search for Flight')
                        localStorage.progressNav = JSON.stringify(bookingprogressarray)
                        localStorage.bookingStage = 'Flight Result'
                        window.location = `/dashboard/select_available_flights/${user?.access_token?.slice(0, 20)}`
                    } else {
                        RuthdoAlert({title: "Couldn't find any flights at the moment", icon: "error"})
                    }
                }
            } catch (err) {
                this.loading = false
                catchErrorHandler(err)
            }
        },

        async handleMultiCityFlightSearch(payload = FlightRequest.multiCity) {
            const user = JSON.parse(localStorage?.user)
            this.loading = true
            try {
                const response = await FlightService.multiCitySearch(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                this.loading = false
                if (responseData.success) {
                    if (responseData.data.length > 0) {
                        localStorage.flightResults = JSON.stringify(responseData.data)
                        const bookingprogressarray = JSON.parse(localStorage.progressNav)
                        bookingprogressarray.push('Search for Flight')
                        localStorage.progressNav = JSON.stringify(bookingprogressarray)
                        localStorage.bookingStage = 'Flight Result'
                        console.log(responseData.data)
                        window.location = `/dashboard/select_available_flights/${user?.access_token?.slice(0, 20)}`
                    } else {
                        RuthdoAlert({title: "Couldn't find any flights at the moment", icon: "error"})
                    }
                }
            } catch (err) {
                this.loading = false
                catchErrorHandler(err)
            }
        },


        async handleBookFlight(payload, flight_id) {
            const user = JSON.parse(localStorage?.user)
            this.bookingLoading = true
            try {
                const response = await FlightService.book(storeUtils.fireAway().global?.getTenant_id, flight_id, payload)
                let responseData = response.data
                this.bookingLoading = false
                if (responseData.success) {
                    localStorage.bookedFlight = JSON.stringify(responseData.data)
                    const bookingprogressarray = JSON.parse(localStorage.progressNav)
                    bookingprogressarray.push('Traveller’s Info')
                    localStorage.progressNav = JSON.stringify(bookingprogressarray)
                    localStorage.bookingStage = 'Payment Confirmation'
                    window.location = `/dashboard/payment/${this.getUser?.access_token?.slice(0, 20)}`
                }
            } catch (err) {
                this.bookingLoading = false
                catchErrorHandler(err)
            }
        },

        async handleFlightPayment(booking_refrence) {
            const user = JSON.parse(localStorage?.user)
            this.errors = null
            this.loading = true
            try {
                const response = await FlightService.pay(storeUtils.fireAway().global?.getTenant_id, booking_refrence)
                let responseData = response.data
                this.loading = false
                if (responseData.success) {

                    // do nothing
                } else {
                    this.errors = responseData.data

                }
            } catch (err) {
                this.loading = false
                this.errors = err.response.data.data
                catchErrorHandler(err)
            }
        },

        async handleGetWallet() {
            const user = JSON.parse(localStorage?.businessProfile)
            console.log(user);
            try {
                const response = await FlightService.wallet(storeUtils.fireAway().global?.getTenant_id, user.id)
                let responseData = response.data
                if (responseData.success) {
                    this.wallet = responseData.data
                }
            } catch (err) {
                catchErrorHandler(err)
            }
        },


        async handleConfirmBookingPrice(booking_id) {
            this.confirmingBookingLoading = true
            const user = JSON.parse(localStorage?.user)
            try {
                const response = await FlightService.confirmBookingPrice(storeUtils.fireAway().global?.getTenant_id, booking_id)
                let responseData = response.data
                this.confirmingBookingLoading = false
                if (responseData.success) {
                    localStorage.selectedFlight = JSON.stringify(responseData.data)
                    const bookingprogressarray = JSON.parse(localStorage.progressNav)
                    bookingprogressarray.push('Flight Result')
                    localStorage.progressNav = JSON.stringify(bookingprogressarray)
                    localStorage.bookingStage = 'Traveller’s Info'
                    window.location = `/dashboard/travellers_info/${user?.access_token?.slice(0, 20)}`
                }
            } catch (err) {
                this.confirmingBookingLoading = false
                catchErrorHandler(err)
            }
        },

        async handleGetItineraryRequest() {
            try {
                const response = await ItineraryService.getItineraryRequest(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if (responseData.success) {
                    console.log(responseData)
                }
            } catch (err) {
                catchErrorHandler(err)
            }
        },

        async handleIssueTicket(booking_reference) {
            this.loading = true
            try {
                const response = await FlightService.issueTicket(storeUtils.fireAway().global?.getTenant_id, booking_reference)
                let responseData = response.data
                if (responseData.success) {
                    this.loading = false
                    RuthdoAlert({title: 'success', icon: 'success'})
                    console.log(responseData)
                }else{
                    this.loading = false
                    RuthdoAlert({title: responseData.data, icon: 'error'})
                }
            } catch (err) {
                this.loading = false
                catchErrorHandler(err)
            }

        },

        async handleGetFlightDetails(flight_id) {
            console.log(flight_id)
            try {
                const response = await FlightService.details(storeUtils.fireAway().global?.getTenant_id, flight_id)
                let responseData = response.data
                if (responseData.success) {
                    localStorage.bookedFlight = JSON.stringify(responseData.data)
                }
            } catch (err) {
                catchErrorHandler(err)
            }

        },


        async handleSubmitItineraryRequest(payload) {
            this.loading = true
            try {
                const response = await ItineraryService.submitRequest(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                this.loading = false
                if (responseData.success) {
                    RuthdoAlert({title:'success', icon:'error'})
                }
            } catch (err) {
                this.loading = false
                catchErrorHandler(err)
            }

        }
    }
})
