<script>
import requestService from "../../service/RequestService";
import Layout from "@/components/modals/Layout.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import MultiSelect from "@/components/MultiSelect.vue";
import storeUtils from "@/utils/storeUtils";
import { lightenColor } from "@/mixins/themeUtils";
import OnBoardingInput from "@/components/Inputs/OnBoardingInput.vue";
import defaultMarkupSettings from "../../mixins/defaultMarkupSettings";
import { RuthdoAlert } from "ruthly";

export default {
    name: "MarkupBuilder",
    components: {
        OnBoardingButton,
        Layout,
        MultiSelect,
        OnBoardingInput,
    },
    data() {
        return {
            lightenColor,
            airlines: [],
            isFocused: false,
            showModal: false,
            tabIndicator: 0,
            currentMenu: null,
            loader: { cities: false },
            formData: {},
            otherData: {},
            loading: false,
            isEdit: false,
            searchValues: {
                val: "",
            },
        };
    },
    methods: {
        handleFocus() {
            this.isFocused = true;
        },
        handleFocusOut() {
            this.isFocused = false;
        },
        cancel() {
            this.$emit("cancel", false);
        },
        validateBvn() {
            const bvnINput = document.getElementById("bvn");
            if (bvnINput.value.length > 11) {
                bvnINput.style.borderColor = "red";
                bvnINput.style.borderWidth = "1px";
            }
        },
        closeMenu(event) {
            const clickedInsideList = event.target.closest(".list_wrapper");
            this.currentMenu = clickedInsideList ? true : null;
            this.searchValues.val = "";
            this.airlines = this.getAirlines;
        },
        closeModal() {
            if (this.loading) return;
            this.formData = {};
            this.otherData = {};
            this.showModal = false;
            this.isEdit = false;
            this.tabIndicator = 0;
            let body = document.querySelector("body");
            body.style.overflow = null;
            document.removeEventListener("click", this.closeMenu);
        },
        openModal(objData = null) {
            if (this.loading) return;
            this.formData = structuredClone(defaultMarkupSettings.formData);
            this.otherData = structuredClone(defaultMarkupSettings.otherData);
            if (objData) {
                const val = objData;
                Object.entries(this.otherData).forEach(([key, value]) => {
                    if (val[key]) {
                        this.otherData[key] = val[key];
                    }
                });
                this.otherData.id = val.id;
                this.isEdit = true;
                Object.entries(this.formData[this.otherData.product]).forEach(
                    ([key, value]) => {
                        if (key === "general") {
                            value.forEach((el, id) => {
                                this.formData[this.otherData.product][key][
                                    id
                                ].val = val[el.postVal];
                            });
                        } else {
                            Object.entries(value).forEach(([key2, value2]) => {
                                value2.forEach((el, id) => {
                                    this.formData[this.otherData.product][key][
                                        key2
                                    ][id].val = val[el.postVal];
                                });
                            });
                        }
                    }
                );
            }
            this.showModal = true;
            let body = document.querySelector("body");
            body.style.overflow = "hidden";
            document.addEventListener("click", this.closeMenu);
        },
        doSetup() {
            storeUtils
                .fireAway()
                .transaction.walletSetup(this.model)
                .then(() => {
                    setTimeout(() => {
                        location.reload();
                    }, 1500);
                });
        },
        disableBtn() {
            var disable = false;
            Object.entries(
                this.formData[this.otherData.product].general
            ).forEach(([key, value]) => {
                if (value.required) {
                    if (!value.val) disable = true;
                }
            });
            return { disable };
        },
        async modalMainAction(objData = null) {
            if (!objData) {
                var mainContent = this.formData[this.otherData.product];
                if (!mainContent.general[0].val) return;
            }
            try {
                this.loading = true;
                let payload = {};
                if (!objData) {
                    Object.entries(mainContent).forEach(([key, value]) => {
                        if (key === "general") {
                            value.forEach((el) => {
                                payload[el.postVal] = el.val;
                            });
                        } else {
                            Object.entries(value).forEach(([key2, value2]) => {
                                value2.forEach((el) => {
                                    payload[el.postVal] = el.val;
                                });
                            });
                        }
                    });
                    payload = { ...payload, ...this.otherData };
                } else {
                    payload = objData;
                    delete payload.id;
                    delete payload.manager_id;
                    delete payload.user_id;
                }
                if (!this.isEdit) {
                    let { data: res } = await requestService.postRequest(
                        {
                            path: "markups",
                            payload,
                        },
                        true
                    );

                    storeUtils.fireAway().settings.setStoreData({
                        name: "markup",
                        data: [
                            ...[res.data],
                            ...storeUtils.fireAway().settings.markup,
                        ],
                    });
                    RuthdoAlert({
                        title: "Markup created successfully",
                        icon: "success",
                    });
                } else {
                    let { data: res } = await requestService.patchRequest(
                        {
                            path: "markups",
                            payload,
                        },
                        true
                    );
                    let mt = storeUtils.fireAway().settings.markup;
                    const id = storeUtils
                        .fireAway()
                        .settings.markup.findIndex(
                            (el) => el.id === payload.id
                        );
                    mt[id] = payload;
                    storeUtils.fireAway().settings.setStoreData({
                        name: "markup",
                        data: mt,
                    });
                    RuthdoAlert({
                        title: "Settings saved succesfully",
                        icon: "success",
                    });
                }
                this.loading = false;
                this.closeModal();
            } catch (err) {
            } finally {
                this.loading = false;
            }
        },
        async deleteMarkup(val) {
            this.loading = true;
            try {
                const { data: res } = await requestService.deleteRequest(
                    {
                        path: "markups",
                        id: val.id,
                    },
                    true
                );
                await storeUtils.fireAway().settings.readMarkupSettings();
                RuthdoAlert({
                    title: res.data,
                    icon: "success",
                });
            } catch (err) {
            } finally {
                this.loading = false;
            }
        },
    },
    computed: {
        getUser() {
            if (localStorage.user) {
                return JSON.parse(localStorage.user);
            }
        },

        getAirlines() {
            return storeUtils.fireAway().flight.airlines;
        },

        default_theme() {
            return storeUtils.fireAway().theme.getDefault_theme;
        },
        custom_theme() {
            return storeUtils.fireAway().theme.custom_theme;
        },
    },
};
</script>

<template>
    <Layout v-if="showModal" class="full_screen_modal_wrapper">
        <template v-slot:children>
            <div
                class="modal_child relative"
                :style="{
                    borderColor: custom_theme
                        ? lightenColor(custom_theme.color)
                        : default_theme.color_light,
                }"
            >
                <button
                    @click="closeModal"
                    class="cancel text-left flex_center absolute"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12.9397 12.0002L17.7997 7.14017C17.9089 7.01264 17.9659 6.84859 17.9595 6.68081C17.953 6.51302 17.8834 6.35386 17.7647 6.23513C17.646 6.1164 17.4868 6.04685 17.319 6.04037C17.1512 6.03389 16.9872 6.09096 16.8597 6.20017L11.9997 11.0602L7.13966 6.19351C7.01212 6.08429 6.84807 6.02722 6.68029 6.0337C6.5125 6.04018 6.35334 6.10974 6.23461 6.22847C6.11589 6.3472 6.04633 6.50635 6.03985 6.67414C6.03337 6.84192 6.09044 7.00597 6.19966 7.13351L11.0597 12.0002L6.19299 16.8602C6.1232 16.9199 6.06652 16.9935 6.02651 17.0762C5.98649 17.1589 5.964 17.249 5.96046 17.3408C5.95691 17.4326 5.97238 17.5242 6.0059 17.6097C6.03941 17.6953 6.09025 17.773 6.15522 17.8379C6.22019 17.9029 6.29789 17.9537 6.38344 17.9873C6.46899 18.0208 6.56055 18.0363 6.65236 18.0327C6.74417 18.0292 6.83426 18.0067 6.91697 17.9667C6.99968 17.9266 7.07323 17.87 7.13299 17.8002L11.9997 12.9402L16.8597 17.8002C16.9872 17.9094 17.1512 17.9665 17.319 17.96C17.4868 17.9535 17.646 17.8839 17.7647 17.7652C17.8834 17.6465 17.953 17.4873 17.9595 17.3195C17.9659 17.1518 17.9089 16.9877 17.7997 16.8602L12.9397 12.0002Z"
                            fill="#444854"
                        />
                    </svg>
                </button>
                <div class="child__wrapper align_auto flex-column">
                    <!-- header -->
                    <div class="child_header">
                        <h3>{{ isEdit ? "Edit" : "New" }} Markup</h3>
                        <p>
                            Your mark up details will be applied to the prices
                            of all flights results returned
                        </p>

                        <div class="mark_up_wrapper">
                            <div class="mark_up_select flex_between">
                                <div class="left_section d-flex align-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="48"
                                        height="48"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                    >
                                        <rect
                                            width="48"
                                            height="48"
                                            rx="10"
                                            fill="#EAF0F7"
                                        />
                                        <rect
                                            x="8"
                                            y="8"
                                            width="32"
                                            height="32"
                                            rx="10"
                                            fill="#D5E2EE"
                                        />
                                        <rect
                                            x="15"
                                            y="15"
                                            width="18"
                                            height="18"
                                            rx="9"
                                            fill="#C0D3E6"
                                        />
                                    </svg>
                                    <div class="d-flex flex-column">
                                        <p>Markup Plan</p>
                                        <span>{{ otherData.product }}</span>
                                    </div>
                                </div>
                                <div class="right_side">
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
                                            d="M11.9999 16.0969L6.35151 10.4485L8.04831 8.75172L11.9999 12.7033L15.9515 8.75172L17.6483 10.4485L11.9999 16.0969ZM11.9999 2.40012C6.6983 2.40012 2.3999 6.69732 2.3999 12.0001C2.3999 17.3017 6.6983 21.6001 11.9999 21.6001C17.3015 21.6001 21.5999 17.3017 21.5999 12.0001C21.5999 6.69732 17.3015 2.40012 11.9999 2.40012Z"
                                            fill="var(--primary_color)"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="progression_wrapper flex_between">
                            <p :class="{ active: !tabIndicator }">
                                General Mark-Up Details
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="81"
                                height="9"
                                viewBox="0 0 81 9"
                                fill="none"
                            >
                                <path
                                    d="M80.3536 4.85355C80.5488 4.65829 80.5488 4.34171 80.3536 4.14645L77.1716 0.964466C76.9763 0.769204 76.6597 0.769204 76.4645 0.964466C76.2692 1.15973 76.2692 1.47631 76.4645 1.67157L79.2929 4.5L76.4645 7.32843C76.2692 7.52369 76.2692 7.84027 76.4645 8.03553C76.6597 8.2308 76.9763 8.2308 77.1716 8.03553L80.3536 4.85355ZM0 5H40V4H0L0 5ZM40 5H80V4H40V5Z"
                                    fill="#333333"
                                    fill-opacity="0.5"
                                />
                            </svg>
                            <p :class="{ active: tabIndicator === 1 }">
                                Applicable Rule
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="81"
                                height="9"
                                viewBox="0 0 81 9"
                                fill="none"
                            >
                                <path
                                    d="M80.3536 4.85355C80.5488 4.65829 80.5488 4.34171 80.3536 4.14645L77.1716 0.964466C76.9763 0.769204 76.6597 0.769204 76.4645 0.964466C76.2692 1.15973 76.2692 1.47631 76.4645 1.67157L79.2929 4.5L76.4645 7.32843C76.2692 7.52369 76.2692 7.84027 76.4645 8.03553C76.6597 8.2308 76.9763 8.2308 77.1716 8.03553L80.3536 4.85355ZM0 5H40V4H0L0 5ZM40 5H80V4H40V5Z"
                                    fill="#333333"
                                    fill-opacity="0.5"
                                />
                            </svg>

                            <p :class="{ active: tabIndicator === 2 }">
                                Exclusion Rule
                            </p>
                        </div>
                    </div>
                    <!-- body content -->
                    <div class="relative child_body">
                        <!-- first section -->
                        <template v-if="!tabIndicator">
                            <!-- main wrapper -->
                            <div class="transIn child_body_wrapper first_slide">
                                <!-- top section -->
                                <div class="top_section align_auto align-start">
                                    <div
                                        class="left_section d-flex flex-column"
                                    >
                                        <div
                                            v-for="(items, id) in formData.Air
                                                .general"
                                            :key="id + 43434"
                                            class="w-100"
                                        >
                                            <MultiSelect
                                                :loopedId="id"
                                                @changeMenu="
                                                    currentMenu = $event
                                                "
                                                :getAirlines="getAirlines"
                                                :searchValues="searchValues"
                                                :currentMenu="currentMenu"
                                                :product="otherData.product"
                                                :formData="formData"
                                                :items="items"
                                                mainObj="general"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="right_section d-flex flex-column"
                                    >
                                        <div class="check_options">
                                            <div class="d-flex align-center">
                                                <p>Display Options</p>
                                                <input
                                                    type="checkbox"
                                                    v-model="
                                                        otherData.display_options
                                                    "
                                                />
                                            </div>
                                            <div
                                                class="d-flex flex-column box_container"
                                            >
                                                <img
                                                    width="16"
                                                    height="16"
                                                    src="../../assets/info.svg"
                                                    alt=""
                                                />
                                                <p>
                                                    Tooltips are used to
                                                    describe or identify an
                                                    element. In most scenarios,
                                                    tooltips help the user
                                                    understand meaning, function
                                                    or alt-text.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="check_options">
                                            <div class="d-flex align-center">
                                                <p>Active Indicator</p>
                                                <input
                                                    type="checkbox"
                                                    v-model="
                                                        otherData.active_indicator
                                                    "
                                                />
                                            </div>
                                            <div
                                                class="d-flex flex-column box_container"
                                            >
                                                <img
                                                    width="16"
                                                    height="16"
                                                    src="../../assets/info.svg"
                                                    alt=""
                                                />
                                                <p>
                                                    Tooltips are used to
                                                    describe or identify an
                                                    element. In most scenarios,
                                                    tooltips help the user
                                                    understand meaning, function
                                                    or alt-text.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- mid section -->
                                <div class="mid_section">
                                    <label for="remark">
                                        Remark Info Message
                                    </label>

                                    <textarea
                                        v-model="otherData.remark_message"
                                        rows=""
                                        cols=""
                                    ></textarea>
                                </div>
                                <div
                                    class="d-flex align-center justify-end child_footer"
                                >
                                    <OnBoardingButton
                                        :disabled="disableBtn().disable"
                                        @click="tabIndicator++"
                                        class="nextBtn"
                                        background="var(--primary_color)"
                                        btnWidth="84px"
                                        :angleRight="true"
                                        height="36px"
                                        textNode="Next"
                                    ></OnBoardingButton>
                                </div>
                            </div>
                        </template>
                        <!-- second section -->
                        <template v-else-if="tabIndicator === 1">
                            <!-- main wrapper -->
                            <div
                                class="transIn child_body_wrapper second_slide"
                            >
                                <div
                                    v-for="(value, key, index) in formData.Air
                                        .rule"
                                    :key="index + 1234"
                                    class="looper_row"
                                    :class="{ longer_row: key == 1 }"
                                >
                                    <div
                                        v-for="(items, id) in value"
                                        :key="id + 998866"
                                        :class="{
                                            'col-12':
                                                (key == 0 && id <= 3) ||
                                                key == 2,
                                            'col-6': id > 3 || key == 1,
                                            mudulo:
                                                (id > 3 && id % 2 !== 0) ||
                                                (key == 1 && id % 2 !== 0),
                                        }"
                                    >
                                        <MultiSelect
                                            :objectKey="key"
                                            :loopedId="id"
                                            @changeMenu="currentMenu = $event"
                                            :getAirlines="getAirlines"
                                            :searchValues="searchValues"
                                            :currentMenu="currentMenu"
                                            :product="otherData.product"
                                            :formData="formData"
                                            :items="items"
                                            mainObj="rule"
                                        />
                                    </div>
                                </div>
                                <div class="looper_row last_row no-border">
                                    <div class="col-12">
                                        <div class="flex_between justify-start">
                                            <label for="rate_dda">
                                                Departure Date After
                                            </label>
                                            <div
                                                class="d-flex align-center relative"
                                            >
                                                <input
                                                    v-model="
                                                        otherData.departure_date_after
                                                    "
                                                    id="rate_dda"
                                                    type="date"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="flex_between justify-start">
                                            <label for="rate_ddb"
                                                >Departure Date Between</label
                                            >
                                            <div
                                                class="d-flex align-center relative"
                                            >
                                                <input
                                                    v-model="
                                                        otherData.departure_date_from
                                                    "
                                                    id="rate_ddb"
                                                    type="date"
                                                />
                                            </div>
                                            <label for="rate_ddb_and"
                                                >And</label
                                            >
                                            <div
                                                class="d-flex align-center relative"
                                            >
                                                <input
                                                    v-model="
                                                        otherData.departure_date_to
                                                    "
                                                    id="rate_ddb_and"
                                                    type="date"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="flex_between justify-start">
                                            <label for="rate_bdb"
                                                >Booking Date Between</label
                                            >
                                            <div
                                                class="d-flex align-center relative"
                                            >
                                                <input
                                                    v-model="
                                                        otherData.booking_date_from
                                                    "
                                                    id="rate_bdb"
                                                    type="date"
                                                />
                                            </div>
                                            <label for="rate_bdb_and"
                                                >And</label
                                            >
                                            <div
                                                class="d-flex align-center relative"
                                            >
                                                <input
                                                    v-model="
                                                        otherData.booking_date_to
                                                    "
                                                    id="rate_bdb_and"
                                                    type="date"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="d-flex align-center justify-end child_footer"
                                >
                                    <OnBoardingButton
                                        class="backBtn"
                                        @click="tabIndicator--"
                                        color="var(--primary_color)"
                                        btnWidth="84px"
                                        :angleLeft="true"
                                        height="36px"
                                        textNode="Back"
                                    ></OnBoardingButton>
                                    <OnBoardingButton
                                        @click="tabIndicator++"
                                        class="nextBtn"
                                        background="var(--primary_color)"
                                        btnWidth="84px"
                                        :angleRight="true"
                                        height="36px"
                                        textNode="Next"
                                    ></OnBoardingButton>
                                </div>
                            </div>
                        </template>
                        <!-- third section -->
                        <template v-else>
                            <!-- main wrapper -->
                            <div
                                class="transIn child_body_wrapper second_slide"
                            >
                                <div
                                    v-for="(value, key, index) in formData.Air
                                        .exclude"
                                    :key="index + 1234"
                                    class="looper_row"
                                    :class="{
                                        'longer_row no-border': key == 1,
                                    }"
                                >
                                    <div
                                        v-for="(items, id) in value"
                                        :key="id + 998866"
                                        :class="{
                                            'col-12':
                                                (key == 0 && id <= 2) ||
                                                key == 2,
                                            'col-6': id > 2 || key == 1,
                                            mudulo:
                                                (key == 0 &&
                                                    id > 2 &&
                                                    id % 2 === 0) ||
                                                (key == 1 && id % 2 !== 0),
                                        }"
                                    >
                                        <MultiSelect
                                            :objectKey="key"
                                            :loopedId="id"
                                            @changeMenu="currentMenu = $event"
                                            :getAirlines="getAirlines"
                                            :searchValues="searchValues"
                                            :currentMenu="currentMenu"
                                            :product="otherData.product"
                                            :formData="formData"
                                            :items="items"
                                            mainObj="exclude"
                                        />
                                    </div>
                                </div>
                                <div
                                    class="d-flex align-center justify-end child_footer"
                                >
                                    <OnBoardingButton
                                        :disabled="loading"
                                        class="backBtn"
                                        color="var(--primary_color)"
                                        @click="tabIndicator--"
                                        btnWidth="84px"
                                        :angleLeft="true"
                                        height="36px"
                                        textNode="Back"
                                    ></OnBoardingButton>
                                    <OnBoardingButton
                                        :loading="loading"
                                        :disabled="loading"
                                        @click="modalMainAction(false)"
                                        background="var(--primary_color)"
                                        btnWidth="100px"
                                        height="36px"
                                        :textNode="
                                            isEdit ? 'Save' : 'New Markup'
                                        "
                                    ></OnBoardingButton>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </template>
    </Layout>
</template>

<style lang="scss">
.full_screen_modal_wrapper {
    .main-main {
        margin-top: 0;
        .modal_child {
            display: block;
            width: 100dvw;
            height: 100%;
            background: #fff;
            z-index: 3;
            color: #000;
            position: absolute;
            border: none;
            border-radius: 0;
            transform: scale(1);
            .child__wrapper {
                flex-direction: column;
                width: 100%;
                // max-width: 758px;
                // margin-inline: auto;
                height: 100%;
                grid-gap: 0;
                & > * {
                    height: 100%;
                    padding-inline: 64px;
                }

                .child_header {
                    height: max-content;
                    padding-block: 48px 0;
                    padding-inline: 0;
                    & > * {
                        padding-inline: 64px;
                    }
                    h3 {
                        font-size: 16px;
                        font-weight: 600;
                        margin-bottom: 0;
                        & + p {
                            margin-block: 16px;
                        }
                    }
                    p {
                        font-size: 12px;
                        font-weight: 400;
                    }

                    .mark_up_wrapper {
                        border-bottom: 1px solid #33333333;
                        padding-bottom: 24px;
                        margin-bottom: 24px;
                        .mark_up_select {
                            padding: 12px;
                            cursor: pointer;
                            border-radius: 10px;
                            border: 1px solid var(--primary_color);
                            .left_section {
                                grid-gap: 33px;
                                svg {
                                    min-width: 48px;
                                    width: 48px;
                                    height: 48px;
                                }
                                p {
                                    margin-bottom: 8px;
                                }

                                span {
                                    font-size: 14px;
                                    font-weight: 600;
                                }
                            }
                        }
                    }

                    .progression_wrapper {
                        margin-inline: 64px;
                        padding: 24px;
                        border-radius: 10px;
                        border: 1px solid rgba(51, 51, 51, 0.2);
                        p {
                            color: rgba(51, 51, 51, 0.5);
                            font-size: 12px;
                            font-weight: 400;
                            &.active {
                                color: #333;
                                font-weight: 600;
                                text-decoration: underline;
                            }
                        }
                    }
                }
                .child_body {
                    overflow-y: auto;
                    overflow-x: hidden;
                    padding: 24px 71px 0;
                    &::-webkit-scrollbar {
                        width: 0 !important;
                    }
                    input:not([type="checkbox"], [type="radio"]),
                    select,
                    textarea {
                        height: 36px;
                        border-radius: 4px;
                        border: 1px solid #c2c2c2;
                        padding: 6px 12px;
                        color: #000;
                        font-size: 12px;
                        font-weight: 400;
                        outline: none;
                        width: 100%;
                    }

                    select {
                        text-transform: capitalize;
                        cursor: pointer;
                        padding-right: 30px;
                        background: url("../../assets/arrow_down.svg")
                            calc(100% - 15px) center no-repeat;
                        appearance: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                    }

                    textarea {
                        height: 103px;
                        resize: none;
                        border-radius: 10px;
                        border: 1px solid var(--primary_color);
                        background: #fafdff;
                    }

                    .child_body_wrapper {
                        // overflow: hidden;
                        &.first_slide {
                            .top_section {
                                grid-gap: 101px;
                                margin-bottom: 36px;
                                .left_section {
                                    grid-gap: 12px;
                                    max-width: 315px;
                                    .flex_between > .d-flex {
                                        max-width: 161px;
                                        width: 100%;
                                    }
                                    .break {
                                        margin-bottom: 28px;
                                    }
                                }
                                .right_section {
                                    grid-gap: 26px;
                                    max-width: 272px;
                                    p {
                                        font-size: 12px;
                                        font-weight: 400;
                                    }
                                    .check_options {
                                        .d-flex {
                                            grid-gap: 8px;
                                        }
                                        .box_container {
                                            border-radius: 4px;
                                            border: 1px solid
                                                rgba(51, 51, 51, 0.2);
                                            margin-top: 9px;
                                            padding: 8px 14px 8px 8px;
                                            p {
                                                color: #667085;
                                                font-size: 10px;
                                                font-weight: 500;
                                            }
                                        }
                                    }
                                }
                            }
                            .mid_section {
                                margin-bottom: 48px;
                                label {
                                    display: block;
                                    width: max-content;
                                    margin-bottom: 16px;
                                }
                            }
                        }
                        &.second_slide {
                            .looper_row {
                                display: flex;
                                flex-wrap: wrap;
                                margin: -16px;
                                padding-block: 24px;
                                border-bottom: 1px solid rgba(51, 51, 51, 0.2);
                                .break {
                                    margin-bottom: 32px;
                                }
                                & > * {
                                    padding: 16px;
                                    width: 100%;
                                    padding-bottom: 0;

                                    .flex_between {
                                        grid-gap: 16px;
                                        & > .d-flex {
                                            grid-gap: 8px;
                                            img {
                                                right: -24px;
                                                top: 50%;
                                                transform: translateY(-50%);
                                            }
                                            &:not(
                                                    :has(
                                                            > input[type="checkBox"]
                                                        )
                                                ) {
                                                width: 100%;
                                            }
                                        }
                                    }
                                }

                                .col-6 {
                                    flex: 0 0 50%;
                                    max-width: 50%;
                                    .flex_between {
                                        width: 100%;
                                        max-width: 315px;
                                        &
                                            > .d-flex:not(
                                                :has(> input[type="checkBox"])
                                            ) {
                                            max-width: 161px;
                                        }

                                        label {
                                            max-width: 169px;
                                        }
                                        &:has(
                                                > .d-flex
                                                    > input[type="checkbox"]
                                            ) {
                                            justify-content: flex-start;
                                        }
                                    }
                                    &.mudulo {
                                        .flex_between {
                                            margin-left: auto;
                                        }
                                    }
                                }
                                .col-12 {
                                    flex: 0 0 100%;
                                    max-width: 100%;
                                    label {
                                        min-width: max-content;
                                    }
                                    .flex_between {
                                        &
                                            > .d-flex:not(
                                                :has(> input[type="checkBox"])
                                            ),
                                        & > .d-flex:has(.menuDropDown) {
                                            max-width: 85%;
                                        }
                                        & > .d-flex:has(.menuDropDown) {
                                            width: 100%;
                                        }
                                    }
                                }
                                &.longer_row {
                                    .col-6 {
                                        .flex_between {
                                            max-width: 341px;
                                            &
                                                > .d-flex:not(
                                                    :has(
                                                            > input[type="checkBox"]
                                                        )
                                                ) {
                                                max-width: 247px;
                                                width: 100%;
                                            }

                                            label {
                                                max-width: 169px;
                                            }
                                            &:has(> input[type="checkbox"]) {
                                            }
                                        }
                                    }
                                }

                                &.no-border {
                                    border: 0;
                                }
                                &.last_row {
                                    .col-12 {
                                        .flex_between {
                                            grid-gap: 34px;
                                            label {
                                                width: 100%;
                                                max-width: 141px;
                                            }
                                            &
                                                > .d-flex:not(
                                                    :has(
                                                            > input[type="checkBox"]
                                                        )
                                                ) {
                                                max-width: 161px;
                                                & + label {
                                                    width: max-content;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            .child_footer {
                                margin-top: 74px;
                            }
                        }
                    }
                }
            }

            .cancel {
                cursor: pointer;
                /* background: #2C6CAC; */
                border-radius: 6px;
                padding: 1rem 1rem;
                top: 48px;
                right: 64px;
                width: 56px;
                height: 40px;
                border: 0.6px solid #e5e9f2;
                background: #eaf0f7;
                z-index: 2;
            }
        }
    }

    a {
        text-decoration: none;
    }

    .inner_child_footer {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .child_footer {
        width: 100%;
        grid-gap: 24px;
        margin-bottom: 2.5rem;
    }

    .p1 {
        color: #272833;

        /* Headings/20px/bold */
        font-family: "Product Sans";
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem; /* 140% */
    }

    .p1-2 {
        color: #2d3139;
        font-family: "Product Sans";
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem; /* 140% */
        margin: 1.5rem 0;
    }

    .p2 {
        /* 16px/bold */
        font-family: "Product Sans";
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem; /* 175% */
    }

    .p3 {
        color: rgba(84, 89, 94, 0.6);

        /* Subtext/14px/Regular */
        font-family: "Product Sans";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 171.429% */
    }

    @media (max-width: 1024px) {
        .modal_child {
            width: 90%;
        }

        .child_footer {
            justify-content: center;
        }
    }

    @media (max-width: 500px) {
        .inner_child_footer {
            flex-direction: column;
        }
    }
}

input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    min-width: 16px;
    width: 16px;
    height: 16px;
    border: 1px solid var(--primary_color);
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background-color: #eaf0f7;
    background-color: transparent;

    &:checked {
        background-image: url("../../assets/check.svg");
        background-position: center;
        background-repeat: no-repeat;
    }
    &:is(:indeterminate) {
        background-color: #f39c12 !important;
    }
}

.backBtn {
    background: transparent !important;
    border: 1px solid var(--primary_color) !important;
    * {
        transition: all 0.25s ease-in-out;
    }
    svg {
        display: block;
    }
    &:hover {
        svg {
            transform: translateX(-5px);
        }
    }
}

.nextBtn {
    * {
        transition: all 0.25s ease-in-out;
    }
    svg {
        display: block;
    }
    &:hover {
        svg {
            transform: translateX(5px);
        }
    }
}
</style>
