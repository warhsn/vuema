import { defineComponent as t, computed as a, openBlock as l, createElementBlock as i, normalizeClass as p, renderSlot as y } from "vue";
const r = /* @__PURE__ */ t({
  __name: "buttons",
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
  setup(n) {
    const o = n, s = a(() => {
      const e = [];
      return o.hasAddons && e.push("has-addons"), o.align && e.push(`is-${o.align}`), o.isRounded && e.push("is-rounded"), e;
    });
    return (e, B) => (l(), i("div", {
      class: p(["buttons", s.value])
    }, [
      y(e.$slots, "default")
    ], 2));
  }
});
export {
  r as default
};
