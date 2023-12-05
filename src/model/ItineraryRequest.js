class ItineraryRequest {

    static submitRequest = {
        booking_id:null,
        type: null,   // issuance, void, refund
        request:null , // get-fund-quote, request-for-fund, request-for-exchange, get-exchange-qoute
        description:null ,
        attachment: null,
    }

}

export default ItineraryRequest