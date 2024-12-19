import { defineComponent as r, computed as y, resolveComponent as c, openBlock as i, createElementBlock as s, normalizeClass as d, withModifiers as B, createVNode as u, createCommentVNode as n, createElementVNode as m, renderSlot as g, createBlock as h } from "vue";
const f = ["disabled"], k = {
  key: 0,
  class: "icon"
}, v = {
  key: 1,
  class: "icon"
}, b = /* @__PURE__ */ r({
  __name: "button",
  props: {
    disabled: { type: Boolean },
    isSelected: { type: Boolean },
    areNormal: { type: Boolean },
    areSmall: { type: Boolean },
    areMedium: { type: Boolean },
    areLarge: { type: Boolean },
    isHovered: { type: Boolean },
    isFocused: { type: Boolean },
    isActive: { type: Boolean },
    hasAddons: { type: Boolean },
    align: {},
    loading: { type: Boolean },
    isNormal: { type: Boolean },
    isSmall: { type: Boolean },
    isMedium: { type: Boolean },
    isLarge: { type: Boolean },
    isResponsive: { type: Boolean },
    isExpanded: { type: Boolean },
    isFullwidth: { type: Boolean },
    is0: { type: Boolean },
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
    isSuccess: { type: Boolean },
    isWarning: { type: Boolean },
    isDanger: { type: Boolean },
    isInfo: { type: Boolean },
    isOutlined: { type: Boolean },
    isLink: { type: Boolean },
    isInverted: { type: Boolean },
    isRounded: { type: Boolean },
    isPrimary: { type: Boolean },
    isWhite: { type: Boolean },
    isLight: { type: Boolean },
    isDark: { type: Boolean },
    isBlack: { type: Boolean },
    isText: { type: Boolean },
    isGhost: { type: Boolean },
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
    const e = a, p = y(() => ({
      "is-success": e.isSuccess,
      "is-warning": e.isWarning,
      "is-danger": e.isDanger,
      "is-info": e.isInfo,
      "is-loading": e.loading,
      "is-small": e.isSmall,
      "is-medium": e.isMedium,
      "is-large": e.isLarge,
      "is-normal": e.isNormal,
      "is-outlined": e.isOutlined,
      "is-link": e.isLink,
      "is-inverted": e.isInverted,
      "is-rounded": e.isRounded,
      "is-selected": e.isSelected,
      "is-primary": e.isPrimary,
      "is-black": e.isBlack,
      "is-white": e.isWhite,
      "is-light": e.isLight,
      "is-text": e.isText,
      "is-ghost": e.isGhost,
      "is-responsive": e.isResponsive,
      "is-fullwidth": e.isFullwidth,
      "is-hovered": e.isHovered,
      "is-focused": e.isFocused,
      "is-active": e.isActive
    }));
    return (o, t) => {
      const l = c("b-icon");
      return i(), s("button", {
        class: d(["button", p.value]),
        onClick: t[0] || (t[0] = B(() => {
        }, ["prevent"])),
        disabled: o.disabled
      }, [
        o.leftIcon ? (i(), s("span", k, [
          u(l, {
            icon: o.leftIcon,
            "icon-type": o.leftIconType
          }, null, 8, ["icon", "icon-type"])
        ])) : n("", !0),
        m("span", null, [
          g(o.$slots, "default")
        ]),
        o.rightIcon ? (i(), s("span", v, [
          o.rightIcon ? (i(), h(l, {
            key: 0,
            icon: o.rightIcon
          }, null, 8, ["icon"])) : n("", !0)
        ])) : n("", !0)
      ], 10, f);
    };
  }
});
export {
  b as default
};
