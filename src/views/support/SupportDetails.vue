<script>
import Layout from "@/views/Layout.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import FlightPayment from "@/components/bookings/FlightPayment.vue";
import ItenaryDetailsComponent from "@/components/flightItenaryTemplate/ItenaryDetailsComponent.vue";
import router from "@/router";
import {
  formatAmount,
  convertTo12HourFormat,
  convertToWord,
  getYYYYMMDDFormat,
} from "../../mixins/flightUtil";
import storeUtils from "../../utils/storeUtils";
import ItineraryRequest from "../../model/ItineraryRequest";
import PrintItenaryModal from "@/components/modals/PrintItenaryModal.vue";
import Template1 from "@/components/flightItenaryTemplate/Template1.vue";
import ChargeWallet from "@/components/modals/ChargeWallet.vue";
import walletDedut from "@/components/modals/WalletDedut.vue";
import AddFunds from "@/components/modals/AddFunds.vue";
export default {
  name: "SupportDetails",
  components: {
    OnBoardingButton,
    walletDedut,
    AddFunds,
    Template1,
    Layout,
    FlightPayment,
    ItenaryDetailsComponent,
    PrintItenaryModal,
  },
  data() {
    return {
      data: null,
      itCommentModel: ItineraryRequest.support,
      formatAmount,
      convertTo12HourFormat,
      convertToWord,
      getYYYYMMDDFormat,
      printing: false,
      showChargeWallet: false,
      showRefunds: false,
    };
  },

  methods: {
    goBack() {
      router.back();
    },

    close_(value) {
      this.printing = value;
      console.log(value);
    },

    close(value) {
      this.showChargeWallet = value;
      this.showRefunds = value;
    },

    viewDetails(obj) {
      storeUtils.fireAway().print.commitPrintLoading("", obj.booking.flight);
      this.printing = true;
    },

    submitSupportAction() {
      storeUtils
        .fireAway()
        .itineneryStore.replyItineraryRequestAction(this.getUser.id, this.itCommentModel);
    },

    issueTicket() {
      if (this.getRequestDetails.transition) {
        let value;
        if (this.getRequestDetails.type === "issuance") value = "issued";
        if (this.getRequestDetails.type === "refund") value = "refunded";
        if (this.getRequestDetails.type === "exchange") value = "exchange";
        if (this.getRequestDetails.type === "void") value = "void";

        const request = { status: value };
        storeUtils
          .fireAway()
          .itineneryStore.approveItineraryRequestAction(
            this.getRequestDetails.id,
            request
          );
      } else if (this.getRequestDetails.type === "refund") {
        this.showRefunds = true;
      } else {
        console.log(this.getRequestDetails);
        this.showChargeWallet = true;
        storeUtils
          .fireAway()
          .transaction.handleGetUserWallet(this.getRequestDetails?.manager_id);
      }
    },

    printAction() {
      storeUtils.fireAway().print?.commitPrintLoading(true, this.data);
      if (this.getTemplateId === 1) router.push({ name: "Template1" });
      if (this.getTemplateId === 2) router.push({ name: "Template2" });
      if (this.getTemplateId === 3) router.push({ name: "Template3" });
    },
  },

  computed: {
    default_theme() {
      return storeUtils.fireAway().theme.getDefault_theme;
    },

    custom_theme() {
      return storeUtils.fireAway().theme.custom_theme;
    },

    getFlights() {
      if (!this.data) return;
      return this.data?.flight?.passengers;
    },
    airlineDetails() {
      if (!this.data) return;
      return this.data?.flight;
    },
    getUser() {
      if (localStorage.user) {
        return JSON.parse(localStorage.user);
      }
    },
    getTemplateId() {
      if (storeUtils.fireAway().theme.custom_theme)
        return storeUtils.fireAway().theme.custom_theme.template_id;
      return storeUtils.fireAway().theme.custom_theme.template_id;
    },

    getLoading() {
      return storeUtils.fireAway().itineneryStore?.getLoading;
    },

    getRequestDetails() {
      return storeUtils.fireAway().itineneryStore?.getItineraryRequestDetails;
    },
    getTenantLoaded() {
      return storeUtils.fireAway().global.getTenantLoaded;
    },
    getWallet() {
      return storeUtils.fireAway().transaction.getUserWallet;
    },
  },

  watch: {
    getTenantLoaded(a, b) {
      if (a) {
        storeUtils
          .fireAway()
          .itineneryStore.getItineraryRequestDetailsAction(
            router?.currentRoute.value.params.id
          );
      }
    },
  },

  mounted() {
    if (this.getTenantLoaded && !this.getRequestDetails) {
      storeUtils
        .fireAway()
        .itineneryStore.getItineraryRequestDetailsAction(
          router?.currentRoute.value.params.id
        );
    }
  },
};
</script>

<template>
  <layout v-slot:child-content>
    <add-funds
      @close="close"
      v-if="showRefunds"
      :isButtonRequired="true"
      :wallet_name="getWallet?.wallet_name"
      :account_number="getWallet?.wallet_number"
      header_action="Refund Actions"
    ></add-funds>
    <print-itenary-modal v-if="printing" @close="close_"></print-itenary-modal>
    <wallet-dedut
      :amount="getRequestDetails"
      :reference="getRequestDetails.booking.reference"
      :user="getWallet?.wallet_name"
      :balance="getWallet?.balance"
      @close="close"
      v-if="showChargeWallet"
    ></wallet-dedut>
    <div class="overall">
      <div class="wrapper">
        <div class="breadcrumb">
          <RouterLink to="/support"
            ><p @click="goBack" class="breadcrumb_list">Itinerary Support</p></RouterLink
          >
          <svg
            style="margin-top: 0.5rem"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.49998 2.77474C7.65831 2.77474 7.81664 2.83307 7.94164 2.95807L13.375 8.39141C14.2583 9.27474 14.2583 10.7247 13.375 11.6081L7.94164 17.0414C7.69998 17.2831 7.29998 17.2831 7.05831 17.0414C6.81664 16.7997 6.81664 16.3997 7.05831 16.1581L12.4916 10.7247C12.8916 10.3247 12.8916 9.67474 12.4916 9.27474L7.05831 3.84141C6.81664 3.59974 6.81664 3.19974 7.05831 2.95807C7.18331 2.8414 7.34164 2.77474 7.49998 2.77474Z"
              fill="#575A65"
            />
          </svg>
          <p class="breadcrumb_list">
            {{ getRequestDetails?.booking?.contact_first_name }}
            {{ getRequestDetails?.booking?.contact_last_name }}
          </p>
        </div>

        <div
          class="align-center"
          style="display: flex; justify-content: space-between; margin-top: 1.5rem"
        >
          <p class="flight_details">Itinerary Support details</p>
          <div
            v-if="getRequestDetails?.booking?.flight?.office_id"
            class="officeIdTag flex_center"
          >
            <span>Office ID {{ getRequestDetails.booking.flight.office_id }}</span>
          </div>
          <!-- <on-boarding-button
            @click="printAction"
            btn-width="9.31rem"
            height="2.5rem"
            text-node="Print Itinerary"
          ></on-boarding-button> -->
        </div>

        <div>
          <p class="travel_section_info">Travellers Information</p>
          <div class="travel_section_info_box">
            <div
              v-for="(i, index) in getRequestDetails?.booking.flight.passengers"
              :key="index + 822"
              style="display: flex; gap: 5.81rem"
            >
              <section>
                <p class="key">Customer {{ index + 1 }} Name</p>
                <p class="value">{{ i.first_name }} {{ i.last_name }}</p>
              </section>
              <section>
                <p class="key">Category</p>
                <p class="value">{{ i.passenger_type }}</p>
              </section>
            </div>
          </div>
        </div>

        <div>
          <p class="travel_section_info">Payment Details</p>
          <div class="travel_section_info_box">
            <div style="display: flex; justify-content: space-between; width: 70%">
              <div>
                <p class="key">Payment Date</p>
                <p class="value">
                  {{ convertToWord(getRequestDetails?.booking.flight?.created_at) }}
                  {{
                    convertTo12HourFormat(getRequestDetails?.booking.flight?.created_at)
                  }}
                </p>
              </div>
              <div>
                <p class="key">Pnr Number</p>
                <p class="value">{{ getRequestDetails?.booking.flight?.pnr }}</p>
              </div>
              <div>
                <p class="key">Amount</p>
                <p class="value">
                  ₦{{ formatAmount(getRequestDetails?.booking.flight?.amount) }}
                </p>
              </div>
              <div>
                <p class="key">Anchor Ref</p>
                <p class="value">{{ getRequestDetails?.booking.flight?.reference }}</p>
              </div>
              <div>
                <p class="key">status</p>
                <p class="value">{{ getRequestDetails?.booking.flight?.status }}</p>
              </div>
            </div>
          </div>
        </div>

        <div style="width: 100%; margin-top: 3rem">
          <p class="travel_section_info">Itinerary Request</p>

          <div v-if="getRequestDetails?.type === 'issuance'" class="action_wrapper">
            <div class="action_items" @click="isIssurance = true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.8101 20.1795C15.5501 20.1795 15.2801 20.1695 14.9901 20.1395C14.4701 20.0995 13.8801 19.9995 13.2701 19.8495L11.5901 19.4495C6.98007 18.3595 5.47007 15.9195 6.55007 11.3195L7.53007 7.12953C7.75007 6.17953 8.01007 5.40953 8.33007 4.76953C10.0501 1.21953 13.3401 1.53953 15.6801 2.08953L17.3501 2.47953C19.6901 3.02953 21.1701 3.89953 22.0001 5.22953C22.8201 6.55953 22.9501 8.26953 22.4001 10.6095L21.4201 14.7895C20.5601 18.4495 18.7701 20.1795 15.8101 20.1795ZM13.1201 3.24953C11.4501 3.24953 10.3901 3.93953 9.68007 5.41953C9.42007 5.95953 9.19007 6.62953 8.99007 7.46953L8.01007 11.6595C7.12007 15.4395 8.15007 17.0895 11.9301 17.9895L13.6101 18.3895C14.1501 18.5195 14.6601 18.5995 15.1201 18.6395C17.8401 18.9095 19.1901 17.7195 19.9501 14.4495L20.9301 10.2695C21.3801 8.33953 21.3201 6.98953 20.7201 6.01953C20.1201 5.04953 18.9401 4.38953 17.0001 3.93953L15.3301 3.54953C14.5001 3.34953 13.7601 3.24953 13.1201 3.24953Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M8.33005 22.2497C5.76005 22.2497 4.12005 20.7097 3.07005 17.4597L1.79005 13.5097C0.370052 9.10968 1.64005 6.62968 6.02005 5.20968L7.60005 4.69968C8.12005 4.53968 8.51005 4.42968 8.86005 4.36968C9.15005 4.30968 9.43005 4.41968 9.60005 4.64968C9.77005 4.87968 9.80005 5.17968 9.68005 5.43968C9.42005 5.96968 9.19005 6.63968 9.00005 7.47968L8.02005 11.6697C7.13005 15.4497 8.16005 17.0997 11.9401 17.9997L13.6201 18.3997C14.1601 18.5297 14.6701 18.6097 15.1301 18.6497C15.4501 18.6797 15.7101 18.8997 15.8001 19.2097C15.8801 19.5197 15.7601 19.8397 15.5001 20.0197C14.8401 20.4697 14.0101 20.8497 12.9601 21.1897L11.3801 21.7097C10.2301 22.0697 9.23005 22.2497 8.33005 22.2497ZM7.78005 6.21968L6.49005 6.63968C2.92005 7.78968 2.07005 9.46968 3.22005 13.0497L4.50005 16.9997C5.66005 20.5697 7.34005 21.4297 10.9101 20.2797L12.4901 19.7597C12.5501 19.7397 12.6001 19.7197 12.6601 19.6997L11.6001 19.4497C6.99005 18.3597 5.48005 15.9197 6.56005 11.3197L7.54005 7.12968C7.61005 6.80968 7.69005 6.49968 7.78005 6.21968Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M17.4899 10.5098C17.4299 10.5098 17.3699 10.4998 17.2999 10.4898L12.4499 9.25978C12.0499 9.15978 11.8099 8.74978 11.9099 8.34978C12.0099 7.94978 12.4199 7.70978 12.8199 7.80978L17.6699 9.03978C18.0699 9.13978 18.3099 9.54978 18.2099 9.94978C18.1299 10.2798 17.8199 10.5098 17.4899 10.5098Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M14.5601 13.8899C14.5001 13.8899 14.4401 13.8799 14.3701 13.8699L11.4601 13.1299C11.0601 13.0299 10.8201 12.6199 10.9201 12.2199C11.0201 11.8199 11.4301 11.5799 11.8301 11.6799L14.7401 12.4199C15.1401 12.5199 15.3801 12.9299 15.2801 13.3299C15.2001 13.6699 14.9001 13.8899 14.5601 13.8899Z"
                  fill="#2C6CAC"
                />
              </svg>
            </div>

            <p class="itinerary-p">{{ getRequestDetails?.type }}</p>
          </div>

          <div v-if="getRequestDetails?.type === 'void'" class="action_wrapper">
            <div class="action_items" @click="openItineneryModal('void')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0101 22.7403C11.3801 22.7403 10.7601 22.5303 10.2701 22.1103L8.69012 20.7603C8.53012 20.6203 8.13012 20.4803 7.92012 20.4803H6.17012C4.69012 20.4803 3.49012 19.2803 3.49012 17.8003V16.0903C3.49012 15.8803 3.35012 15.4803 3.22012 15.3303L1.86012 13.7303C1.04012 12.7603 1.04012 11.2403 1.86012 10.2603L3.22012 8.66031C3.35012 8.51031 3.49012 8.11031 3.49012 7.90031V6.20031C3.49012 4.72031 4.69012 3.52031 6.17012 3.52031H7.90012C8.11012 3.52031 8.50012 3.37031 8.67012 3.23031L10.2501 1.88031C11.2301 1.05031 12.7601 1.05031 13.7401 1.88031L15.3201 3.23031C15.4801 3.37031 15.8901 3.51031 16.1001 3.51031H17.8001C19.2801 3.51031 20.4801 4.71031 20.4801 6.19031V7.89031C20.4801 8.10031 20.6301 8.49031 20.7701 8.66031L22.1201 10.2403C22.9601 11.2303 22.9501 12.7603 22.1201 13.7303L20.7701 15.3103C20.6301 15.4803 20.4901 15.8703 20.4901 16.0803V17.7803C20.4901 19.2603 19.2901 20.4603 17.8101 20.4603H16.1101C15.9001 20.4603 15.5101 20.6103 15.3301 20.7503L13.7501 22.1003C13.2601 22.5303 12.6301 22.7403 12.0101 22.7403ZM6.17012 5.02031C5.52012 5.02031 4.99012 5.55031 4.99012 6.20031V7.90031C4.99012 8.47031 4.73012 9.19031 4.36012 9.63031L3.00012 11.2303C2.66012 11.6403 2.66012 12.3603 3.00012 12.7603L4.35012 14.3503C4.71012 14.7603 4.98012 15.5103 4.98012 16.0803V17.7903C4.98012 18.4403 5.51012 18.9703 6.16012 18.9703H7.90012C8.46012 18.9703 9.20012 19.2403 9.64012 19.6103L11.2301 20.9703C11.6401 21.3203 12.3601 21.3203 12.7701 20.9703L14.3501 19.6203C14.8001 19.2403 15.5301 18.9803 16.0901 18.9803H17.7901C18.4401 18.9803 18.9701 18.4503 18.9701 17.8003V16.1003C18.9701 15.5403 19.2401 14.8103 19.6101 14.3603L20.9701 12.7703C21.3201 12.3603 21.3201 11.6403 20.9701 11.2303L19.6201 9.65031C19.2401 9.20031 18.9801 8.47031 18.9801 7.91031V6.20031C18.9801 5.55031 18.4501 5.02031 17.8001 5.02031H16.1001C15.5301 5.02031 14.7901 4.75031 14.3501 4.38031L12.7601 3.02031C12.3501 2.67031 11.6401 2.67031 11.2201 3.02031L9.65012 4.38031C9.20012 4.75031 8.47012 5.02031 7.90012 5.02031H6.17012Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M12 16.8701C11.45 16.8701 11 16.4201 11 15.8701C11 15.3201 11.44 14.8701 12 14.8701C12.55 14.8701 13 15.3201 13 15.8701C13 16.4201 12.56 16.8701 12 16.8701Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M12 13.7199C11.59 13.7199 11.25 13.3799 11.25 12.9699V8.12988C11.25 7.71988 11.59 7.37988 12 7.37988C12.41 7.37988 12.75 7.71988 12.75 8.12988V12.9599C12.75 13.3799 12.42 13.7199 12 13.7199Z"
                  fill="#2C6CAC"
                />
              </svg>
            </div>
            <p class="itinerary-p">{{ getRequestDetails?.type }}</p>
          </div>

          <div v-if="getRequestDetails?.type === 'exchange'" class="action_wrapper">
            <div class="action_items" @click="openItineneryModal('exchange')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56"
                  stroke="#2C6CAC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="itinerary-p">{{ getRequestDetails?.type }}</p>
          </div>

          <div v-if="getRequestDetails?.type === 'refund'" class="action_wrapper">
            <button class="action_items" @click="openItineneryModal('refund')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.7402 22.75H12.2602C11.8502 22.75 11.5102 22.41 11.5102 22C11.5102 21.59 11.8502 21.25 12.2602 21.25H17.7402C19.4002 21.25 20.7502 19.9 20.7502 18.24V17.8H19.6002C18.0902 17.8 16.8102 16.68 16.6902 15.24C16.6102 14.41 16.9102 13.6 17.5102 13.01C18.0202 12.49 18.7202 12.2 19.4702 12.2H20.7402V11.51C20.7402 9.85001 19.3902 8.5 17.7302 8.5H6.25023C4.59023 8.5 3.24023 9.85001 3.24023 11.51V13.24C3.24023 13.65 2.90023 13.99 2.49023 13.99C2.08023 13.99 1.74023 13.65 1.74023 13.24V11.51C1.74023 9.02001 3.76023 7 6.25023 7H17.7302C20.2202 7 22.2402 9.02001 22.2402 11.51V12.95C22.2402 13.36 21.9002 13.7 21.4902 13.7H19.4702C19.1202 13.7 18.8002 13.83 18.5702 14.07C18.2802 14.35 18.1402 14.73 18.1802 15.11C18.2402 15.77 18.8702 16.3 19.5902 16.3H21.4902C21.9002 16.3 22.2402 16.64 22.2402 17.05V18.24C22.2502 20.73 20.2302 22.75 17.7402 22.75Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.60001 5.87003C3.79001 6.18003 3.24001 6.97006 3.24001 7.84006V12.41C3.25001 12.83 2.91 13.16 2.5 13.16Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M19.6 17.8002C18.09 17.8002 16.81 16.6802 16.69 15.2402C16.61 14.4102 16.91 13.6002 17.51 13.0102C18.02 12.4902 18.72 12.2002 19.47 12.2002H21.55C22.54 12.2302 23.3 13.0102 23.3 13.9702V16.0302C23.3 16.9902 22.54 17.7702 21.58 17.8002H19.6ZM21.53 13.7002H19.48C19.13 13.7002 18.81 13.8302 18.58 14.0702C18.29 14.3502 18.15 14.7302 18.19 15.1102C18.25 15.7702 18.88 16.3002 19.6 16.3002H21.56C21.69 16.3002 21.81 16.1802 21.81 16.0302V13.9702C21.81 13.8202 21.69 13.7102 21.53 13.7002Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M9.5 19.69C9.09 19.69 8.75 19.35 8.75 18.94V17.66C8.75 17.44 8.57 17.25 8.34 17.25H3C2.59 17.25 2.25 16.91 2.25 16.5C2.25 16.09 2.59 15.75 3 15.75H8.34C9.39 15.75 10.25 16.61 10.25 17.66V18.94C10.25 19.35 9.91 19.69 9.5 19.69Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M4.21994 18.4697C4.02994 18.4697 3.83994 18.3997 3.68994 18.2497L2.46994 17.0298C2.17994 16.7398 2.17994 16.2597 2.46994 15.9697L3.68994 14.7497C3.97994 14.4597 4.45994 14.4597 4.74994 14.7497C5.03994 15.0397 5.03994 15.5197 4.74994 15.8097L4.05994 16.4997L4.74994 17.1897C5.03994 17.4797 5.03994 17.9597 4.74994 18.2497C4.59994 18.3997 4.40994 18.4697 4.21994 18.4697Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M9.5 22.5298H4.16C3.11 22.5298 2.25 21.6698 2.25 20.6198V19.3398C2.25 18.9298 2.59 18.5898 3 18.5898C3.41 18.5898 3.75 18.9298 3.75 19.3398V20.6198C3.75 20.8398 3.93 21.0298 4.16 21.0298H9.5C9.91 21.0298 10.25 21.3698 10.25 21.7798C10.25 22.1898 9.91 22.5298 9.5 22.5298Z"
                  fill="#2C6CAC"
                />
                <path
                  d="M8.28021 23.75C8.09021 23.75 7.90021 23.68 7.75021 23.53C7.46021 23.24 7.46021 22.7599 7.75021 22.4699L8.44022 21.78L7.75021 21.09C7.46021 20.8 7.46021 20.32 7.75021 20.03C8.04021 19.74 8.52021 19.74 8.81021 20.03L10.0302 21.25C10.3202 21.54 10.3202 22.02 10.0302 22.31L8.81021 23.53C8.67021 23.68 8.47021 23.75 8.28021 23.75Z"
                  fill="#2C6CAC"
                />
              </svg>
            </button>
            <p class="itinerary-p">{{ getRequestDetails?.type }}</p>
          </div>

          <!------  spinage -->

          <div class="div-support">
            <div style="display: flex; gap: 1.5rem; align-items: center">
              <p class="request_date">Request Date</p>
              <p class="request_date_value">
                {{ convertToWord(getRequestDetails?.created_at) }}
                {{ convertTo12HourFormat(getRequestDetails?.created_at) }}
              </p>
            </div>

            <div class="group-inputs">
              <div>
                <div style="margin-bottom: 0.75rem">
                  <label class="class_label"
                    >Booking Reference <span class="required">*</span>
                  </label>
                </div>
                <div class="form-input">
                  <div
                    style="
                      width: 50%;
                      border-right: solid #c0d3e6;
                      height: 3.4rem;
                      display: flex;
                      align-items: center;
                    "
                  >
                    <p class="label_text">PNR</p>
                  </div>
                  <input
                    class="form-input-input"
                    :value="getRequestDetails?.booking?.pnr"
                  />
                </div>
              </div>
              <div>
                <div style="margin-bottom: 2.1rem">
                  <label class="class_label"></label>
                </div>
                <div class="form-input">
                  <div
                    style="
                      width: 100%;
                      border-right: solid #c0d3e6;
                      height: 3.4rem;
                      display: flex;
                      align-items: center;
                    "
                  >
                    <p class="label_text">Requested By <span class="required">*</span></p>
                  </div>
                  <input
                    class="form-input-input"
                    :value="
                      getRequestDetails?.booking?.contact_first_name +
                      ' ' +
                      getRequestDetails?.booking?.contact_last_name
                    "
                    readonly
                  />
                </div>
              </div>
            </div>

            <div style="width: 100%">
              <div
                v-if="getRequestDetails?.type !== 'issuance'"
                style="margin-bottom: 1.5rem"
              >
                <p class="label_text_ticket">
                  Ticket Number <span class="required">*</span>
                </p>
                <div
                  style="
                    border: solid #c0d3e6;
                    padding: 1rem;
                    border-radius: 0.375rem;
                    border: 1px solid var(--primary-15, #c0d3e6);
                    background: var(--Color, #fff);
                  "
                >
                  <div
                    v-for="(i, index) in getRequestDetails?.passengers"
                    :key="index"
                    style="
                      display: flex;
                      gap: 1.5rem;
                      align-items: center;
                      justify-content: flex-start;
                      margin-bottom: 0.5rem;
                    "
                  >
                    <p class="ticket_name">{{ i.traveler }}</p>
                    <div
                      style="
                        padding: 0.25rem 0.75rem;
                        border-radius: 1.25rem;
                        background: #eaf0f7;
                      "
                    >
                      <div style="display: flex; gap: 0.5rem">
                        <input
                          :id="`check_box${index}`"
                          type="checkbox"
                          disabled
                          checked="true"
                          @change="
                            toggleTravelersTicket(`check_box${index}`, i.traveler, {
                              name: i.traveler,
                              ticket_numbers: i.ticket_number,
                            })
                          "
                        />
                        <p
                          class="ticket_number"
                          v-for="(j, index2) in i.ticket_number"
                          :key="index2"
                        >
                          {{ j }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="width: 100%; margin-bottom: 1.5rem">
                <div>
                  <div class="issuance_wrapper">
                    <div class="unissued_item">
                      <p class="time_booked">
                        {{ convertToWord(getRequestDetails?.created_at) }} .
                        {{ convertTo12HourFormat(getRequestDetails?.created_at) }}
                      </p>
                    </div>

                    <div
                      style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 0.5rem;
                      "
                    >
                      <OnBoardingButton
                        :color="custom_theme ? custom_theme.color : default_theme.color"
                        @click="viewDetails(getRequestDetails)"
                        btn-width="8rem"
                        height="3rem"
                        text-node="View Details"
                        border="none"
                        color="#2C6CAC"
                        background="transparent"
                      ></OnBoardingButton>
                      <div v-if="getRequestDetails.type === 'issuance'">
                        <div v-if="getRequestDetails?.booking.status === 'issued'">
                          <p class="issued">Issued</p>
                        </div>
                        <OnBoardingButton
                          v-else
                          :loading="getLoading"
                          @click="issueTicket"
                          btn-width="8rem"
                          height="3rem"
                          :text-node="
                            !getRequestDetails.transition
                              ? 'Charge Wallet'
                              : getRequestDetails?.type === 'issuance'
                              ? 'Issue Ticket'
                              : getRequestDetails?.type === 'refund'
                              ? 'Refund Ticket'
                              : getRequestDetails?.type === 'exchange'
                              ? 'Exchange Ticket'
                              : 'Void Ticket'
                          "
                          v-if="getUser?.account_type !== 'manager'"
                        ></OnBoardingButton>
                      </div>
                      <OnBoardingButton
                        v-else
                        :loading="getLoading"
                        @click="issueTicket"
                        btn-width="8rem"
                        height="3rem"
                        :text-node="
                          getRequestDetails?.type === 'refund'
                            ? 'Refund Ticket'
                            : getRequestDetails?.type === 'exchange'
                            ? 'Exchange Ticket'
                            : 'Void Ticket'
                        "
                        v-if="getUser?.account_type !== 'manager'"
                      ></OnBoardingButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style="width: 100%">
              <p class="additional_comment_p">
                Additional Information or Comments <span class="required">*</span>
              </p>
              <textarea
                class="additional_comment"
                :value="getRequestDetails?.support_comment"
                disabled
              ></textarea>
            </div>
          </div>

          <div>
            <div>
              <p class="support_comment_p">Support Team Comments</p>
              <p class="additional_comment_p">
                Additional Information or Comments <span class="required">*</span>
              </p>
            </div>
            <textarea
              class="comment_area"
              placeholder="Kindly send any information regarding this issue if neccessary"
              v-model="itCommentModel.support_comment"
              :disabled="getRequestDetails?.booking.status === 'issued'"
            ></textarea>
          </div>

          <div
            v-if="
              getRequestDetails?.booking.status !== 'issued' &&
              getUser?.account_type !== 'manager'
            "
            style="display: flex; justify-content: end; margin-top: 40px"
          >
            <OnBoardingButton
              btn-width="8rem"
              height="3rem"
              text-node="Submit"
              @click="submitSupportAction"
            ></OnBoardingButton>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<style scoped>
.officeIdTag {
  background: rgba(230, 245, 237, 1);
  padding: 8px 16px;
  width: 100%;
  max-width: max-content;
  border-radius: 40px;
}
.officeIdTag span {
  color: rgba(21, 157, 84, 1);
  font-weight: 500;
  font-size: 14px;
  font-family: "Product Sans";
}
.support_comment_p {
  color: var(--Black-text-01, #1d1e2c);
  /* 18px/bold */
  font-family: "Product Sans";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 155.556% */
  margin-bottom: 0.75rem;
}
.issuance_wrapper {
  border-radius: 6px;
  background: var(--Color, #fff);
  display: flex;
  width: 100%;
  padding: 16px 38px 16px 24px;
  align-items: center;
  /* gap: 347px; */
  justify-content: space-between;
}

.label_text {
  color: #444854;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  /* 200% */
  margin: 0 1.25rem;
}

.label_text_ticket {
  color: #444854;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  /* 200% */
}

.ticket_name {
  color: var(--Black-text-02, #2d3139);
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem;
  text-wrap: wrap;
  width: 8rem;
  /* 142.857% */
  text-transform: capitalize;
}

.ticket_number {
  color: var(--Black-text-03, #444854);
  font-family: "Product Sans" Medium;
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  /* 280% */
}

.class_label {
  color: #2d3139;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem;
  /* 142.857% */
  margin-bottom: 0.74rem;
}

.required {
  color: #f04444;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem;
}

.comment_section {
  display: flex;
  width: 35.8125rem;
  height: 13.375rem;
  padding: 0.875rem 1rem 9rem 1.25rem;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: 1px solid #c0d3e6;
}

.form-input {
  display: flex;
  width: 100%;
  height: 3.5rem;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: 1px solid #c0d3e6;
  margin-bottom: 1rem;
  align-items: center;
  background-color: #fff;
}

.form-input-input {
  outline: none;
  border: none;
  padding-left: 12px;
  width: 100%;
}

.group-inputs {
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 1.5rem;
  width: 100%;
}

.issued {
  color: var(--success-green, #159d54);
  text-align: center;
  font-family: "Product Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.booking_reference {
  color: var(--Black-text-02, #2d3139);
  font-family: "Product Sans Light";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem; /* 142.857% */
}

.unissued_item {
  display: flex;
  padding-bottom: 0px;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  /* width: 34rem; */
  margin: 1.5rem 0;
}

.time_booked {
  color: var(--text-main-light-8-body, #393a4a);
  /* medium/14px */
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
}
.additional_comment_p {
  color: var(--Black-text-02, #2d3139);
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem; /* 142.857% */
}
.additional_comment {
  display: flex;
  height: 7.75rem;
  padding: 0.875rem 40.75rem 3.375rem 1.25rem;
  align-items: center;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid var(--primary-15, #c0d3e6);
  background: var(--Color, #fff);
  margin-top: 0.75rem;
}

.request_date_value {
  color: var(--Black-text-04, #575a65);
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.request_date {
  color: var(--Primary-Main, #2c6cac);
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
}
.comment_area {
  display: flex;
  width: 100%;
  height: 13.375rem;
  padding: 0.875rem 44.1875rem 10.75rem 1.25rem;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: 1px solid var(--primary-15, #c0d3e6);
  background: var(--Color, #fff);
  margin-top: 0.75rem;
}
.overall {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: relative;
}

.div-support {
  border-radius: 1.25rem;
  background: var(--primary-05, #eaf0f7);
  display: inline-flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  margin: 2rem 0;
}

.itinerary-p {
  color: #575a65;
  text-align: center;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.action_wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
  position: relative;
}

.action_items {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  background: #eaf0f7;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.breadcrumb {
  display: flex;
  gap: 0.41rem;
}

.key {
  color: #444854;
  font-family: "Product Sans";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 200% */
  text-transform: capitalize;
}

.value {
  color: #444854;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 133%; /* 1.33rem */
  text-transform: capitalize;
}

.wrapper {
  /*width: 100%;*/
  height: auto;
  position: relative;
  /*padding: 0 5.5rem;*/
  width: 90rem;
  margin-bottom: 5.5rem;
}

.travel_section_info {
  color: #2c6cac;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
  margin-top: 2rem;
}

.travel_section_info_box {
  display: flex;
  width: 100%;
  /* height: 7.5625rem; */
  margin-top: 0.75rem;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid var(--secondarytext-default-text-textfield, #e5e9f2);
}

.flight_details {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 100% */
}

.breadcrumb_list {
  color: #575a65;
  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  margin-top: 0.5rem;
}
</style>
