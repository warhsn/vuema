import { defineComponent as d, ref as c, resolveComponent as v, createElementBlock as p, openBlock as u, normalizeClass as f, createVNode as g, createElementVNode as r, withCtx as m, renderSlot as i } from "vue";
const w = {
  class: "dropdown-menu",
  id: "dropdown-menu",
  role: "menu"
}, b = /* @__PURE__ */ d({
  __name: "dropdown",
  props: {
    hoverable: { type: Boolean },
    align: {}
  },
  setup(o) {
    const t = o, e = c(!1);
    function s() {
      t.hoverable || (e.value = !e.value);
    }
    return (n, l) => {
      const a = v("dropdown-trigger");
      return u(), p("div", {
        class: f(["dropdown", {
          "is-active": e.value,
          "is-hoverable": t.hoverable,
          "is-right": o.align === "right",
          "is-left": o.align === "left"
        }])
      }, [
        g(a, { onClick: s }, {
          default: m(() => [
            i(n.$slots, "trigger", { isActive: e.value })
          ]),
          _: 3
        }),
        r("div", w, [
          r("div", {
            class: "dropdown-content",
            onClick: l[0] || (l[0] = (h) => e.value = !1)
          }, [
            i(n.$slots, "default")
          ])
        ])
      ], 2);
    };
  }
});
export {
  b as default
};
