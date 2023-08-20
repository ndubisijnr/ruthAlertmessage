<template>
    <Layout>
        <template v-slot:children>
            <div class="modal_child">
                <div class="cancel" @click="cancel">
                    <img src="../../assets/cancle.svg" />
                </div>
                <div class="child_body">
                    <p class="p1">Sure you want to Skip Verification?</p>

                    <p class="p2">Unlock Full Access</p>

                    <p class="p3">
                        To fully enjoy all the features and benefits of our application, 
                        we encourage you to complete the verification process. It's quick and easy! 
                        By doing so, you gain seamless access to the main activities and functionalities.

                    </p>


                </div>
                <div class="child_footer">
                    <div class="inner_child_footer">
                        <OnBoardingButton :height="'2.75rem'" :btnWidth="'11.25rem'" @click="cancel" :textNode="'No, Cancle'" :background="'transparent'" :color="'#89128A'"></OnBoardingButton>
                        <a href="/dashboard"><OnBoardingButton  :height="'2.75rem'" :btnWidth="'11.25rem'" :textNode="'Yes, Confirm'"></OnBoardingButton></a>
                    </div>
                </div>
            </div>
        </template>
    </Layout>
  
</template>

<script>
import Layout from "./Layout.vue"
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
export default {
    name:"VerificationSkipModal",
    components:{
        Layout,
        OnBoardingButton
    },

    methods:{
        cancel(){
            this.$emit('cancel', false)
        },

    }

}
</script>

<style scoped>
a{
  text-decoration: none;
}

.modal_child{
    display: flex;
width: 46.875rem;
padding: 2.25rem 2.5rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.5rem;
border-radius: 0.5rem;
border: 1px solid  #DEE2E6;
background:  #FFF;

/* Shadow / Small */
box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
margin: 100px auto;
position: relative;
}



.cancel{
    position: absolute;
    top: 0.62rem;
    right:0.62rem;
    cursor: pointer;
}

.inner_child_footer{
    display: flex;
    align-items: center;
    gap:1rem;
  
}

.child_footer{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: end;
}

.p1{
    color: #272833;

/* Headings/20px/bold */
font-family: 'Product Sans';
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: 1.75rem; /* 140% */
}

.p2{
    color:  #89128A;

/* 16px/bold */
font-family:'Product Sans';
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: 1.75rem; /* 175% */
}


.p3{
color: rgba(84, 89, 94, 0.60);

/* Subtext/14px/Regular */
font-family: 'Product Sans';
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem; /* 171.429% */
}


@media (max-width: 1024px) {
  .modal_child{
    width: 90%;

  }

  .child_footer{
    justify-content: center;
  }


}

@media (max-width:500px) {
  .inner_child_footer{
    flex-direction: column;
  }
}
</style>