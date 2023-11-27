<script>
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import Layout from "@/components/modals/Layout.vue";

export default {
  name: "Void",
  components: {Layout, OnBoardingButton}
}
</script>

<template>
  <layout v-slot:children>
    <div class="modal">
      <div class="modal-header">
        <p class="add-team-member">Choose Seat</p>
        <img src="../../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>

      <div class="main">
        <div class="modal-body">

          <div class="email-area">
            <div class="group-inputs">
              <div style="width: 100%">
                <label class="class_label">Seat Map * </label>

                <div class="choose_document_type" style="position: relative;">
                  <p class="selected-item">Select Options</p>
                  <!--              <div class="dropDown">-->
                  <!--                <div class="doc_type_options">-->
                  <!--                  <div class="passenger-type" style="width: 100%">-->
                  <!--                    <p class="passenger-type-text-1" @click="flightModel.cabin = 'Economy', showClass = !showClass">Economy</p>-->
                  <!--                  </div>-->



                  <!--                </div>-->
                  <!--              </div>-->
                  <img @click="showClass = !showClass, showPassengers = false" src="../../../assets/Monotone.svg" style="cursor: pointer" />
                </div>
              </div>
              <div style="width: 100%">
                <label class="class_label">Available seat Number </label>

                <div class="choose_document_type" style="position: relative;">
                  <p class="selected-item">Select Options</p>
                  <!--              <div class="dropDown">-->
                  <!--                <div class="doc_type_options">-->
                  <!--                  <div class="passenger-type" style="width: 100%">-->
                  <!--                    <p class="passenger-type-text-1" @click="flightModel.cabin = 'Economy', showClass = !showClass">Economy</p>-->
                  <!--                  </div>-->



                  <!--                </div>-->
                  <!--              </div>-->
                  <img @click="showClass = !showClass, showPassengers = false" src="../../../assets/Monotone.svg" style="cursor: pointer" />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div class="modal-footer">
          <on-boarding-button border="none" :loading="getLoading" @click="inviteMember" :disabled="getLoading" btn-width="100%" text-node="Send Request"></on-boarding-button>
        </div>

      </div>




    </div>


  </layout>

</template>

<style scoped>

</style>