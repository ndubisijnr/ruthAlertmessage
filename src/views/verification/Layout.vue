<template>
    <verification-skip-modal @cancel="cancel" v-show="storeUtils.fireAway().global?.getIsSkipping"></verification-skip-modal>

    <div class="wrapper">
        <div class="inner-wrapper">
            <header class="header">
              <div class="skip-div" @click="Skip">
                <span>Skip</span>
                <!--                        <img src="../../assets/VerificationProcess/arrow-left.svg" />-->
              </div>
                <div class="verification">Verification</div>
             </header>
        </div>
        <main>
            <div class="main-wrapper">
                <div class="side-area-wrapper">
                    <div class="side-area">
                        <div class="inner-side-area" >
                            <slot name="maker"></slot>
                            <div class="current-active" id="nav0">
                                <router-link :to="`/verification/business/${getUser?.access_token?.slice(0,20)}`"><p class="item">Business Information</p></router-link>
                                <router-link :to="`/verification/document-upload/${getUser?.access_token?.slice(0,20)}`"><p class="item" >Document Upload</p></router-link>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div class="inner-main-wrapper">
                  <slot name="children"></slot>
                </div>

            </div>

        </main>
    </div>
  
</template>

<script>
import VerificationSkipModal from '../../components/modals/VerificationSkipModal.vue';
import storeUtils from "../../utils/storeUtils"

export default {
    name:"Layout",
    components:{
        VerificationSkipModal
    },

    data(){
        return{
            storeUtils
        }

    },

    methods:{

        Skip(){
            storeUtils.fireAway().global?.commitIsSkipping(!storeUtils.fireAway().global?.getIsSkipping)
        },

      cancel(value){
            storeUtils.fireAway().global?.commitIsSkipping(value)

        }

       
    },

    computed: {
      getUser(){
        if(localStorage.user){
          return JSON.parse(localStorage.user)
        }
      }
    },

  mounted() {
    storeUtils.fireAway().global?.getTenant().then(() =>{
      storeUtils.fireAway().auth?.getBusinessProfile()

    })
  }


}
</script>

<style scoped>

.inner-main-wrapper{
  margin-top: 1rem;
}

a{
    text-decoration: none !important;
}
.wrapper{
    width: 100%;
    background-color: #F9FAFC;
    min-height: 100vh;
  border: none;

}
.inner-wrapper{
    width: 100%;
}
.header{
    display: flex;
    width: 100%;
    padding: 1rem 4rem 1rem 4rem;
    align-items: center;
    gap: 18.1875rem;
    background: #FFF;
}

@media (max-width: 1024px) {
  .header{
    padding: 1rem;
    gap: 0;
    justify-content: space-between;
  }
}

.verification{
    color:  #2D3139;
    /* Headings/20px/bold */
    font-family: 'Product Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 140% */
}

.skip-div{
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 0.5rem;
    cursor: pointer;
}

.skip-div span{
    color: #1D1E2C;
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

main{
    padding: 1rem 4rem 1rem 4rem;
    width: 100%;
}

.main-wrapper{
  display: flex;
  gap: 10.5rem;
}


@media (max-width: 1024px) {
  main{
    padding: 1rem;
  }
  .main-wrapper{
    flex-direction: column;
    gap: 0;
  }
}


.side-area-wrapper{
     border: none;
}

.inner-side-area{
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
   
}

.current-active{
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

}

.item{

    /* Body/16px/Regular */
    font-family:'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    cursor: pointer;
      color: #393A4A;
}


.nav-item:hover{
    transform: scale(1.1);
    color:#1D1E2C;
}

#nav0 a.router-link-exact-active {
  background:  #F8F1F8;
  color: white !important;
  text-align: center;
  width: auto;
  padding: 0.5rem;
  border-radius: 5px;
}

</style>