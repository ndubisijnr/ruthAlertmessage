<template>
   <layout>
        <template v-slot:maker>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="72" viewBox="0 0 4 72" fill="none">
                <rect width="4" height="62.348" rx="2" fill="#CDCED9"/>
                <rect y="51.0898" width="4" height="20.9103" rx="2" fill="#720F73"/>
            </svg>
        </template>
        <template v-slot:children>
            <div>
                <div class="business_information">Document Upload</div>

                <div class="business_information_card">

                    <div> 
                        <p class="txt-1">Company Document</p>
                        <p class="txt-2">Corporate  Affairs Commission - CAC</p>
                    </div>

                    <div class="component_wrapper">

                        <div>
                            <p class="txt-3">Kindly upload your Certification of Incorporation</p>


                            <div class="input-area">
                                <img src="../../assets/group-folders.svg" />
                                <div>
                                    <p class="txt-4">Drop your files here or <span style="color:#89128A;text-decoration: underline;cursor: pointer;" @click="handleCompanylDoc">click here </span>to upload</p>
                                    <input type="file" id="compDoc" hidden>
                                    <p class="txt-5">Upload the recommended format (JPEG, PDF or PNG). Maximum of 5MB</p>
                                </div>
                            </div>
                            
                        </div>

                        </div>


                    <div class="personal-docs"> 
                        <p class="txt-1">Personal Document</p>
                        <p class="txt-2">Kindly provide one of the following personal documents for verification purposes: Driver's License, International Passport, NIN (National Identification Number) Slip.</p>
                    </div>

                    <div class="choose_document_type">
                    
                        <div>
                           <p class="doc_type"> Choose document type</p>
                        
                        </div>
                        <img src="../../assets/Monotone.svg" />
                    </div>

                    <div class="component_wrapper">

                        <div>
                            <p class="txt-3">Kindly upload your Certification of Incorporation</p>


                            <div class="input-area">
                                <img src="../../assets/group-folders.svg" />
                                <div>
                                    <p class="txt-4">Drop your files here or <span style="color:#89128A;text-decoration: underline;cursor: pointer;" @click="handlePersonalDoc">click here </span>to upload</p>
                                    <input type="file" id="personalDoc" hidden>

                                    <p class="txt-5">Upload the recommended format (JPEG, PDF or PNG). Maximum of 5MB</p>
                                </div>
                            </div>
                            
                        </div>

                    </div>




                </div>
                    
             </div>

        </template>

    </layout>
</template>

<script>
import UploadDocumentsComponentVue from '../../components/forms/UploadDocumentsComponent.vue';
import Layout from './Layout.vue';


export default {
    name:"UploadDocs",
    components:{
        Layout,
        UploadDocumentsComponentVue
    },
    methods:{
        handlePersonalDoc(){
            const input = document.getElementById('personalDoc')
            input.click()
        },

        handleCompanylDoc(){
            const input = document.getElementById('compDoc')
            input.click()
        }

    }

}
</script>

<style scoped>
.personal-docs{
    margin-top:2.5rem;
    margin-bottom:1rem;
    width: 37.125rem;

}
.choose_document_type{
    display: flex;
    width: 35.4375rem;
    height: 4rem;
    padding: 0.875rem 1.25rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.375rem;
    border: 1px solid var(--dividers-borders-disabled-states, #EFF2F7);

}

.txt-1{
    color: var(--main-branding-primary-07, #B061B1);

    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.txt-2{
    color: #6B6C7E;

    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.txt-5{
    color: var(--text-secondary-caption, #6B6C7E);
text-align: center;

/* Subtext/14px/Regular */
font-family: 'Product Sans';
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem; /* 171.429% */
text-align: center;
}

.txt-4{
    color: var(--black-text-01, #1D1E2C);
text-align: center;

/* 16px/bold */
font-family: 'Product Sans';
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: 1.75rem; /* 175% */

}

.business_information{
    /* padding-top: 1.5rem; */
    padding-bottom:1.5rem;
    color: var(--primary-colors-dark-head, #272833);

    /* bold/24px */
    font-family: 'Product Sans';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 116.667% */
}


.txt-3{
    color: var(--text-secondary-caption, #6B6C7E);


/* Subtext/14px/Regular */
font-family:'Product Sans';
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem; /* 171.429% */
margin-bottom: 0.5rem;

}

.doc_type{
    color: #2D3139;
font-family: 'Product Sans';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.75rem; /* 175% */
}

.business_information_card{
    width: 47rem;
}

.component_wrapper{
    width: 35.4375rem;
    height: 16.5rem;
    background: #FFF;
    display: flex;
    padding: 0.9375rem 1.5rem 1.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    margin-top:1rem;

}

.input-area{
    display: flex;
height: 9.6875rem;
padding: 1.5rem 2.4375rem 1.6875rem 2.4375rem;
justify-content: center;
align-items: center;
border-radius: 0.25rem;
border: 1px dashed var(--border-secondary-l-2-border, #CDCED9);
flex-direction: column;
}
</style>