<template>
    <div class="wrapper">
        <img
            class="input-slot-image"
            src="../../../assets/Cards/icons/calendar.svg"
        />

        <label>{{ label }} </label>
        <VueDatePicker
            :teleport="true"
            :max-date="max_date"
            :start-date="start_date"
            :min-date="min_date"
            :readonly="readonly"
            :model-value="inputDate"
            @update:model-value="setDate"
            :format="format"
            :enable-time-picker="false"
            auto-apply
            :clearable="false"
            position="left"
            :month-change-on-scroll="false"
            prevent-min-max-navigation
        >
            <template
                #dp-input="{
                    value,
                    onInput,
                    onEnter,
                    onTab,
                    onClear,
                    onBlur,
                    onKeypress,
                    onPaste,
                    isMenuOpen,
                }"
            >
                <input
                    type="text"
                    @focus="handleFocus"
                    @focusout="handleFocusOut"
                    class="data-picker-input"
                    :value="value ? value : start_date"
                    :id="id"
                />
            </template>
            <template #input-icon> </template>
            <template #clock-icon>
                <img class="slot-icon" src="../../../assets/Cards/tiqwa.png" />
            </template>
        </VueDatePicker>
    </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
    name: "DataPicker",
    props: [
        "defaultValue",
        "value",
        "label",
        "min_date",
        "max_date",
        "readonly",
        "start_date",
        "id",
    ],
    components: { VueDatePicker },
    data() {
        return {
            isFocused: false,
            inputDate: null,
        };
    },
    methods: {
        setDate(value) {
            this.inputDate = value;
            this.$emit("dateValue", {
                formattedDate: this.format(this.inputDate),
                date: value,
            });
        },

        format(date) {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${year}-${month <= 9 ? `0${month}` : month}-${
                day <= 9 ? `0${day}` : day
            }`;
        },

        handleFocus() {
            this.isFocused = true;
            this.$emit("isDatePickerFocusing", true);
        },

        handleFocusOut() {
            this.isFocused = false;
            this.$emit("isDatePickerFocusing", false);
        },
    },
    mounted() {
        if (this.defaultValue) this.inputDate = this.defaultValue;
    },
};
</script>

<style scoped>
@import "style.css";
.wrapper {
    position: relative;
    width: 100%;
}
label {
    position: absolute;
    z-index: 999999;
    top: 0;
    color: #575a65;
    padding-top: 0.5rem;

    /* sanslight/12px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.25rem; /* 166.667% */
    padding-left: 1.25rem;
}

.input-slot-image {
    margin-right: 1.5rem;
}
</style>
