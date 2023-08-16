<template>
    <div class="wrapper">
        <div class="top-angle"></div>
        <div class="bottom-angle"></div>

        <div style="margin: 2rem;">
            <div class="inner_wrapper">

                <div class="select_account_type">
                    <div class="logo_area">
                        <img src="../../assets/../assets/SignUp/EmailVerification/Logo.svg" />
                    </div>

                    <slot name="sub-child"></slot>
                   
                    <slot name="children"></slot>
                </div>
                


            </div>
        </div>

       
    </div>
  
</template>

<script>

export default {
    name:"CompleteRegistrationLayout",
  
}
</script>

<style  scoped>
@import url('https://fonts.cdnfonts.com/css/apercu');


.select_account_type{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-top: 4.96rem; */
    position: relative;
    /* height: 52.00rem; */
    height: 52.00rem;
    padding: 3.5rem;

}

@media (max-width: 1024px) {
    .select_account_type{
        max-width: 100%;
        flex-direction: column;
    }
}



.bottom-angle{
    width: 69.45238rem;
    height: 27.51469rem;
    transform: rotate(150.931deg);
    flex-shrink: 0;
    position: fixed;
    top: 70%;
    right: -20%;
    bottom: -10%;
    background: linear-gradient(91deg, #F8F1F8 0%, #F1E0F1 100%);
    z-index: 1
}

.top-angle {
    width: 69.45238rem;
    height: 27.51469rem;
    transform: rotate(150.931deg);
    flex-shrink: 0;
    background: linear-gradient(91deg, #F8F1F8 0%, #F1E0F1 100%);;
    position: fixed;
    top: 0;
    left: -35%;
    z-index: 1;

}
.wrapper{
    min-height: 100vh;
    background: #F8F1F8;
    display: inline-block;
    width: 100%; 
    position: relative;
}



.inner_wrapper{
    position: relative;
    border-radius: 1rem;
    background:  transparent; 
    z-index: 5;
    width: 100%; 
    height: 52.00rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo_area{
    position: absolute;
    top: 0;
    float: left;
}
</style>