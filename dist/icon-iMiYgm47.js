import { defineComponent as c, resolveComponent as e, openBlock as s, createBlock as i } from "vue";
const l = /* @__PURE__ */ c({
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
  setup(p) {
    return (o, t) => {
      const n = e("base-icon");
      return s(), i(n, {
        icon: o.icon,
        "icon-type": o.iconType,
        "icon-pack": o.iconPack,
        "icon-classes": o.iconClasses
      }, null, 8, ["icon", "icon-type", "icon-pack", "icon-classes"]);
    };
  }
});
export {
  l as default
};
