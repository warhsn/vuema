import { defineComponent as d, getCurrentInstance as y, createElementBlock as x, createCommentVNode as B, openBlock as m, createElementVNode as o, normalizeClass as n, unref as v, toDisplayString as l } from "vue";
import { u as T } from "./sizes-tLhbz8lD.js";
const C = {
  key: 0,
  class: "is-flex is-flex-wrap-nowrap is-justify-content-flex-start"
}, k = /* @__PURE__ */ d({
  __name: "pagination",
  props: {
    pager: {},
    firstText: { default: "First" },
    nextText: { default: "Next" },
    previousText: { default: "Previous" },
    lastText: { default: "Last" },
    isNormal: { type: Boolean },
    isSmall: { type: Boolean },
    isMedium: { type: Boolean },
    isLarge: { type: Boolean },
    isResponsive: { type: Boolean },
    isExpanded: { type: Boolean },
    isFullwidth: { type: Boolean },
    is0: { type: Boolean },
    is1: { type: Boolean },
    is2: { type: Boolean },
    is3: { type: Boolean },
    is4: { type: Boolean },
    is5: { type: Boolean },
    is6: { type: Boolean },
    is7: { type: Boolean },
    is8: { type: Boolean },
    is9: { type: Boolean },
    is10: { type: Boolean },
    is11: { type: Boolean },
    is12: { type: Boolean }
  },
  setup(e) {
    const r = y(), p = (r == null ? void 0 : r.appContext.app.config.globalProperties.$router) || null, t = e, g = T(t), i = (s) => {
      if (s)
        if (p) {
          const a = new URL(s, window.location.origin);
          p.push({
            path: a.pathname,
            query: Object.fromEntries(a.searchParams)
          });
        } else
          window.location.href = s;
    }, u = () => {
      t.pager.current_page !== 1 && i(t.pager.first_page_url);
    }, c = () => {
      t.pager.current_page !== t.pager.last_page && i(t.pager.last_page_url);
    };
    return (s, a) => e.pager.total > 0 ? (m(), x("div", C, [
      o("nav", {
        class: n(["pagination", v(g)]),
        role: "navigation",
        "aria-label": "pagination"
      }, [
        o("a", {
          onClick: u,
          class: n(["pagination-previous", {
            "is-disabled": !e.pager.first_page_url || e.pager.current_page === 1
          }])
        }, l(e.firstText), 3),
        o("a", {
          class: n([{
            "is-disabled": !e.pager.prev_page_url
          }, "pagination-previous"]),
          onClick: a[0] || (a[0] = (f) => i(e.pager.prev_page_url))
        }, l(e.previousText), 3),
        o("a", {
          class: n([{
            "is-disabled": !e.pager.next_page_url
          }, "pagination-next"]),
          onClick: a[1] || (a[1] = (f) => i(e.pager.next_page_url))
        }, l(e.nextText), 3),
        o("a", {
          onClick: c,
          class: n(["pagination-next", {
            "is-disabled": !e.pager.last_page_url || e.pager.current_page === e.pager.last_page
          }])
        }, l(e.lastText), 3)
      ], 2)
    ])) : B("", !0);
  }
});
export {
  k as default
};
