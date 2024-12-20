import { defineComponent as a, computed as l, resolveComponent as p, openBlock as y, createElementBlock as c, normalizeClass as r, withModifiers as B, createVNode as d } from "vue";
const u = ["disabled"], g = /* @__PURE__ */ a({
  __name: "icon-button",
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
    isStatic: { type: Boolean },
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
    leftIconClass: {},
    leftIconType: {},
    rightIconClass: {},
    rightIcon: {},
    rightIconType: {}
  },
  setup(s) {
    const e = s, n = l(() => ({
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
      "is-active": e.isActive,
      "is-static": e.isStatic
    }));
    return (o, i) => {
      const t = p("b-icon");
      return y(), c("button", {
        class: r(["button", n.value]),
        onClick: i[0] || (i[0] = B(() => {
        }, ["prevent"])),
        disabled: o.disabled
      }, [
        d(t, {
          icon: o.icon,
          "icon-type": o.iconType
        }, null, 8, ["icon", "icon-type"])
      ], 10, u);
    };
  }
});
export {
  g as default
};
