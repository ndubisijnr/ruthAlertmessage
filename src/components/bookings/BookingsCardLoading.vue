<template>
  <div class="booking-cards">
    <div class="inner-booking-cards">
      <p class="title"></p>
      <p class="number"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingsCardLoading"
}
</script>

<style scoped>
.booking-cards{
  display: inline-block;
  width: 15.9375rem;
  height: 5rem;
  padding: 0.8125rem 0.6875rem 0.8125rem 1.5rem;
  /*justify-content: start;*/
  /*align-items: center;*/
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid #EFF2F7;
  background: #EFF2F7;


  /* Shadows / Cards */
  box-shadow: 0px 1px 12px 0px rgba(21, 41, 82, 0.03);
  position: relative;
}

.booking-cards::before{
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: skeleton-loading-animation .7s linear infinite;
}

.inner-booking-cards{
}

.title{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0.5rem;
  height: 1rem;
  position: relative;
}


.title::before{
  color:  #444854;
  font-family: 'Product Sans';
  position: absolute;
  content: "";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0.5rem;
  height: 1rem;
  width: 30%;
  background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: skeleton-loading-animation .7s linear infinite;
}

.number{
  color: #444854;
  font-family:'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  height: 1rem;
}

@keyframes skeleton-loading-animation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

</style>