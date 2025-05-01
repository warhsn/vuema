import { defineComponent as o, createElementBlock as n, openBlock as c, createElementVNode as s, normalizeClass as a } from "vue";
const t = { class: "icon" }, p = /* @__PURE__ */ o({
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
    return (e, i) => (c(), n("span", t, [
      s("i", {
        class: a(`${e.iconType || "fa-regular"} fa-${e.icon} ${e.iconClasses}`)
      }, null, 2)
    ]));
  }
});
export {
  p as default
};
