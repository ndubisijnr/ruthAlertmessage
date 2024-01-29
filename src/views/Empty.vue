<template>
    <div>
        <slot name="child-content"></slot>
    </div>
</template>

<script>
export default {
    name: "Empty",
    data() {
        return {
            showDropDown: false,
        };
    },
    methods: {},
    computed: {},
};
</script>

<style scoped lang="scss"></style>
