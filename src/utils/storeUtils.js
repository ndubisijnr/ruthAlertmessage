import stores from "../store/";
import {RuthdoAlert} from "ruthly";

class storeUtils {
    //automatic dispatcher
    static fireAway() {
        return stores;
    }

}

export default storeUtils