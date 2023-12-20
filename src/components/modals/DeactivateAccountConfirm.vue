<template>
  <layout v-slot:children>

    <div v-if="getStage === 'true'" class="invite-success">
    <div class="invite-success-body">
      <img src="../../assets/notice.gif" class="invite-gif" />

      <h4 class="invite-h">Account Deactivated!</h4>

      <p class="invite-p">Your account has been deactivated and your access is restricted.
        Please contact support for more information.</p>
    </div>

    <on-boarding-button text-node="Cancel"  border="none" @click="cancelAction"></on-boarding-button>
  </div>

    <div v-else class="layout-modal">
      <div class="delete-card-option">
        <div class="card-header">
          <p class="card-header-h">Confirm Action</p>
        </div>

        <div style="margin: 2rem">
          <p class="are-you-sure">Are you sure you want to deactivate this team member?</p>

          <p class="are-you-sure-p">You're about to remove an invited user; the user will be unable to join until you send a new invitation. This action is irreversible.</p>
        </div>

        <div class="card-footer">
          <p @click="cancelAction" style="cursor: pointer">Cancel</p>
          <on-boarding-button :loading="getLoading" :disabled="getLoading" @click="deactivateAccount" btn-width="11.0625rem" border="none" background="#F04444" text-node="Deactivate"></on-boarding-button>
        </div>

      </div>

    </div>

  </layout>

</template>

<script>
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import Layout from "@/components/modals/Layout.vue";
import storeUtils from "@/utils/storeUtils";

export default {
  name: "DeactivateAccountConfirm",
  props:['user_id'],
  components:{OnBoardingButton,Layout},
  data(){
    return{
      isSuccess:false
    }

  },

  methods:{
    deactivateAccount(){
      storeUtils.fireAway().auth.handleDeactivateAccount(this.user_id)
    },

    cancelAction(){
      storeUtils.fireAway().auth.commitStage('email')
      this.$emit('close', false)
    }
  },

  computed:{
    getStage(){
      return storeUtils.fireAway().auth.getStage
    },

    getLoading(){
      return storeUtils.fireAway().auth.getLoading
    }
  }
}

</script>

<style scoped>
.are-you-sure{
  color: #1D1E2C;

  /* Title/18px/Medium */
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 144.444% */
}

.are-you-sure-p{
  color: #575A65;

  /* Body/16px/Regular */
  font-family:'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}
.delete-card-option{
  width: 34rem;
  height: 23.25rem;
  border-radius: 0.5rem;
  background:  #FFF;
  position: relative;
  /* Shadows / Modals */
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
}

@media (max-width: 1024px) {
  .delete-card-option{
    width: 90% !important;
  }
}
.invite-h{
  color:  #1D1E2C;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  width: 25.625rem;
  margin-top: 1.5rem;
}

.invite-success-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.invite-p{
  color: #444854;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 24.5625rem;
  margin-top: 1rem;
}

.invite-gif{
  display: flex;
  width: 180px;
  justify-content: center;
  align-items: center;
}
.invite-success{
  display: flex;
  width: 30rem;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  border-radius: 0.625rem;
  background: #FFF;
}

.card-header{
  display: flex;
  width: 34rem;
  height: 4.5rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
  align-items: center;
  flex-shrink: 0;
  background:  #F9FAFC;
  justify-content: space-between;
}

.card-header-h{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
}

.card-footer{
  display: flex;
  align-items: center;
  gap:2.9rem;
  justify-content: flex-end;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 100%;
}
</style>