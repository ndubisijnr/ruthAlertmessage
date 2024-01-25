class ItineraryRequest {

    static submitRequest = {
        booking_id:null,
        type: null,   // issuance, void, refund
        description:null ,
    }

    static support = {
        support_comment: null
    }

}

export default ItineraryRequest