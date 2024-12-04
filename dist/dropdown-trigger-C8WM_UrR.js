import { defineComponent as c, resolveComponent as r, openBlock as i, createElementBlock as a, createElementVNode as o, renderSlot as p, createVNode as l } from "vue";
const d = { class: "dropdown-trigger" }, _ = {
  class: "button",
  "aria-haspopup": "true",
  "aria-controls": "dropdown-menu"
}, m = { class: "icon is-small" }, g = /* @__PURE__ */ c({
  __name: "dropdown-trigger",
  props: {
    isActive: { type: Boolean }
  },
  setup(e) {
    const n = e;
    return (t, u) => {
      const s = r("icon");
      return i(), a("div", d, [
        o("button", _, [
          o("span", null, [
            p(t.$slots, "default", {
              isActive: n.isActive
            })
          ]),
          o("span", m, [
            l(s, {
              icon: "angle-down",
              "icon-type": "fa-solid"
            })
          ])
        ])
      ]);
    };
  }
});
export {
  g as default
};