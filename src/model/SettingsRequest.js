class SettingsRequest {

    static updateProfileInfo = {
        business_name:null,
        business_address:null,
        business_website:null,
        business_email:null,
        cac_number:null,
        no_of_employees:null
    }

    static uploadProfilePhoto = {
        file:null,
        type:null
    }

    static deactivateAccount = {
        status:"deactivated"
    }

    static updateBusinessProfile = {
        business_name:null,
        business_address:null,
        business_website:null,
        business_email:null,
        cac_number:null,
        no_of_employees:null
    }

    static  updateNotificationSettings = {
        message_in_app_notification:null,  // true, false
        message_email_notification:null,  // true, false
        message_sms_notification:null,  // true, false
        reminder_in_app_notification:null,  // true, false
        reminder_email_notification:null,  // true, false
        reminder_sms_notification:null,  // true, false
        ads_newsletter_in_app_notification:null,  // true, false
        ads_newsletter_email_notification:null,  // true, false
        ads_newsletter_sms_notification:null
    }

    static updateMarkup = {
        domestic_markup_type:'percentage', // percentage, fixed
        domestic_markup_value:0,
        domestic_markup_per_passenger:false,  // true, false
        domestic_markup_per_route:false,  // true, false
        international_markup_type:'fixed',  // percentage, fixed
        international_markup_value:0,
        international_markup_per_passenger:false,  // true, false
        international_markup_per_route:true // true, false
    }


    static createRole = {
        name: null,
        permission_ids:null
    }

    static updateRole = {
        name: null,
        permission_ids:null
    }

    static inviteNewMember = {
        emails: null,
        role_ids:null
    }

}
export default SettingsRequest