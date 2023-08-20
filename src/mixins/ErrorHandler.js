import {RuthdoAlert} from "ruthly";

export const catchErrorHandler = (exception, errorObj, AdditionalErrorName) => {
    console.log(exception)

    if(exception.response.data) {
        const error =  exception.response.data
        RuthdoAlert({title: exception.response.data.message, icon: 'error'})
        if(error.errors){
            Object.keys(errorObj).forEach(key => {
                errorObj[key] = null
            })
            const errorKeys = Object.keys(error.errors).map(i => i).toLocaleString()
            Object.keys(errorObj).forEach(key => {
                if(errorKeys.includes(key)){
                    let message = Object.values(error.errors[key])
                    errorObj[key] = message.toLocaleString()
                    localStorage.errors = JSON.stringify(errorObj)
                }else{
                    //.....
                }
            })
        }else{
            errorObj[AdditionalErrorName] = error.data
            console.log(error)
            console.log(errorObj[AdditionalErrorName] )
        }
    }
    else{
        RuthdoAlert({title: exception.response.message, icon:'error'})

    }


}
