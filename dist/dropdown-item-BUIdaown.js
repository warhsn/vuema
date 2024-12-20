import { defineComponent as r, openBlock as i, createElementBlock as l, renderSlot as m } from "vue";
const p = /* @__PURE__ */ r({
  __name: "dropdown-item",
  emits: ["click"],
  setup(s, { emit: t }) {
    const o = t;
    return (n, e) => (i(), l("div", {
      onClick: e[0] || (e[0] = (c) => o("click")),
      class: "dropdown-item"
    }, [
      m(n.$slots, "default")
    ]));
  }
});
export {
  p as default
};
