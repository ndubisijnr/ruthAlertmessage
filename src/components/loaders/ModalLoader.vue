<template>
    <div class="modal-loader-wrapper">
      <div class="main-modal-loader">
        <div>
            <SpinnerLoader></SpinnerLoader>
        </div>

        <p class="loading_info">Loading Itenerary</p>
       
      </div>
    </div>
  
  </template>
  
  <script>
  import SpinnerLoader from './SpinnerLoader.vue';
  export default {
    name: "Modal Loader",
    components:{SpinnerLoader}
  }
  </script>
  
  <style scoped>
  .modal-loader-wrapper{
      background: #00000065;
      width: 100%;
      height: 100vh;
      z-index: 5;
      position: fixed;
      bottom: 0;
      top: 0;
      cursor:progress;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .loading_info{
    font-family: "Product Sans";
    font-size: 1rem;
  }
  
  .main-modal-loader{
    width: 10rem;
    height: 10rem;
    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 1rem;
    gap: 1rem;

  
  }
  
  ::-webkit-scrollbar{
    display: none;
  }
  
  </style>