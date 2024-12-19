import { defineComponent as s, resolveComponent as t, openBlock as e, createElementBlock as n, normalizeClass as a, createVNode as i, renderSlot as l, createCommentVNode as p } from "vue";
const r = { key: 0 }, u = /* @__PURE__ */ s({
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
  setup(m) {
    return (o, f) => {
      const c = t("base-icon");
      return e(), n("span", {
        class: a({
          "icon-text": o.textIcon
        })
      }, [
        i(c, {
          icon: o.icon,
          "icon-type": o.iconType,
          "icon-pack": o.iconPack,
          "icon-classes": o.iconClasses
        }, null, 8, ["icon", "icon-type", "icon-pack", "icon-classes"]),
        o.$slots.default ? (e(), n("span", r, [
          l(o.$slots, "default")
        ])) : p("", !0)
      ], 2);
    };
  }
});
export {
  u as default
};
