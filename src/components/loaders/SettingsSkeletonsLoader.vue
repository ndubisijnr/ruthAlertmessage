<template>
  <div class="loader-wrapper">
    <div class="main-loader">
      <div class="div"></div>
      <div class="div"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SettingsSkeletonsLoader"
}
</script>

<style scoped>
.loader-wrapper{
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 130px;
  /*margin: 20px auto;*/
}
.side-loader{
  width: 321px;
  height: 627px;
  position: relative;
  overflow: hidden;
  display: block;
  background: #F6F5F5;
  border-radius: 16px;
}


.main-loader{
  width: 100%;
}

.loading-flight-search-result{
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height */
  /* Purple */
  color: #891189;
  position: relative;
  margin-bottom: 10px;
}

.div{
  width: inherit;
  height: 182px;
  background: #EFF2F7;
  /*border-radius: 16px;*/
  /*margin-bottom: 41px;*/
  position: relative;
  overflow: hidden;

}


.side-loader::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: skeleton-loading-animation 1.2s linear infinite;
}

.div::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: skeleton-loading-animation .7s linear infinite;
}

@keyframes skeleton-loading-animation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}


.loading-dots {
  display: inline-block;
  position: relative;
  animation: loading-animation 1s infinite;
  border: solid #891189;
}

.loading-dots::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent 0%, #000 50%, transparent 100%);
  animation: dots-animation 1s infinite;
}

@keyframes loading-animation {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}

@keyframes dots-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

@media (max-width: 999px) {
  .side-loader{
    display: none;
  }
  .loader-wrapper{

    width: 100%;
  }
}

</style>