import { defineComponent as d, getCurrentInstance as f, createElementBlock as m, openBlock as c, normalizeClass as t, unref as v, createElementVNode as s, toDisplayString as i } from "vue";
import { u as T } from "./sizes-tLhbz8lD.js";
const b = /* @__PURE__ */ d({
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
    const p = f(), r = (p == null ? void 0 : p.appContext.app.config.globalProperties.$router) || null, o = l, g = T(o), n = (e) => {
      if (e)
        if (console.log(e), r) {
          const a = new URL(e, window.location.origin);
          r.push({
            path: a.pathname,
            query: Object.fromEntries(a.searchParams)
          });
        } else
          window.location.href = e;
    }, u = () => {
      o.pager.current_page !== 1 && n(o.pager.first_page_url);
    }, y = () => {
      o.pager.current_page !== o.pager.last_page && n(o.pager.last_page_url);
    };
    return (e, a) => (c(), m("nav", {
      class: t(["pagination", v(g)]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      s("a", {
        onClick: u,
        class: t(["pagination-previous", {
          "is-disabled": !e.pager.first_page_url || e.pager.current_page === 1
        }])
      }, i(e.firstText), 3),
      s("a", {
        class: t([{
          "is-disabled": !e.pager.prev_page_url
        }, "pagination-previous"]),
        onClick: a[0] || (a[0] = (B) => n(e.pager.prev_page_url))
      }, i(e.previousText), 3),
      s("a", {
        class: t([{
          "is-disabled": !e.pager.next_page_url
        }, "pagination-next"]),
        onClick: a[1] || (a[1] = (B) => n(e.pager.next_page_url))
      }, i(e.nextText), 3),
      s("a", {
        onClick: y,
        class: t(["pagination-next", {
          "is-disabled": !e.pager.last_page_url || e.pager.current_page === e.pager.last_page
        }])
      }, i(e.lastText), 3)
    ], 2));
  }
});
export {
  b as default
};
