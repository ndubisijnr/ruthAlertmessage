import {useGlobalStore} from "./globalStore";
import {useAuthStore} from "./authStore";

const stores = {
    global:useGlobalStore(),
    auth:useAuthStore()
}

export default stores