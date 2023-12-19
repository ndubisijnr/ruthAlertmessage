class SettingsRequest {

    static updateProfileInfo = {
        first_name:null,
        last_name:null,
        email:null,
        phone:null
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
        domestic_markup_type:null, // percentage, fixed
        domestic_markup_value:null,
        domestic_markup_per_passenger:null,  // true, false
        domestic_markup_per_route:null,  // true, false
        international_markup_type:null,  // percentage, fixed
        international_markup_value:null,
        international_markup_per_passenger:null,  // true, false
        international_markup_per_route:null // true, false
    }

    static createRole = {
        name: null,
        permission_ids:null
    }

    static updateRole = {
        id:null,
        name: null,
        permission_ids:null
    }

    static inviteNewMember = {
        emails: null,
        role_id:null
    }

    static  createDomain = {
        domain: null
    }

    static  makePrimaryDomain = {
        domain: null
    }

    static addBank = {
        account_name:null,
        bank_name:null,
        account_number:null,
        code:null,
    }

    static updateBank = {
        id:null,
        account_name:null,
        bank_name:null,
        account_number:null,
        code:null,
    }

}
export default SettingsRequest