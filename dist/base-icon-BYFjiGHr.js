import { defineComponent as n, createElementBlock as c, openBlock as s, createElementVNode as t, normalizeClass as a } from "vue";
const l = { class: "icon" }, f = /* @__PURE__ */ n({
  __name: "base-icon",
  props: {
    icon: {},
    iconType: {},
    iconPack: {},
    textIcon: { type: Boolean },
    leftIcon: {},
    iconClasses: {},
    leftIconClass: {},
    leftIconType: {},
    rightIconClass: {},
    rightIcon: {},
    rightIconType: {}
  },
  setup(o) {
    const e = o;
    return (i, p) => (s(), c("span", l, [
      t("i", {
        class: a([e.iconType || "fa-solid", `fa-${e.icon}`, e.iconClasses])
      }, null, 2)
    ]));
  }
});
export {
  f as default
};
