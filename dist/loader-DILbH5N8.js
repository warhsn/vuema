import { defineComponent as s, computed as d, resolveComponent as p, createElementBlock as o, openBlock as e, normalizeStyle as u, createBlock as f, renderSlot as m, withCtx as y, normalizeProps as h, guardReactiveProps as x, createElementVNode as n, mergeProps as r } from "vue";
import { _ } from "./index-CjLbz_MK.js";
const g = /* @__PURE__ */ s({
  __name: "loader",
  props: {
    loading: { type: Boolean, default: !0 }
  },
  setup(t) {
    const l = t, c = d(() => l.loading ? "height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center;" : "");
    return (a, v) => {
      const i = p("flex");
      return e(), o("div", {
        style: u(c.value)
      }, [
        t.loading ? (e(), f(i, {
          key: 0,
          width: "100%",
          column: "",
          class: "filter-container align-center is-justify-content-center"
        }, {
          default: y(() => [
            (e(), o("svg", h(x({ viewBox: "0 0 50 50", style: { width: "48px", height: "48px" } })), [
              n("circle", r({ class: "spinner" }, { cx: 25, cy: 25, r: 20 }, {
                fill: "none",
                "stroke-width": "1"
              }), null, 16),
              n("circle", r({ class: "dot" }, { cx: 10, cy: 10, r: 2 }), null, 16)
            ], 16))
          ]),
          _: 1
        })) : m(a.$slots, "default", { key: 1 }, void 0, !0)
      ], 4);
    };
  }
}), B = /* @__PURE__ */ _(g, [["__scopeId", "data-v-baaea7dc"]]);
export {
  B as default
};
