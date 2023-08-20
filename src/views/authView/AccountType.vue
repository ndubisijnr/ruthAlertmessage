<template>
    <layout>
        <template v-slot:sub-child>
            <div class="domain_account">
                <div class="domain_account_h"> Sign Up to your <br />
                    <span class="subdomain">Subdomain</span> account</div>

                <div class="experence">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.316467" width="21.2658" height="20" rx="4" fill="#89128A" />
                        <g clip-path="url(#clip0_328_1436)">
                        <path
                            d="M9.43086 12.2661L16.4121 5.69971L17.4868 6.70971L9.43086 14.2861L4.59744 9.74042L5.67137 8.73042L9.43086 12.2661Z"
                            fill="white" />
                        </g>
                        <defs>
                        <clipPath id="clip0_328_1436">
                            <rect width="18.2278" height="17.1429" fill="white" transform="translate(1.83594 1.4292)" />
                        </clipPath>
                        </defs>
                    </svg>
                    <span>Experience travel-booking like never before</span> 
                </div> 
            </div>
         </template>
        <template v-slot:children>
            <div class="account_type_card">
                <div>
                    <p class="b1">AS</p>
                   <router-link to="/register">
                        <div class="b2 cooperate">
                            Corporate Manager
                        </div>
                    </router-link>
                    <p class="b1 center">OR</p>
                    <router-link to="/register">
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
    color:  #89128A;
    /* Headings/48px/bold */
    font-family: 'Product Sans';
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.5rem;
}

.b1{
    margin-bottom: 2rem;
    color: var(--black-text-03, #444854);
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: italic;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.002rem;
}

.b2:hover{
    background-color: #89128A;
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
    align-items: flex-start;
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
    color: #D8B0D8;
    border: 1px solid  #D8B0D8;
}


.cooperate{
    border: 1px solid  #C488C4;
    color:  #89128A;
}

</style>