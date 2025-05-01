import { defineComponent as s, resolveComponent as c, createElementBlock as a, openBlock as i, createElementVNode as o, createVNode as p, renderSlot as d } from "vue";
const l = { class: "dropdown-trigger" }, _ = {
  class: "button",
  "aria-haspopup": "true",
  "aria-controls": "dropdown-menu"
}, f = /* @__PURE__ */ s({
  __name: "dropdown-trigger",
  props: {
    isActive: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, u) => {
      const r = c("b-icon");
      return i(), a("div", l, [
        o("button", _, [
          o("span", null, [
            d(n.$slots, "default", {
              isActive: t.isActive
            })
          ]),
          p(r, {
            icon: "angle-down",
            "icon-type": "fas"
          })
        ])
      ]);
    };
  }
});
export {
  f as default
};
