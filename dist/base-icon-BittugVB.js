import { defineComponent as o, createElementBlock as n, openBlock as s, createElementVNode as c, normalizeClass as a } from "vue";
const t = { class: "icon" }, r = /* @__PURE__ */ o({
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
  setup(l) {
    return (e, i) => (s(), n("span", t, [
      c("i", {
        class: a(`${e.iconType || "fa-solid"} fa-${e.icon} ${e.iconClasses}`)
      }, null, 2)
    ]));
  }
});
export {
  r as default
};
