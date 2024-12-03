import { defineComponent as n, computed as t, openBlock as a, createElementBlock as l, normalizeClass as p, renderSlot as r } from "vue";
const c = /* @__PURE__ */ n({
  __name: "column",
  props: {
    isCentered: { type: Boolean },
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
    isNarrow: { type: Boolean }
  },
  setup(s) {
    const e = s, o = t(() => ({
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
      "is-narrow": e.isNarrow
    }));
    return (i, B) => (a(), l("div", {
      class: p(["column", o.value])
    }, [
      r(i.$slots, "default")
    ], 2));
  }
});
export {
  c as default
};
