<template>
  <layout v-slot:children>
      <div class="modal">
      <div class="modal-header">
        <p class="add-team-member">Create Role</p>
        <img src="../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>

      <div class="main">
        <div class="modal-body">

          <div class="email-area">
            <div class="on_boarding_input">
              <label class="label" :class="{'focused':isFocused}">Role Name</label>
              <input id="invite-input"  :class="{'focused':isFocused}" v-model="model.name" @focus="handleFocus" @focusout="handleFocusOut"  type="email" class="formInput" placeholder="Give your role a name" />
            </div>

          </div>

          <div class="choose-role">
            <p class="choose-role-p">Choose Permission</p>
            <div class="choose-perm-options">
              <div class="choose-perm-options-item" @click="choosePermissions = 'full'">
                <svg v-if="choosePermissions === 'full'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                  <rect x="2" y="2" width="16" height="16" rx="8" fill="white"/>
                  <rect x="5" y="5" width="10" height="10" rx="5" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                </svg>
                <svg v-else  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" :stroke="custom_theme ? custom_theme.color : default_theme.color"/>
                </svg>
                <p>Full Permission</p>
              </div>
              <div class="choose-perm-options-item" @click="choosePermissions = 'custom'">
                <svg  v-if="choosePermissions === 'custom'"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                  <rect x="2" y="2" width="16" height="16" rx="8" fill="white"/>
                  <rect x="5" y="5" width="10" height="10" rx="5" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                </svg>

                <svg  v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" :stroke="custom_theme ? custom_theme.color : default_theme.color"/>
                </svg>

                <p>Custom Permission</p>
              </div>
            </div>


            <div v-show="choosePermissions === 'full'">
              <img src="../../assets/full_permission.svg" style="width: 100%;" />
            </div>

            <div v-show="choosePermissions === 'custom'" v-for="(i, index) in getPermissions" :key="index">
              <div class="permission-children">
                <div class="role-options" v-for="j in i" :key="j.id" >
                  <svg v-if="selectedRole.includes(j.id)" @click="removeRole(j.id)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                    <g clip-path="url(#clip0_1281_18363)">
                      <path d="M10.2864 14.7196L18.1653 6.83984L19.3781 8.05184L10.2864 17.1436L4.83154 11.6887L6.04354 10.4767L10.2864 14.7196Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1281_18363">
                        <rect width="20.5714" height="20.5714" fill="white" transform="translate(1.71484 1.71484)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg @click="pushRole(j.id)"  v-else  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="white" :stroke="custom_theme ? custom_theme.color : default_theme.color"/>
                  </svg>
                  <p class="p-2">{{ j.name }}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="modal-footer">
          <on-boarding-button @click="createRole" :loading="getLoading" :disabled="getLoading" border="none"  btn-width="100%" text-node="Save"></on-boarding-button>
          <on-boarding-button @click="close" btn-width="100%" color="#000" text-node="Cancel" background="transparent" border="none"></on-boarding-button>
        </div>
      </div>
    </div>
  </layout>

</template>

<script>
import Layout from "./Layout.vue";
import storeUtils from "../../utils/storeUtils";
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import SettingsRequest from "../../model/SettingsRequest";
import {RuthdoAlert} from "ruthly";

export default {
  name: "AddNewRole",
  components:{Layout,OnBoardingButton},
  data(){
    return{
      isFocused:false,
      show:true,
      showChild:false,
      showChildIndex:null,
      dropdown:'up',
      dropdownIndex:null,
      normalIndex:null,
      activeIndex:null,
      model:SettingsRequest.createRole,
      selectedRole:[],
      choosePermissions:null,
      activeCustomerSelector:false

    }
  },

  methods:{
    close(){
      this.dropdownIndex = null
      this.normalIndex = null
      this.activeIndex = null
      this.$emit('close', false)
    },

    createRole(){
      if(this.model.name !== null){
        this.model.permission_ids = this.selectedRole

        storeUtils.fireAway().settings?.createRole().then(() => {
          if(this.getError === 'false'){
            this.close(false)
          }
        })
      }else{
        RuthdoAlert({title:'Please give your role a name', icon:'error'})
      }

    },

    pushRole(id){
      this.selectedRole.push(id)
      console.log(this.selectedRole)
    },

    removeRole(id){
      this.selectedRole = this.selectedRole.filter(it =>{
        return it !== id
      })
      console.log(this.selectedRole)
    },

    down(index){
      this.activeIndex = index
      this.dropdownIndex = `${index}down`
      this.normalIndex = index
      if(this.dropdownIndex === `${index}down` && this.normalIndex === index){
        this.dropdown = 'down'
      }

    },

    up(index) {
      if(this.activeIndex !== index){
        // if(this.dropdownIndex === `${index}down` && this.normalIndex === index) {
          this.dropdownIndex = `${index}up`
          this.dropdown = 'up'
          this.normalIndex = index
          this.activeIndex = null

        // }
      }
      else{
        this.activeIndex = null
      }
    },

    handleFocus(){
      this.isFocused = true
    },
    handleFocusOut(){
      this.isFocused = false
    },
    getAllPermissionsId(){
      let i = []
      let key;
      for(key in this.getPermissions){
        if(!this.selectedRole.includes(key)){
          i.push(this.getPermissions[key].map(item => item.id).toString())
        }
      }
      const array = i.flatMap(item => item.split(',')).map(item => Number(item))
      this.selectedRole = array
    },


  },

  computed:{
    getPermissions(){
      return storeUtils.fireAway().settings?.getPermissions
    },

    getLoading(){
      return storeUtils.fireAway().settings?.getRolesLoading
    },

    getError(){
      return storeUtils.fireAway().global?.getError
    },
    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    custom_theme(){
      return storeUtils.fireAway().theme.custom_theme
    },

  },


  mounted() {

  }
}
</script>

<style scoped>
.permission-type-p{
  color:  #1D242E;
  text-transform: capitalize;
  /* 16px/bold */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}
.permission-type-wrapper{
  display: flex;
  width: 36.8125rem;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E5E9F2;
}
.permission-type{
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.permission-length{
  display: flex;
  width: 2.625rem;
  padding: 0.125rem 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1rem;
  border: 0.6px solid  #E5E9F2;
  background: #EFF2F7;
}

.choose-perm-options-item{
  display: flex;
  width: 17rem;
  height: 3.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.875rem;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid #E5E9F2;
  background: #FFF;
  cursor: pointer;
}
.choose-perm-options{
  display: flex;
  margin-bottom: 1.5rem;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
}

@media (max-width: 1024px) {
  .choose-perm-options{
    flex-direction: column;
  }

  .choose-perm-options-item{
    width: 100%;
  }

  .permission-type-wrapper{
    width: 100%;
  }
}

.role-image{
  width: 2.35294rem;
  height: 2.35294rem;
  flex-shrink: 0;
  border-radius: 360px;
}
.modal-footer{
  padding-bottom: 2.54rem;
  padding-top: 3rem;
}
.p-1{
  color: #212B36;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.p-2{
  color: #637381;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.role-options{
  display: flex;
  width: 35.8125rem;
  padding: 0.5rem 0.625rem 0.5rem 1.25rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  gap: 1.25rem;
  border-radius: 0.375rem;
  margin-bottom: 1.25rem;
  margin-top: 1rem;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .role-options{
    width: 100%;
  }
}

.choose-role-p{
  color:  #1D1E2C;

  /* Medium/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}

.add-emails{
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: start;
  margin-bottom: 1.25rem;
}
.main{
  margin: 2rem;
}

.emails{
  display: flex;
  width: 13.25rem;
  padding: 0.625rem 0.625rem 0.625rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 5rem;
  background: var(--bg, #EFF2F7);
}

@media (max-width: 1024px) {
  .emails{
    width: 100%;
  }
}

.add-team-member{
  color:  #1D1E2C;

  /* 18px/bold */
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 155.556% */
}

.modal{
  width: 39.8125rem;
  height: auto;
  margin: 50px auto;
  border-radius: 1rem;
  background:  #FFF;
  display: inline-block;
  /* m3 */
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
}

@media (max-width: 1024px) {
  .modal{
    height: auto;
  }
}

.modal-header{
  display: inline-flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  /*gap: 22.5625rem;*/
  background:  #F9FAFC;
  width: 100%;
  border-radius: 1rem;

}

.on_boarding_input{
  position:relative;
  width: 100%;
}

.formInput{
  height: 4rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border-radius: 0.375rem;
  border: 1px solid  #E0E6ED;
  padding-top: 1.13rem;
  padding-left:1.25rem;
  margin-bottom: 1rem;
  width:100%;
}

/* .groupedformInput{} */

.formInput.focused{
  padding-top: 1.13rem;
  padding-left:1.25rem;
  border: 1px solid var(--app-default-primary);
  border-radius: 0.375rem;
  outline: var(--app-default-primary);
}

.error{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  /* Red */
  color: #FF1F1F;
  margin-top: -10px;
  margin-bottom: 16px;

}

.label.focused{
  position:absolute;
  top:0.3rem;
  left:1.25rem;
  width: auto;
  height:1.50rem;
  font-size:0.88rem;
  text-transform: capitalize;
  line-height: 1.5rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color:  #575A65;
  transition: ease-in-out .2s;
}

.label{
  position:absolute;
  top:0.5rem;
  left:1.25rem;
  width: auto;
  height:1.50rem;
  font-size:1rem;
  text-transform: capitalize;
  line-height: 1.7rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color:  #575A65;
  transition: ease-in .2s;
}

@media (max-width:1024px) {
  .formInput{
    width:100% !important;
  }
}

@media (max-width: 1024px) {
  .modal{
    margin: 20px auto;
    width: 90%;
  }
}

</style>