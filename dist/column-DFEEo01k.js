import { defineComponent as l, computed as t, createElementBlock as a, openBlock as n, normalizeClass as r, renderSlot as p } from "vue";
const u = /* @__PURE__ */ l({
  __name: "column",
  props: {
    isCentered: { type: Boolean },
    isMultiline: { type: Boolean },
    isMobile: {},
    isDesktop: {},
    isHalf: {},
    isThreeQuartersMobile: {},
    isTwoThirdsTablet: {},
    isHalfDesktop: {},
    isOneThirdWidescreen: {},
    isOneQuarterFullhd: {},
    isNarrow: { type: Boolean },
    isGapless: { type: Boolean },
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
  setup(s) {
    const e = s, i = t(() => ({
      "is-0": e.is0,
      "is-1": e.is1,
      "is-2": e.is2,
      "is-3": e.is3,
      "is-4": e.is4,
      "is-5": e.is5,
      "is-6": e.is6,
      "is-7": e.is7,
      "is-8": e.is8,
      "is-9": e.is9,
      "is-10": e.is10,
      "is-11": e.is11,
      "is-12": e.is12,
      "is-narrow": e.isNarrow,
      "is-mobile": e.isMobile,
      "is-desktop": e.isDesktop,
      "is-half": e.isHalf,
      "is-three-quarters-mobile": e.isThreeQuartersMobile,
      "is-two-thirds-tablet": e.isTwoThirdsTablet,
      "is-half-desktop": e.isHalfDesktop,
      "is-one-third-widescreen": e.isOneThirdWidescreen,
      "is-one-quarter-fullhd": e.isOneQuarterFullhd,
      "is-gapless": e.isGapless,
      "is-multiline": e.isMultiline
    }));
    return (o, B) => (n(), a("div", {
      class: r(["column", i.value])
    }, [
      p(o.$slots, "default")
    ], 2));
  }
});
export {
  u as default
};
