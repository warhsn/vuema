import { defineComponent as y, getCurrentInstance as B, createElementBlock as m, createCommentVNode as c, openBlock as v, createElementVNode as t, normalizeClass as s, unref as _, toDisplayString as i } from "vue";
import { u as T } from "./sizes-tLhbz8lD.js";
const C = {
  key: 0,
  class: "is-flex is-flex-wrap-nowrap is-justify-content-flex-start"
}, b = /* @__PURE__ */ y({
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
  setup(l) {
    const r = B(), p = (r == null ? void 0 : r.appContext.app.config.globalProperties.$router) || null, o = l, g = T(o), n = (e) => {
      if (e)
        if (p) {
          const a = new URL(e, window.location.origin);
          p.push({
            path: a.pathname,
            query: Object.fromEntries(a.searchParams)
          });
        } else
          window.location.href = e;
    }, u = () => {
      o.pager.current_page !== 1 && n(o.pager.first_page_url);
    }, f = () => {
      o.pager.current_page !== o.pager.last_page && n(o.pager.last_page_url);
    };
    return (e, a) => e.pager.total > 0 ? (v(), m("div", C, [
      t("nav", {
        class: s(["pagination", _(g)]),
        role: "navigation",
        "aria-label": "pagination"
      }, [
        t("a", {
          onClick: u,
          class: s(["pagination-previous", {
            "is-disabled": !e.pager.first_page_url || e.pager.current_page === 1
          }])
        }, i(e.firstText), 3),
        t("a", {
          class: s([{
            "is-disabled": !e.pager.prev_page_url
          }, "pagination-previous"]),
          onClick: a[0] || (a[0] = (d) => n(e.pager.prev_page_url))
        }, i(e.previousText), 3),
        t("a", {
          class: s([{
            "is-disabled": !e.pager.next_page_url
          }, "pagination-next"]),
          onClick: a[1] || (a[1] = (d) => n(e.pager.next_page_url))
        }, i(e.nextText), 3),
        t("a", {
          onClick: f,
          class: s(["pagination-next", {
            "is-disabled": !e.pager.last_page_url || e.pager.current_page === e.pager.last_page
          }])
        }, i(e.lastText), 3)
      ], 2)
    ])) : c("", !0);
  }
});
export {
  b as default
};
