import { defineComponent as c, createElementBlock as r, createCommentVNode as m, unref as n, openBlock as e, Fragment as u, renderList as i, createTextVNode as _, createElementVNode as d, toDisplayString as f } from "vue";
import { _ as E, a as g } from "./errors-BZdmzG52.js";
const h = {
  key: 0,
  class: "help is-danger"
}, V = /* @__PURE__ */ c({
  __name: "field-error",
  props: {
    error: {}
  },
  setup(s) {
    const o = s, a = E(o), l = g(o);
    return (k, t) => n(a) ? (e(), r("p", h, [
      (e(!0), r(u, null, i(n(l), (p) => (e(), r("span", null, [
        _(f(p), 1),
        t[0] || (t[0] = d("br", null, null, -1))
      ]))), 256))
    ])) : m("", !0);
  }
});
export {
  V as _
};
