<template>
    <booking-index v-slot:booking_children>
        <div class="flight-result animate__animated animate__fadeIn">
            <!-- <div><p>Booking Search</p></div> -->
            <div class="breaker1"></div>
            <div
                style="
                    display: flex;
                    flex-direction: column;
                    margin-top: 2rem;
                    margin-bottom: 1.44rem;
                "
            >
                <div class="search-result-filter-area">
                    <div class="result-details-info">
                        <!--            <div class="filter-by">-->
                        <!--                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">-->
                        <!--                <path d="M6.66663 4.79199C6.32496 4.79199 6.04163 4.50866 6.04163 4.16699V1.66699C6.04163 1.32533 6.32496 1.04199 6.66663 1.04199C7.00829 1.04199 7.29163 1.32533 7.29163 1.66699V4.16699C7.29163 4.50866 7.00829 4.79199 6.66663 4.79199Z" fill="#292D32"/>-->
                        <!--                <path d="M13.3334 4.79199C12.9917 4.79199 12.7084 4.50866 12.7084 4.16699V1.66699C12.7084 1.32533 12.9917 1.04199 13.3334 1.04199C13.675 1.04199 13.9584 1.32533 13.9584 1.66699V4.16699C13.9584 4.50866 13.675 4.79199 13.3334 4.79199Z" fill="#292D32"/>-->
                        <!--                <path d="M7.08333 12.0829C6.975 12.0829 6.86667 12.058 6.76667 12.0163C6.65833 11.9746 6.575 11.9163 6.49167 11.8413C6.34167 11.6829 6.25 11.4746 6.25 11.2496C6.25 11.1413 6.275 11.0329 6.31667 10.9329C6.35833 10.8329 6.41667 10.7413 6.49167 10.6579C6.575 10.5829 6.65833 10.5246 6.76667 10.4829C7.06667 10.3579 7.44167 10.4246 7.675 10.6579C7.825 10.8163 7.91667 11.0329 7.91667 11.2496C7.91667 11.2996 7.90833 11.358 7.9 11.4163C7.89167 11.4663 7.875 11.5163 7.85 11.5663C7.83333 11.6163 7.80833 11.6663 7.775 11.7163C7.75 11.7579 7.70833 11.7996 7.675 11.8413C7.51667 11.9913 7.3 12.0829 7.08333 12.0829Z" fill="#292D32"/>-->
                        <!--                <path d="M9.99996 12.0837C9.89163 12.0837 9.78329 12.0587 9.68329 12.0171C9.57496 11.9754 9.49163 11.917 9.40829 11.842C9.25829 11.6837 9.16663 11.4754 9.16663 11.2504C9.16663 11.142 9.19163 11.0337 9.23329 10.9337C9.27496 10.8337 9.33329 10.7421 9.40829 10.6587C9.49163 10.5837 9.57496 10.5254 9.68329 10.4837C9.98329 10.3504 10.3583 10.4254 10.5916 10.6587C10.7416 10.8171 10.8333 11.0337 10.8333 11.2504C10.8333 11.3004 10.825 11.3587 10.8166 11.4171C10.8083 11.4671 10.7916 11.5171 10.7666 11.5671C10.75 11.6171 10.725 11.667 10.6916 11.717C10.6666 11.7587 10.625 11.8004 10.5916 11.842C10.4333 11.992 10.2166 12.0837 9.99996 12.0837Z" fill="#292D32"/>-->
                        <!--                <path d="M12.9167 12.0837C12.8084 12.0837 12.7 12.0587 12.6 12.0171C12.4917 11.9754 12.4084 11.917 12.325 11.842C12.2917 11.8004 12.2584 11.7587 12.225 11.717C12.1917 11.667 12.1667 11.6171 12.15 11.5671C12.125 11.5171 12.1084 11.4671 12.1 11.4171C12.0917 11.3587 12.0834 11.3004 12.0834 11.2504C12.0834 11.0337 12.175 10.8171 12.325 10.6587C12.4084 10.5837 12.4917 10.5254 12.6 10.4837C12.9084 10.3504 13.275 10.4254 13.5084 10.6587C13.6584 10.8171 13.75 11.0337 13.75 11.2504C13.75 11.3004 13.7417 11.3587 13.7334 11.4171C13.725 11.4671 13.7084 11.5171 13.6834 11.5671C13.6667 11.6171 13.6417 11.667 13.6084 11.717C13.5834 11.7587 13.5417 11.8004 13.5084 11.842C13.35 11.992 13.1334 12.0837 12.9167 12.0837Z" fill="#292D32"/>-->
                        <!--                <path d="M7.08333 15C6.975 15 6.86667 14.975 6.76667 14.9333C6.66667 14.8917 6.575 14.8333 6.49167 14.7583C6.34167 14.6 6.25 14.3833 6.25 14.1667C6.25 14.0583 6.275 13.95 6.31667 13.85C6.35833 13.7417 6.41667 13.65 6.49167 13.575C6.8 13.2667 7.36667 13.2667 7.675 13.575C7.825 13.7333 7.91667 13.95 7.91667 14.1667C7.91667 14.3833 7.825 14.6 7.675 14.7583C7.51667 14.9083 7.3 15 7.08333 15Z" fill="#292D32"/>-->
                        <!--                <path d="M9.99996 15C9.78329 15 9.56663 14.9083 9.40829 14.7583C9.25829 14.6 9.16663 14.3833 9.16663 14.1667C9.16663 14.0583 9.19163 13.95 9.23329 13.85C9.27496 13.7417 9.33329 13.65 9.40829 13.575C9.71663 13.2667 10.2833 13.2667 10.5916 13.575C10.6666 13.65 10.725 13.7417 10.7666 13.85C10.8083 13.95 10.8333 14.0583 10.8333 14.1667C10.8333 14.3833 10.7416 14.6 10.5916 14.7583C10.4333 14.9083 10.2166 15 9.99996 15Z" fill="#292D32"/>-->
                        <!--                <path d="M12.9167 15.0004C12.7 15.0004 12.4834 14.9087 12.325 14.7587C12.25 14.6837 12.1917 14.5921 12.15 14.4838C12.1084 14.3838 12.0834 14.2754 12.0834 14.1671C12.0834 14.0587 12.1084 13.9504 12.15 13.8504C12.1917 13.7421 12.25 13.6504 12.325 13.5754C12.5167 13.3838 12.8084 13.2921 13.075 13.3504C13.1334 13.3587 13.1834 13.3754 13.2334 13.4004C13.2834 13.4171 13.3334 13.4421 13.3834 13.4754C13.425 13.5004 13.4667 13.5421 13.5084 13.5754C13.6584 13.7338 13.75 13.9504 13.75 14.1671C13.75 14.3837 13.6584 14.6004 13.5084 14.7587C13.35 14.9087 13.1334 15.0004 12.9167 15.0004Z" fill="#292D32"/>-->
                        <!--                <path d="M17.0833 8.20019H2.91663C2.57496 8.20019 2.29163 7.91686 2.29163 7.5752C2.29163 7.23353 2.57496 6.9502 2.91663 6.9502H17.0833C17.425 6.9502 17.7083 7.23353 17.7083 7.5752C17.7083 7.91686 17.425 8.20019 17.0833 8.20019Z" fill="#292D32"/>-->
                        <!--                <path d="M13.3333 18.9587H6.66667C3.625 18.9587 1.875 17.2087 1.875 14.167V7.08366C1.875 4.04199 3.625 2.29199 6.66667 2.29199H13.3333C16.375 2.29199 18.125 4.04199 18.125 7.08366V14.167C18.125 17.2087 16.375 18.9587 13.3333 18.9587ZM6.66667 3.54199C4.28333 3.54199 3.125 4.70033 3.125 7.08366V14.167C3.125 16.5503 4.28333 17.7087 6.66667 17.7087H13.3333C15.7167 17.7087 16.875 16.5503 16.875 14.167V7.08366C16.875 4.70033 15.7167 3.54199 13.3333 3.54199H6.66667Z" fill="#292D32"/>-->
                        <!--                </svg>-->
                        <!--                <p>Show Pricing Calender</p>-->
                        <!--            </div>-->
                        <!--            <div style="position: relative">-->
                        <!--              <div class="filter-by">-->
                        <!--                <p class="and-filter-by">Sort by</p>-->
                        <!--                <div class="seperator_1"></div>-->
                        <!--                <div>-->
                        <!--                  <div class="filter-items">-->
                        <!--                    <p class="filter-item">-->
                        <!--                      Cheapest-->
                        <!--                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">-->
                        <!--                        <path d="M8 10.3448L5 6H11L8 10.3448Z" fill="#6A8297"/>-->
                        <!--                      </svg>-->
                        <!--                    </p>-->
                        <!--                  </div>-->
                        <!--&lt;!&ndash;                  <div class="filter-by-modal">&ndash;&gt;-->
                        <!--&lt;!&ndash;                    <p class="filter-by-modal-p">Cheapest <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">&ndash;&gt;-->
                        <!--&lt;!&ndash;                      <circle cx="8" cy="8" r="8" fill="#159D54"/>&ndash;&gt;-->
                        <!--&lt;!&ndash;                      <path d="M5.3335 7.86272L6.96313 9.33333L10.6668 6" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>&ndash;&gt;-->
                        <!--&lt;!&ndash;                    </svg></p>&ndash;&gt;-->
                        <!--&lt;!&ndash;                    <p class="filter-by-modal-p">Fastest</p>&ndash;&gt;-->
                        <!--&lt;!&ndash;                  </div>&ndash;&gt;-->
                        <!--                </div>-->
                        <!--              </div>-->
                        <!--            </div>-->
                    </div>
                </div>
            </div>
            <!-- <div v-for="i in extractAirlineDetails(getFlightResult)">
        {{ i }}
      </div> -->
            <div class="result_area">
                <FlightFliter />

                <section
                    class="w-100"
                    style="max-width: 70rem"
                    v-if="getFlightResult[0]?.inbound?.length > 0"
                >
                    <RoundTripCard></RoundTripCard>
                </section>
                <section
                    class="w-100"
                    style="max-width: 70rem"
                    v-else-if="getFlightResult[0]?.inbound?.length < 1"
                >
                    <OneWayCard></OneWayCard>
                </section>
                <section v-else class="w-100" style="max-width: 70rem">
                    <MultiCityCard />
                </section>
            </div>
        </div>
    </booking-index>
</template>

<script>
import BookingIndex from "../../views/dashboard/Index.vue";
import FlightFliter from "../../components/fliterComponents/FlightFliter.vue";
import OneWayCard from "../flightCards/OneWayCard.vue";
import RoundTripCard from "../flightCards/RoundTripCard.vue";
import storeUtils from "../../utils/storeUtils";
import MultiCityCard from "@/components/flightCards/MultiCityCard.vue";
import Whoosh from "../../assets/mixkit-air-woosh-1489.wav";

export default {
    name: "FlightResult",
    components: {
        BookingIndex,
        FlightFliter,
        OneWayCard,
        RoundTripCard,
        MultiCityCard,
    },
    data() {
        return {};
    },
    methods: {},

    computed: {
        sortByCheapest() {
            let prizes = this.getFlightResult.map((it) => it.amount);
            prizes.sort(function (a, b) {
                return a - b;
            });
            return prizes[0];
        },

        getTotalPage() {
            return Math.ceil(
                Number(this.getFlightResult.length) / Number(this.itemsPerPage)
            );
        },

        getFlightResult() {
            return storeUtils.fireAway().flight.getFlightResults;
        },
        getCurrentRoute() {
            return router.currentRoute.value.name;
        },

        getUser() {
            if (localStorage.user) {
                return JSON.parse(localStorage.user);
            }
        },
    },

    mounted() {
        const audio = new Audio(Whoosh);
        audio.volume = 0.2;
        audio.play();

        // storeUtils.fireAway().booking?.addToProgressNav('Search for Flight')
        //   storeUtils.fireAway().booking?.commitBookingStage('Flight Result')
    },
};
</script>

<style scoped>
.filter-by-modal-p {
    display: flex;
    width: 12.4375rem;
    padding: 0.625rem 1.25rem;
    align-items: center;
    gap: 0.875rem;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    background: #fff;
    color: #222;

    /* medium/input/16px */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem; /* 175% */
}

.filter-by-modal-p:hover {
    font-size: 1.2rem;
}

.filter-by-modal {
    flex-direction: column;
    position: absolute;
    display: none;
    /* m6 */
    box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
}

.filter-by-modal:hover {
    display: flex;
}
.fare_rules {
    display: inline-flex;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--primary-1, #d5e2ee);
    background: #f9fafc;
    width: 100%;
}
.fare_rule_h {
    color: var(--black-text-01, #1d1e2c);

    /* Subtext/14px/Regular */
    font-family: "Product Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
}
.fare_rule_p {
    color: var(--black-text-03, #444854);
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 1.6rem */
}
.result_area {
    display: flex;
    gap: 1.75rem;
    align-items: start;
    justify-content: start;
    width: 90rem;
}
.best_offer {
    display: inline-flex;
    padding: 0.25rem 0.5rem;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: rgba(21, 157, 84, 0.08);
    color: #159d54;
    font-family: "Product Sans";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 133.333% */
    position: absolute;
    left: 1.44rem;
    top: 0.44rem;
}

.activePage {
    border-left: 0.6px solid #e5e9f2;
    background: #e5e9f2;
}
.paginate_num {
    display: flex;
    height: 2rem;
    justify-content: end;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
}

.pag_item {
    width: 2.5rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-left: 0.6px solid
        var(--secondarytext-default-text-textfield, #e5e9f2);
}

.paginate {
    display: flex;
    background: #ffffff;
    height: 3.5rem;
    /* padding: 0.875rem 0.75rem 0.625rem 0.75rem; */
    justify-content: space-evenly;
    align-items: center;
    /* gap: 42.625rem; */
    flex-shrink: 0;
    margin: 1.69rem 0;
}
a {
    text-decoration: none;
}
.time-info {
    color: #1d1e2c;

    /* Body/18px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem; /* 166.667% */
}
.actual-result-item-info-airport-details {
    width: 50%;
}
.airport-name {
    color: #1d1e2c;

    /* 18px/bold */
    font-family: "Product Sans";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 155.556% */
}
.key {
    color: #575a65;
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
}

.value {
    color: #1d1e2c;
    text-align: center;

    /* medium/input/16px */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem; /* 175% */
}

.inner-airline_details {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.inner-airline_details-item {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.airline_details {
    display: flex;
    width: 100%;
    padding: 2rem;
    height: 7.5rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    border: 1px solid #e5e9f2;
}
.progress {
    width: 100%;
    background-color: #89128a;
    height: 0.25rem;
    transition: 1s ease-in;
}

.u-hide {
    border-radius: 0.5rem;
    border: 1px solid #f9fafc;
    background: #f9fafc;
}
.book-flight-details-btn {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    padding: 4rem;
}
.extra-baggage-p {
    color: #1d1e2c;

    /* Subtext/14px/Regular */
    font-family: "Product Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
}
.price {
    color: #1d1e2c !important;

    /* Headings/black/24px */
    font-family: "Product Sans";
    font-size: 1.5rem !important;
    font-style: normal;
    font-weight: 900 !important;
    line-height: 3.875rem !important;
}

.breaker-3 {
    width: 0.0625rem;
    height: 2.25rem;
    background: #e0e6ed;
}

.additional-details-info-item {
    display: flex;
    width: 100%;
    height: 2rem;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
}
.text-1 {
    color: #575a65;
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    /*line-height: 1.5rem; !* 150% *!*/
}

.text-2 {
    color: #1d1e2c;

    /* medium/input/16px */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    /*line-height: 1.75rem;*/
}

.dropdown_icon:hover {
    border: solid var(--app-default-primary);
    border-radius: 50%;
}
.additional-details-info {
    display: flex;
    justify-content: start;
    border-top: solid #e0e6ed;
    border-bottom: solid #e0e6ed;
    width: 100%;
    gap: 1.5rem;
    height: 5.375rem;
    align-items: center;
    margin-top: 3.5rem;
}
.dropdown-details-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    height: 5.75rem;
    border-radius: 0.5rem;
    border: 1px solid #f9fafc;
    background: #f9fafc;
    margin-bottom: 1rem;
}
.depart_date-info {
    display: flex;
    align-items: center;
    gap: 3.25rem;
}
.depart-date-info-stops {
    color: #1d1e2c;
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
}
.depart-date {
    color: #1d1e2c;

    /* Headings/20px/bold */
    font-family: "Product Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 140% */
}

.details {
    border-radius: 0.25rem;
    /*border: 1px solid  #E5E9F2;*/
    padding: 1.5rem;
}
.component87 {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 0.5rem;
    border: 1px solid #e0e6ed;
    background: #fff;
    padding: 1.5rem;
}
.view-details {
    color: var(--app-default-primary);
    width: 4.8125rem;
    height: 1.5rem;

    /* subtext/medium/14px */
    font-family: "Product Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 171.429% */
    cursor: pointer;
}
.spiralLines-div {
    position: absolute;
    top: -100px;
    right: -150px;
    width: 30.47194rem;
    height: 25.32919rem;
    /*border: solid;*/
}
.choose_document_type {
    display: flex;
    width: 100%;
    height: 4rem;
    padding: 0.875rem 1.25rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.375rem;
    border: 1px solid #eff2f7;
    margin-bottom: 1rem;
}

.doc_type_options {
    display: flex;
    width: 36rem;
    flex-direction: column;
    align-items: flex-start;
    /*gap: 1.25rem;*/
    border-radius: 0.5rem;
    border: 1px solid #f9fafc;
    background: #fff;
    left: 0;
    /*bottom: -60px;*/
    /* m4 */
    box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
}

.form-area-footer {
    margin-top: 4rem;
}
.group-inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}
.stops {
    color: #444854;
    font-family: "Product Sans";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 133.333% */
}
.activeDestType {
    border-bottom: 2px solid #89128a;
    color: #89128a !important;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem;
    font-family: "Product Sans";
}
.more-flight-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.duration {
    color: #1d1e2c;

    /* Body/16px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}
.dest {
    color: #444854;
    font-family: "Product Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 114.286% */
}

.logo-area {
    display: flex;
    width: 15.1875rem;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;
}

.flight-name {
    color: #444854;
    text-align: center;
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
}

.time {
    color: #1d1e2c;
    font-family: "Product Sans";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 133.333% */
}

.amount {
    color: #1d1e2c;
    text-align: center;
    /* Headings/20px/bold */
    font-family: "Product Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 140% */
    margin-bottom: 1.25rem;
}
.amount-book-area {
    border-radius: 0.25rem;
    background: #f9fafc;
    padding: 1.5rem;
    /* padding-right: 1.5rem; */
    height: inherit;
    /* height: 15.888rem; */
    display: flex;
    align-items: center;
    width: 15rem;
}
.breaker-2 {
    width: 85%;
    height: 0.1rem;
    background: #e5e9f2;
}
.actual-result-item {
    width: 100%;
    height: 7rem;
    flex-shrink: 0;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    background: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.details {
    margin: 2rem 0;
}

.logo {
    width: 2rem;
    height: 2rem;
    border-radius: 30%;
}

.actual-result-item-info {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
}

.actual-result {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.25rem;
    border: 1px solid #e5e9f2;
    height: auto;
    position: relative;
}

.one-round-way-multi-city {
    margin-top: 2rem;
}

.search-result-filter-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.filter-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1d1e2c;

    /* Body/16px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.filter-items {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.filter-items:hover ~ .filter-by-modal {
    display: flex;
}

.result-details {
    color: #2d3139;
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    margin-bottom: 1rem;
}

.seperator_1 {
    width: 0.0625rem;
    height: 2.5rem;
    border: 1px solid #eff2f7;
}

.and-filter-by {
    color: #6a8297;
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 100% */
}

.result-details-info {
    display: flex;
    justify-content: end;
    gap: 1rem;
    width: 100%;
}

.filter-by {
    /* display: flex;
  padding: 0rem 1rem;
  align-items: center;
  gap: 1.1875rem;
  border-radius: 1rem;
  border: 1px solid #EFF2F7;
  background:  #FFF; */

    display: flex;
    width: auto;
    padding: 0rem 1rem;
    align-items: center;
    gap: 1rem;
    border-radius: 0.25rem;
    border: 1px solid var(--dividers-borders-disabled-states, #eff2f7);
    background: var(--Color, #fff);
    cursor: pointer;
    color: #2d3139;
    font-family: "Product Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 114.286% */
}

.breaker1 {
    width: 100%;
    background: #dfe6ed;
    margin-top: 0.56rem;
}

.dest-abv {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    align-items: center;
}

.dest-abv-it {
    color: #1d1e2c;
    font-family: "Product Sans";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 133.333% */
}

.booking-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.search-info-area {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.search-info {
    display: flex;
    padding: 0.625rem 1.25rem;
    align-items: flex-start;
    width: auto !important;
    gap: 0.625rem;
    border-radius: 31.25rem;
    background: #eff2f7;
    color: #1d1e2c;
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
}

.flight-result {
    margin: 0 0;
    width: 90rem;
}

.destination_type {
    margin: 0 2rem;
    padding: 0.38rem;
    color: #1d1e2c;

    /* Headings/20px/bold */
    font-family: "Product Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 140% */
}

.booking-div-inner-wrapper {
    margin: 0.5rem;
    padding: 1.5rem;
}

.booking-nav-item {
    padding: 0.5rem;
    cursor: pointer;
    color: #201f1e;

    /* Body/16px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.booking-div {
    margin: 2.88rem 4.75rem;
}

.booking-nav {
    display: flex;
    border-bottom: 1px solid #e5e9f2;
    gap: 5rem;
}

.progress-or {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
}

.stage {
    color: #9da8b6;
    text-align: left;
    /* Body/16px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    margin-left: -2rem;
}

.activeProgress {
    background: #89128a !important;
}
.activeStage {
    color: #89128a !important;
}

.progress-or-item {
}

.circle {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    background: #e5e9f2;
    border-radius: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    /* Headings/20px/bold */
    font-family: "Product Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 140% */
}

.line {
    width: 9.8125rem;
    height: 0.25rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    background: #e5e9f2;
}

.spiralLines {
    width: inherit;
    height: inherit;
}

.breadcrumb-sub {
    height: 2.4rem;
    width: 20.4rem;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1.94rem;
    gap: 0.5rem;
}

.current-path-sub {
    color: #575a65;
    text-align: center;

    /* Body/16px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.create-booking-process {
    width: 68.125rem;
    height: auto;
    flex-shrink: 0;
    position: relative;
}

.one-way {
}

.travel_type_booking {
    width: 68.125rem;
    height: auto;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 1px solid #d8b0d8;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.2);
    position: relative;
}

@media (max-width: 1024px) {
    .travel_type_booking {
        width: 100% !important;
    }
}

.filter-div {
    background: #ffffff;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
}

.filter-span {
    color: #1d1e2c;
    font-family: "Product Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 171.429% */
}

.overall {
    display: flex;
    justify-content: center;
}

.filter {
    display: flex;
    gap: 1.25rem;
}

.search_filter {
    margin-top: 1rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.table-wrapper {
    overflow-x: scroll;
    width: 68.625rem;
}

.booking-wrapper {
    width: 68.625rem;
    height: 54rem;
    position: relative;
}

.search {
    display: flex;
    width: 19.4375rem;
    padding: 0.5rem 5rem 0.5rem 1.25rem;
    align-items: center;
    gap: 1.0625rem;
    flex-shrink: 0;
    outline: none;
    border-radius: 0.375rem;
    border: 0.6px solid #e5e9f2;
    background: #fff;
}

.create-booking {
    display: flex;
    padding: 0.8125rem 0.6875rem 0.8125rem 1.5rem;
    align-items: center;
    border-radius: 0.25rem;
    background: #f8f1f8;
    width: 15.9375rem;
    height: 5rem;
    gap: 0.75rem;
    cursor: pointer;
}

.create-booking-p {
    color: #1d1e2c;

    /* medium/input/16px */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.card-area {
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
    overflow-x: scroll;
    width: 100%;
}

.no-team-member-h {
    color: #0e0842;
    text-align: center;

    /* Headings/20px/bold */
    font-family: "Product Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 140% */
    text-transform: capitalize;
}

.no-team-member-sub {
    color: #575a65;
    text-align: center;

    /* Body/16px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.no-team-member-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
}

.no-team-member {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: 2.54rem;
    margin: 4rem;
}

@media (max-width: 1024px) {
    .card-area {
        overflow-x: scroll;
        width: 1024px;
    }

    .search_filter {
        flex-direction: column-reverse;
    }

    .search {
        width: 80%;
    }

    .filter {
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
    }

    .filter-div {
        width: 80%;
    }
    .filter-btn {
        width: 80% !important;
    }

    .booking-wrapper {
        width: 100%;
    }

    .table-wrapper {
        width: auto !important;
    }
}

::-webkit-scrollbar {
    display: none;
}
</style>
