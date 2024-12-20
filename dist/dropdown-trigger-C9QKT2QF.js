import { defineComponent as s, resolveComponent as c, openBlock as a, createElementBlock as i, createElementVNode as o, renderSlot as p, createVNode as d } from "vue";
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
      return a(), i("div", l, [
        o("button", _, [
          o("span", null, [
            p(n.$slots, "default", {
              isActive: t.isActive
            })
          ]),
          d(r, {
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
