import stores from "../store/index";

class storeUtils {
    //automatic dispatcher

    static fireAway() {
        return stores;
    }

}

export default storeUtils