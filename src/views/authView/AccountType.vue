<template>
    <layout>
        <template v-slot:sub-child>
            <div class="domain_account">
                <div class="domain_account_h"> Sign Up to your <br />
                    <span class="subdomain">Subdomain</span> account</div>

                <div class="experence">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.4286 0H2.57143C1.88944 0 1.23539 0.270918 0.753154 0.753154C0.270918 1.23539 0 1.88944 0 2.57143L0 21.4286C0 22.1106 0.270918 22.7646 0.753154 23.2468C1.23539 23.7291 1.88944 24 2.57143 24H21.4286C22.1106 24 22.7646 23.7291 23.2468 23.2468C23.7291 22.7646 24 22.1106 24 21.4286V2.57143C24 1.88944 23.7291 1.23539 23.2468 0.753154C22.7646 0.270918 22.1106 0 21.4286 0ZM20.3202 8.88964L10.463 18.7468C10.3023 18.9074 10.0844 18.9976 9.85714 18.9976C9.62991 18.9976 9.41198 18.9074 9.25125 18.7468L3.67982 13.1754C3.60021 13.0958 3.53705 13.0013 3.49397 12.8973C3.45088 12.7932 3.4287 12.6818 3.4287 12.5692C3.4287 12.4566 3.45088 12.3451 3.49397 12.2411C3.53705 12.1371 3.60021 12.0426 3.67982 11.963L4.89161 10.7513C4.9712 10.6716 5.0657 10.6085 5.16971 10.5654C5.27371 10.5223 5.38519 10.5001 5.49777 10.5001C5.61035 10.5001 5.72182 10.5223 5.82583 10.5654C5.92983 10.6085 6.02433 10.6716 6.10393 10.7513L9.85714 14.5045L17.8961 6.46554C17.9757 6.38592 18.0702 6.32277 18.1742 6.27968C18.2782 6.23659 18.3897 6.21442 18.5022 6.21442C18.6148 6.21442 18.7263 6.23659 18.8303 6.27968C18.9343 6.32277 19.0288 6.38592 19.1084 6.46554L20.3202 7.67732C20.3998 7.75692 20.4629 7.85142 20.506 7.95542C20.5491 8.05943 20.5713 8.1709 20.5713 8.28348C20.5713 8.39606 20.5491 8.50754 20.506 8.61154C20.4629 8.71555 20.3998 8.81005 20.3202 8.88964Z" fill="#2C6CAC"/>
                  </svg>
                  <span>Experience travel-booking like never before</span>
                </div> 
            </div>
         </template>
        <template v-slot:children>
            <div class="account_type_card">
                <div>
                    <p class="b1">AS</p>
                   <router-link to="/register/cooperate_manager">
                        <div class="b2 cooperate">
                            Corporate Manager
                        </div>
                    </router-link>
                    <p class="b1 center">OR</p>
                    <router-link to="/register/personal_manager">
                        <div class="b2 personal">
                            Personal  Manager
                        </div>
                    </router-link>
                </div>
            </div>
        </template>
    </layout>


  
</template>

<script>
import Layout from './Layout.vue';
export default {
    name:"AccountType",
    components:{
        Layout
    }

}
</script>

<style>
a{
    text-decoration: none !important;
}
.domain_account_h{
    color: #1D1E2C;
    /* Headings/48px/bold */
    font-family: 'Product Sans';
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.5rem; /* 150% */
    display: inline-block;
}

@media (max-width: 1024px) {
  .domain_account_h{
    text-align: center;
  }
}

.domain_account{
    display: block;
    width: 27.4375rem;
}

@media (max-width: 1024px) {
  .domain_account{
      width: 100%;
    text-align: center;
  }
}

.experence{
    display: flex;
    gap:1rem;
    align-items: center;
    margin-top: 1rem;
}

@media (max-width: 1024px) {
  .experence{
    justify-content: center;
  }
}

.subdomain{
    color: var(--app-default-primary);
    /* Headings/48px/bold */
    font-family: 'Product Sans';
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.5rem;
}

.b1{
    margin-bottom: 2rem;
    color: var(--app-default-primary);
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: italic;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.002rem;
}

.b2:hover{
    background-color: var(--app-default-primary);
    color:#FFF
}

.center{
    text-align: center;
    margin-top: 2rem;

}


.account_type_card{
    width: 27.5rem;
    height: 26.625rem;
    /* padding: 48px; */
    gap: 10px;
    border-radius: 0.625rem;
    background: #FFF;
    padding:3rem;


}

@media (width:1114px) {
  .account_type_card{
    height: auto;
  }
}

@media (width:1120px) {
  .account_type_card{
    height: auto;
  }
}

@media (max-width: 1024px) {
  .account_type_card{
    width: 100%;
    padding:1rem;
    margin-top: 0;


  }
}

.b2{
    display: flex;
    padding: 2rem 4rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    /* border: none; */
    cursor: pointer;
    font-family: 'Product Sans';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: #FFF;

}

@media (max-width: 1024px) {
  .b2{
    text-align: center;
    padding: 2rem 4rem;
  }
}

.personal{
    color: var(--app-defautl-primary-light2);
    border: 1px solid  var(--app-defautl-primary-light2);
}


.cooperate{
    border: 1px solid  var(--app-default-primary);
    color:  var(--app-default-primary);
}

</style>