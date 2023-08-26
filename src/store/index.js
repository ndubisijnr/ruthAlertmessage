import {useGlobalStore} from "./globalStore";
import {useAuthStore} from "./authStore";
import {useSettingsStore} from "./settingsStore"

const stores = {
    global:useGlobalStore(),
    auth:useAuthStore(),
    settings:useSettingsStore()
}

export default stores