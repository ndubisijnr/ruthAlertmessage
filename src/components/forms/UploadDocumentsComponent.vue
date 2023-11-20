<template xmlns="http://www.w3.org/1999/html">
    <div class="component_wrapper">
      <div v-if="selectedImage" style="text-align: end">
        <img src="./close_icon.svg" style="cursor: pointer"  @click="selectedImage = null" alt="favicon_preview"/>
      </div>
      <div>
        <p class="upload_files">{{title}}</p>
      </div>

        <div class="upload_area">
          <section v-if="!selectedImage" style="text-align: center">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
              <g clip-path="url(#clip0_4306_23888)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 35.0013H36.3333C37.714 35.0013 38.8333 33.882 38.8333 32.5013V14.168C38.8333 12.7873 37.714 11.668 36.3333 11.668H18.8333L14.5656 7.4002C14.0967 6.93136 13.4608 6.66797 12.7978 6.66797H8C6.61929 6.66797 5.5 7.78726 5.5 9.16797V32.5013C5.5 33.882 6.61929 35.0013 8 35.0013Z" fill="#D1822C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6665 31.6654H32.9998C34.3805 31.6654 35.4998 30.5461 35.4998 29.1654V10.832C35.4998 9.45132 34.3805 8.33203 32.9998 8.33203H15.4998L11.2321 4.06426C10.7632 3.59542 10.1273 3.33203 9.4643 3.33203H4.6665C3.28579 3.33203 2.1665 4.45132 2.1665 5.83203V29.1654C2.1665 30.5461 3.28579 31.6654 4.6665 31.6654Z" fill="#F3B357"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5606 22.508H21.2998V25.8542C21.2998 26.3144 20.9267 26.6875 20.4664 26.6875H18.761C18.3007 26.6875 17.9276 26.3144 17.9276 25.8542V22.508H14.6668C14.2066 22.508 13.8335 22.135 13.8335 21.6747C13.8335 21.4775 13.9034 21.2867 14.0308 21.1362L18.9777 15.2935C19.2751 14.9422 19.8009 14.8986 20.1522 15.196C20.1873 15.2257 20.2199 15.2583 20.2497 15.2935L25.1966 21.1362C25.494 21.4875 25.4503 22.0133 25.099 22.3107C24.9486 22.4381 24.7578 22.508 24.5606 22.508Z" fill="#EB9B2C"/>
              </g>
              <defs>
                <clipPath id="clip0_4306_23888">
                  <rect width="40" height="40" fill="white" transform="translate(0.5)"/>
                </clipPath>
              </defs>
            </svg>
            <input type="file" accept="/*" :id="id" @change="handleFileChange" hidden />
            <p class="drop">Drop your files here or <span class="click_here" @click="handleChange">click here</span> to upload</p>
            <p class="recomend">Upload the recommended format (JPEG, PDF or PNG). Maximum of 5MB</p>
          </section>
          <section v-else>
            <img :src="selectedImage" width="100" />
          </section>
        </div>


    </div>
</template>

<script>
import storeUtils from "@/utils/storeUtils";

export default {
    name:"UploadDocumentsComponent",
    props:['title', 'id'],
    data(){
      return{
        selectedImage: null,
        uploadFile:null
      }
    },
    methods:{
      handleFileChange(event) {
        const file = event.target.files[0];

        if (file) {
           this.$emit('file', file)

          // Use FileReader to read the selected file as a data URL
          const reader = new FileReader();

          reader.onload = (e) => {
            // Update the selectedImage data property with the data URL
            this.selectedImage = e.target.result;

          };

          reader.readAsDataURL(file);
        }
      },

      // await this.triggerUpload(this.uploadModel)

      handleChange(){
        const input = document.getElementById(`${this.id}`)
        input.click()
      },

      async triggerUpload(){
        await storeUtils.fireAway().auth?.handleUploadProfilePic(obj)
      },

    }


}
</script>

<style>
.recomend{
  color: var(--text-secondary-caption, #6B6C7E);
  text-align: center;
  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.drop{
  color: var(--black-text-01, #1D1E2C);
  text-align: center;
  /* 16px/bold */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}

.click_here{
  color: var(--primary-main, #2C6CAC);
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
  text-decoration-line: underline;
  cursor: pointer;
}

.component_wrapper{
    //width: 35.4375rem;
    //height: 16.5rem;
    background: #FFF;
    display: flex;
  flex-direction: column;
    padding: 0.9375rem 1.5rem 1.5rem 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 3rem;

}

.upload_area{
  display: flex;
  height: 9.6875rem;
  padding: 1.5rem 2.4375rem 1.6875rem 2.4375rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border: 1px dashed var(--border-secondary-l-2-border, #CDCED9);
  margin-top: 0.5rem;
  flex-direction: column;
  justify-content: center;
}

.upload_files{
  color: var(--text-secondary-caption, #6B6C7E);
  text-align: start;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

</style>