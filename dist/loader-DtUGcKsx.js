import { defineComponent as s, computed as d, resolveComponent as p, openBlock as e, createElementBlock as o, normalizeStyle as u, createBlock as f, withCtx as m, normalizeProps as y, guardReactiveProps as _, createElementVNode as n, mergeProps as r, renderSlot as h } from "vue";
import { _ as g } from "./index-CaHfaib0.js";
const x = /* @__PURE__ */ s({
  __name: "loader",
  props: {
    loading: { type: Boolean, default: !0 }
  },
  setup(l) {
    const c = l, a = d(() => c.loading ? "height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center;" : "");
    return (t, v) => {
      const i = p("flex");
      return e(), o("div", {
        style: u(a.value)
      }, [
        t.loading ? (e(), f(i, {
          key: 0,
          width: "100%",
          column: "",
          class: "filter-container align-center is-justify-content-center"
        }, {
          default: m(() => [
            (e(), o("svg", y(_({ viewBox: "0 0 50 50", style: { width: "48px", height: "48px" } })), [
              n("circle", r({ class: "spinner" }, { cx: 25, cy: 25, r: 20 }, {
                fill: "none",
                "stroke-width": "1"
              }), null, 16),
              n("circle", r({ class: "dot" }, { cx: 10, cy: 10, r: 2 }), null, 16)
            ], 16))
          ]),
          _: 1
        })) : h(t.$slots, "default", { key: 1 }, void 0, !0)
      ], 4);
    };
  }
}), B = /* @__PURE__ */ g(x, [["__scopeId", "data-v-baaea7dc"]]);
export {
  B as default
};
