<template>
    <div class="fliter_wrapper">
        <div>
            <div class="fliter_header">
                <p class="fliter">Fliter</p>
                <p class="clear_all">Clear all</p>
            </div>
            <div class="breaker"></div>
            <div>
                <div class="fliter_header">
                    <p class="fliter">Price</p>
                    <p class="clear_all">Clear</p>
                </div>
                <div>
                    <div class="item_layout" style="margin-bottom: 1rem;">
                      <input type="range" id="filter_by_amount" @change="doFilter('price')" v-model="max_input_value"
                             :min="getInputRange[0]" :max="getInputRange[getInputRange.length - 1]" />
                        <input style="z-index: 1" type="range" @change="doFilter('price')" id="filter_by_amount"
                            v-model="min_input_value" :min="10000"
                            :max="getInputRange[0]" />

                    </div>
                    <div class="range_value">
                      <div style="display: flex;gap: 0.5rem; ">
                        <p id="start_amount">min: ₦ {{ min_input_value ? formatAmount(min_input_value) :
                            formatAmount(getInputRange[0]) }}</p>
                        <!--                            <div style="display: flex;gap: 0.5rem;"-->
                        <!--                                v-if="getInputRange[getInputRange.length - 1] / 2 >= min_input_value">-->
                        <!--                                <p>-</p>-->
                        <!--                                <p id="start_amount">₦ {{ min_input_value ? formatAmount(min_input_value) :-->
                        <!--                                    formatAmount(getInputRange[0]) }}</p>-->
                        <!--                            </div>-->
                      </div>
                      <div v-if="getInputRange[getInputRange.length - 1] / 2 <= min_input_value">
                        <p id="end_amount">max: {{ max_input_value ? formatAmount(max_input_value) :
                            formatAmount(getInputRange[getInputRange.length - 1]) }}</p>
                      </div>

                    </div>
                </div>
            </div>
            <div class="breaker"></div>
            <div>
                <div>
                    <div class="fliter_header">
                        <p class="fliter">Stops</p>
                        <p class="clear_all">Clear</p>
                    </div>
                    <div class="item_layout">
                        <input type="checkbox" @change="doFilter('stops', 0)" />
                        <span class="item_text">No stops</span>
                    </div>
                    <div class="item_layout">
                        <input type="checkbox" @change="doFilter('stops', 1)" />
                        <span class="item_text">1 stops</span>
                    </div>
                    <div class="item_layout">
                        <input type="checkbox" @change="doFilter('stops', 2)" />
                        <span class="item_text">more than 1 stops</span>
                    </div>
                </div>

                <div class="breaker"></div>
                <div class="fliter_header">
                    <p class="fliter">Airlines</p>
                    <p class="clear_all">Clear</p>
                </div>

                <div v-for="i in fliterFuncComponents(getFlightResult, 'airline_details').all_airport">
                    <div class="item_layout">
                        <input type="checkbox" @change="doFilter('airlines', i)" />
                        <span class="item_text">{{ i }}</span>
                    </div>


                </div>
            </div>

            <div class="breaker"></div>
            <div>
                <div class="fliter_header">
                    <p class="fliter">Flexibility</p>
                    <p class="clear_all">Clear</p>
                </div>
                <div class="item_layout">
                    <input type="checkbox" @change="doFilter('flexibility', true)" />
                    <span class="item_text">Refundable</span>
                </div>
                <div class="item_layout">
                    <input type="checkbox" @change="doFilter('flexibility', false)" />
                    <span class="item_text">Non Refundable</span>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
// import storeUtils from '../../utils/storeUtils';
import InputRange from '../Inputs/InputRange.vue'
// import { RuthdoAlert } from 'ruthly'
import { formatAmount } from '../../mixins/flightUtil'
import storeUtils from '../../utils/storeUtils'
export default {
    name: "FlightFliter",
    components: { InputRange },
    data() {
        return {
            fliterFlightResult: [],
            formatAmount,
            min_input_value: 0,
            max_input_value: 0,
        }
    },
    methods: {

        fliterFuncComponents(data) {
            // collect data
            let all_amount
            let all_airport = []

            if (!data) return 0

            all_amount = data.map(item => item.amount)

            function searchForAirlineDetails(data) {
                for (const key in data) {
                    if (typeof data[key] === 'object') {
                        if (key === 'airline_details' && !all_airport.includes(data[key].name)) {
                            // console.log(data[key])

                            all_airport.push(data[key].name);
                        }
                        searchForAirlineDetails(data[key]);
                    }
                }
            }
            searchForAirlineDetails(data);



            const results = { all_amount, all_airport }

            return results

        },


        fliterFunction(value) {


            const targetValue = value; // The value you want to find
            const obj = this.getFlightResult
            const fliteredObj = []

            function fliterValue(obj) {
                for (let i in obj) {
                    if (obj[i] == targetValue) {
                        fliteredObj.push(obj[i])
                    } else {
                        fliterValue(obj[i])


                    }
                }
            }

            fliterValue(obj)
            console.log(obj)
            console.log(fliteredObj)

        },

        doFilter(type, filterValue) {
            const data = this.getFlightResult
            const flightToRemove = []
            // args is an array of arguments
            if (type == 'airlines') {
                if (Array.isArray(data)) {

                    data.filter((it) => {
                        //check if airline is not already in array
                        function checkd_uplicate() {

                        }
                        if (it.outbound.find(it => it.airline_details.name === filterValue)|| it.inbound.find(it => it.airline_details.name === filterValue)) {
                            
                            const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
                            if (!isDuplicate) {
                                storeUtils.fireAway().flight?.commitFilteredFlightResult(it)
                                
                            } else {
                                flightToRemove.push(it)
                                this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
                                    return a.id !== it.id
                                })
                                storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)
                            }
                        }

                    })
                    console.log(this.fliterFlightResult)
                }
            }


            if (type == 'flexibility') {
                if (Array.isArray(data)) {
                    data.filter((it) => {
                        //check if airline is not already in array
                        if (it.outbound.find(it => it.refundable == filterValue) || it.inbound.find(it => it.refundable == filterValue)) {
                            const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
                            console.log(it.outbound)
                            if (!isDuplicate) {
                                storeUtils.fireAway().flight?.commitFilteredFlightResult(it)

                            } else {
                                console.log(this.getFilteredFlight);

                                flightToRemove.push(it)
                                this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
                                    return a.id !== it.id
                                })
                                storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)
                            }

                        } 

                    })


                }
            }


            if (type == 'stops') {
                console.log(filterValue)
                if (Array.isArray(data)) {
                    data.find((it) => {
                        //more than 1 stops
                        if(it.outbound_stops == filterValue || it.inbound_stops == filterValue){
                            const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
                            if (!isDuplicate) {
                                storeUtils.fireAway().flight?.commitFilteredFlightResult(it)
                            } else {
                                flightToRemove.push(it)
                                this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
                                    return a.id !== it.id
                                })
                                storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)

                            }
                        }
                        
                        if(it.outbound_stops > filterValue || it.inbound_stops > filterValue){
                            if (!isDuplicate) {
                                storeUtils.fireAway().flight?.commitFilteredFlightResult(it)
                            } else {
                                flightToRemove.push(it)
                                this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
                                    return a.id !== it.id
                                })
                                storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)

                            }
                        }
                        

                        // if (it.outbound_stops == filterValue || it.inbound_stops == filterValue) {
                        //     console.log('true //no stops', filterValue, it.outbound_stops, it.inbound_stops)
                        //     const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
                        //     if (!isDuplicate) {
                        //         storeUtils.fireAway().flight?.commitFilteredFlightResult(it)
                        //     } else {
                        //         flightToRemove.push(it)
                        //         this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
                        //             return a.id !== it.id
                        //         })
                        //         storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)

                        //     }
                        // }
                        // else if(it.outbound_stops < filterValue || it.inbound_stops < filterValue){
                        //     console.log('true //no stops', filterValue, it.outbound_stops, it.inbound_stops)
                        //     const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
                        //     if (!isDuplicate) {
                        //         storeUtils.fireAway().flight?.commitFilteredFlightResult(it)
                        //     } else {
                        //         flightToRemove.push(it)
                        //         this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
                        //             return a.id !== it.id
                        //         })
                        //         storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)

                        //     }
                        // }
                        
                        // else{
                        //     console.log('true //no stops', filterValue, it.outbound_stops, it.inbound_stops)
                        //     const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
                        //     if (!isDuplicate) {
                        //         storeUtils.fireAway().flight?.commitFilteredFlightResult(it)
                        //     } else {
                        //         flightToRemove.push(it)
                        //         this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
                        //             return a.id !== it.id
                        //         })
                        //         storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)

                        //     }
                        // }
                        // else {
                        //     if (it.outbound_stops == filterValue || it.inbound_stops == filterValue) {
                        //         console.log('true  // 1 stops', filterValue)
                        //         const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
                        //         if (!isDuplicate) {
                        //             storeUtils.fireAway().flight?.commitFilteredFlightResult(it)
                        //         } else {
                        //             flightToRemove.push(it)
                        //             this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
                        //                 return a.id !== it.id
                        //             })
                        //             storeUtils.fireAway().flight?.commitFilteredFlightResult(this.fliterFlightResult)
                        //         }
                        //     } else { }

                        //     if (it.outbound_stops == filterValue || it.inbound_stops == filterValue) {
                        //         console.log('true  //more than 1 stops', filterValue)
                        //         const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
                        //         if (!isDuplicate) {
                        //             storeUtils.fireAway().flight?.commitFilteredFlightResult(it)
                        //         } else {
                        //             flightToRemove.push(it)
                        //             this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
                        //                 return a.id !== it.id
                        //             })
                        //             storeUtils.fireAway().flight?.commitFilteredFlightResult(this.fliterFlightResult)

                        //         }
                        //     } else { }


                        // }

                        //    return this.fliterFlightResult.push()

                    })





                    console.log(this.fliterFlightResult)
                }
            }


            if (type == 'price') {
              const minPrice =this.min_input_value > 0 ? this.min_input_value : this.getInputRange[0];
              const maxPrice =this.max_input_value > 0 ? this.max_input_value : this.getInputRange[this.getInputRange.length - 1];

              console.log(minPrice, maxPrice)


                if (Array.isArray(data)) {
                    data.filter((it) => {
                        const amount = it.amount;
                        console.log(amount)
                        if (amount >= minPrice && amount <= maxPrice) {
                            const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
                            if(!isDuplicate){
                                storeUtils.fireAway().flight?.commitFilteredFlightResult(it);
                            }
                            else{
                                this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
                                    return a.id !== it.id
                                })
                                storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)
                            }
                        }
                    });

                    // Now, commit the filtered flight results, for example:

                }
            }
        }


    },
    computed: {
        getFlightResult() {
            const flightResult = JSON.parse(localStorage?.flightResults)
            return flightResult
        },

        getInputRange() {
            let amount = this.getFlightResult.map(it => it.amount)
            amount.sort(function (a, b) {
                return a - b
            })
            return amount
        },

        filterByAmount() {
            const input = document.getElementById('filter_by_amount').value
            document.getElementById('start_amount').textContent = input.min
            document.getElementById('end_amount').textContent = input.max
        },

        getFilteredFlight() {

            return storeUtils.fireAway().flight?.getFilteredFlight
        }





    },

    mounted() {

        // this.filterByAmount()
        // this.filterObject(this.getFlightResult, 'Aero Contractors')
    }
}
</script>
<style scoped>
@import './input_range.css';


input[type=checkbox] {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    border: 0.5rem solid #C0CCDA;
}

.item_text {
    color: var(--black-text-04, #575A65);
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
}

.item_layout {
    display: flex;
    gap: 1rem;
    align-items: center;
    position: relative;
    margin-bottom: 0.5rem;
}

.fliter_header {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
}

.fliter_wrapper {
    display: inline-flex;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #D5E2EE;
    background: #FFF;
    width: 18.5rem;
    height: auto;
    margin: 0 0 1rem 0;

}

.fliter {
    color: var(--black-text-01, #1D1E2C);
    /* Body/18px/Regular */
    font-family: 'Product Sans';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem;
    /* 166.667% */
}

.clear_all {
    color: var(--primary-main, #2C6CAC);

    /* Body/18px/Regular */
    font-family: 'Product Sans';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem;
    /* 166.667% */
}

.breaker {
    width: 16.5rem;
    height: 0.0625rem;
    background: #DFE6ED;
}

.range_value {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}</style>