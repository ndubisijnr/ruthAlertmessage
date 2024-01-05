<template>
    
    <div class="fliter_wrapper">
        <div>
            <div class="fliter_header">
                <p class="fliter"><span style="border-radius:.5rem;font-size:.8rem;padding:.5rem;background:rgba(0,250,0,0.32)"> Active ( {{getSearchParams.stops.length + getSearchParams.flexibility.length + getSearchParams.airlines.length}} )</span> <br />Fliter</p>
                <OnBoardingButton class="clear_all" btn-width="5rem" height="2rem" text-node="Clear all" @click="clearAll" />
            </div>
            <div class="breaker"></div>
            <div>
                <div class="fliter_header">
                    <p class="fliter">Price</p>
                    <!-- <p class="clear_all" @click="clear('price', [])">Clear</p> -->
                </div>
                <div>
                    <div class="item_layout" style="margin-bottom: 1rem;">
                        <input style="z-index: 1" type="range" @change="filterByAmount" id="filter_by_amount"
                            v-model="min_input_value" :min="getInputRange[getInputRange.length - 1]/2"
                            :max="getInputRange[getInputRange.length - 1]" />

                            <!-- <input type="range" id="filter_by_amount" @change="doFilter('price',max_input_value)" v-model="max_input_value"
                                :min="getInputRange[0]" :max="getInputRange[getInputRange.length - 1]/2" /> -->
                    </div>
                    <div class="range_value">
                      <div style="display: flex;gap: 0.5rem; ">
                        <p id="start_amount"></p>
                      </div>
                      <div v-if="getInputRange[getInputRange.length - 1] / 2 <= min_input_value">
                        <p id="end_amount">max: ₦ {{ min_input_value ? formatAmount(min_input_value) :
                            formatAmount(getInputRange[getInputRange.length - 1] / 2) }}</p>
                      </div>

                    </div>
                </div>
            </div>
            <div class="breaker"></div>
            <div>
                <div>
                    <div class="fliter_header">
                        <p class="fliter"><span style="border-radius:.5rem;font-size:.8rem;padding:.5rem;background:rgba(0,250,0,0.32)"> Active ( {{getSearchParams.stops.length}} )</span> <br />Stops</p>
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
                    <p class="fliter"><span style="border-radius:.5rem;font-size:.8rem;padding:.5rem;background:rgba(0,250,0,0.32)"> Active ( {{getSearchParams.airlines.length}} )</span> <br />Airlines</p>
                    <!-- <p class="clear_all" @click="clear('airlines', [])">Clear</p> -->
                </div>

                <div  v-for="(i,index) in fliterFuncComponents(getFlightResult, 'airline_details').all_airport" :key="index">
                    <div class="item_layout">
                        <input type="checkbox" @change="doFilter('airlines', i.code)" />
                        <span class="item_text">{{ i.name }}</span>
                    </div>


                </div>
            </div>

            <div class="breaker"></div>
            <div>
                <div class="fliter_header">
                    <p class="fliter"><span style="border-radius:.5rem;font-size:.8rem;padding:.5rem;background:rgba(0,250,0,0.32)"> Active ( {{getSearchParams.flexibility.length}} )</span> <br />Flexibility</p>
                    <!-- <p class="clear_all" @click="clear('flexibility', [])">Clear</p> -->
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
import OnBoardingButton from '../Buttons/OnBoardingButton.vue'
export default {
    name: "FlightFliter",
    components: { InputRange, OnBoardingButton },
    data() {
        return {
            fliterFlightResult: [],
            formatAmount,
            min_input_value: 0,
            max_input_value: 0,          
            // filterValue:[],
            // searchParams:[],
            // stops: []
        }
    },
    methods: {

        clearAll(){
            this.fliterFlightResult = [];
            Object.keys(this.getSearchParams).forEach(key => {
                this.getSearchParams[key] = []
            })
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');

            checkboxes.forEach((checkbox) => {
                checkbox.checked = false;
            });
            storeUtils.fireAway().flight?.commitFilteredFlightResult(this.fliterFlightResult);

        },

        clear(type, filterValue){
          storeUtils.fireAway().flight?.appendFilterType(type, filterValue)

          const checkboxes = document.querySelectorAll('input[type="checkbox"]');

          checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
          });
        },

        fliterFuncComponents(data) {
            // collect data
            let all_amount
            let all_airport = []

            if (!data) return 0

            all_amount = data.map(item => item.amount)

            function searchForAirlineDetails(data) {
                for (const key in data) {
                    if (typeof data[key] === 'object') {
                        if (key === 'airline_details' && !all_airport.map(i => i.name).includes(data[key].name)) {
                            // console.log(data[key])
                            let airline_data = {}
                            airline_data.name = data[key].name
                            airline_data.code = data[key].code

                            all_airport.push(airline_data);

                        }
                        searchForAirlineDetails(data[key]);
                    }
                }
            }
            searchForAirlineDetails(data);



            const results = { all_amount, all_airport }

            return results

        },
        filterByAmount() {
            const input = document.getElementById('filter_by_amount').value
            // const input2 = document.getElementById('filter_by_amount2').value

            console.log(input)

            document.getElementById('start_amount').textContent = input
            document.getElementById('end_amount').textContent = input.max
        },
    

    filterFlights(array, stopsFilter, airlineCodes, flexibility, prices) {
            const minPrice =this.min_input_value > 0 ? this.min_input_value : this.getInputRange[0];
            const maxPrice =this.max_input_value > 0 ? this.max_input_value : this.getInputRange[this.getInputRange.length - 1];
            return array.filter(flight => {
                // Check outbound stops
                const meetsStopsCriteria =
                !stopsFilter.length ||
                (stopsFilter.includes(flight.outbound_stops) || (stopsFilter.includes(2) && flight.outbound_stops >= 2))

                // Check operating airline
                const meetsAirlineCriteria =
                !airlineCodes.length ||
                (flight.outbound.length > 0 && airlineCodes.includes(flight.outbound[0].operating_airline));


                // Check flexibility
                const meetFlexibility = 
                !flexibility.length || (flight.outbound.length > 0 && flexibility.includes(flight.outbound[0].refundable))

                // // Check Prize
                // const meetPrize = 
                // !prices || (prices >= minPrice && prices <= maxPrice)

                // Return true only if both criteria are met
                return meetsStopsCriteria && meetsAirlineCriteria && meetFlexibility;

            });
        },


        doFilter(type, filterValue) {
          const data = this.getFlightResult
          storeUtils.fireAway().flight?.appendFilterType(type, filterValue)

          console.log(type, filterValue)

          this.fliterFlightResult = this.filterFlights(data, this.getSearchParams.stops, this.getSearchParams.airlines, this.getSearchParams.flexibility)

          storeUtils.fireAway().flight?.commitFilteredFlightResult(this.fliterFlightResult)

        },

        //  doFilter(type, filterValue) {
        //   let data;
        //   const flightToRemove = []

        //   if(type === 'stops' && !this.stops.includes(filterValue)) this.stops.push(filterValue)
        //   else this.stops = this.stops.filter((a) => {return a !== filterValue})

        //   if (!this.searchParams.includes(type)) this.searchParams.push(type); // push flight code values;

        //   data = this.searchParams.length > 1 ? this.getFilteredFlight : this.getFlightResult // checks if there is an active filter

        //   if (type === 'airlines') {

        //     if (!this.filterValue.includes(filterValue)) {
        //       this.filterValue.push(filterValue); // push flight code values
        //     } else {
        //       this.fliterFlightResult = [];
        //       this.filterValue = this.filterValue.filter(it => it !== filterValue);
        //     }

        //     if(this.filterValue.length === 0) this.searchParams = []


        //     this.fliterFlightResult = data.filter(flight =>
        //         this.filterValue.includes(flight.outbound[0]?.operating_airline)
        //     );


        //     // console.log(this.filterValue)
        //     console.log(this.fliterFlightResult) // array


        //   }

        //   if (type === 'flexibility') {
        //     this.fliterFlightResult = data.filter(it =>  {
        //       if(it.outbound[0].refundable === filterValue) {
        //         const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
        //         if (!isDuplicate) {
        //           storeUtils.fireAway().flight?.commitFilteredFlightResult(this.fliterFlightResult);
        //         } else {
        //           console.log(this.getFilteredFlight);
        //           flightToRemove.push(it)
        //           this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
        //             return a.id !== it.id
        //           })
        //           storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)
        //         }

        //       }
        //     });

        //     console.log(this.fliterFlightResult) // array



        //     // if (Array.isArray(data)) {
        //     //       data.filter((it) => {
        //     //           //check if airline is not already in array
        //     //           if (it.outbound.find(it => it.refundable == filterValue) || it.inbound.find(it => it.refundable == filterValue)) {
        //     //               const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
        //     //               console.log(it.outbound)
        //     //               if (!isDuplicate) {
        //     //                   storeUtils.fireAway().flight?.commitFilteredFlightResult(it)
        //     //
        //     //               } else {
        //     //                   console.log(this.getFilteredFlight);
        //     //
        //     //                   flightToRemove.push(it)
        //     //                   this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
        //     //                       return a.id !== it.id
        //     //                   })
        //     //                   storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)
        //     //               }
        //     //
        //     //           }
        //     //
        //     //       })
        //     //
        //     //
        //     //   }
        //   }

        //   if (type === 'stops') {

        //       if(this.stops.length === 0) {
        //         this.searchParams = this.searchParams.filter(it => {return it !== 'stops'})
        //         this.fliterFlightResult = []
        //         storeUtils.fireAway().flight?.commitFilteredFlightResult(this.fliterFlightResult);
        //       }
        //       else{
        //         console.log(data)
        //         this.fliterFlightResult = data.filter(it =>
        //         this.stops.includes(it.outbound_stops))

        //         console.log(this.fliterFlightResult)
               
        //       }



        //       // if (Array.isArray(data)) {
        //       //     data.find((it) => {
        //       //         //more than 1 stops
        //       //         if(it.outbound_stops == filterValue || it.outbound_stops > filterValue){
        //       //             const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
        //       //             if (!isDuplicate) {
        //       //                 storeUtils.fireAway().flight?.commitFilteredFlightResult(it)
        //       //             } else {
        //       //                 flightToRemove.push(it)
        //       //                 this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
        //       //                     return a.id !== it.id
        //       //                 })
        //       //                 storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)
        //       //
        //       //             }
        //       //         }
        //       //
        //       //     })
        //       //
        //       //
        //       //
        //       //
        //       //
        //       //     console.log(this.fliterFlightResult)
        //       // }
        //   }

        //   if (type === 'price') {
        //     const minPrice =this.min_input_value > 0 ? this.min_input_value : this.getInputRange[0];
        //     const maxPrice =this.max_input_value > 0 ? this.max_input_value : this.getInputRange[this.getInputRange.length - 1];

        //     console.log(minPrice, maxPrice)

        //     if (Array.isArray(data)) {
        //         data.filter((it) => {
        //             const amount = it.amount;
        //             console.log(amount)
        //             if (amount >= minPrice && amount <= maxPrice) {
        //                 const isDuplicate = this.getFilteredFlight.some(it_duplicate => it.id === it_duplicate.id)
        //                 if(!isDuplicate){
        //                     storeUtils.fireAway().flight?.commitFilteredFlightResult(it);
        //                 }
        //                 else{
        //                     this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
        //                         return a.id !== it.id
        //                     })
        //                     storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)
        //                 }
        //             }
        //         });

        //         // Now, commit the filtered flight results, for example:

        //     }
        //   }


        // },

        //filterFlightsByAirlineCode
       
        filterFlightsByAirlineCode(flights, airlineCodes) {
        if(Array.isArray(flights)){
          return flights.filter(flight => {
            const airlineCode = flight.outbound[0]?.airline_details?.code;
            return airlineCode && airlineCodes.includes(airlineCode);
          });
        }

      },

      gtpOwn(filterValue){
          const originalFlights =[...this.getFlightResult];

          if(!this.filterValue.includes(filterValue)){
            this.filterValue.push(filterValue); // push flight code values
            } else{
                this.fliterFlightResult = []
                this.filterValue = this.filterValue.filter(it => {
                      return it !== filterValue
                })
                storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)
            }


          const selectedAirlineCodes = this.filterValue;
          this.fliterFlightResult = this.filterFlightsByAirlineCode(originalFlights, selectedAirlineCodes);
          storeUtils.fireAway().flight?.commitFilteredFlightResult(this.fliterFlightResult);

        console.log(this.filterValue)
          console.log(this.fliterFlightResult)

          // if(!this.filterValue.includes(filterValue)) {
          //   this.filterValue.push(filterValue)
          // }else{
          //   this.filterValue = this.filterValue.filter(it => {
          //     return it !== filterValue
          //   })
          //   storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)
          // };

          //
          // console.log(selectedAirlineCodes)
          //
          // const isDuplicate = this.getFilteredFlight.some(it_duplicate => filteredFlights.id === it_duplicate.id)
          // if (!isDuplicate) {
          //   storeUtils.fireAway().flight?.commitFilteredFlightResult(filteredFlights);
          //
          // } else {
          //   this.fliterFlightResult = this.getFilteredFlight.filter((a) => {
          //     return a.id !== filteredFlights0.id
          //   })
          //   storeUtils.fireAway().flight?.deleteFliteredFlightResult(this.fliterFlightResult)
          // }




        }

    },
    computed: {
        getFlightResult() {
            return JSON.parse(localStorage?.flightResults)
        },



        getInputRange() {
            let amount = this.getFlightResult.map(it => it.amount)
            amount.sort(function (a, b) {
                return a - b
            })
            return amount
        },

        getFlightModel(){
            return localStorage?.flightModel
        },

        

        getFilteredFlight() {
            return storeUtils.fireAway().flight?.getFilteredFlight
        },

        getSearchParams(){
            return storeUtils.fireAway().flight?.getSearchParams
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
    margin-bottom:.8rem;
    margin-top: .2rem;
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
  cursor: pointer;
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