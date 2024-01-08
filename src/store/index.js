import {useGlobalStore} from "./globalStore";
import {useAuthStore} from "./authStore";
import {useSettingsStore} from "./settingsStore"
import {useBookingStore} from "./bookingStore";
import {useFlightStore} from "./flightStore";
import {useTravelAgentStore} from "./travelAgentStore";
import {useTransactionStore} from "./transactionStore";
import {useCustomizationStore} from "@/store/customizationStore";
import { usePrintStore } from "./print";

const stores = {
    global:useGlobalStore(),
    auth:useAuthStore(),
    settings:useSettingsStore(),
    booking:useBookingStore(),
    flight:useFlightStore(),
    travelAgent:useTravelAgentStore(),
    transaction:useTransactionStore(),
    theme:useCustomizationStore(),
    print:usePrintStore()
}

export default stores