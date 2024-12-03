import { defineComponent as r, computed as c, resolveComponent as d, openBlock as n, createElementBlock as i, normalizeClass as y, withModifiers as B, createVNode as u, createCommentVNode as s, createElementVNode as m, renderSlot as g, createBlock as f } from "vue";
const I = ["disabled"], k = {
  key: 0,
  class: "icon"
}, b = {
  key: 1,
  class: "icon"
}, S = /* @__PURE__ */ r({
  __name: "button",
  props: {
    disabled: { type: Boolean },
    isSelected: { type: Boolean },
    hasAddons: { type: Boolean },
    align: {},
    processing: { type: Boolean },
    isSmall: { type: Boolean },
    isMedium: { type: Boolean },
    isLarge: { type: Boolean },
    is1: { type: Boolean },
    is2: { type: Boolean },
    is3: { type: Boolean },
    is4: { type: Boolean },
    is5: { type: Boolean },
    is6: { type: Boolean },
    is7: { type: Boolean },
    is8: { type: Boolean },
    is9: { type: Boolean },
    is10: { type: Boolean },
    is11: { type: Boolean },
    is12: { type: Boolean },
    isNarrow: { type: Boolean },
    isSuccess: { type: Boolean },
    isWarning: { type: Boolean },
    isDanger: { type: Boolean },
    isInfo: { type: Boolean },
    isOutlined: { type: Boolean },
    isLink: { type: Boolean },
    isInverted: { type: Boolean },
    isRounded: { type: Boolean },
    isPrimary: { type: Boolean },
    icon: {},
    iconType: {},
    iconPack: {},
    textIcon: { type: Boolean },
    leftIcon: {},
    iconClasses: {},
    leftIconType: {},
    rightIcon: {}
  },
  setup(a) {
    const e = a, p = c(() => ({
      "is-success": e.isSuccess,
      "is-warning": e.isWarning,
      "is-danger": e.isDanger,
      "is-info": e.isInfo,
      "is-loading": e.processing,
      "is-small": e.isSmall,
      "is-medium": e.isMedium,
      "is-large": e.isLarge,
      "is-outlined": e.isOutlined,
      "is-link": e.isLink,
      "is-inverted": e.isInverted,
      "is-rounded": e.isRounded,
      "is-selected": e.isSelected,
      "is-primary": e.isPrimary
    }));
    return (o, t) => {
      const l = d("b-icon");
      return n(), i("button", {
        class: y(["button", p.value]),
        onClick: t[0] || (t[0] = B(() => {
        }, ["prevent"])),
        disabled: o.disabled
      }, [
        o.leftIcon ? (n(), i("span", k, [
          u(l, {
            icon: o.leftIcon,
            "icon-type": o.leftIconType
          }, null, 8, ["icon", "icon-type"])
        ])) : s("", !0),
        m("span", null, [
          g(o.$slots, "default")
        ]),
        o.rightIcon ? (n(), i("span", b, [
          o.rightIcon ? (n(), f(l, {
            key: 0,
            icon: o.rightIcon
          }, null, 8, ["icon"])) : s("", !0)
        ])) : s("", !0)
      ], 10, I);
    };
  }
});
export {
  S as default
};
