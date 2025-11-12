import { defineComponent as v, getCurrentInstance as T, computed as w, createElementBlock as u, createCommentVNode as c, openBlock as f, createElementVNode as n, normalizeClass as o, unref as d, toDisplayString as i } from "vue";
import { u as C } from "./sizes-tLhbz8lD.js";
import { _ as S } from "./index-BBxT1jPI.js";
const k = {
  key: 0,
  class: "is-flex is-flex-wrap-nowrap is-justify-content-flex-start is-align-items-center"
}, b = /* @__PURE__ */ v({
  __name: "pagination",
  props: {
    pager: {},
    firstText: { default: "First" },
    nextText: { default: "Next" },
    previousText: { default: "Previous" },
    lastText: { default: "Last" },
    showInfo: { type: Boolean, default: !0 },
    infoText: { default: "Total: {total}" },
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
    const s = T(), p = (s == null ? void 0 : s.appContext.app.config.globalProperties.$router) || null, a = e, g = C(a), m = w(() => a.infoText.replace("{from}", String(a.pager.from)).replace("{to}", String(a.pager.to)).replace("{total}", String(a.pager.total)).replace("{current_page}", String(a.pager.current_page)).replace("{last_page}", String(a.pager.last_page)).replace("{per_page}", String(a.pager.per_page))), r = (l) => {
      if (l)
        if (p) {
          const t = new URL(l, window.location.origin);
          p.push({
            path: t.pathname,
            query: Object.fromEntries(t.searchParams)
          });
        } else
          window.location.href = l;
    }, x = () => {
      a.pager.current_page !== 1 && r(a.pager.first_page_url);
    }, y = () => {
      a.pager.current_page !== a.pager.last_page && r(a.pager.last_page_url);
    };
    return (l, t) => e.pager.total > 0 ? (f(), u("div", k, [
      n("nav", {
        class: o(["pagination", d(g)]),
        role: "navigation",
        "aria-label": "pagination"
      }, [
        n("a", {
          onClick: x,
          class: o(["pagination-previous", {
            "is-disabled": !e.pager.first_page_url || e.pager.current_page === 1
          }])
        }, i(e.firstText), 3),
        n("a", {
          class: o([{
            "is-disabled": !e.pager.prev_page_url
          }, "pagination-previous"]),
          onClick: t[0] || (t[0] = (B) => r(e.pager.prev_page_url))
        }, i(e.previousText), 3),
        n("a", {
          class: o([{
            "is-disabled": !e.pager.next_page_url
          }, "pagination-next"]),
          onClick: t[1] || (t[1] = (B) => r(e.pager.next_page_url))
        }, i(e.nextText), 3),
        n("a", {
          onClick: y,
          class: o(["pagination-next", {
            "is-disabled": !e.pager.last_page_url || e.pager.current_page === e.pager.last_page
          }])
        }, i(e.lastText), 3),
        e.showInfo ? (f(), u("span", {
          key: 0,
          class: o(["pagination-info ml-2", d(g)])
        }, i(m.value), 3)) : c("", !0)
      ], 2)
    ])) : c("", !0);
  }
}), E = /* @__PURE__ */ S(b, [["__scopeId", "data-v-974656a7"]]);
export {
  E as default
};
