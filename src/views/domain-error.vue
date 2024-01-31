<template>
    <div class="error_hanler flex_center">
        <div class="d-flex flex-column align-center">
            <img src="/src/assets/fire_bucket.svg" />
            <div class="tag flex_center text-center">
                <span>404 error</span>
            </div>
            <h1 class="capital">{{ pageTitle }}</h1>
            <p>Sorry we couldn’t find the domain you were looking for.</p>
            <!-- <a class="flex_center" href=""><span>Back To Home</span></a> -->
        </div>
    </div>
</template>

<script>
import Empty from "./Empty.vue";
import OnBoardingButton from "../components/Buttons/OnBoardingButton.vue";
export default {
    components: { Empty, OnBoardingButton },
    data() {
        return {
            showDropDown: false,
            pageTitle: "Domain not found",
        };
    },
    methods: {
        updateTitle() {
            document.title = this.pageTitle;
        },
    },
    computed: {},
    mounted() {
        this.updateTitle();
    },
};
</script>

<style scoped lang="scss">
.error_hanler {
    min-height: 100dvh;
    width: 100%;
    font-family: "Product Sans";
    text-align: center;
    color: #1b2b42;
    padding-inline: 10px;

    img {
        display: block;
        margin-top: -50px;
        width: 373px;
        height: 373px;
    }

    .tag {
        padding: 8px;
        width: max-content;
        border-radius: 20px;
        margin-bottom: 16px;
        background: var(
            --Gradient,
            linear-gradient(
                277deg,
                #d5e2ee 26.44%,
                rgba(213, 226, 238, 0.58) 56.97%,
                rgba(213, 226, 238, 0.36) 73.28%,
                rgba(213, 226, 238, 0.67) 99.44%
            )
        );
        span {
            font-size: 20px;
            font-weight: 400;
        }
    }

    h1 {
        font-family: "Product Sans Black";
        font-size: 48px;
        font-weight: 900;
    }

    p {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        margin-top: 32px;
    }

    // a {
    //     border-radius: 8px;
    //     padding: 16px 0;
    //     background: #2c6cac;
    //     min-width: 215px;
    //     text-decoration: none;
    //     span {
    //         color: #eaf0f7;
    //         font-family: "Product Sans Black";
    //         font-size: 20px;
    //         font-style: normal;
    //         font-weight: 900;
    //     }
    // }
}
</style>
