<template>

    <layout v-slot:children>
        <div class="modal">
      <div class="modal-header">
        <p class="add-team-member">Flight Price Changed</p>
        <img src="../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>

      <div class="main">
        <div class="modal-body">

          <p class="p-1">This flight price has changed to N{{formatAmount(amount)}}</p>
          <span class="p-2">Do you want to proceed?</span>

        </div>

        <div class="modal-footer">
          <on-boarding-button  :loading="getLoading" :disabled="getLoading" border="none"  btn-width="100%" text-node="Proceed"></on-boarding-button>
          <on-boarding-button @click="close" btn-width="100%" color="#000" text-node="Cancel" background="transparent" border="none"></on-boarding-button>
        </div>
      </div>
    </div>
    </layout>
</template>
<script>
import Layout from './Layout.vue';
import OnBoardingButton from '../Buttons/OnBoardingButton.vue';
import { formatAmount } from '../../mixins/flightUtil';
export default{
        name:"FlightConfirmModal",
        components:{Layout,OnBoardingButton},
        props:['amount'],
        data(){
            return{
                formatAmount
            }
        },
        methods:{
            close(){
                this.$emit('close', true)
            }
        },
        computed:{},
        mounted() {
            
        },

}
</script>
<style scoped>

@media (max-width: 1024px) {}

.modal-body{
    margin: 2rem 0 5rem 0;
}
.modal-footer{
  padding-bottom: 0;
  padding-top: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: row-reverse;
}
.p-1{
color: var(--Black-text-01, #1D1E2C);
font-family: "Product Sans";
font-size: 1.5rem;
font-style: normal;
font-weight: 500;
line-height: 1.625rem; /* 108.333% */
}

.p-2{
color: var(--Primary-Main, #2C6CAC);

/* Body/16px/Regular */
font-family: "Product Sans";
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.75rem; /* 175% */
}

@media (max-width: 1024px) {
 
}

.main{
  margin: 2rem;
}



@media (max-width: 1024px) {
}

.add-team-member{
  color:  #1D1E2C;

  /* 18px/bold */
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 155.556% */
}

.modal{
  width: 39.8125rem;
  height: auto;
  margin: 50px auto;
  border-radius: 1rem;
  background:  #FFF;
  display: inline-block;
  /* m3 */
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
}

@media (max-width: 1024px) {
  .modal{
    height: auto;
  }
}

.modal-header{
  display: inline-flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  /*gap: 22.5625rem;*/
  background:  #F9FAFC;
  width: 100%;
  border-radius: 1rem;

}


/* .groupedformInput{} */



@media (max-width:1024px) {
  .formInput{
    width:100% !important;
  }
}

@media (max-width: 1024px) {
  .modal{
    margin: 20px auto;
    width: 90%;
  }
}
</style>