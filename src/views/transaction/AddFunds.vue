<template>
    <layout v-slot:child-content>
        <div class="layout1">
        <!-- route breadcrumb -->

      
        <div class="add_funds_wrapper">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M15.6504 6.63867L9.627 12.6152L15.6035 18.6386" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>How do you want to pay ?</p>
            </div>

            <div>

            </div>



            <div>
                <OnBoardingButton text-node="Cancel" border="none" background="#EAF0F7" btn-width="5.875rem" color="#2C6CAC" height="2.5rem" ></OnBoardingButton>
                <OnBoardingButton text-node="Done" btn-width="8.75rem" color="#FFF" height="2.5rem"></OnBoardingButton>
            </div>
        </div>
    </div>
    </layout>
</template>
<script>
import OnBoardingButton from '../../components/Buttons/OnBoardingButton.vue';
import Layout from '../Layout.vue';
export default {
    name:"AddFunds",
    components:{OnBoardingButton,Layout}
    
}
</script>
<style scoped>
    .add_funds_wrapper{
        width: 68.125rem;
        height: 31.625rem;
        border-radius: 1rem;
        background: var(--Color, #FFF);
        border: solid;
        /* margin: ; */
    }

    .layout1{
        border: solid;
        display: flex;
        justify-content: center;
    }
</style>