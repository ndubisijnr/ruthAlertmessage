class TravelAgentRequest{

    static verifyBusiness =  {
        user_id: null,
        verification_reason: null

    }

    static makePayment = {
        id: null,  // user id to transfer to
        amount: null,
        naration:null,
    }

}

export default TravelAgentRequest