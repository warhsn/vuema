import { defineComponent as s, createElementBlock as t, openBlock as n, normalizeClass as i, createElementVNode as a, renderSlot as p } from "vue";
const d = /* @__PURE__ */ s({
  __name: "tabs",
  props: {
    isBoxed: { type: Boolean },
    isToggle: { type: Boolean },
    isToggleRounded: { type: Boolean },
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
    is12: { type: Boolean }
  },
  setup(o) {
    const e = o;
    return (l, B) => (n(), t("div", {
      class: i(["tabs", {
        "is-boxed": e.isBoxed,
        "is-toggle": e.isToggle,
        "is-toggle-rounded": e.isToggleRounded,
        "is-fullwidth": e.isFullwidth
      }])
    }, [
      a("ul", null, [
        p(l.$slots, "default")
      ])
    ], 2));
  }
});
export {
  d as default
};
