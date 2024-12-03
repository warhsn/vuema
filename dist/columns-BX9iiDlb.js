import { defineComponent as t, computed as l, openBlock as a, createElementBlock as p, normalizeClass as i, renderSlot as r } from "vue";
const c = /* @__PURE__ */ t({
  __name: "columns",
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
  setup(e) {
    const o = e, n = l(() => ({
      "is-centered": o.isCentered
    }));
    return (s, B) => (a(), p("div", {
      class: i(["columns", n.value])
    }, [
      r(s.$slots, "default")
    ], 2));
  }
});
export {
  c as default
};
