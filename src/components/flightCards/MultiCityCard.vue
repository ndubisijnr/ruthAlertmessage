<template>

  <div v-if="!getFinalResult.length" class="no_results_found">
    <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="none">
      <path d="M0.117188 57.883C0.117188 73.2346 6.21556 87.9574 17.0707 98.8125C27.9259 109.668 42.6487 115.766 58.0002 115.766C73.3518 115.766 88.0746 109.668 98.9297 98.8125C109.785 87.9574 115.883 73.2346 115.883 57.883C115.883 42.5315 109.785 27.8087 98.9297 16.9536C88.0746 6.09837 73.3518 0 58.0002 0C42.6487 0 27.9259 6.09837 17.0707 16.9536C6.21556 27.8087 0.117188 42.5315 0.117188 57.883Z" fill="#F1F2F6"/>
      <path d="M8.3418 20.9214L67.758 3.4748L90.5149 80.9757L31.0986 98.4223L8.3418 20.9214Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.0869 8.62842H82.0131V89.3999H20.0869V8.62842Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28.166 16.707H73.937V24.7846H28.166V16.707Z" fill="#E5E9F2" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M44.3193 38.2441H55.0899" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M44.3193 43.6309H68.5521" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M44.3193 49.0151H61.8405" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M44.3193 65.1689H57.7815" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M44.3193 70.5532H71.2436" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M44.3193 75.9399H65.8591" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M30.7213 48.1225V44.5522H29.6377V43.6631H30.7213V42.524H29.6377V41.6349H30.7213V38.2036H32.166L33.4858 41.6349H35.125V38.2036H36.2225V41.6349H37.306V42.524H36.2225V43.6631H37.306V44.5522H36.2225V48.1225H34.7638L33.4441 44.5522H31.8048V48.1225H30.7213ZM31.7771 41.6349H32.3605L31.7771 39.9123H31.7215L31.7771 41.6349ZM31.8048 43.6631H33.1107L32.6939 42.524H31.7771L31.8048 43.6631ZM34.222 43.6631H35.1528L35.125 42.524H33.8053L34.222 43.6631ZM35.125 46.1637H35.1806L35.1389 44.5522H34.5554L35.125 46.1637Z" fill="#1D1E2C"/>
      <path d="M30.7213 75.9057V72.3354H29.6377V71.4463H30.7213V70.3072H29.6377V69.4181H30.7213V65.9868H32.166L33.4858 69.4181H35.125V65.9868H36.2225V69.4181H37.306V70.3072H36.2225V71.4463H37.306V72.3354H36.2225V75.9057H34.7638L33.4441 72.3354H31.8048V75.9057H30.7213ZM31.7771 69.4181H32.3605L31.7771 67.6955H31.7215L31.7771 69.4181ZM31.8048 71.4463H33.1107L32.6939 70.3072H31.7771L31.8048 71.4463ZM34.222 71.4463H35.1528L35.125 70.3072H33.8053L34.222 71.4463ZM35.125 73.9469H35.1806L35.1389 72.3354H34.5554L35.125 73.9469Z" fill="#1D1E2C"/>
      <path d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z" fill="#E5E9F2"/>
      <path d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M82.5391 84.7549L86.0882 81.2048L94.964 90.0781L91.4148 93.6282L82.5391 84.7549Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M86.9799 53.6947C90.1393 56.854 92.2908 60.8792 93.1625 65.2613C94.0342 69.6434 93.5869 74.1856 91.8771 78.3135C90.1673 82.4414 87.2719 85.9695 83.5569 88.4518C79.8419 90.9341 75.4743 92.259 71.0063 92.259C66.5384 92.259 62.1707 90.9341 58.4558 88.4518C54.7408 85.9695 51.8453 82.4414 50.1356 78.3135C48.4258 74.1856 47.9784 69.6434 48.8501 65.2613C49.7218 60.8792 51.8734 56.854 55.0328 53.6947C59.2696 49.4591 65.0154 47.0796 71.0063 47.0796C76.9973 47.0796 82.743 49.4591 86.9799 53.6947Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z" fill="#E5E9F2"/>
      <path d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M37.4121 108.503C37.4121 109.308 39.7563 110.079 43.9291 110.649C48.1018 111.218 53.7612 111.537 59.6624 111.537C65.5635 111.537 71.2229 111.218 75.3956 110.649C79.5684 110.079 81.9126 109.308 81.9126 108.503C81.9126 107.698 79.5684 106.926 75.3956 106.357C71.2229 105.788 65.5635 105.468 59.6624 105.468C53.7612 105.468 48.1018 105.788 43.9291 106.357C39.7563 106.926 37.4121 107.698 37.4121 108.503Z" fill="#E5E9F2"/>
    </svg>

    <p style="font-size: 1.1rem;">No Match Found.</p>

  </div>

  <div v-else>
  <div
        class="actual-result-wrapper"
        v-for="(i, index) in paginate(getFinalResult, currentPage, itemsPerPage)" :key="index">
        <div @click="showDetails(index)" class="actual-result">
            <div class="actual-result-item">
                <!--        <div class="best_offer" v-if="i.amount === sortByCheapest">Best Offer</div>-->
                <div>
                    <div v-for="(j, itemindex) in i.routes" :key="itemindex">
                        <section
                            style="
                                height: 7.125rem;
                                display: flex;
                                align-items: center;
                            "
                        >
                            <div class="logo-area">
                                <img
                                    :src="j.segments[0].airline_details.logo"
                                    class="logo"
                                />
                                <p class="flight-name">
                                    {{ j.segments[0].airline_details.name }}
                                </p>
                            </div>
                            <div class="actual-result-item-info">
                                <div>
                                    <p class="time">
                                        {{
                                            convertTo12HourFormat(
                                                j.segments[0].departure_time
                                            )
                                        }}
                                    </p>
                                    <p class="dest">
                                        {{
                                            getCityByCityCode(
                                                j.segments[0].airport_from
                                            )
                                        }}
                                        ({{ j.segments[0].airport_from }})
                                    </p>
                                </div>
                                <div class="more-flight-info">
                                    <span class="duration">{{
                                        convertDurationToWords(
                                            j.total_segment_duration
                                        )
                                    }}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="69"
                                        height="16"
                                        viewBox="0 0 69 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M68.3536 8.35355C68.5488 8.15829 68.5488 7.84171 68.3536 7.64645L65.1716 4.46447C64.9763 4.2692 64.6597 4.2692 64.4645 4.46447C64.2692 4.65973 64.2692 4.97631 64.4645 5.17157L67.2929 8L64.4645 10.8284C64.2692 11.0237 64.2692 11.3403 64.4645 11.5355C64.6597 11.7308 64.9763 11.7308 65.1716 11.5355L68.3536 8.35355ZM0 8.5H1.88889V7.5H0V8.5ZM5.66667 8.5H9.44444V7.5H5.66667V8.5ZM13.2222 8.5H17V7.5H13.2222V8.5ZM20.7778 8.5H24.5556V7.5H20.7778V8.5ZM28.3333 8.5H32.1111V7.5H28.3333V8.5ZM35.8889 8.5H39.6667V7.5H35.8889V8.5ZM43.4445 8.5H47.2222V7.5H43.4445V8.5ZM51 8.5H54.7778V7.5H51V8.5ZM58.5556 8.5H62.3333V7.5H58.5556V8.5ZM66.1111 8.5H68V7.5H66.1111V8.5ZM68.7071 8.70711C69.0976 8.31658 69.0976 7.68342 68.7071 7.29289L62.3431 0.928932C61.9526 0.538408 61.3195 0.538408 60.9289 0.928932C60.5384 1.31946 60.5384 1.95262 60.9289 2.34315L66.5858 8L60.9289 13.6569C60.5384 14.0474 60.5384 14.6805 60.9289 15.0711C61.3195 15.4616 61.9526 15.4616 62.3431 15.0711L68.7071 8.70711ZM0 9H1.88889V7H0V9ZM5.66667 9H9.44444V7H5.66667V9ZM13.2222 9H17V7H13.2222V9ZM20.7778 9H24.5556V7H20.7778V9ZM28.3333 9H32.1111V7H28.3333V9ZM35.8889 9H39.6667V7H35.8889V9ZM43.4445 9H47.2222V7H43.4445V9ZM51 9H54.7778V7H51V9ZM58.5556 9H62.3333V7H58.5556V9ZM66.1111 9H68V7H66.1111V9Z"
                                            fill="#9DA8B6"
                                        />
                                    </svg>
                                    <span class="stops">{{
                                        j.total_segment_stops === 0
                                            ? "Direct"
                                            : `${j.total_segment_stops}-Stop`
                                    }}</span>
                                </div>
                                <div>
                                    <p class="time">
                                        {{
                                            convertTo12HourFormat(
                                                j.segments[
                                                    j.segments.length - 1
                                                ].arrival_time
                                            )
                                        }}
                                    </p>
                                    <p class="dest">
                                        {{
                                            getCityByCityCode(
                                                j.segments[
                                                    j.segments.length - 1
                                                ].airport_to
                                            )
                                        }}
                                        ({{
                                            j.segments[j.segments.length - 1]
                                                .airport_to
                                        }})
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div
                class="amount-book-area"
                :style="
                    i.routes.length > 0
                        ? {
                              display: 'flex !important',
                              'align-items': 'center !important',
                              height: '15.5rem !important',
                          }
                        : null
                "
            >
                <div style="width: 100%">
                    <p class="amount">₦ {{ formatAmount(i.amount) }}</p>
                    <on-boarding-button
                        :loading="
                            getConfirmBookingLoading && index === clickedIndex
                        "
                        :disabled="getConfirmBookingLoading"
                        @click.stop="selectFlight(i), (clickedIndex = index)"
                        v-show="
                            !showingDetails ||
                            currentShowingDetailsIndex !== index
                        "
                        btn-width="10rem"
                        text-node="Book Flight"
                    ></on-boarding-button>
                </div>
            </div>
        </div>

        <!-- Showing extra flight details -->
        <div
            v-if="showingDetails && currentShowingDetailsIndex === index"
            class="details"
        >
            <div>
                <div class="component87 animate__animated animate__fadeIn">
                    <div>
                        <div v-for="(f, fId) in i.routes" :key="fId + 889">
                            <div
                                :style="{ marginTop: fId ? '50px' : 0 }"
                                id="departure"
                                class="dropdown-details-div"
                            >
                                <div class="depart_date-info">
                                    <p class="depart-date">
                                        Depart Flight
                                        {{
                                            getCityByCityCode(
                                                f.segments[0]?.airport_from
                                            )
                                        }}
                                        -
                                        {{
                                            getCityByCityCode(
                                                f.segments[
                                                    f.segments.length - 1
                                                ]?.airport_to
                                            )
                                        }}
                                    </p>
                                </div>
                            </div>
                            <div
                                v-for="(j, jId) in f.segments"
                                :key="jId + 1889"
                            >
                                <!-- heading -->
                                <div class="airline_details">
                                    <div class="inner-airline_details">
                                        <div
                                            class="inner-airline_details-item airline"
                                        >
                                            <p class="key">Airline:</p>
                                            <div
                                                style="
                                                    display: flex;
                                                    align-items: center;
                                                    gap: 0.5rem;
                                                "
                                            >
                                                <img
                                                    :src="
                                                        j.airline_details.logo
                                                    "
                                                    class="logo"
                                                />
                                                <p class="value">
                                                    {{ j.airline_details.name }}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            class="inner-airline_details-item flight-no"
                                        >
                                            <p class="key">Flight No:</p>
                                            <p class="value">
                                                {{ j.flight_number }}
                                            </p>
                                        </div>
                                        <div
                                            class="inner-airline_details-item type"
                                        >
                                            <p class="key">Aircraft Type:</p>
                                            <p class="value">
                                                {{ j.marketing_airline }}
                                            </p>
                                        </div>
                                        <div
                                            class="inner-airline_details-item class-type"
                                        >
                                            <p class="key">Class Type:</p>
                                            <p class="value">
                                                {{ j.cabin_type }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- details -->
                                <div class="actual-result-item_details details">
                                    <div
                                        class="actual-result-item-info-airport-details"
                                    >
                                        <p class="airport-name">
                                            {{
                                                getAirportNamesByCityCode(
                                                    j.airport_from
                                                )
                                            }}
                                            ({{
                                                getCityByCityCode(
                                                    j.airport_from
                                                )
                                            }})
                                        </p>
                                        <p class="time-info">
                                            {{
                                                convertToWord(
                                                    j.departure_time.split(
                                                        "T"
                                                    )[0]
                                                )
                                            }},
                                            {{
                                                convertTo12HourFormat(
                                                    j.departure_time
                                                )
                                            }}
                                        </p>
                                        <p class="dest">
                                            {{
                                                getCityByCityCode(
                                                    j.airport_from
                                                )
                                            }}
                                            ({{ j.airport_from }})
                                        </p>
                                    </div>
                                    <div class="actual-result-item-info">
                                        <div class="more-flight-info">
                                            <span class="duration"
                                                >Flight Duration :
                                                {{
                                                    convertDurationToWords(
                                                        j.total_outbound_duration
                                                            ? j.total_outbound_duration
                                                            : j.duration
                                                    )
                                                }}</span
                                            >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="232"
                                                height="16"
                                                viewBox="0 0 232 16"
                                                fill="none"
                                            >
                                                <path
                                                    d="M231.354 8.35355C231.549 8.15829 231.549 7.84171 231.354 7.64645L228.172 4.46447C227.976 4.2692 227.66 4.2692 227.464 4.46447C227.269 4.65973 227.269 4.97631 227.464 5.17157L230.293 8L227.464 10.8284C227.269 11.0237 227.269 11.3403 227.464 11.5355C227.66 11.7308 227.976 11.7308 228.172 11.5355L231.354 8.35355ZM0 8.5H1.99138V7.5H0V8.5ZM5.97414 8.5H9.9569V7.5H5.97414V8.5ZM13.9397 8.5H17.9224V7.5H13.9397V8.5ZM21.9052 8.5H25.8879V7.5H21.9052V8.5ZM29.8707 8.5H33.8534V7.5H29.8707V8.5ZM37.8362 8.5H41.819V7.5H37.8362V8.5ZM45.8017 8.5H49.7845V7.5H45.8017V8.5ZM53.7672 8.5H57.75V7.5H53.7672V8.5ZM61.7327 8.5H65.7155V7.5H61.7327V8.5ZM69.6983 8.5H73.681V7.5H69.6983V8.5ZM77.6638 8.5H81.6465V7.5H77.6638V8.5ZM85.6293 8.5H89.6121V7.5H85.6293V8.5ZM93.5948 8.5H97.5776V7.5H93.5948V8.5ZM101.56 8.5H105.543V7.5H101.56V8.5ZM109.526 8.5H113.509V7.5H109.526V8.5ZM117.491 8.5H121.474V7.5H117.491V8.5ZM125.457 8.5H129.44V7.5H125.457V8.5ZM133.422 8.5H137.405V7.5H133.422V8.5ZM141.388 8.5H145.371V7.5H141.388V8.5ZM149.353 8.5H153.336V7.5H149.353V8.5ZM157.319 8.5H161.302V7.5H157.319V8.5ZM165.284 8.5H169.267V7.5H165.284V8.5ZM173.25 8.5H177.233V7.5H173.25V8.5ZM181.215 8.5H185.198V7.5H181.215V8.5ZM189.181 8.5H193.164V7.5H189.181V8.5ZM197.147 8.5H201.129V7.5H197.147V8.5ZM205.112 8.5H209.095V7.5H205.112V8.5ZM213.078 8.5H217.06V7.5H213.078V8.5ZM221.043 8.5H225.026V7.5H221.043V8.5ZM229.009 8.5H231V7.5H229.009V8.5ZM231.707 8.70711C232.098 8.31658 232.098 7.68342 231.707 7.29289L225.343 0.928932C224.953 0.538408 224.319 0.538408 223.929 0.928932C223.538 1.31946 223.538 1.95262 223.929 2.34315L229.586 8L223.929 13.6569C223.538 14.0474 223.538 14.6805 223.929 15.0711C224.319 15.4616 224.953 15.4616 225.343 15.0711L231.707 8.70711ZM0 9H1.99138V7H0V9ZM5.97414 9H9.9569V7H5.97414V9ZM13.9397 9H17.9224V7H13.9397V9ZM21.9052 9H25.8879V7H21.9052V9ZM29.8707 9H33.8534V7H29.8707V9ZM37.8362 9H41.819V7H37.8362V9ZM45.8017 9H49.7845V7H45.8017V9ZM53.7672 9H57.75V7H53.7672V9ZM61.7327 9H65.7155V7H61.7327V9ZM69.6983 9H73.681V7H69.6983V9ZM77.6638 9H81.6465V7H77.6638V9ZM85.6293 9H89.6121V7H85.6293V9ZM93.5948 9H97.5776V7H93.5948V9ZM101.56 9H105.543V7H101.56V9ZM109.526 9H113.509V7H109.526V9ZM117.491 9H121.474V7H117.491V9ZM125.457 9H129.44V7H125.457V9ZM133.422 9H137.405V7H133.422V9ZM141.388 9H145.371V7H141.388V9ZM149.353 9H153.336V7H149.353V9ZM157.319 9H161.302V7H157.319V9ZM165.284 9H169.267V7H165.284V9ZM173.25 9H177.233V7H173.25V9ZM181.215 9H185.198V7H181.215V9ZM189.181 9H193.164V7H189.181V9ZM197.147 9H201.129V7H197.147V9ZM205.112 9H209.095V7H205.112V9ZM213.078 9H217.06V7H213.078V9ZM221.043 9H225.026V7H221.043V9ZM229.009 9H231V7H229.009V9Z"
                                                    fill="#9DA8B6"
                                                />
                                            </svg>
                                            <span class="stops">{{
                                                f.total_segment_stops
                                                    ? fId + 1 + "-Stop"
                                                    : "Direct"
                                            }}</span>
                                        </div>
                                    </div>
                                    <div
                                        class="actual-result-item-info-airport-details"
                                    >
                                        <p class="airport-name">
                                            {{
                                                getAirportNamesByCityCode(
                                                    j.airport_to
                                                )
                                            }}
                                            ({{
                                                getCityByCityCode(j.airport_to)
                                            }})
                                        </p>
                                        <p class="time-info">
                                            {{
                                                convertToWord(
                                                    j.arrival_time.split("T")[0]
                                                )
                                            }},
                                            {{
                                                convertTo12HourFormat(
                                                    j.arrival_time
                                                )
                                            }}
                                        </p>
                                        <p class="dest">
                                            {{
                                                getCityByCityCode(j.airport_to)
                                            }}
                                            ({{ j.airport_to }})
                                        </p>
                                    </div>
                                </div>
                                <!-- layover -->
                                <div
                                    v-if="j.layover"
                                    class="d-flex align-center layover__wrapper__multicity"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 1.66602C5.40833 1.66602 1.66666 5.40768 1.66666 9.99935C1.66666 14.591 5.40833 18.3327 10 18.3327C14.5917 18.3327 18.3333 14.591 18.3333 9.99935C18.3333 5.40768 14.5917 1.66602 10 1.66602ZM13.625 12.9743C13.5083 13.1743 13.3 13.2827 13.0833 13.2827C12.975 13.2827 12.8667 13.2577 12.7667 13.191L10.1833 11.6493C9.54166 11.266 9.06666 10.4243 9.06666 9.68268V6.26602C9.06666 5.92435 9.35 5.64102 9.69166 5.64102C10.0333 5.64102 10.3167 5.92435 10.3167 6.26602V9.68268C10.3167 9.98268 10.5667 10.4243 10.825 10.5743L13.4083 12.116C13.7083 12.291 13.8083 12.6743 13.625 12.9743Z"
                                            fill="#1D1E2C"
                                        />
                                    </svg>

                                    <span
                                        >{{ convertDurationToWords(j.layover) }}
                                        layover at
                                        {{
                                            getAirportNamesByCityCode(
                                                j.airport_to
                                            )
                                        }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Showing extra flight details -->
    </div>

    <!-- paginate area -->

    <div class="paginate" v-if="getTotalPage > 1">
        <div style="width: 10%; margin: 0 0.5rem">
            Total Pages: {{ getTotalPage }}
        </div>
        <div class="paginate_num">
            <img
                src="../../assets/Icons/Settings/leftArrows.svg"
                @click="currentPage = currentPage - 1"
            />
            <div
                @click="(currentPage = i), (currentShowingDetailsIndex = null)"
                :class="{ activePage: i === currentPage }"
                class="pag_item"
                v-for="i in getTotalPage"
            >
                <span>{{ i }}</span>
            </div>
            <img
                src="../../assets/Icons/Settings/rightArrow.svg"
                @click="currentPage = currentPage + 1"
            />
        </div>
    </div>

    <!-- end paginate area -->
  </div>
</template>
<script>
import {
    getYYYYMMDDFormat,
    convertToWord,
    formatAmount,
    convertDurationToWords,
    convertTo12HourFormat,
} from "../../mixins/flightUtil";
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import router from "../../router";
import storeUtils from "../../utils/storeUtils";
import paginate from "../../mixins/paginate";
export default {
    name: "MultiCityCard",
    components: { OnBoardingButton },
    data() {
        return {
            active: "departure",
            showingDetails: false,
            getYYYYMMDDFormat,
            formatAmount,
            convertDurationToWords,
            convertTo12HourFormat,
            convertToWord,
            currentShowingDetailsIndex: null,
            currentPage: 1,
            itemsPerPage: 10,
            paginate,
            isDepartureActive: false,
            isReturnActive: false,
            toogleFareRules: false,
            clickedIndex: null,
        };
    },
    methods: {
        flightSkelentonLoader() {},

        showDetails(index) {
            if (
                this.showingDetails &&
                this.currentShowingDetailsIndex == index
            ) {
                this.showingDetails = false;
                this.isDepartureActive = false;
            } else {
                this.showingDetails = true;
                this.currentShowingDetailsIndex = index;
                this.isDepartureActive = true;
            }
        },

        extractAirlineDetails(obj) {
            const airlineDetails = [];

            function searchForAirlineDetails(obj) {
                for (const key in obj) {
                    if (typeof obj[key] === "object") {
                        if (
                            key === "airline_details" &&
                            !airlineDetails.includes(obj[key].name)
                        ) {
                            airlineDetails.push(obj[key]);
                        }
                        searchForAirlineDetails(obj[key]);
                    }
                }
            }
            searchForAirlineDetails(obj);

            return airlineDetails;
        },

        revealDetails_departure() {
            document.getElementById("departure").classList.remove("u-hide");
            document.getElementById("return").classList.add("u-hide");
            this.active = "departure";
        },

        getAirportNamesByCityCode(city_code) {
            const airports = JSON.parse(localStorage?.airports);
            if (airports) {
                const airportName = airports.filter(
                    (it) => it.city_code === city_code
                )[0]?.name;
                return airportName;
            }
        },

        getCityByCityCode(city_code) {
            const airports = JSON.parse(localStorage?.airports);
            if (airports) {
                const cityName = airports.filter(
                    (it) => it.iata_code === city_code
                )[0]?.city;
                return cityName;
            }
        },

        revealDetails_return() {
            document.getElementById("departure").classList.add("u-hide");
            document.getElementById("return").classList.remove("u-hide");
            this.active = "return";
        },

        selectFlight(obj) {
            storeUtils.fireAway().flight.handleConfirmBookingPrice(obj.id);
        },
    },

    computed: {
      getFinalResult(){
        let result;
        result = this.getHasSeachParams ? this.getFilteredFlight : this.getHasSeachParams && !this.getFilteredFlight.length ? [] : this.getFlightResult
        return result
      },

      getHasSeachParams(){
        return storeUtils.fireAway().flight?.getHasSearchParams
      },

      getConfirmBookingLoading() {
            return storeUtils.fireAway().flight.getConfirmingBookingLoading;
        },

        sortByCheapest() {
            let prizes = this.getFlightResult.map((it) => it.amount);
            prizes.sort(function (a, b) {
                return a - b;
            });
            return prizes[0];
        },

        getTotalPage() {
            return Math.ceil(
                Number(
                    this.getFilteredFlight.length
                        ? this.getFilteredFlight.length
                        : this.getFlightResult.length
                ) / Number(this.itemsPerPage)
            );
        },

        getFlightResult() {
            return storeUtils.fireAway().flight.getFlightResults;
        },
        getCurrentRoute() {
            return router.currentRoute.value.name;
        },

        getBusinessProfile() {
            if (localStorage.businessProfile) {
                const business = JSON.parse(localStorage?.businessProfile);
                return business;
            }
        },

        getBookingStage() {
            return storeUtils.fireAway().flight?.getBookingStage;
        },

        getBookingSum() {
            return storeUtils.fireAway().booking?.getBookingSummary;
        },

        getLoadingBooking() {
            return storeUtils.fireAway().booking?.getLoadingBooking;
        },
        getBookings() {
            return storeUtils.fireAway().booking?.getBookings;
        },
        getUser() {
            if (localStorage.user) {
                return JSON.parse(localStorage.user);
            }
        },

        getFilteredFlight() {
            return storeUtils.fireAway().flight?.getFilteredFlight;
        },
    },
};
</script>
<style scoped lang="scss">
.layover__wrapper__multicity {
    max-width: max-content;
    width: 100%;
    margin: 40px auto;
    padding: 10px 20px;
    grid-gap: 10px;
    border-radius: 40px;
    background-color: #eff2f7;
    svg {
        width: 20px;
        min-width: 20px;
        height: 20px;
    }

    span {
        font-weight: 400;
        font-size: 16px;
        color: #1d1e2c;
    }
}
.fare_rules {
    display: inline-flex;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--primary-1, #d5e2ee);
    background: #f9fafc;
    width: 100%;
}

.fare_rule_h {
    color: var(--black-text-01, #1d1e2c);

    /* Subtext/14px/Regular */
    font-family: "Product Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    /* 171.429% */
}

.fare_rule_p {
    color: var(--black-text-03, #444854);
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    /* 1.6rem */
}

.result_area {
    display: flex;
    gap: 1.75rem;
    align-items: start;
    justify-content: space-between;
}

.best_offer {
    display: inline-flex;
    padding: 0.25rem 0.5rem;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: rgba(21, 157, 84, 0.08);
    color: #159d54;
    font-family: "Product Sans";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    /* 133.333% */
    //position: absolute;
    left: 1.44rem;
    top: 0.44rem;
}

.activePage {
    border-left: 0.6px solid #e5e9f2;
    background: #e5e9f2;
}

.paginate_num {
    display: flex;
    height: 2rem;
    justify-content: end;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
}

.pag_item {
    width: 2.5rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-left: 0.6px solid
        var(--secondarytext-default-text-textfield, #e5e9f2);
}

.paginate {
    display: flex;
    background: #ffffff;
    height: 3.5rem;
    /* padding: 0.875rem 0.75rem 0.625rem 0.75rem; */
    justify-content: space-evenly;
    align-items: center;
    /* gap: 42.625rem; */
    flex-shrink: 0;
    margin: 1.69rem 0;
}

a {
    text-decoration: none;
}

.time-info {
    color: #1d1e2c;

    /* Body/18px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem;
    /* 166.667% */
}

.actual-result-item-info-airport-details {
    width: 100%;
}

.airport-name {
    color: #1d1e2c;

    /* 18px/bold */
    font-family: "Product Sans";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    /* 155.556% */
}

.key {
    color: #575a65;
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    /* 150% */
}

.value {
    color: #1d1e2c;
    text-align: center;

    /* medium/input/16px */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem;
    /* 175% */
}

.inner-airline_details {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.inner-airline_details-item {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.airline_details {
    display: flex;
    width: 100%;
    padding: 2rem;
    height: 7.5rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid #e5e9f2;
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
    line-height: 1.5rem;
    /* 171.429% */
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
    width: 100%;
    height: 2rem;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
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

.dropdown_icon:hover {
    border: solid var(--app-default-primary);
    border-radius: 50%;
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

.dropdown-details-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    height: 5.75rem;
    border-radius: 0.5rem;
    border: 1px solid #f9fafc;
    background: #f9fafc;
    margin-bottom: 1rem;
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
    line-height: 1.5rem;
    /* 150% */
    border-radius: 31.25rem;
    background: var(--Color, #fff);
    display: flex;
    padding: 0.625rem 1.25rem;
    align-items: flex-start;
    gap: 0.625rem;
}

.depart-date {
    color: #1d1e2c;

    /* Headings/20px/bold */
    font-family: "Product Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    /* 140% */
}

.actual-result-wrapper {
    margin-bottom: 2.06rem;
    border-radius: 0.25rem;
    background: #f9fafc;
    border: 1px solid #e5e9f2;
    cursor: pointer;
    width: 100%;
}

:is(.actual-result-wrapper):hover {
    box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
}

.details {
    border-radius: 0.25rem;
    /*border: 1px solid  #E5E9F2;*/
    padding: 1.5rem;
    background: black;
}

.component87 {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 0.5rem;
    /* border: 1px solid #E0E6ED; */
    background: #fff;
}

.view-details {
    color: var(--app-default-primary);
    width: 4.8125rem;
    height: 1.5rem;

    /* subtext/medium/14px */
    font-family: "Product Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    /* 171.429% */
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
}

.doc_type_options {
    display: flex;
    width: 36rem;
    flex-direction: column;
    align-items: flex-start;
    /*gap: 1.25rem;*/
    border-radius: 0.5rem;
    border: 1px solid #f9fafc;
    background: #fff;
    left: 0;
    /*bottom: -60px;*/
    /* m4 */
    box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
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

.stops {
    color: #444854;
    font-family: "Product Sans";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    /* 133.333% */
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

.duration {
    color: #1d1e2c;

    /* Body/16px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
}

.dest {
    color: #444854;
    font-family: "Product Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    /* 114.286% */
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
    line-height: 1.5rem;
    /* 150% */
}

.time {
    color: #1d1e2c;
    font-family: "Product Sans";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    /* 133.333% */
}

.amount {
    color: #1d1e2c;
    text-align: center;
    /* Headings/20px/bold */
    font-family: "Product Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    /* 140% */
    margin-bottom: 1.25rem;
}

.amount-book-area {
    border-radius: 0.25rem;
    background: #f9fafc;
    padding: 2rem;
    /* padding-right: 1.5rem; */
    height: inherit;
    /* height: 15.888rem; */
    display: flex;
    align-items: center;
    width: 15rem;
}

.breaker-2 {
    width: 85%;
    height: 0.1rem;
    background: #e5e9f2;
}

.actual-result-item {
    width: 70%;
    flex-shrink: 0;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    background: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1.5rem;
}

.actual-result-item_details {
    //width: 70%;
    flex-shrink: 0;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1.5rem;
}

.details {
    margin: 1rem 0;
    background: var(--Color, #fff);
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
}

.actual-result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e5e9f2;
    height: auto;
    position: relative;
    width: 100%;
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
    line-height: 1.75rem;
    /* 175% */
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
    line-height: 1.5rem;
    /* 150% */
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
    line-height: 1rem;
    /* 100% */
}

.result-details-info {
    display: flex;
    justify-content: end;
    gap: 1rem;
    width: 100%;
}

.filter-by {
    /* display: flex;
  padding: 0rem 1rem;
  align-items: center;
  gap: 1.1875rem;
  border-radius: 1rem;
  border: 1px solid #EFF2F7;
  background:  #FFF; */

    display: flex;
    width: auto;
    padding: 0rem 1rem;
    align-items: center;
    gap: 1rem;
    border-radius: 0.25rem;
    border: 1px solid var(--dividers-borders-disabled-states, #eff2f7);
    background: var(--Color, #fff);
    cursor: pointer;
    color: #2d3139;
    font-family: "Product Sans";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    /* 114.286% */
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
    align-items: center;
}

.dest-abv-it {
    color: #1d1e2c;
    font-family: "Product Sans";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
    /* 133.333% */
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
    line-height: 1.5rem;
    /* 150% */
}

.flight-result {
    margin: 0 0;
    border: solid;
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
    line-height: 1.75rem;
    /* 140% */
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
    line-height: 1.75rem;
    /* 175% */
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
    line-height: 1.75rem;
    /* 175% */
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
    line-height: 1.75rem;
    /* 140% */
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

.breadcrumb-sub {
    height: 2.4rem;
    width: 20.4rem;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1.94rem;
    gap: 0.5rem;
}

.current-path-sub {
    color: #575a65;
    text-align: center;

    /* Body/16px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
}

.create-booking-process {
    width: 68.125rem;
    height: auto;
    flex-shrink: 0;
    position: relative;
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
    line-height: 1.5rem;
    /* 171.429% */
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
    height: 54rem;
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
    line-height: 1.75rem;
    /* 175% */
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
    line-height: 1.75rem;
    /* 140% */
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
    line-height: 1.75rem;
    /* 175% */
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
