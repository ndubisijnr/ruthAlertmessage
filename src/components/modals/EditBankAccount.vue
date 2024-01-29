<template>
  <layout v-slot:children>
    <div class="modal">
      <div class="modal-header">
        <p class="add-team-member">Update Bank Account</p>
        <img src="../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>

      <div class="wrapper">
        <p class="kindly">Kindly enter your bank account information for your earnings</p>

        <div>
          <div style="position: relative">
          <on-boarding-input id="banks" :placeholder="model.bank_name"  width="100%" label="Bank Name" @inputValue="(value) => handleFilter(value)"></on-boarding-input>
          <div class="doc_type_options" v-if="filteredBank?.length > 0">
            <p class="doc_type_item" @click="selectBank(i)" v-for="i in filteredBank" :key="i.id">{{i.name}}</p>
          </div>
          </div>

          <on-boarding-input width="100%" :placeholder="model.account_number" label="Account Number" type="number"  @inputValue="value => model.account_number = value"></on-boarding-input>

          <on-boarding-input width="100%" :placeholder="model.account_name" label="Account Name" @inputValue="value => model.account_name = value"></on-boarding-input>

        </div>
        <div class="modal-footer">
          <on-boarding-button border="none" @click="addBank" :loading="getLoading" :disabled="getLoading" btn-width="100%" text-node="Save"></on-boarding-button>
          <on-boarding-button @click="close" btn-width="100%" color="#000" text-node="Cancel" background="transparent" border="none"></on-boarding-button>
        </div>

      </div>
    </div>
  </layout>

</template>

<script>
import Layout from "./Layout.vue";
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import OnBoardingInput from "../Inputs/OnBoardingInput.vue";
import SettingsRequest from "../../model/SettingsRequest";
import storeUtils from "../../utils/storeUtils";
export default {
  name: "EditBankAccount",
  components:{
    OnBoardingInput,
    OnBoardingButton,
    Layout
  },
  data(){
    return{
      model:SettingsRequest.updateBank,
      filteredBank:[],
      holder:null,
      searchValue:null,
    }
  },
  methods:{
    handleFilter(value){
      if(value.length < 1){
        this.filteredBank = []
      }else{
        this.filteredBank = this.getBanks.filter(it => it.name.toLowerCase().includes(value.toLowerCase()))

      }
    },
    close(){
      this.activeSelectedIndex = null
      this.$emit('close', false)
    },
    addBank(){
      storeUtils.fireAway().settings?.updateBank().then(() => {
        if(this.getError === 'false'){
          this.close(false)
        }
      })
    },

    selectBank(obj){
      const input = document.getElementById('banks')
      input.value = obj.name
      this.model.bank_name = obj.name
      this.model.code = obj.code
      this.filteredBank=[]
    }
  },

  computed:{
    getBanks(){
      return storeUtils.fireAway().settings?.getBanks
    },

    getLoading(){
      return storeUtils.fireAway().settings?.getLoading
    },
    getError(){
      return storeUtils.fireAway().global?.getError
    },
    getTenantLoaded(){
      return storeUtils.fireAway().global.getTenantLoaded
    }
  },

  watch:{
    'getTenantLoaded'(a,b){
      if(a){
        setTimeout(() => { this.currentTab = this.getCurrentRouteParams, this.switchTab(this.getCurrentRouteParams) }, 500)
        storeUtils.fireAway().global?.commitError(null)
        storeUtils.fireAway().theme.handleGetTemplate();
      };
    }
  },


  mounted() {
    if(this.getTenantLoaded) storeUtils.fireAway().settings?.readBanks();
  }
}
</script>

<style scoped>
.doc_type_options{
  display: flex;
  width: 36rem;
  height: 14rem;
  flex-direction: column;
  align-items: flex-start;
  /*gap: 1.25rem;*/
  border-radius: 0.5rem;
  border: 1px solid  #F9FAFC;
  background: #FFF;
  position: absolute;
  overflow-y: scroll;
  left: 0;
  /*bottom: -60px;*/
  /* m4 */
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  z-index: 999999
;
}

.doc_type_item{
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: 1rem;

}

.kindly{
  color: #444854;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  letter-spacing: 0.002rem;
}

.doc_type_item:hover{
  background: #89128A;
  color: white;
}

.modal{
  width: 39.8125rem;
  height: auto;
  margin: 50px auto;
  border-radius: 1rem;
  background:  #FFF;

  /* m3 */
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
}

.pp{
  width: 100%;
}

.wrapper{
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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

.choose_document_type{
  display: flex;
  width: 100%;
  height: auto;
  /*padding: 0.875rem;*/
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  /*border: 1px solid  #EFF2F7;*/
  /*margin-bottom: 1rem;*/
}

.doc_type{
  color: #2D3139;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}
@media (max-width: 1024px) {
  .modal{
    margin: 20px auto;
    width: 90%;
  }
  .doc_type_options{
    width: 100%;
  }
}


</style>