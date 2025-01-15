import { defineComponent as l, resolveComponent as s, openBlock as o, createElementBlock as g, createBlock as n, withCtx as r, createTextVNode as p, createCommentVNode as i } from "vue";
const u = {
  class: "pagination",
  role: "navigation",
  "aria-label": "pagination"
}, d = /* @__PURE__ */ l({
  __name: "pagination",
  props: {
    pager: {}
  },
  setup(_) {
    return (e, t) => {
      const a = s("router-link");
      return o(), g("nav", u, [
        e.pager.prev_page_url ? (o(), n(a, {
          key: 0,
          to: e.pager.prev_page_url,
          class: "pagination-previous"
        }, {
          default: r(() => t[0] || (t[0] = [
            p("Previous")
          ])),
          _: 1
        }, 8, ["to"])) : i("", !0),
        e.pager.next_page_url ? (o(), n(a, {
          key: 1,
          to: e.pager.next_page_url,
          class: "pagination-next"
        }, {
          default: r(() => t[1] || (t[1] = [
            p("Next page")
          ])),
          _: 1
        }, 8, ["to"])) : i("", !0)
      ]);
    };
  }
});
export {
  d as default
};
