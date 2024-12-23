import { defineComponent as e } from "vue";
const s = e({
  props: {
    message: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      default: !1
    }
  },
  template: `
    <div class="user-profile">
      <h2>{{ props.message }}</h2>
      <slot />
    </div>
  `
});
export {
  s as default
};
