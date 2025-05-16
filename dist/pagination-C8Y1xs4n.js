import { defineComponent as l, resolveComponent as _, createElementBlock as s, openBlock as o, createBlock as n, createCommentVNode as r, withCtx as p, createTextVNode as i } from "vue";
const g = {
  class: "pagination",
  role: "navigation",
  "aria-label": "pagination"
}, d = /* @__PURE__ */ l({
  __name: "pagination",
  props: {
    pager: {}
  },
  setup(u) {
    return (e, t) => {
      const a = _("router-link");
      return o(), s("nav", g, [
        e.pager.prev_page_url ? (o(), n(a, {
          key: 0,
          to: e.pager.prev_page_url,
          class: "pagination-previous"
        }, {
          default: p(() => t[0] || (t[0] = [
            i("Previous")
          ])),
          _: 1,
          __: [0]
        }, 8, ["to"])) : r("", !0),
        e.pager.next_page_url ? (o(), n(a, {
          key: 1,
          to: e.pager.next_page_url,
          class: "pagination-next"
        }, {
          default: p(() => t[1] || (t[1] = [
            i("Next page")
          ])),
          _: 1,
          __: [1]
        }, 8, ["to"])) : r("", !0)
      ]);
    };
  }
});
export {
  d as default
};
