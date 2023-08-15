<template>
    <layout-with-bg>
        <template v-slot:children>
            <section class="card_wrapper">
                <div class="card">
                    <div class="inner_card">
                        <div class="card_head">
                            <h3 class="almost_done">Almost done!</h3>
                            <p class="code_sent">We have sent a code via Email. <br />
                                Enter 4-digit code sent to <span class="email_sent_to">feleomoloa@travelio</span></p>
                        </div>
                        <div class="card_body">
                            <div class="otp-div">
                                <input type="text" maxlength="1" class="otp"  />
                                <input type="text" maxlength="1" class="otp" />
                                <input type="text" maxlength="1" class="otp" />
                                <input type="text" maxlength="1" class="otp" />
                            </div>
                        </div>
                        <div class="card_bottom">
                            <on-boarding-button @click="handleSubmit" textNode="Verify Code" :btnWidth="'100%'" />
                            <p class="resend_code">Resend code {{timerCount > 0 ? `in ${timerCount} seconds` : 'now?'}} <button @click="resendOtp"  class="resend"  :class="{'disabledBtn':timerCount > 0}" :disabled="timerCount > 0">Resend code</button></p>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </layout-with-bg>
  
</template>

<script>
import LayoutWithBg from "./LayoutWithBg.vue"
import StartTimer from "../../mixins/countDown"
import OnBoardingButton from '../../components/Buttons/OnBoardingButton.vue';
import router from "../../router/index"


export default {
    name:"Layout",
    components:{
        LayoutWithBg,
        OnBoardingButton
    },
    data(){
        return{
            timerCount: 0,
        }
    },
    methods:{

       handleSubmit(){
        router.push({name:"SuccessRegistrationCard"})
       }, 
       tab() {
        //Initial references
        const input = document.querySelectorAll(".otp");
        const inputField = document.querySelector(".otp-div");

        if (input && inputField) {
            console.log('true')
            // const submitButton = document.getElementById("submit");
            let inputCount = 0,
                finalInput = "";

            //Update input
            const updateInputConfig = (element, disabledStatus) => {
                element.disabled = disabledStatus;
                if (!disabledStatus) {
                    element.focus();
                } else {
                    element.blur();
                }
            };

            input.forEach((element) => {
                element.addEventListener("keyup", (e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    let { value } = e.target;

                    if (value.length == 1) {
                        updateInputConfig(e.target, true);
                        if (inputCount <= 3 && e.key != "Backspace") {
                            finalInput += value;
                            if (inputCount < 3) {
                                updateInputConfig(e.target.nextElementSibling, false);
                            }
                        }
                        inputCount += 1;
                    } else if (value.length == 0 && e.key == "Backspace") {
                        finalInput = finalInput.substring(0, finalInput.length - 1);
                        if (inputCount == 0) {
                            updateInputConfig(e.target, false);
                            return false;
                        }
                        updateInputConfig(e.target, true);
                        e.target.previousElementSibling.value = "";
                        updateInputConfig(e.target.previousElementSibling, false);
                        inputCount -= 1;
                    } else if (value.length > 1) {
                        e.target.value = value.split("")[0];
                    }
                    // submitButton.classList.add("hide");
                });
            });

            window.addEventListener("keyup", (e) => {
                if (inputCount > 3) {
                    // submitButton.classList.remove("hide");
                    // submitButton.classList.add("show");
                    if (e.key == "Backspace") {
                        finalInput = finalInput.substring(0, finalInput.length - 1);
                        updateInputConfig(inputField.lastElementChild, false);
                        inputField.lastElementChild.value = "";
                        inputCount -= 1;
                        //   submitButton.classList.add("hide");
                    }
                    submit()

                }
            });
            const submit = () => {
                let otp = "";
                input.forEach((input) => {
                    otp += input.value
                })

                console.log(otp)
            }

            //Start
            const startInput = () => {
                inputCount = 0;
                finalInput = "";
                input.forEach((element) => {
                    element.value = "";
                });
                updateInputConfig(inputField?.firstElementChild, false);

            };
            startInput();
        }
        else {
            console.log('can\'t see any input')
        }
    },

    resendOtp(){
        console.log('llll')
        StartTimer()
        this.timerCount = 30
    },

    },

    watch: {
        timerCount: {
        handler(value) {
            if (value > 0) {
            setTimeout(() => {
                this.timerCount--;
            }, 1000);
            }
        },
        //immediate: true, // This ensures the watcher is triggered upon creation
        },
    },

    mounted(){
        this.tab()
    }
}
</script>

<style scoped>
.card_wrapper{
    padding: 0;
    display:flex;
    align-items: center;
    justify-content:center;
    height: 30rem;
}

.disabledBtn{
    cursor:not-allowed !important;
}

.almost_done{
    color: var(--grey-100, #161616);
    /* Headings 24px */
    font-family: 'Apercu';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem; /* 133.333% */
}
.code_sent{
    color: var(--grey-80, #555);
    /* For short paragraphs */
    font-family: 'Apercu';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
}

.email_sent_to{
    color: var(--main-branding-primary, #89128A);
    /* For short paragraphs */
    font-family: 'Apercu';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;

}

.resend{
    color: var(--main-branding-primary, #89128A);
    /* subtext/medium/14px */
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    border:none;
    background: transparent;
    cursor: pointer;
}
.resend_code{
    color: var(--black-text-03, #444854);
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: 0.0035rem;
    text-align: center;
    margin-top:1rem;
}

.card{
    width: 36.875rem;
    height: 25.00rem;
    border-radius: 0.625rem;
    background:  #FFF;
    /* z-index: 9999999999; */
}


@media screen and (max-width: 1024px){
    .card{
        margin: 12rem 1rem;   
        width: 100%;
    }
    
}

.card_body{
    margin:2.94rem 3.69rem;
}

.inner_card{
    margin:2.25rem 4.06rem;
    display: inline-block;
}
.otp-div{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
}

.otp{
  /* width: 100%; */
  outline: none;
  /* margin:auto 5px; */
  padding-left: 20px;
  width: 3.75rem;
  height: 3.75rem;
  border: 1px solid #555555;
  border-radius: 8px;
  font-size: 1rem;
}

.otp:focus{
  outline: none;
  border-bottom:1px solid #555555;
}

</style>