<template>
 <div class="booking-cards">
  <div class="inner-booking-cards">
    <p class="title">{{title}}</p>
    <p class="number">{{number}}</p>
  </div>

</div>
</template>

<script>
export default {
  name: "BookingsCards",
  props:['title', 'number']
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
  background:  #FFF;

  /* Shadows / Cards */
  box-shadow: 0px 1px 12px 0px rgba(21, 41, 82, 0.03);
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
}

.number{
  color: #444854;
  font-family:'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>