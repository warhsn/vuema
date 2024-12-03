import { defineComponent as a, ref as d, resolveComponent as c, openBlock as p, createElementBlock as v, normalizeClass as u, createVNode as g, withCtx as m, renderSlot as n, createElementVNode as r } from "vue";
const f = {
  class: "dropdown-menu",
  id: "dropdown-menu",
  role: "menu"
}, h = { class: "dropdown-content" }, C = /* @__PURE__ */ a({
  __name: "dropdown",
  props: {
    hoverable: { type: Boolean },
    align: {}
  },
  setup(l) {
    const t = l, e = d(!1);
    function s() {
      t.hoverable || (e.value = !e.value);
    }
    return (o, _) => {
      const i = c("dropdown-trigger");
      return p(), v("div", {
        class: u(["dropdown", {
          "is-active": e.value,
          "is-hoverable": t.hoverable,
          "is-right": o.align === "right",
          "is-left": o.align === "left"
        }])
      }, [
        g(i, { onClick: s }, {
          default: m(() => [
            n(o.$slots, "trigger", { isActive: e.value })
          ]),
          _: 3
        }),
        r("div", f, [
          r("div", h, [
            n(o.$slots, "default")
          ])
        ])
      ], 2);
    };
  }
});
export {
  C as default
};
