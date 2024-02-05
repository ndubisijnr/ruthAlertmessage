<template>
  <div @click="focusInput" class="content_input_container">
    <ul class="content_member_list" v-if="content.length">
      <li v-for="(item, index) in content" :key="index + 238844">
        <span>{{ item }}</span>
        <div
          @click.stop="removeContent(index)"
          :title="`Remove ${item}`"
          class="deleteBtn"
        >
          <XmarkCircle />
        </div>
      </li>
      <li>
        <form @submit.prevent="addContent">
          <input
            @blur="addContent('wdwdwd')"
            :disabled="disabled"
            class="form-control input_field"
            autocomplete="off"
            :type="inputType"
            v-model="initialInput"
            @keydown="checkAndDelete"
            ref="listInput"
            required
            :placeholder="!content.length ? initialPlaceholder : ''"
          />
        </form>
      </li>
    </ul>
    <form v-else @submit.prevent="addContent">
      <input
        @blur="addContent('wdwdwd')"
        :disabled="disabled"
        class="form-control input_field"
        autocomplete="off"
        :type="inputType"
        required
        ref="listInput"
        v-model="initialInput"
        :placeholder="!content.length ? initialPlaceholder : ''"
      />
    </form>
  </div>
</template>

<script>
import XmarkCircle from "./svg/XmarkCircle.vue";
export default {
  props: {
    initialPlaceholder: {
      type: String,
      default: "Add members",
    },
    inputType: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    initialContent: {
      type: Array,
    },
  },
  components: { XmarkCircle },
  emits: ["contentEmit"],
  data() {
    return {
      content: [],
      initialInput: "",
    };
  },
  methods: {
    removeContent(index) {
      if (this.disabled) return;
      this.content.splice(index, 1);
      this.$emit("contentEmit", this.content);
    },
    addContent(val) {
      if (this.disabled) return;
      if (!this.initialInput) return;
      if (this.inputType === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const tt = emailRegex.test(this.initialInput);
        if (!tt) {
          this.showError("Valid email required!");
          return;
        }
      }
      this.content.push(this.initialInput);
      this.initialInput = "";
      this.$emit("contentEmit", this.content);
      this.$nextTick(() => {
        if (val !== "wdwdwd") {
          this.$refs.listInput.focus();
        }
      });
    },
    focusInput(event) {
      if (this.disabled) return;
      if (
        event.target.className?.includes("content_input_container") ||
        event.target?.className.includes("content_member_list")
      ) {
        if (this.$refs.listInput) this.$refs.listInput.focus();
      }
    },
    checkAndDelete(event) {
      if (this.disabled) return;
      if (event.key === "Backspace" && !this.initialInput) {
        this.content.pop();
        if (!this.content.length) {
          this.$nextTick(() => {
            this.$refs.listInput.focus();
          });
        }
      }
    },
  },
  mounted() {
    if (this.initialContent) this.content = this.initialContent;
  },
};
</script>

<style lang="scss" scoped>
// content_input_container styles
.content_input_container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 36px;
  max-width: 161px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #c2c2c2;
  padding: 6px 12px;
  transition: height 0.25s ease-in-out;

  * {
    transition: all 0.25s ease-in-out;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 1 1;
    min-width: 0;
    max-width: 100%;
    grid-gap: 0px;
    height: 100%;
    padding: 0 !important;
    margin: 0;
    margin-block: -5px;
    position: relative;

    li {
      list-style-type: none;
      flex: 0 1 auto;
      padding: 4px 9px;
      max-width: 100%;
      margin: 5px;
      margin-left: 0;
      vertical-align: middle;
      // white-space: nowrap;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      background-color: var(--primary_color);
      border-radius: 30px;
      color: #fff;
      cursor: default;
      // text-transform: capitalize;

      span {
        font-size: 12px;
        font-weight: 400;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }

      .deleteBtn {
        cursor: pointer;
        width: 12px;
        min-width: 12px;
        height: 12px;
        display: grid;
        place-items: center;

        svg {
          width: 100%;
          height: 100%;
          path,
          rect,
          circle {
            &.stroke {
              stroke: #fff;
            }

            &.fill {
              fill: #fff;
            }
          }
        }

        &:hover {
          svg {
            path,
            rect,
            circle {
              &.stroke {
                stroke: #ff0000;
              }

              &.fill {
                fill: #ff0000;
              }
            }
          }
        }
      }

      &:has(form) {
        padding: 0 !important;
        background-color: transparent !important;
        display: inline;
        border: none;
        border-radius: 0;
        flex: 1 1;
        width: 100%;
        min-width: 64px;
        max-width: 100%;
        align-self: center;

        .input_field {
          height: 0px !important;
        }
      }

      &:last-child {
        min-height: 0px !important;
        height: 0px !important;
        margin: 0 !important;
      }
    }

    &:has(input:focus) {
      grid-gap: 10px;
      margin: 0 !important;

      li {
        margin: 0 !important;

        &:last-child {
          height: 100% !important;
          min-height: 100% !important;
        }
      }
    }

    &:not(:has(input[type="email"])) {
      li {
        text-transform: capitalize;
      }
    }
  }

  & > form {
    flex: auto;
    width: max-content;

    .input_field {
      height: 100% !important;
    }
  }

  .input_field {
    border: none !important;
    border-radius: none !important;
    box-shadow: none !important;
    outline: none !important;
    max-height: 36px !important;
    font-size: 12px;
    border-radius: 0;
    padding: 0 !important;
    color: #000;
    min-width: 1.6rem;
    transition: all 0.25s ease-in-out;
    &::placeholder {
      color: #000;
    }

    &:focus {
      height: 100% !important;
    }
  }
}
</style>