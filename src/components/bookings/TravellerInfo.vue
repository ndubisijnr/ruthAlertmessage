<template>
  <booking-index v-slot:booking_children>
    <div class="flight-result animate__animated animate__fadeIn">
      <!-- {{ getSelectedFlight }} -->

      <div class="breaker1"></div>

      <!-- <div class="intro_summary_wrapper">

      <div class="into-summary" v-for="(i, index) in getSelectedFlight.outbound" :key="index">
        <div class="into-summary-item">
          <div>
            <p class="into-summary-item-p">{{convertToWord(i.departure_time)}}</p>
            <p></p>
          </div>
          <div style="display: flex;justify-content: end;">
            <p class="duration">{{ convertDurationToWords(i.duration) }}</p>
            <p></p>
          </div>
          <div>
            <p class="into-summary-item-p">{{convertToWord(i.arrival_time)}}</p>
            <p></p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="233" viewBox="0 0 16 233" fill="none">
          <path d="M7.64645 232.354C7.84171 232.549 8.15829 232.549 8.35355 232.354L11.5355 229.172C11.7308 228.976 11.7308 228.66 11.5355 228.464C11.3403 228.269 11.0237 228.269 10.8284 228.464L8 231.293L5.17157 228.464C4.97631 228.269 4.65973 228.269 4.46447 228.464C4.2692 228.66 4.2692 228.976 4.46447 229.172L7.64645 232.354ZM7.5 0V2H8.5V0L7.5 0ZM7.5 6V10H8.5L8.5 6H7.5ZM7.5 14V18H8.5V14H7.5ZM7.5 22L7.5 26H8.5V22H7.5ZM7.5 30L7.5 34H8.5V30H7.5ZM7.5 38L7.5 42H8.5V38H7.5ZM7.5 46L7.5 50H8.5L8.5 46H7.5ZM7.5 54V58H8.5V54H7.5ZM7.5 62V66H8.5L8.5 62H7.5ZM7.5 70V74H8.5V70H7.5ZM7.5 78L7.5 82H8.5V78H7.5ZM7.5 86L7.5 90H8.5V86H7.5ZM7.5 94L7.5 98H8.5V94H7.5ZM7.5 102L7.5 106H8.5V102H7.5ZM7.5 110V114H8.5V110H7.5ZM7.5 118V122H8.5L8.5 118H7.5ZM7.5 126V130H8.5V126H7.5ZM7.5 134V138H8.5L8.5 134H7.5ZM7.5 142V146H8.5V142H7.5ZM7.5 150L7.5 154H8.5V150H7.5ZM7.5 158L7.5 162H8.5V158H7.5ZM7.5 166L7.5 170H8.5V166H7.5ZM7.5 174L7.5 178H8.5V174H7.5ZM7.5 182V186H8.5V182H7.5ZM7.5 190V194H8.5L8.5 190H7.5ZM7.5 198V202H8.5V198H7.5ZM7.5 206L7.5 210H8.5L8.5 206H7.5ZM7.5 214L7.5 218H8.5V214H7.5ZM7.5 222L7.5 226H8.5V222H7.5ZM7.5 230V232H8.5V230H7.5ZM7.29289 232.707C7.68342 233.098 8.31658 233.098 8.70711 232.707L15.0711 226.343C15.4616 225.953 15.4616 225.319 15.0711 224.929C14.6805 224.538 14.0474 224.538 13.6569 224.929L8 230.586L2.34315 224.929C1.95262 224.538 1.31946 224.538 0.928932 224.929C0.538408 225.319 0.538408 225.953 0.928932 226.343L7.29289 232.707ZM7 0V2H9V0L7 0ZM7 6V10H9V6H7ZM7 14V18H9V14H7ZM7 22L7 26H9V22H7ZM7 30L7 34H9V30H7ZM7 38L7 42H9V38H7ZM7 46L7 50H9L9 46H7ZM7 54V58H9V54H7ZM7 62V66H9L9 62H7ZM7 70V74H9V70H7ZM7 78L7 82H9V78H7ZM7 86L7 90H9V86H7ZM7 94L7 98H9V94H7ZM7 102L7 106H9V102H7ZM7 110V114H9V110H7ZM7 118V122H9L9 118H7ZM7 126V130H9V126H7ZM7 134V138H9L9 134H7ZM7 142V146H9V142H7ZM7 150L7 154H9V150H7ZM7 158L7 162H9V158H7ZM7 166L7 170H9V166H7ZM7 174L7 178H9V174H7ZM7 182V186H9V182H7ZM7 190V194H9L9 190H7ZM7 198V202H9V198H7ZM7 206L7 210H9L9 206H7ZM7 214L7 218H9V214H7ZM7 222L7 226H9V222H7ZM7 230V232H9V230H7Z" fill="#C0CCDA"/>
        </svg>

        <div class="into-summary-item">
          <div>
            <p>{{getCityByCityCode(i.airport_from)}}  ({{i.airport_from}})</p>
            <p> {{getAirportNamesByCityCode(i.airport_from)}}</p>
          </div>
          <div>
            <div style="display: flex;gap: 0.5rem;align-items: center;">
              <img  :src="i.airline_details.logo" class="logo"/>
              <p>{{i.airline_details.name}}</p>
            </div>
          </div>
          <div>
            <p>{{getCityByCityCode(i.airport_to)}}  ({{i.airport_to}})</p>
            <p> {{getAirportNamesByCityCode(i.airport_to)}}</p>
          </div>

        </div>

      </div>

    </div> -->

      <!-- <div v-if="getSelectedFlight.inbound.length > 0"  class="intro_summary_wrapper">


      <div class="into-summary" v-for="(i, index) in getSelectedFlight.inbound" :key="index">
        <div class="into-summary-item">
          <div>
            <p  class="into-summary-item-p">{{convertToWord(i.departure_time)}}</p>
          </div>

          <div style="display: flex;justify-content: end;">
            <p class="duration">{{ convertDurationToWords(i.duration) }}</p>
          </div>

          <div>
            <p class="into-summary-item-p">{{convertToWord(i.arrival_time)}}</p>
          </div>
       
         
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="233" viewBox="0 0 16 233" fill="none">
          <path d="M7.64645 232.354C7.84171 232.549 8.15829 232.549 8.35355 232.354L11.5355 229.172C11.7308 228.976 11.7308 228.66 11.5355 228.464C11.3403 228.269 11.0237 228.269 10.8284 228.464L8 231.293L5.17157 228.464C4.97631 228.269 4.65973 228.269 4.46447 228.464C4.2692 228.66 4.2692 228.976 4.46447 229.172L7.64645 232.354ZM7.5 0V2H8.5V0L7.5 0ZM7.5 6V10H8.5L8.5 6H7.5ZM7.5 14V18H8.5V14H7.5ZM7.5 22L7.5 26H8.5V22H7.5ZM7.5 30L7.5 34H8.5V30H7.5ZM7.5 38L7.5 42H8.5V38H7.5ZM7.5 46L7.5 50H8.5L8.5 46H7.5ZM7.5 54V58H8.5V54H7.5ZM7.5 62V66H8.5L8.5 62H7.5ZM7.5 70V74H8.5V70H7.5ZM7.5 78L7.5 82H8.5V78H7.5ZM7.5 86L7.5 90H8.5V86H7.5ZM7.5 94L7.5 98H8.5V94H7.5ZM7.5 102L7.5 106H8.5V102H7.5ZM7.5 110V114H8.5V110H7.5ZM7.5 118V122H8.5L8.5 118H7.5ZM7.5 126V130H8.5V126H7.5ZM7.5 134V138H8.5L8.5 134H7.5ZM7.5 142V146H8.5V142H7.5ZM7.5 150L7.5 154H8.5V150H7.5ZM7.5 158L7.5 162H8.5V158H7.5ZM7.5 166L7.5 170H8.5V166H7.5ZM7.5 174L7.5 178H8.5V174H7.5ZM7.5 182V186H8.5V182H7.5ZM7.5 190V194H8.5L8.5 190H7.5ZM7.5 198V202H8.5V198H7.5ZM7.5 206L7.5 210H8.5L8.5 206H7.5ZM7.5 214L7.5 218H8.5V214H7.5ZM7.5 222L7.5 226H8.5V222H7.5ZM7.5 230V232H8.5V230H7.5ZM7.29289 232.707C7.68342 233.098 8.31658 233.098 8.70711 232.707L15.0711 226.343C15.4616 225.953 15.4616 225.319 15.0711 224.929C14.6805 224.538 14.0474 224.538 13.6569 224.929L8 230.586L2.34315 224.929C1.95262 224.538 1.31946 224.538 0.928932 224.929C0.538408 225.319 0.538408 225.953 0.928932 226.343L7.29289 232.707ZM7 0V2H9V0L7 0ZM7 6V10H9V6H7ZM7 14V18H9V14H7ZM7 22L7 26H9V22H7ZM7 30L7 34H9V30H7ZM7 38L7 42H9V38H7ZM7 46L7 50H9L9 46H7ZM7 54V58H9V54H7ZM7 62V66H9L9 62H7ZM7 70V74H9V70H7ZM7 78L7 82H9V78H7ZM7 86L7 90H9V86H7ZM7 94L7 98H9V94H7ZM7 102L7 106H9V102H7ZM7 110V114H9V110H7ZM7 118V122H9L9 118H7ZM7 126V130H9V126H7ZM7 134V138H9L9 134H7ZM7 142V146H9V142H7ZM7 150L7 154H9V150H7ZM7 158L7 162H9V158H7ZM7 166L7 170H9V166H7ZM7 174L7 178H9V174H7ZM7 182V186H9V182H7ZM7 190V194H9L9 190H7ZM7 198V202H9V198H7ZM7 206L7 210H9L9 206H7ZM7 214L7 218H9V214H7ZM7 222L7 226H9V222H7ZM7 230V232H9V230H7Z" fill="#C0CCDA"/>
        </svg>

        <div class="into-summary-item">
          <div>
            <p>{{getCityByCityCode(i.airport_from)}}  ({{i.airport_from}})</p>
            <p> {{getAirportNamesByCityCode(i.airport_from)}}</p>
          </div>
          <div>
            <div style="display: flex;align-items: center;gap: 0.5rem;">
              <img  :src="i.airline_details.logo" class="logo"/>
              <p>{{i.airline_details.name}}</p>
            </div>
          </div>
          <div>
            <p>{{getCityByCityCode(i.airport_to)}}  ({{i.airport_to}})</p>
            <p> {{getAirportNamesByCityCode(i.airport_to)}}</p>
          </div>

        </div>

      </div>

      </div> -->

      <div class="travellers_wrapper">
        <div class="travellers-info">
          <div class="adding-travellers-info">
            <div class="contact-details">
              <p class="contact_details">Contact Details</p>

              <div class="group-inputs">
                <on-boarding-input
                  :default-value="getUser?.email"
                  width="100%"
                  @inputValue="(value) => (bookFlightModal.contact_email = value)"
                  label="Email Address"
                ></on-boarding-input>
                <on-boarding-input
                  :id="'contactPhone'"
                  :error="phoneValidation"
                  width="100%"
                  @inputValue="(value) => (bookFlightModal.contact_phone = value)"
                  label="phone"
                ></on-boarding-input>
              </div>
            </div>

            <div
              style="margin-bottom: 6rem"
              v-for="(w, index) in passengers"
              :key="index"
            >
              <div class="contact-details">
                <p class="contact_details">Passenger {{ index + 1 }} Details</p>
              </div>

              <div class="simple-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.57617 19.4238C6.56104 21.409 9.19482 22.5 12 22.5C14.8052 22.5 17.4434 21.409 19.4238 19.4238C21.4087 17.4387 22.5 14.8055 22.5 12C22.5 9.19455 21.4087 6.55719 19.4238 4.57617C17.4434 2.59103 14.8052 1.5 12 1.5C9.19482 1.5 6.55664 2.59103 4.57617 4.57617C2.59131 6.55719 1.5 9.19455 1.5 12C1.5 14.8055 2.59131 17.4428 4.57617 19.4238ZM10.6875 6.75C10.6875 6.02399 11.2734 5.4375 12 5.4375C12.7266 5.4375 13.3125 6.02399 13.3125 6.75V13.3125C13.3125 14.0385 12.7266 14.625 12 14.625C11.2734 14.625 10.6875 14.0385 10.6875 13.3125V6.75ZM13.3125 17.25C13.3125 16.524 12.7266 15.9375 12 15.9375C11.2734 15.9375 10.6875 16.524 10.6875 17.25C10.6875 17.976 11.2734 18.5625 12 18.5625C12.7266 18.5625 13.3125 17.976 13.3125 17.25Z"
                    fill="#1D1E2C"
                  />
                </svg>
                <p style="font-size: 0.875rem; font-weight: 400">
                  Use all given names and surnames exactly as they appear in your
                  passport/ID to avoid boarding complications.
                </p>
              </div>

              <div class="form">
                <!-- <div v-for="(w, index) in passengers" :key="index"> -->

                <!-- passengerList -->

                <p class="key">{{ w.passenger_type }}</p>

                <div>
                  <div class="title">
                    <div class="title-item">
                      <input
                        style="cursor: pointer"
                        type="radio"
                        @change="(isTitle = 'mr'), isTitle ? (w.title = 'mr') : null"
                        :checked="w.title === 'mr'"
                      />
                      <span>Mr</span>
                    </div>
                    <div class="title-item">
                      <input
                        style="cursor: pointer"
                        type="radio"
                        @change="(isTitle = 'mrs'), isTitle ? (w.title = 'mrs') : null"
                        :checked="w.title === 'mrs'"
                      />
                      <span>Mrs</span>
                    </div>
                    <div class="title-item">
                      <input
                        style="cursor: pointer"
                        type="radio"
                        @change="(isTitle = 'ms'), isTitle ? (w.title = 'ms') : null"
                        :checked="w.title === 'ms'"
                      />
                      <span> Ms</span>
                    </div>
                  </div>

                  <div class="input-area">
                    <div class="group-inputs no_gap">
                      <on-boarding-input
                        style="
                          border-bottom-right-radius: 0;
                          border-top-right-radius: 0;
                          border-right: none;
                        "
                        autocomplete="off"
                        width="100%"
                        label="Frist Name"
                        class=""
                        @inputValue="(value) => (w.first_name = value)"
                      />
                      <on-boarding-input
                        style="border-radius: 0; border-right: none; border-left: none"
                        autocomplete="off"
                        width="100%"
                        label="Middle Name"
                        class=""
                      />
                      <on-boarding-input
                        style="
                          border-bottom-left-radius: 0;
                          border-top-left-radius: 0;
                          border-left: none;
                        "
                        autocomplete="off"
                        width="100%"
                        label="Last Name"
                        class=""
                        @inputValue="(value) => (w.last_name = value)"
                      />
                    </div>
                    <div class="group-inputs">
                      <!-- <div class="choose_document_type" style="position: relative;">
                            <label class="class_label">Gender</label>
                            <p class="selected-item">{{ w?.gender }}</p>
                            <div  v-if="showGender && index === showingGenderIndex" class="dropDown">
                              <div class="passenger-type">
                                  <p class="passenger-type-text-1" @click="w.gender = 'male', showGender = !showGender">Male</p>
                                </div>
                                <div class="passenger-type" style="border: none">
                                  <p class="passenger-type-text-1" @click="w.gender = 'female',showGender = !showGender">Female</p>
                                </div>
                            </div>
                            <img @click="showGender = !showGender, showingGenderIndex = index" src="../../assets/Monotone.svg" style="cursor: pointer" />
                          </div> -->

                      <DataPicker
                        v-if="w.passenger_type === 'infant'"
                        :max_date="new Date(new Date().setDate(new Date().getDate() - 1))"
                        :min_date="getYYYYMMDDFormat(infantMax)"
                        label="Infant Date of birth"
                        @dateValue="(obj) => (w.dob = obj.formattedDate)"
                      />
                      <DataPicker
                        v-else-if="w.passenger_type === 'child'"
                        :max_date="
                          getYYYYMMDDFormat(
                            new Date().setFullYear(new Date().getFullYear() - 5)
                          )
                        "
                        :min_date="
                          getYYYYMMDDFormat(
                            new Date().setFullYear(new Date().getFullYear() - 22)
                          )
                        "
                        label="Child Date of birth"
                        @dateValue="(obj) => (w.dob = obj.formattedDate)"
                      />
                      <DataPicker
                        v-else
                        :max_date="getYYYYMMDDFormat(dobMax)"
                        label="Adult Date of birth"
                        @dateValue="(obj) => (w.dob = obj.formattedDate)"
                      />
                    </div>

                    <!-- <div class="group-inputs">
                        <on-boarding-input autocomplete="off" width="100%" label="Email" class="" @inputValue="(value) => w.email = value"/>

                        <on-boarding-input autocomplete="off" width="100%" label="Phone Number" class="" @inputValue="(value) => w.phone_number = value" />
                      </div> -->

                    <!-- <div style="display: flex;justify-content: end;">
                        <div class="remove_button" @click="removePassengers(i.id)">
                          Remove Passanger
                        </div>
                      </div> -->
                  </div>
                </div>
              </div>
              <div class="contact-details" v-if="getSelectedFlight?.document_required">
                <div style="margin-bottom: 1rem">
                  <span class="contact_details">Passport Information</span><br />
                  <span style="font-size: 1rem; font-weight: 700"
                    >Please ensure your passport is valid for at least 6 months from the
                    departure date</span
                  >
                </div>

                <div class="group-inputs">
                  <on-boarding-input
                    :id="'passportNumber'"
                    :error="passportNumberValidation"
                    width="100%"
                    @inputValue="(value) => (w.documents.number = value)"
                    label="Passport Number"
                  ></on-boarding-input>
                </div>

                <div class="group-inputs">
                  <div class="choose_document_type" style="position: relative">
                    <label class="class_label">Passport Nationality</label>
                    <p class="selected-item">
                      {{
                        selectedNationalityCountry
                          ? selectedNationalityCountry
                          : countries[0].name
                      }}
                    </p>
                    <div
                      v-if="showCountries && label === 'pn' && index_ === index"
                      class="dropDown"
                    >
                      <div class="doc_type_options">
                        <div
                          class="passenger-type"
                          v-for="i in countries"
                          style="width: 100%"
                        >
                          <p
                            class="passenger-type-text-1"
                            @click="
                              (w.documents.nationality_country = i.code),
                                (selectedNationalityCountry = i.name),
                                (showCountries = !showCountries)
                            "
                          >
                            {{ i.name }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <img
                      @click="
                        (showCountries = !showCountries), (label = 'pn'), (index_ = index)
                      "
                      src="../../assets/Monotone.svg"
                      style="cursor: pointer"
                    />
                  </div>

                  <div class="choose_document_type" style="position: relative">
                    <label class="class_label">Passport Issuing Country</label>
                    <p class="selected-item">
                      {{
                        selectedIssuingCountry
                          ? selectedIssuingCountry
                          : countries[0].name
                      }}
                    </p>
                    <div
                      v-if="showCountries && label === 'pic' && index_ === index"
                      class="dropDown"
                    >
                      <div class="doc_type_options">
                        <div
                          class="passenger-type"
                          v-for="i in countries"
                          style="width: 100%"
                        >
                          <p
                            class="passenger-type-text-1"
                            @click="
                              (w.documents.issuing_country = i.code),
                                (selectedIssuingCountry = i.name),
                                (showCountries = !showCountries)
                            "
                          >
                            {{ i.name }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <img
                      @click="
                        (showCountries = !showCountries),
                          (label = 'pic'),
                          (index_ = index)
                      "
                      src="../../assets/Monotone.svg"
                      style="cursor: pointer"
                    />
                  </div>

                  <!--                <on-boarding-input  width="100%" @inputValue="value => documents.nationality_country = value" label="Passport Nationality"></on-boarding-input>-->
                  <!--                <on-boarding-input  width="100%" @inputValue="value => documents.issuing_country = value" label="Passport Issuing Country"></on-boarding-input>-->
                </div>

                <div class="group-inputs">
                  <DataPicker
                    :max_date="new Date()"
                    label="Issued Date"
                    @dateValue="(obj) => (w.documents.issuing_date = obj.formattedDate)"
                  />

                  <DataPicker
                    :min_date="new Date()"
                    label="Expiry Date"
                    @dateValue="(obj) => (w.documents.expiry_date = obj.formattedDate)"
                  />

                  <!--                <on-boarding-input  width="100%" @inputValue="value => documents.document_type = value" label="Document Type"></on-boarding-input>-->
                </div>
              </div>
              <!-- <div class="simple-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.57617 19.4238C6.56104 21.409 9.19482 22.5 12 22.5C14.8052 22.5 17.4434 21.409 19.4238 19.4238C21.4087 17.4387 22.5 14.8055 22.5 12C22.5 9.19455 21.4087 6.55719 19.4238 4.57617C17.4434 2.59103 14.8052 1.5 12 1.5C9.19482 1.5 6.55664 2.59103 4.57617 4.57617C2.59131 6.55719 1.5 9.19455 1.5 12C1.5 14.8055 2.59131 17.4428 4.57617 19.4238ZM10.6875 6.75C10.6875 6.02399 11.2734 5.4375 12 5.4375C12.7266 5.4375 13.3125 6.02399 13.3125 6.75V13.3125C13.3125 14.0385 12.7266 14.625 12 14.625C11.2734 14.625 10.6875 14.0385 10.6875 13.3125V6.75ZM13.3125 17.25C13.3125 16.524 12.7266 15.9375 12 15.9375C11.2734 15.9375 10.6875 16.524 10.6875 17.25C10.6875 17.976 11.2734 18.5625 12 18.5625C12.7266 18.5625 13.3125 17.976 13.3125 17.25Z" fill="#1D1E2C"/>
              </svg>
              <p> Covid 19 protocols: You can find some of the special requirements for any destination via the link below
                or directly on your airline's website.
                Please also consult your local health authorities for updated information.</p>
              </div>  -->
              <!-- </div> -->
            </div>

            <!-- <div class="add-new-flight" @click="passengers.length < getSelectedFlight.price_summary.map(it => it.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0)  ? addPassenger() : null" :class="{'disabled':passengers.length === getSelectedFlight.price_summary.map(it => it.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0) }">
                <img src="../../assets/Cards/add.svg" width="20" />
                <p>Add New Passenger</p>
            </div> -->

            <div class="">
              <p class="contact_details">Paying Now, or Later</p>

              <p class="text-1">
                To reserve your flights, click
                <span class="span-1">"Book on Hold." </span> You will then be given
                complete instructions on how to make payment whenever you are ready during
                the stipulated time. Please mention your booking reference. Until payment
                is confirmed, the advertised fare / pricing is not guaranteed.
              </p>

              <div :class="{ onHold: showBookHold }">
                <div class="choose_document_type" style="position: relative">
                  <p class="book_on_hold">Book on Hold</p>
                  <svg
                    v-if="!showBookHold"
                    @click="showBookHold = !showBookHold"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.8 12.0005C16.8 12.7005 16.53 13.4005 16 13.9305L9.48001 20.4505C9.19001 20.7405 8.71001 20.7405 8.42001 20.4505C8.13001 20.1605 8.13001 19.6805 8.42001 19.3905L14.94 12.8705C15.42 12.3905 15.42 11.6105 14.94 11.1305L8.42001 4.61047C8.13001 4.32047 8.13001 3.84047 8.42001 3.55047C8.71001 3.26047 9.19001 3.26047 9.48001 3.55047L16 10.0705C16.53 10.6005 16.8 11.3005 16.8 12.0005Z"
                      fill="#292D32"
                    />
                  </svg>
                  <svg
                    @click="showBookHold = !showBookHold"
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 16.7996C11.3 16.7996 10.6 16.5296 10.07 15.9996L3.55002 9.47965C3.26002 9.18965 3.26002 8.70965 3.55002 8.41965C3.84002 8.12965 4.32002 8.12965 4.61002 8.41965L11.13 14.9396C11.61 15.4196 12.39 15.4196 12.87 14.9396L19.39 8.41965C19.68 8.12965 20.16 8.12965 20.45 8.41965C20.74 8.70965 20.74 9.18965 20.45 9.47965L13.93 15.9996C13.4 16.5296 12.7 16.7996 12 16.7996Z"
                      fill="#292D32"
                    />
                  </svg>
                </div>

                <div v-if="showBookHold">
                  <p class="dropDown_p">
                    Hold price and space and you have the flexibility to pay at a later
                    date, Hold price and space and you have the flexibility to pay at a
                    later date
                  </p>
                </div>
              </div>

              <OnBoardingButton
                style="margin-top: 4rem; margin-bottom: 8.87rem; border: none"
                @click="proceedToPayment"
                :loading="getLoading"
                :disabled="getLoading"
                btn-width="100%"
                text-node="Continue"
              ></OnBoardingButton>
            </div>
          </div>

          <div class="booking_summary">
            <div class="booking_summary_header">
              <p class="booking_summary_header-summary">Booking Summary</p>
            </div>
            <div class="booking_summary_body">
              <!--              {{getSelectedFlight.routes[0].segments}}-->
              <div class="airline_details" v-if="!getSelectedFlight.is_multicity">
                <img
                  :src="getSelectedFlight?.outbound[0]?.airline_details?.logo"
                  class="logo"
                />
                <p class="airline_name">
                  {{ getSelectedFlight?.outbound[0].airline_details?.name }}
                </p>
              </div>
              <div v-else class="airline_details">
                <img
                  :src="getSelectedFlight.routes[0].segments[0]?.airline_details?.logo"
                  class="logo"
                />
                <p class="airline_name">
                  {{ getSelectedFlight.routes[0].segments[0].airline_details?.name }}
                </p>
              </div>

              <div class="airline_info">
                <!-- <div class="actual-result-item-info">
                  <div>
                    <p class="dest"> {{convertToWord(getSelectedFlight.outbound[0].departure_time.split('T')[0])}}</p>
                    <p class="time"> {{convertTo12HourFormat(getSelectedFlight.outbound[0].departure_time)}}</p>
                    <p class="dest">LOS</p>
                  </div>
                  <div class="more-flight-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 197 16" fill="none">
                      <path d="M196.354 8.35355C196.549 8.15829 196.549 7.84171 196.354 7.64645L193.172 4.46447C192.976 4.2692 192.66 4.2692 192.464 4.46447C192.269 4.65973 192.269 4.97631 192.464 5.17157L195.293 8L192.464 10.8284C192.269 11.0237 192.269 11.3403 192.464 11.5355C192.66 11.7308 192.976 11.7308 193.172 11.5355L196.354 8.35355ZM0 8.5H1.96V7.5H0V8.5ZM5.88 8.5H9.8V7.5H5.88V8.5ZM13.72 8.5H17.64V7.5H13.72V8.5ZM21.56 8.5H25.48V7.5H21.56V8.5ZM29.4 8.5H33.32V7.5H29.4V8.5ZM37.24 8.5H41.16V7.5H37.24V8.5ZM45.08 8.5H49V7.5H45.08V8.5ZM52.92 8.5H56.84V7.5H52.92V8.5ZM60.76 8.5H64.68V7.5H60.76V8.5ZM68.6 8.5H72.52V7.5H68.6V8.5ZM76.44 8.5H80.36V7.5H76.44V8.5ZM84.28 8.5H88.2V7.5H84.28V8.5ZM92.12 8.5H96.04V7.5H92.12V8.5ZM99.96 8.5H103.88V7.5H99.96V8.5ZM107.8 8.5H111.72V7.5H107.8V8.5ZM115.64 8.5H119.56V7.5H115.64V8.5ZM123.48 8.5H127.4V7.5H123.48V8.5ZM131.32 8.5H135.24V7.5H131.32V8.5ZM139.16 8.5H143.08V7.5H139.16V8.5ZM147 8.5H150.92V7.5H147V8.5ZM154.84 8.5H158.76V7.5H154.84V8.5ZM162.68 8.5H166.6V7.5H162.68V8.5ZM170.52 8.5H174.44V7.5H170.52V8.5ZM178.36 8.5H182.28V7.5H178.36V8.5ZM186.2 8.5H190.12V7.5H186.2V8.5ZM194.04 8.5H196V7.5H194.04V8.5ZM196.707 8.70711C197.098 8.31658 197.098 7.68342 196.707 7.29289L190.343 0.928932C189.953 0.538408 189.319 0.538408 188.929 0.928932C188.538 1.31946 188.538 1.95262 188.929 2.34315L194.586 8L188.929 13.6569C188.538 14.0474 188.538 14.6805 188.929 15.0711C189.319 15.4616 189.953 15.4616 190.343 15.0711L196.707 8.70711ZM0 9H1.96V7H0V9ZM5.88 9H9.8V7H5.88V9ZM13.72 9H17.64V7H13.72V9ZM21.56 9H25.48V7H21.56V9ZM29.4 9H33.32V7H29.4V9ZM37.24 9H41.16V7H37.24V9ZM45.08 9H49V7H45.08V9ZM52.92 9H56.84V7H52.92V9ZM60.76 9H64.68V7H60.76V9ZM68.6 9H72.52V7H68.6V9ZM76.44 9H80.36V7H76.44V9ZM84.28 9H88.2V7H84.28V9ZM92.12 9H96.04V7H92.12V9ZM99.96 9H103.88V7H99.96V9ZM107.8 9H111.72V7H107.8V9ZM115.64 9H119.56V7H115.64V9ZM123.48 9H127.4V7H123.48V9ZM131.32 9H135.24V7H131.32V9ZM139.16 9H143.08V7H139.16V9ZM147 9H150.92V7H147V9ZM154.84 9H158.76V7H154.84V9ZM162.68 9H166.6V7H162.68V9ZM170.52 9H174.44V7H170.52V9ZM178.36 9H182.28V7H178.36V9ZM186.2 9H190.12V7H186.2V9ZM194.04 9H196V7H194.04V9Z" fill="#9DA8B6"/>
                    </svg>
                  </div>
                  <div>
                    <p class="dest">{{convertToWord(getSelectedFlight.outbound[0].arrival_time.split('T')[0])}}</p>
                    <p class="time"> {{convertTo12HourFormat(getSelectedFlight.outbound[0].arrival_time)}}</p>
                    <p class="dest">LOS</p>
                  </div>
                </div> -->
                <div class="actual-result-item-info-2">
                  <div
                    v-for="(i, index) in getSelectedFlight?.price_summary"
                    :key="index"
                    class="extra-charge-info"
                  >
                    <div style="margin-bottom: 0.38rem">
                      <div
                        style="
                          display: flex;
                          gap: 0.5rem;
                          align-items: center;
                          justify-content: space-between;
                        "
                      >
                        <div style="display: flex; gap: 0.5rem; align-items: center">
                          <p class="dest">{{ i.passenger_type }}</p>
                          <p
                            style="
                              text-transform: lowercase;
                              border-radius: 50%;
                              width: 18px;
                              height: auto;
                              text-align: center;
                            "
                          >
                            X {{ i.quantity }}
                          </p>
                        </div>
                        <p class="">₦ {{ formatAmount(i.total_price) }}</p>
                      </div>
                    </div>
                    <!--                      <div style="display: flex;gap: 0.5rem;justify-content: space-between;">-->
                    <!--                        <p class="dest">Base Fare</p>-->
                    <!--                        <p class="">₦ {{formatAmount(i.total_price)}}</p>-->
                    <!--                      </div>-->
                    <!--                      <div style="display: flex;gap: 0.5rem;justify-content: space-between;">-->
                    <!--                        <p class="dest">Tax Fare</p>-->
                    <!--                        <p class="">₦ {{formatAmount(i.total_price)}}</p>-->
                    <!--                      </div>-->
                  </div>
                </div>
              </div>
            </div>
            <div class="booking_summary_footer">
              <p class="total">Total</p>
              <p class="amount">₦ {{ formatAmount(getSelectedFlight?.amount) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </booking-index>
</template>

<script>
import BookingIndex from "../../views/dashboard/Index.vue";
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import storeUtils from "../../utils/storeUtils";
import OnBoardingInput from "../Inputs/OnBoardingInput.vue";
import DataPicker from "../Inputs/custom-date-picker/DataPicker.vue";
import FlightRequest from "../../model/FlightRequest";
import countries from "@/mixins/countries";
import {
  formatAmount,
  getYYYYMMDDFormat,
  convertDurationToWords,
  convertToWord,
  convertTo12HourFormat,
} from "../../mixins/flightUtil";
export default {
  name: "TravellerInfo",
  components: { OnBoardingInput, BookingIndex, OnBoardingButton, DataPicker },
  data() {
    return {
      showBookHold: false,
      countries,
      bookFlightModal: FlightRequest.bookFlight,
      phoneValidation: null,
      passportNumberValidation: null,
      formatAmount,
      convertToWord,
      convertTo12HourFormat,
      convertDurationToWords,
      getYYYYMMDDFormat,
      passengers: [],
      index_: null,
      passengerIdCounter: 1,
      showCountries: null,
      label: null,
      selectedIssuingCountry: null,
      selectedNationalityCountry: null,
      showingGenderIndex: null,
      showGender: false,
      isTitle: false,
      dobMax: new Date().setFullYear(new Date().getFullYear() - 12),
      infantMax: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
      // new Date().setFullYear(new Date().getFullYear() - 2),
    };
  },
  methods: {
    addPassenger(value) {
      let value_;
      if (value.toLowerCase() === "held_infant") {
        value_ = value.split("_")[1];
      } else {
        value_ = value;
      }

      console.log(value_);

      const newPassenger = {
        passenger_type: value_,
        first_name: null,
        last_name: null,
        dob: null,
        gender: null,
        title: null,
        email: null,
        phone_number: null,
      };

      const documents = {
        number: null,
        issuing_date: null,
        expiry_date: null,
        issuing_country: this.countries[0].name,
        nationality_country: this.countries[0].name,
        document_type: "passport",
        holder: true,
      };

      // Create a new passenger object with a unique ID
      if (value === "child" || value === "held_infant" || "adult") {
        if (newPassenger.title === "mrs" || newPassenger.title === "ms") {
          newPassenger.gender = "female";
        } else {
          newPassenger.gender = "male";
        }
      }

      if (this.getSelectedFlight?.document_required) {
        newPassenger.documents = documents;
      }

      newPassenger.email = this.getUser?.email;
      newPassenger.phone_number = this.bookFlightModal?.phone_number;

      this.passengers.push(newPassenger);
    },

    passengerList() {
      for (let i = 0; i < this.getSelectedFlight?.travelers_price.length; i++) {
        const key = Object.keys(
          this.getSelectedFlight?.travelers_price[i]
        ).toLocaleString();
        this.addPassenger(key);
      }
    },

    removePassengers(value) {
      this.passengers = this.passengers.filter((it) => it.id !== value);
    },

    bookingValidation(id) {
      const element = document.getElementById(id);
      return !element?.value;
    },

    proceedToPayment() {
      this.phoneValidation = null;
      this.passportNumberValidation = null;
      const phone_validation = this.bookingValidation("contactPhone");
      let passportNumberValidation = null;
      if (this.getSelectedFlight?.document_required)
        passportNumberValidation = this.bookingValidation("passportNumber");
      console.log(passportNumberValidation, phone_validation);

      if (phone_validation) this.phoneValidation = "Contact Phone is required";
      else if (passportNumberValidation)
        this.passportNumberValidation = "Password number is required";
      else {
        this.phoneValidation = null;
        this.passportNumberValidation = null;
        const name = this.getBusinessProfile.name;
        let first_name = name.split(" ")[0];
        let last_name = name.split(" ")[1];
        this.bookFlightModal.passengers = this.passengers;
        this.bookFlightModal.contact_first_name = this.getUser?.first_name
          ? this.getUser?.first_name
          : first_name;
        this.bookFlightModal.contact_last_name = this.getUser?.last_name
          ? this.getUser?.last_name
          : last_name;
        this.bookFlightModal.contact_email = this.bookFlightModal.contact_email
          ? this.bookFlightModal.contact_email
          : this.getUser?.email;
        storeUtils
          .fireAway()
          .flight?.handleBookFlight(this.bookFlightModal, this.getSelectedFlight?.id);
      }
    },

    getAirportNamesByCityCode(city_code) {
      const airports = JSON.parse(localStorage?.airports);
      if (airports) {
        const airportName = airports.filter((it) => it.city_code === city_code)[0]?.name;
        return airportName;
      }
    },

    getCityByCityCode(city_code) {
      const airports = JSON.parse(localStorage?.airports);
      if (airports) {
        const cityName = airports.filter((it) => it.city_code === city_code)[0]?.city;
        return cityName;
      }
    },
  },
  computed: {
    getUser() {
      if (localStorage.user) {
        return JSON.parse(localStorage.user);
      }
    },
    getBusinessProfile() {
      if (localStorage.businessProfile) {
        const business = JSON.parse(localStorage?.businessProfile);
        return business;
      }
    },

    getSelectedFlight() {
      return storeUtils.fireAway()?.flight?.getSelectedFlight;
    },

    getLoading() {
      return storeUtils.fireAway()?.flight?.getBookingLoading;
    },
  },

  mounted() {
    this.passengerList();
  },
};
</script>

<style scoped>
.book_on_hold {
  color: var(--neutrals-onlock-berry, #1d242e);
  /* 16px/bold */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}
.booking_summary_header-summary {
  color: #2d3139;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
}
.passenger-type {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.37rem;
}

.selected-item {
  padding: 1.3rem 0 0.25rem 0;
  /* border: solid; */
  color: var(--black-text-01, #1d1e2c);
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}

.passenger-type-text-1 {
  color: #222;

  /* medium/input/16px */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  cursor: pointer;
}

.passenger-type-text-1:hover {
  transform: scale(1);
  font-size: 1.1rem;
}

.travellers_wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 1.44rem;
  justify-content: space-between;
}
.into-summary-item-p {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
}
.class_label {
  position: absolute;
  top: 5px;
  color: #2d3139;
  /* sanslight/12px/Regular */
  font-family: "Product Sans";
  font-size: 0.95rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem; /* 166.667% */
}

.airline_name {
  color: var(--black-text-03, #444854);
  text-align: center;

  /* subtext/medium/14px */
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
}

.key {
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  background: var(--primary-05, #eaf0f7);
  width: 10%;
  text-transform: capitalize;
  justify-content: center;
  margin: 1rem 0;
}
.disabled {
  cursor: not-allowed !important;
  background: transparent !important;
  border: solid var(--app-default-primary) !important;
}

.contact-details {
  margin-bottom: 2rem;
}

.duration {
  display: flex;
  padding: 0.5rem 1rem;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 31.25rem;
  border: 1px solid var(--black-text-03, #444854);
  justify-content: center;
  width: 5.817rem;
}

.remove_button {
  display: flex;
  width: 11rem;
  padding: 0.625rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: var(--red-error, #fef6f6);
  color: var(--error-red, #f04444);
  font-family: "Product Sans" Medium;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  cursor: pointer;
}

.intro_summary_wrapper {
  padding-bottom: 2.5rem;
  margin-bottom: 1.75rem;
  border: solid;
}
.into-summary {
  width: 100%;

  display: flex;
  position: relative;
  align-items: start;
  gap: 1.25rem;
  margin-top: 3rem;
}
.into-summary-item {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.span-1 {
  color: #2c6cac;
  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
}

.dropDown_p {
  color: #575a65;

  /* link/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
}

.booking_summary_body {
  margin: 1rem;
}
.airline_details {
  display: inline-flex;
  gap: 0.37rem;
  align-items: center;
}
.booking_summary_header {
  border-bottom: solid #dfe6ed;
  padding: 0.5rem;
  margin: 0 1rem;
}
.title-item {
  display: inline-flex;
  gap: 0.88rem;
  align-items: center;
}

.onHold {
  width: 43.875rem;
  /* height: 9.8125rem; */
  padding: 1.25rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid var(--primary-main, #2c6cac);
  margin-bottom: 4rem;
  background-color: #fff;
}
.title {
  display: flex;
  width: 17.1875rem;
  align-items: center;
  gap: 3rem;
  margin-bottom: 1rem;
  align-items: center;
}

.text-1 {
  color: #575a65;
  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  /* width: 43.875rem; */
  margin: 0.75rem 0;
}

.add-new-flight {
  display: flex;
  width: 14.411rem;
  padding: 0.5rem 1.25rem 0.5rem 1rem;
  align-items: center;
  gap: 0.625rem;
  color: var(--app-default-primary);
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  border-radius: 0.25rem;
  background: var(--app-defautl-primary-light);
  margin: 2rem 0;
  cursor: pointer;
}

.form {
  width: 100%;
  margin: 0;
}
.group-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
.contact_details {
  color: #1d1e2c;

  /* bold/24px */
  font-family: "Product Sans";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */
  margin: 0 0 1.6rem 0;
}
.simple-info {
  display: flex;
  width: 43rem;
  padding: 0.375rem 1rem;
  gap: 0.5rem;
  border-radius: 0.25rem;
  background: #f9fafc;
  align-items: center;
  justify-content: center;
}

.simple-info p {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 0.0035rem;
}

.travellers-info {
  display: flex;
  gap: 1.5rem;
  align-items: start;
  width: auto;
  justify-content: space-between;
}

.adding-travellers-info {
  width: 43.875rem;
}

.booking_summary {
  width: 21.75rem;
  height: auto;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid #e5e9f2;
  background: #fff;
  position: relative;
}

.booking_summary_footer {
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.extra-charge-info {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-between;
  border-bottom: solid #e5e9f2;
  /* margin: 0.5rem 0; */
  padding: 0.5rem 0;
  flex-direction: column;
}

a {
  text-decoration: none;
}

.progress {
  width: 100%;
  background-color: #89128a;
  height: 0.25rem;
  transition: 1s ease-in;
}
.u-hide {
  border-radius: 0.5rem;
  border: 1px solid #f9fafc;
  background: #f9fafc;
}
.book-flight-details-btn {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  padding: 4rem;
}
.extra-baggage-p {
  color: #1d1e2c;

  /* Subtext/14px/Regular */
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}
.price {
  color: #1d1e2c !important;

  /* Headings/black/24px */
  font-family: "Product Sans";
  font-size: 1.5rem !important;
  font-style: normal;
  font-weight: 900 !important;
  line-height: 3.875rem !important;
}

.breaker-3 {
  width: 0.0625rem;
  height: 2.25rem;
  background: #e0e6ed;
}

.additional-details-info-item {
  display: flex;
  width: auto;
  height: 2rem;
  gap: 0.5rem;
  align-items: center;
  justify-content: start;
}
.text-1 {
  color: #575a65;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  /*line-height: 1.5rem; !* 150% *!*/
}

.text-2 {
  color: #1d1e2c;

  /* medium/input/16px */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  /*line-height: 1.75rem;*/
}
.additional-details-info {
  display: flex;
  justify-content: start;
  border-top: solid #e0e6ed;
  border-bottom: solid #e0e6ed;
  width: 100%;
  gap: 1.5rem;
  height: 5.375rem;
  align-items: center;
  margin-top: 3.5rem;
}
.dropDown {
  width: 17.625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  gap: 1.25rem;
  border-radius: 0.5rem;
  top: 80%;
  background: #fff;
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  position: absolute;
  z-index: 999999999;
}
.depart_date-info {
  display: flex;
  align-items: center;
  gap: 3.25rem;
}
.depart-date-info-stops {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
}
.depart-date {
  color: #1d1e2c;

  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.actual-result-wrapper {
  margin-bottom: 2.06rem;
  border-radius: 0.25rem;
  /*border: 1px solid  #E5E9F2;*/
}
.details {
  border-radius: 0.25rem;
  /*border: 1px solid  #E5E9F2;*/
  padding: 1.5rem;
}
.component87 {
  width: 100%;
  height: auto;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid #e0e6ed;
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
}
.view-details {
  color: #89128a;
  width: 4.8125rem;
  height: 1.5rem;

  /* subtext/medium/14px */
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  cursor: pointer;
}
.spiralLines-div {
  position: absolute;
  top: -100px;
  right: -150px;
  width: 30.47194rem;
  height: 25.32919rem;
  /*border: solid;*/
  z-index: -1;
}
.choose_document_type {
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0.875rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid #eff2f7;
  margin-bottom: 1rem;
  background-color: #fff;
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
}

.doc_type_options {
  display: flex;
  width: 16rem;
  height: 200px;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;

  /*gap: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid  #F9FAFC;
  background: #FFF;
  left: 0;
  bottom: -60px;*/
  /* m4 */
}

.form-area-footer {
  margin-top: 4rem;
}
.group-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.no_gap {
  gap: 0;
}

.stops {
  color: #444854;
  font-family: "Product Sans";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 133.333% */
}
.activeDestType {
  border-bottom: 2px solid #89128a;
  color: #89128a !important;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  font-family: "Product Sans";
}
.more-flight-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dest {
  color: #444854;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
  text-transform: capitalize;
}
.logo-area {
  display: flex;
  width: 15.1875rem;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
}

.flight-name {
  color: #444854;
  text-align: center;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
}

.time {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 133.333% */
}

.amount {
  color: #1d1e2c;
  text-align: center;
  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
  margin-bottom: 1.25rem;
}
.amount-book-area {
  border-radius: 0.25rem;
  background: #f9fafc;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 15.888rem;
  display: flex;
  align-items: center;
}
.breaker-2 {
  width: 85%;
  height: 0.1rem;
  background: #e5e9f2;
}
.actual-result-item {
  width: 100%;
  height: 7rem;
  flex-shrink: 0;
  border-radius: 0rem 0rem 0.25rem 0.25rem;
  background: #fff;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.logo {
  width: 2rem;
  height: 2rem;
  border-radius: 30%;
}

.actual-result-item-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
  border-bottom: solid #dfe6ed;
  padding-bottom: 1rem;
}
.actual-result-item-info-2 {
  display: block;
  width: 100%;
  align-items: center;
}

.actual-result {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.25rem;
  border: 1px solid #e5e9f2;
  box-sizing: content-box;
}

.one-round-way-multi-city {
  margin-top: 2rem;
}

.search-result-filter-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter-item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d1e2c;

  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.filter-items {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.result-details {
  color: #2d3139;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  margin-bottom: 1rem;
}

.seperator_1 {
  width: 0.0625rem;
  height: 2.5rem;
  border: 1px solid #eff2f7;
}

.and-filter-by {
  color: #6a8297;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 100% */
}

.result-details-info {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.filter-by {
  display: flex;
  padding: 0rem 1rem;
  align-items: center;
  gap: 1.1875rem;
  border-radius: 1rem;
  border: 1px solid #eff2f7;
  background: #fff;
}

.breaker1 {
  width: 100%;
  height: 0.0625rem;
  background: #dfe6ed;
  margin-top: 0.56rem;
}

.dest-abv {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.dest-abv-it {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 133.333% */
}

.booking-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.search-info-area {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-info {
  display: flex;
  padding: 0.625rem 1.25rem;
  align-items: flex-start;
  width: auto !important;
  gap: 0.625rem;
  border-radius: 31.25rem;
  background: #eff2f7;
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
}

.flight-result {
  margin: 0;
}

.destination_type {
  margin: 0 2rem;
  padding: 0.38rem;
  color: #1d1e2c;

  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.booking-div-inner-wrapper {
  margin: 0.5rem;
  padding: 1.5rem;
}

.booking-nav-item {
  padding: 0.5rem;
  cursor: pointer;
  color: #201f1e;

  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.booking-div {
  margin: 2.88rem 4.75rem;
}

.booking-nav {
  display: flex;
  border-bottom: 1px solid #e5e9f2;
  gap: 5rem;
}

.progress-or {
  display: flex;
  justify-content: center;
  margin: 2rem auto;
}

.stage {
  color: #9da8b6;
  text-align: left;
  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  margin-left: -2rem;
}

.activeProgress {
  background: #89128a !important;
}
.activeStage {
  color: #89128a !important;
}

.progress-or-item {
}

.circle {
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  background: #e5e9f2;
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.line {
  width: 9.8125rem;
  height: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #e5e9f2;
}

.spiralLines {
  width: inherit;
  height: inherit;
}

.create-booking-process {
  width: 68.125rem;
  height: auto;
  flex-shrink: 0;
  position: relative;
}

.current-tab {
  color: #1d1e2c;
  text-align: center;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}

.one-way {
}

.travel_type_booking {
  width: 68.125rem;
  height: auto;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid #d8b0d8;
  background: #fff;
  z-index: 99;
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.2);
  position: relative;
}

@media (max-width: 1024px) {
  .travel_type_booking {
    width: 100% !important;
  }
}

.filter-div {
  background: #ffffff;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.filter-span {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
}

.overall {
  display: flex;
  justify-content: center;
}

.filter {
  display: flex;
  gap: 1.25rem;
}

.search_filter {
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-wrapper {
  overflow-x: scroll;
  width: 68.625rem;
}

.booking-wrapper {
  width: 68.625rem;
  height: auto;
  position: relative;
}

.search {
  display: flex;
  width: 19.4375rem;
  padding: 0.5rem 5rem 0.5rem 1.25rem;
  align-items: center;
  gap: 1.0625rem;
  flex-shrink: 0;
  outline: none;
  border-radius: 0.375rem;
  border: 0.6px solid #e5e9f2;
  background: #fff;
}

.create-booking {
  display: flex;
  padding: 0.8125rem 0.6875rem 0.8125rem 1.5rem;
  align-items: center;
  border-radius: 0.25rem;
  background: #f8f1f8;
  width: 15.9375rem;
  height: 5rem;
  gap: 0.75rem;
  cursor: pointer;
}

.create-booking-p {
  color: #1d1e2c;

  /* medium/input/16px */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.card-area {
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  overflow-x: scroll;
  width: 100%;
}

.no-team-member-h {
  color: #0e0842;
  text-align: center;

  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
  text-transform: capitalize;
}

.no-team-member-sub {
  color: #575a65;
  text-align: center;

  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.no-team-member-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}

.no-team-member {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 2.54rem;
  margin: 4rem;
}

@media (max-width: 1024px) {
  .card-area {
    overflow-x: scroll;
    width: 1024px;
  }

  .search_filter {
    flex-direction: column-reverse;
  }

  .search {
    width: 80%;
  }

  .filter {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }

  .filter-div {
    width: 80%;
  }
  .filter-btn {
    width: 80% !important;
  }

  .booking-wrapper {
    width: 100%;
  }

  .table-wrapper {
    width: auto !important;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
