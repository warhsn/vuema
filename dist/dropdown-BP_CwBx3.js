import { defineComponent as d, ref as p, resolveComponent as c, openBlock as v, createElementBlock as u, normalizeClass as f, createVNode as g, withCtx as m, renderSlot as l, createElementVNode as r } from "vue";
const w = {
  class: "dropdown-menu",
  id: "dropdown-menu",
  role: "menu"
}, _ = /* @__PURE__ */ d({
  __name: "dropdown",
  props: {
    hoverable: { type: Boolean },
    align: {}
  },
  setup(s) {
    const n = s, e = p(!1);
    function i() {
      n.hoverable || (e.value = !e.value);
    }
    return (o, t) => {
      const a = c("dropdown-trigger");
      return v(), u("div", {
        class: f(["dropdown", {
          "is-active": e.value,
          "is-hoverable": n.hoverable,
          "is-right": o.align === "right",
          "is-left": o.align === "left"
        }])
      }, [
        g(a, { onClick: i }, {
          default: m(() => [
            l(o.$slots, "trigger", { isActive: e.value })
          ]),
          _: 3
        }),
        r("div", w, [
          r("div", {
            class: "dropdown-content",
            onClick: t[0] || (t[0] = (h) => e.value = !1)
          }, [
            l(o.$slots, "default")
          ])
        ])
      ], 2);
    };
  }
});
export {
  _ as default
};
