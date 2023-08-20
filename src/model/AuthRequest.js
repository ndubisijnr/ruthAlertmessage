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
        type:null,
        company_name:null,
        is_corporate:null
    };
    static verifyEmail;
    static resendVerifyEmail;

    // document upload and verification request
}
export default AuthRequest