<template>
    <WalletTopUp :user="getTravelAgent?.first_name + ' ' + getTravelAgent?.last_name" v-if="isFunding" @close="close"/>
    <WalletDedut :user="getTravelAgent?.first_name + ' ' + getTravelAgent?.last_name" v-if="isDeduting" @close="close"/>
    <index v-slot:children>
        <div class="manage_wallet_main_wrapper">
            <div>
                <h3 class="user-name">Manage Wallet</h3>
            </div>

        <div class="get-started">
            <div class="with-tiqwa">
                <div style="margin-top: 2.5rem;">
                <h3 class="wallet_balance">Total Wallet Balance </h3>
                <p class="balance" style="margin-top: 0.75rem;">N {{ getWallet?.balance }} </p>
                </div>
                <div style="display: flex;gap: 1rem;height: 2.5rem;margin-top: 2.69rem;margin-bottom: 1.5rem;">
                    <on-boarding-button @click="isFunding = true" btn-width="10rem" color="#FFF" height="2.5rem" text-node="Top up wallet"></on-boarding-button>
                    <!-- <on-boarding-button @click="isDeduting = true" btn-width="8rem" color="#2C6CAC" height="2.5rem" text-node="Deduct wallet" background="transparent"></on-boarding-button> -->
                </div>
            </div>
        </div>


        <div class="transaction_history_area">

            <div>
                <h3 class="transaction_history">Transaction History</h3>
            </div>

            <div>
                <!-- <div class="search_filter">
            <div class="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#9DA8B6"/>
                  <path d="M16.5001 17.0626C16.3576 17.0626 16.2151 17.0101 16.1026 16.8976L14.6026 15.3976C14.3851 15.1801 14.3851 14.8201 14.6026 14.6026C14.8201 14.3851 15.1801 14.3851 15.3976 14.6026L16.8976 16.1026C17.1151 16.3201 17.1151 16.6801 16.8976 16.8976C16.7851 17.0101 16.6426 17.0626 16.5001 17.0626Z" fill="#9DA8B6"/>
                </svg>
                <input type="search" style="outline: none;border: none;width: 19.4rem" placeholder="Search by IDs, names etc"/>
            </div>
            <div class="filter">
              <div class="filter-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 12.8002L4.79999 9.6002H11.2L7.99999 12.8002ZM7.99999 3.2002L11.2 6.4002H4.79999L7.99999 3.2002Z" fill="#212B36"/>
                </svg>
                <span class="filter-span">Sort By</span>
              </div>
              <on-boarding-button class="filter-btn" btn-width="6.37rem"  background="#EAF0F7" border="none"  color="#2C6CAC"  height="2.5rem" text-node="Export"></on-boarding-button>
              <on-boarding-button class="filter-btn" btn-width="9.18rem" height="2.5rem" text-node="Filter transaction"></on-boarding-button>
            </div>
          </div> -->
                <DomainTable :fields="wallet_history_data" empty-message="No Transactions Found">
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

    </index>

</template>

<script>
import storeUtils from '../../utils/storeUtils';
import Index from '../../views/travelAgents/Index.vue';
import OnBoardingButton from '../Buttons/OnBoardingButton.vue';
import DomainTable from '../tables/DomainTable.vue';
import WalletTopUp from '../modals/WalletTopUp.vue';
import WalletDedut from '../modals/WalletDedut.vue';


export default{
    name:"ManageWallet",

    components:{
        Index,
        OnBoardingButton,
        DomainTable,
            WalletTopUp,
        WalletDedut
    },

    data(){
        return{
            wallet_history_data:[
            {key:"Amount", label:"Amount"},
            {key:"Reference ID", label:"Reference ID"},
            {key:"Transaction Date", label:"Transaction Date"},
            {key:"status", label:"Status"},
            ],
            isFunding:false,
            isDeduting:false,
        

        }
    },

    methods:{
        close(value){
            this.isFunding = value
            this.isDeduting = value
        },
    },

    computed:{
        getWallet(){
            const wallet = JSON.parse(localStorage.userWallet)
            return wallet
        },
        getTravelAgent(){
            const travelAgent = JSON.parse(localStorage?.travelAgent)
            if(travelAgent){
                return travelAgent
            }
        }
    },

    mounted(){
        const user = JSON.parse(localStorage.travelAgent)
        storeUtils.fireAway().travelAgent.handleGetUserTransaction(user.id)
    }

}

</script>

<style scoped>
.transaction_history_area{
    width: 43.6875rem;

}
.filter{
  display: flex;
  gap: 1.25rem;
}

.transaction_history{
    color: var(--black-text-04, #575A65);

/* Headings/20px/bold */
font-family: 'Product Sans';
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: 1.75rem; /* 140% */
}

.search_filter{
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-span{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
}

.search{
  display: flex;
  width: 15.4375rem;
  padding: 0.5rem 5rem 0.5rem 1.25rem;
  align-items: center;
  gap: 1.0625rem;
  flex-shrink: 0;
  outline:none;
  border-radius: 0.375rem;
  border: 0.6px solid #E5E9F2;
  background: #FFF;
}

.wallet_balance{
    color: var(--3, #6A8297);
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.manage_wallet_main_wrapper{
}

.filter-div{
  background: #FFFFFF;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.balance{
    color: var(--3, #6A8297);
font-family:'Product Sans';
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
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


.get-started{
    width: 43.6875rem;
  background-image: url("../../assets/home_background_blue.svg");
  margin: 2.5rem 0 4rem 0;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom left;
  background-color: var(--app-defautl-primary-light);
  border-radius: 0.5rem;
border: 1px solid var(--primary-05, #EAF0F7);
}

.with-tiqwa{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left:2rem;
  margin-top: 1rem;
  width: 24.5rem;
  height: auto;
}

.with-tiqwa-p{
  color: #2D3139;
  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

/* @media (max-width: 1024px) {
  .get-started{
    height: 12.625rem;
    margin: 1rem 0;
    background-position: top;
  }
} */
</style>