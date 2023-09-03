class AuthRequest{

    // authentication requests
    static login={
        email:null,
        password:null
    }
    static register={
        first_name:null,
        last_name:null,
        email:null,
        password:null,
        type:'manager',
        business_name:null,
        is_corporate:null
    };
    static verifyEmail={
        email:null,
        email_verification_code:null
    }
    static resendVerifyEmail = {
        email:null
    }

    static forgotPassword = {
        email:null
    }

    static businessProfile = {
        name:null,
        email:null,
        address:null,
        website:null,
        cac_number:null,
    }

    static upload = {
        type: null,  //logo, id_document, cac_document
        file: null
    }

    static resetPassword = {
        token: null,
        email:null,
        password:null,
        password_confirmation:null
    }

    // document upload and verification request
}
export default AuthRequest