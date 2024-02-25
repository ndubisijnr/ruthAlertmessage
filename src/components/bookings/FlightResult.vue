<template>

    <booking-index v-slot:booking_children>
        <div class="flight-result animate__animated animate__fadeIn">
            <div class="breaker1"></div>

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
        return {
            
        };
    },
    methods: {
       
    },

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

        getSelectedFlight(){
            return storeUtils.fireAway().flight.getSelectedFlight
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
        // storeUtils.fireAway().flight.handleConfirmBookingPrice(this.get.id)

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

::-webkit-scrollbar {
    display: none;
}

@media (max-width: 1024px) {
  .travel_type_booking {
    width: 100% !important;
  }

  .flight-result {
    margin: 0 0;
    width: 100%;
  }
  .result_area {
    width: 100%;
  }
}
</style>
