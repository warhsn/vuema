import { defineComponent as c, unref as n, openBlock as r, createElementBlock as e, Fragment as m, renderList as u, createTextVNode as i, toDisplayString as _, createElementVNode as d, createCommentVNode as f } from "vue";
import { _ as E, a as g } from "./errors-BWO7vh4U.js";
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
    return (k, t) => n(a) ? (r(), e("p", h, [
      (r(!0), e(m, null, u(n(l), (p) => (r(), e("span", null, [
        i(_(p), 1),
        t[0] || (t[0] = d("br", null, null, -1))
      ]))), 256))
    ])) : f("", !0);
  }
});
export {
  V as _
};
