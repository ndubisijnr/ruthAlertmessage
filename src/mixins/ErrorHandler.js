import {RuthdoAlert} from "ruthly";
import storeUtils from "../utils/storeUtils";

export const catchErrorHandler = (exception, errorObj, AdditionalErrorName) => {
    if(exception?.response?.data) {
        RuthdoAlert({title: exception?.response?.data.message ? exception?.response?.data.message : exception?.response?.data.data ? exception?.response?.data.data : exception?.response?.data, icon: 'error'})
        const error =  exception?.response?.data
        if(error.errors){
            Object.keys(errorObj).forEach(key => {
                errorObj[key] = null
            })
            const errorKeys = Object.keys(error.errors).map(i => i).toLocaleString()
            Object.keys(errorObj).forEach(key => {
                if(errorKeys.includes(key)){
                    let message = Object.values(error.errors[key])
                    errorObj[key] = message.toLocaleString()
                    storeUtils.fireAway().auth?.commitErrors(errorObj)
                }else{
                    RuthdoAlert({title: error.data, icon:'error'})
                    //.....
                }
            })
        }
        // else{
        //     errorObj[AdditionalErrorName] = error?.data
        // }
    }
    else{
        RuthdoAlert({title: exception?.response?.message ? exception?.response?.message : exception?.response?.data, icon:'error'})

    }


}
