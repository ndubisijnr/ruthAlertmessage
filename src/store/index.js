import {useGlobalStore} from "./globalStore";
import {useAuthStore} from "./authStore";
import {useSettingsStore} from "./settingsStore"
import {useBookingStore} from "./bookingStore";
import {useFlightStore} from "./flightStore";
import {useTravelAgentStore} from "./travelAgentStore";

const stores = {
    global:useGlobalStore(),
    auth:useAuthStore(),
    settings:useSettingsStore(),
    booking:useBookingStore(),
    flight:useFlightStore(),
    travelAgent:useTravelAgentStore()
}

export default stores