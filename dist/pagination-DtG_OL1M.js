import { defineComponent as B, resolveComponent as y, createElementBlock as u, openBlock as a, normalizeClass as g, unref as m, createBlock as n, createCommentVNode as p, withCtx as i, createTextVNode as s } from "vue";
import { u as _ } from "./sizes-tLhbz8lD.js";
const c = /* @__PURE__ */ B({
  __name: "pagination",
  props: {
    pager: {},
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
    const r = _(l);
    return (e, o) => {
      const t = y("router-link");
      return a(), u("nav", {
        class: g(["pagination", m(r)]),
        role: "navigation",
        "aria-label": "pagination"
      }, [
        e.pager.prev_page_url ? (a(), n(t, {
          key: 0,
          to: e.pager.prev_page_url,
          class: "pagination-previous"
        }, {
          default: i(() => o[0] || (o[0] = [
            s("Previous")
          ])),
          _: 1,
          __: [0]
        }, 8, ["to"])) : p("", !0),
        e.pager.next_page_url ? (a(), n(t, {
          key: 1,
          to: e.pager.next_page_url,
          class: "pagination-next"
        }, {
          default: i(() => o[1] || (o[1] = [
            s("Next page")
          ])),
          _: 1,
          __: [1]
        }, 8, ["to"])) : p("", !0)
      ], 2);
    };
  }
});
export {
  c as default
};
