<template>
  <div class="card-wrapper">
    <div class="icon">
      <img :src="icon" width="40" height="40"/>
    </div>

    <div class="sub-text">
       <p>{{sub_text}}</p>
    </div>

    <div class="values">
      <p>{{values}}</p>
    </div>

  </div>

</template>

<script>
export default {
  name: "DashboardStatsCard",
  props:['icon', 'sub_text', 'values']
}
</script>

<style scoped>
.card-wrapper{
  display: flex;
  width: 236px;
  height: 150px;
  padding: 1.5rem 1.25rem 1.5rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: solid #F1E0F1;
}

.sub-text{
  color: #6A8297;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.values{
  color: #6A8297;
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>