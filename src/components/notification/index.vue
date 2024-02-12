<script>
export default {
  name: "index"
}
</script>

<template>
  <div class="notification-wrapper">
    <div class="notification-header">
      <p class="notification-title">Notifications</p>
      <img src="../../assets/cancle.svg"  @click="close" alt="close_icon" style="cursor: pointer"/>
    </div>

    <div class="notification-nav">
      <p class="notification-nav-item">All <span class="count">3</span></p>
      <p class="notification-nav-item">Bookings <span class="count">1</span></p>
      <p class="notification-nav-item">Transaction <span class="count"></span></p>
    </div>


    <div class="notification_area">
      <div style="width: 100%;">
        <div style="display: flex;align-items: center;justify-content: space-between;width: 100%">
          <p class="notification-message">Bukola Adedayo was added to the Team <br /> <span class="created_at">5hrs. ago</span></p>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#2C6CAC"/>
          </svg>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.notification-wrapper{
  display: inline-flex;
  padding: 1rem 0;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.25rem;
  background: #fff;
  position: absolute;
  width: 30rem;
  height: 30rem;
  right: 100px;
  top: 100px;
  z-index: 99999;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);

}

.notification-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding:0 0.5rem;
  margin-bottom: 1rem;
}

.notification-title{
  color:  #1D1E2C;
  text-align: center;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}

.notification-nav{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  flex-shrink: 0;
  border-bottom:solid .3rem rgba(132, 146, 166, 0.20);
}

.notification-nav-item{
  color: #8492A6;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.created_at{
  color:  #575A65;
  /* caption/12px/regular */
  font-family: "Product Sans";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
}

.count{
  color: #8492A6;
  font-family: "Product Sans";
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 200% */
  width: 1rem;
  height: 1rem;
  text-align: center;
  //padding: 0.3rem;
  border-radius: 50%;
  flex-shrink: 0;
  background: #D5E2EE;
}

.notification_area{
  margin: 2.5rem 0;
  padding: 0 1rem;
  width: 100%;
}

.notification-message{
  color:  #1D1E2C;

  /* 16px/bold */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}
</style>