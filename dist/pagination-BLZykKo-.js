import { defineComponent as u, resolveComponent as y, createElementBlock as B, openBlock as o, normalizeClass as g, unref as m, createBlock as t, createCommentVNode as n, withCtx as p, createTextVNode as i, toDisplayString as s } from "vue";
import { u as c } from "./sizes-tLhbz8lD.js";
const x = /* @__PURE__ */ u({
  __name: "pagination",
  props: {
    pager: {},
    nextText: { default: "Next" },
    previousText: { default: "Previous" },
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
    const r = c(l);
    return (e, d) => {
      const a = y("router-link");
      return o(), B("nav", {
        class: g(["pagination", m(r)]),
        role: "navigation",
        "aria-label": "pagination"
      }, [
        e.pager.prev_page_url ? (o(), t(a, {
          key: 0,
          to: e.pager.prev_page_url,
          class: "pagination-previous"
        }, {
          default: p(() => [
            i(s(e.previousText), 1)
          ]),
          _: 1
        }, 8, ["to"])) : n("", !0),
        e.pager.next_page_url ? (o(), t(a, {
          key: 1,
          to: e.pager.next_page_url,
          class: "pagination-next"
        }, {
          default: p(() => [
            i(s(e.nextText), 1)
          ]),
          _: 1
        }, 8, ["to"])) : n("", !0)
      ], 2);
    };
  }
});
export {
  x as default
};
