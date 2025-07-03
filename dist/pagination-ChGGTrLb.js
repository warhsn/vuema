import { defineComponent as y, getCurrentInstance as B, withDirectives as c, createElementBlock as m, openBlock as v, createElementVNode as t, normalizeClass as s, unref as _, toDisplayString as n, vShow as T } from "vue";
import { u as w } from "./sizes-tLhbz8lD.js";
const x = { class: "is-flex is-flex-wrap-nowrap is-justify-content-flex-start" }, h = /* @__PURE__ */ y({
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
    const r = B(), p = (r == null ? void 0 : r.appContext.app.config.globalProperties.$router) || null, o = l, g = w(o), i = (e) => {
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
      o.pager.current_page !== 1 && i(o.pager.first_page_url);
    }, f = () => {
      o.pager.current_page !== o.pager.last_page && i(o.pager.last_page_url);
    };
    return (e, a) => c((v(), m("div", x, [
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
        }, n(e.firstText), 3),
        t("a", {
          class: s([{
            "is-disabled": !e.pager.prev_page_url
          }, "pagination-previous"]),
          onClick: a[0] || (a[0] = (d) => i(e.pager.prev_page_url))
        }, n(e.previousText), 3),
        t("a", {
          class: s([{
            "is-disabled": !e.pager.next_page_url
          }, "pagination-next"]),
          onClick: a[1] || (a[1] = (d) => i(e.pager.next_page_url))
        }, n(e.nextText), 3),
        t("a", {
          onClick: f,
          class: s(["pagination-next", {
            "is-disabled": !e.pager.last_page_url || e.pager.current_page === e.pager.last_page
          }])
        }, n(e.lastText), 3)
      ], 2)
    ], 512)), [
      [T, e.pager.total > 0]
    ]);
  }
});
export {
  h as default
};
