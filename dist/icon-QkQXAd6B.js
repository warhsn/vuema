import { defineComponent as e, resolveComponent as s, createBlock as i, openBlock as t } from "vue";
const r = /* @__PURE__ */ e({
  __name: "icon",
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
  setup(c) {
    const o = c;
    return (p, a) => {
      const n = s("base-icon");
      return t(), i(n, {
        icon: o.icon,
        "icon-type": o.iconType,
        "icon-pack": o.iconPack,
        "icon-classes": o.iconClasses
      }, null, 8, ["icon", "icon-type", "icon-pack", "icon-classes"]);
    };
  }
});
export {
  r as default
};
