import stores from "../store/";
import {RuthdoAlert} from "ruthly";

class storeUtils {
    //automatic dispatcher


    static fireAway() {
        if(stores){
            return stores;
        }else{
            RuthdoAlert({title:'Store doesn\'t exist', icon:'error'})
        }
    }

}

export default storeUtils