<template>

  <div class="invite-success">
    <div class="invite-success-body">
      <img src="../../assets/invite_success.gif" class="invite-gif" />

      <h4 class="invite-h">Invite sent successful!</h4>

      <p class="invite-p">You have successfully sent an invite to your member</p>
    </div>

    <on-boarding-button text-node="Cancel" background="#F8F1F8" border="none" color="#89128A"></on-boarding-button>
  </div>

</template>

<script>
export default {
  name: "DeactivateAccountConfirm"
}
</script>

<style scoped>
.invite-h{
  color:  #1D1E2C;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  width: 15.625rem;
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
}

.invite-gif{
  display: flex;
  width: 11.25rem;
  height: 11.25rem;
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
</style>