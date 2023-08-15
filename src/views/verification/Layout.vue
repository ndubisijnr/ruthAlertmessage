<template>
    <verificationSkipModal @cancle="cancle" v-show="storeUtils.fireAway().global?.getIsSkiping"></verificationSkipModal>

    <div class="wrapper">
        <div class="inner-wrapper">
            <header class="header">
                <div>
                
                    <div class="skip-div" @click="Skip"> 
                        <span>Skip</span>
                        <img src="../../assets/VerificationProcess/arrow-left.svg" />
                    </div>
                    
                </div>
                <div class="verification">Verification</div>
             </header>
        </div>
        <main>
            <div class="main-wrapper">
                <div class="side-area-wrapper">
                    <div class="side-area">
                        <div class="inner-side-area"> 
                            <slot name="maker"></slot>
                            <div class="current-active"> 
                                <router-link to="/verification/business"><p class="nav-item">Business Information</p></router-link>
                                <router-link to="/verification/document-upload"><p class="nav-item" >Document Upload</p></router-link>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <slot name="children"></slot>

            </div>

        </main>
    </div>
  
</template>

<script>
import VerificationSkipModal from '../../components/modals/verificationSkipModal.vue';
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
            storeUtils.fireAway().global?.commitSkip(!storeUtils.fireAway().global?.getIsSkiping)
        }, 

        cancle(value){
            storeUtils.fireAway().global?.commitSkip(value)

        }

       
    },

    computed:{
        
    }

}
</script>

<style>
a{
    text-decoration: none !important;
}
.wrapper{
    width: 100%;
    background-color: #F9FAFC;
    min-height: 100vh;

}
.inner-wrapper{
    width: 100%;
}
.header{
    display: flex;
    width: 100%;
    padding: 1rem 4rem 1rem 4rem;
    align-items: center;
    gap: 16.1875rem;
    background: #FFF;

}

.verification{
    color: var(--black-text-02, #2D3139);
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
    color: var(--black-text-01, #1D1E2C);
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

main{
    padding: 1rem 4rem 1rem 4rem;
    widows: 100%;
}

.main-wrapper{
    display: flex;
    gap: 10.5rem;
}

.side-area-wrapper{
    /* border: solid; */
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

.nav-item{
    color: var(--text-main-light-8-body, #393A4A);

    /* Body/16px/Regular */
    font-family:'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    cursor: pointer;
}


.nav-item:hover{
    transform: scale(1.1);
    color:#1D1E2C;
}


</style>