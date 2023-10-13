<template>
    <Index v-slot:children>
        <div>
            <div>
                <h3 class="user-name">Flight Bookings</h3>
            </div>

            <div class="card_wrapper">
                <div class="flight_booking_card">
                    <p class="top_1">Total Booking Orders</p>
                    <p class="top_2">{{ getAgentSummary?.total_bookings }}</p>
                   
                </div>
                <div class="flight_booking_card">
                    <p class="top_1">Unissued Flight</p>
                    <p class="top_2">{{ getAgentSummary?.total_reserved }}</p>
                </div>
            </div>


            <div>
                <div class="min_card_history">
                    <div class="min_card_header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.0005 7.20035C12.7005 7.20035 13.4005 7.47035 13.9305 8.00035L20.4505 14.5204C20.7405 14.8104 20.7405 15.2904 20.4505 15.5804C20.1605 15.8704 19.6805 15.8704 19.3905 15.5804L12.8705 9.06035C12.3905 8.58035 11.6105 8.58035 11.1305 9.06035L4.61047 15.5804C4.32047 15.8704 3.84047 15.8704 3.55047 15.5804C3.26047 15.2904 3.26047 14.8104 3.55047 14.5204L10.0705 8.00035C10.6005 7.47035 11.3005 7.20035 12.0005 7.20035Z" fill="#292D32"/>
                        </svg>
                        <p class="text_1">Unissued Flights</p>
                    </div>
                    <div style="padding: 1.5rem;">
                        <div style="margin-bottom:1.5rem;min-height:12rem;border-bottom: 1px solid var(--secondarytext-default-text-textfield, #E5E9F2);">
                            <p class="time_line">Today </p>
                    
                            <div v-for="i in getAgentsBooking">   
                
                            <div v-if="formattedDate(i.created_at) === today(i.created_at)">
                            
                                <div style="display: flex;justify-content: space-between;align-items: center;">
                                        <div class="unissued_item">
                                            <p class="time_booked">{{ i.created_at.split("T")[0] }}</p>
                                            
                                            <span class="time_booked"><span class="details">{{ i.contact_first_name }} {{ i.contact_last_name }}</span> made a new flight booking for a {{JSON.parse(i.flight).inbound.length  > 0 ? 'round' : 'one way'}} trip.</span>
                                        </div>

                                        <div style="display: flex;justify-content: space-between;align-items: center;gap:0.5rem">
                                            <OnBoardingButton btn-width="8rem" height="3rem" text-node="View Details" border="none" color="#2C6CAC" background="transparent"></OnBoardingButton>
                                            <OnBoardingButton btn-width="8rem" height="3rem" text-node="Issue Ticket"></OnBoardingButton>

                                        </div>
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div style="margin-bottom:1.5rem;min-height:12rem;border-bottom: 1px solid var(--secondarytext-default-text-textfield, #E5E9F2);">
                            <p class="time_line">Unissued Flight History</p>
                            <div v-for="i in getAgentsBooking">  
                                
                                
                                <div v-if="formattedDate(i.created_at) !== today(i.created_at)">
                                
                                    <div style="display: flex;justify-content: space-between;align-items: center;">
                                        <div class="unissued_item">
                                            <p class="time_booked">{{ convertToWord(i.created_at) }}</p>
                                            
                                            <span class="time_booked"><span class="details">{{ i.contact_first_name }} {{ i.contact_last_name }}</span> made a new flight booking for a {{JSON.parse(i.flight).inbound.length  > 0 ? 'round' : 'one way'}} trip.</span>
                                        </div>

                                        <div style="display: flex;justify-content: space-between;align-items: center;gap:0.5rem">
                                            <OnBoardingButton btn-width="8rem" height="3rem" text-node="View Details" border="none" color="#2C6CAC" background="transparent"></OnBoardingButton>
                                            <OnBoardingButton btn-width="8rem" height="3rem" text-node="Issue Ticket"></OnBoardingButton>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                
                       
                       
                    </div>
                </div>

                <div class="min_card_history">
                    <div class="min_card_header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.0005 7.20035C12.7005 7.20035 13.4005 7.47035 13.9305 8.00035L20.4505 14.5204C20.7405 14.8104 20.7405 15.2904 20.4505 15.5804C20.1605 15.8704 19.6805 15.8704 19.3905 15.5804L12.8705 9.06035C12.3905 8.58035 11.6105 8.58035 11.1305 9.06035L4.61047 15.5804C4.32047 15.8704 3.84047 15.8704 3.55047 15.5804C3.26047 15.2904 3.26047 14.8104 3.55047 14.5204L10.0705 8.00035C10.6005 7.47035 11.3005 7.20035 12.0005 7.20035Z" fill="#292D32"/>
                        </svg>
                        <p class="text_1">Flights History</p>
                    </div>
                    <div>
                        
                      
                        <DomainTable :data="getAgentsBooking" :fields="flight_history_data" emptyMessage="No Flight Bookings Found">
                            <template v-slot:emptyIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                            <path d="M0 75C0 94.8912 7.90176 113.968 21.967 128.033C36.0322 142.098 55.1088 150 75 150C94.8912 150 113.968 142.098 128.033 128.033C142.098 113.968 150 94.8912 150 75C150 55.1088 142.098 36.0322 128.033 21.967C113.968 7.90176 94.8912 0 75 0C55.1088 0 36.0322 7.90176 21.967 21.967C7.90176 36.0322 0 55.1088 0 75Z" fill="#F1F2F6"/>
                            <path d="M10.6561 27.1094L87.6427 4.50355L117.129 104.923L40.1425 127.529L10.6561 27.1094Z" fill="white" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25.8756 11.1797H106.114V115.837H25.8756V11.1797Z" fill="white" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M36.343 21.6484H95.6493V32.1147H36.343V21.6484Z" fill="#E5E9F2" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M57.2729 49.5547H71.2285" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M57.2729 56.5312H88.6717" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M57.2729 63.5078H79.9754" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M57.2729 84.4414H74.716" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M57.2729 91.418H92.1592" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M57.2729 98.3984H85.1823" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39.6538 62.352V57.726H38.2498V56.574H39.6538V55.098H38.2498V53.946H39.6538V49.5H41.5258L43.2358 53.946H45.3598V49.5H46.7818V53.946H48.1858V55.098H46.7818V56.574H48.1858V57.726H46.7818V62.352H44.8918L43.1818 57.726H41.0578V62.352H39.6538ZM41.0218 53.946H41.7778L41.0218 51.714H40.9498L41.0218 53.946ZM41.0578 56.574H42.7498L42.2098 55.098H41.0218L41.0578 56.574ZM44.1898 56.574H45.3958L45.3598 55.098H43.6498L44.1898 56.574ZM45.3598 59.814H45.4318L45.3778 57.726H44.6218L45.3598 59.814Z" fill="#1D1E2C"/>
                            <path d="M39.6538 98.352V93.726H38.2498V92.574H39.6538V91.098H38.2498V89.946H39.6538V85.5H41.5258L43.2358 89.946H45.3598V85.5H46.7818V89.946H48.1858V91.098H46.7818V92.574H48.1858V93.726H46.7818V98.352H44.8918L43.1818 93.726H41.0578V98.352H39.6538ZM41.0218 89.946H41.7778L41.0218 87.714H40.9498L41.0218 89.946ZM41.0578 92.574H42.7498L42.2098 91.098H41.0218L41.0578 92.574ZM44.1898 92.574H45.3958L45.3598 91.098H43.6498L44.1898 92.574ZM45.3598 95.814H45.4318L45.3778 93.726H44.6218L45.3598 95.814Z" fill="#1D1E2C"/>
                            <path d="M142.443 131.664C143.059 132.265 143.551 132.983 143.888 133.775C144.225 134.567 144.402 135.419 144.408 136.28C144.413 137.141 144.248 137.995 143.921 138.792C143.594 139.589 143.112 140.312 142.503 140.921C141.894 141.53 141.17 142.013 140.374 142.34C139.577 142.667 138.723 142.832 137.862 142.827C137.001 142.821 136.149 142.645 135.357 142.308C134.565 141.971 133.847 141.479 133.246 140.863L115.996 123.613L125.195 114.414L142.443 131.664Z" fill="#E5E9F2"/>
                            <path d="M142.443 131.664C143.059 132.265 143.551 132.983 143.888 133.775C144.225 134.567 144.402 135.419 144.408 136.28C144.413 137.141 144.248 137.995 143.921 138.792C143.594 139.589 143.112 140.312 142.503 140.921C141.894 141.53 141.17 142.013 140.374 142.34C139.577 142.667 138.723 142.832 137.862 142.827C137.001 142.821 136.149 142.645 135.357 142.308C134.565 141.971 133.847 141.479 133.246 140.863L115.996 123.613L125.195 114.414L142.443 131.664Z" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M106.795 109.82L111.393 105.22L122.894 116.718L118.295 121.318L106.795 109.82Z" fill="white" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M112.549 69.5753C116.643 73.6688 119.43 78.8843 120.56 84.5623C121.689 90.2403 121.11 96.1257 118.894 101.474C116.679 106.823 112.927 111.394 108.114 114.611C103.3 117.827 97.641 119.544 91.8517 119.544C86.0625 119.544 80.4033 117.827 75.5898 114.611C70.7762 111.394 67.0245 106.823 64.8091 101.474C62.5937 96.1257 62.0141 90.2403 63.1436 84.5623C64.2731 78.8843 67.0609 73.6688 71.1546 69.5753C76.6443 64.087 84.0891 61.0039 91.8517 61.0039C99.6144 61.0039 107.059 64.087 112.549 69.5753Z" fill="white" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M106.796 75.3251C109.752 78.2815 111.766 82.048 112.581 86.1485C113.397 90.249 112.978 94.4993 111.378 98.3619C109.778 102.224 107.069 105.526 103.593 107.849C100.116 110.171 96.0293 111.411 91.8485 111.411C87.6677 111.411 83.5807 110.171 80.1045 107.849C76.6282 105.526 73.9188 102.224 72.3189 98.3619C70.7189 94.4993 70.3003 90.249 71.1159 86.1485C71.9315 82.048 73.9447 78.2815 76.901 75.3251C78.8638 73.3619 81.1941 71.8046 83.7588 70.7422C86.3235 69.6797 89.0724 69.1328 91.8485 69.1328C94.6246 69.1328 97.3735 69.6797 99.9382 70.7422C102.503 71.8046 104.833 73.3619 106.796 75.3251Z" fill="#E5E9F2"/>
                            <path d="M106.796 75.3251C109.752 78.2815 111.766 82.048 112.581 86.1485C113.397 90.249 112.978 94.4993 111.378 98.3619C109.778 102.224 107.069 105.526 103.593 107.849C100.116 110.171 96.0293 111.411 91.8485 111.411C87.6677 111.411 83.5807 110.171 80.1045 107.849C76.6282 105.526 73.9188 102.224 72.3189 98.3619C70.7189 94.4993 70.3003 90.249 71.1159 86.1485C71.9315 82.048 73.9447 78.2815 76.901 75.3251C78.8638 73.3619 81.1941 71.8046 83.7588 70.7422C86.3235 69.6797 89.0724 69.1328 91.8485 69.1328C94.6246 69.1328 97.3735 69.6797 99.9382 70.7422C102.503 71.8046 104.833 73.3619 106.796 75.3251Z" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M48.325 140.588C48.325 141.631 51.3624 142.631 56.7691 143.368C62.1757 144.106 69.5088 144.52 77.155 144.52C84.8011 144.52 92.1342 144.106 97.5408 143.368C102.948 142.631 105.985 141.631 105.985 140.588C105.985 139.545 102.948 138.545 97.5408 137.808C92.1342 137.07 84.8011 136.656 77.155 136.656C69.5088 136.656 62.1757 137.07 56.7691 137.808C51.3624 138.545 48.325 139.545 48.325 140.588Z" fill="#E5E9F2"/>
                            </svg>
                    </template>
                        
                        </DomainTable>
                    </div>
                </div>
            </div>

        

    </Index>

</template>

<script>
import Index from '../../views/travelAgents/Index.vue';
import BookingsCards from '../bookings/BookingsCards.vue';
import DomainTable from '../tables/DomainTable.vue';
import storeUtils from '../../utils/storeUtils';
import BookingsRequest from '../../model/BookingsRequest';
import OnBoardingButton from '../Buttons/OnBoardingButton.vue';
import { convertToWord } from '../../mixins/lettersExtractor';

export default{
    name:"Flight_Bookings",
    components:{OnBoardingButton},

    data(){
        return{
            flight_history_data:[
                    {key:"", label:"Customer’s Name"},
                    {key:"amount", label:"Ticket Amount"},
                    {key:"id", label:"Ticket ID"},
                    {key:"", label:"Airline"},
                    {key:"created_at", label:"Booking Date"},
                    {key:"status", label:"Status_"},
                ],
            bookingModel:BookingsRequest.bookingSummary,
            convertToWord
        }
      
    },

    components:{
    Index,
    BookingsCards,
    DomainTable,
    OnBoardingButton
},

    methods:{
        today(){
            if(this.getAgentsBooking){
                const currentDate = new Date()
                return currentDate.getTime()
            }
        },

        formattedDate(bookingDate){
            return new Date(bookingDate).getTime()
        }
    },

    computed:{
        yesterday(bookingDate){
            if(this.getAgentsBooking && bookingDate){
                const currentDate = new Date()
                const date = new Date(bookingDate)
                date.setDate(currentDate.getDate() -1)
                return date
            }
        },
        
        getAgentsBooking(){
            const bookings = storeUtils.fireAway().booking?.getAgentBookings?.data
            return bookings
        },

        getAgentSummary(){
            return storeUtils.fireAway().booking?.getAgentSummary
        }
    },

    mounted(){
        
        const user_id= JSON.parse(localStorage.travelAgent)
        this.bookingModel.booking_status = 'reserved'
        storeUtils.fireAway().booking.getAllAgentBooking(this.bookingModel, user_id.id)
        storeUtils.fireAway().booking.getAllAgentSummary('', user_id.id)

        
       
    }

}

</script>

<style scoped>
.time_booked{
    color: var(--text-main-light-8-body, #393A4A);
    /* medium/14px */
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 171.429% */
}

.time_line{
    color: var(--neutrals-onlock-back, #4A5361);

    /* Headings/18px/Medium */
    font-family: 'Product Sans';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.625rem; /* 144.444% */
}

.details{
    color: var(--black-text-01, #1D1E2C);
    /* 16px/bold */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 175% */
}
.user-name{
  color: #000;
  /* Headings/32px/bold */
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.625rem; /* 131.25% */
  text-transform: capitalize;
}

.unissued_item{
    display: flex;
    padding-bottom: 0px;
    align-items: center;
    gap: 1rem;
    width: 34rem;
    margin: 1.5rem 0;
}

.top_1{
    color: var(--black-text-03, #444854);
font-family: 'Product Sans';
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.text_1{
    color: var(--neutrals-onlock-berry, #1D242E);
    /* 16px/bold */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 175% */
}

.top_2{
    color: var(--black-text-03, #444854);
font-family: 'Product Sans';
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.min_card_history{
    margin: 2.5rem 0;
    background-color: #FFF;
}

.min_card_header{
    display: flex;
    gap:0.75rem;
    align-items: center;
    padding: 1.25rem 1.25rem 1.25rem 1.5rem;
    background-color: #EFF2F7;
    margin: 1rem 0;
}

.card_wrapper{
    display: flex;
    gap: 1.5rem;
    width: 50rem;
    margin: 2.5rem 0;
}


.flight_booking_card{
    display: flex;
height: 5rem;
padding: 0.8125rem 9.625rem 0.8125rem 1.5rem;
align-items: start;
width: 24rem;
flex: 1 0 0;
border-radius: 0.25rem;
border: 1.2px solid var(--dividers-borders-disabled-states, #EFF2F7);
background: var(--whitwe, #FFF);
flex-direction: column;

/* Shadows / Cards */
box-shadow: 0px 1px 12px 0px rgba(21, 41, 82, 0.03);

}
</style>