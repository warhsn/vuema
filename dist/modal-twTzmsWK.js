import { defineComponent as k, resolveComponent as v, openBlock as o, createBlock as r, Transition as b, withCtx as c, withDirectives as w, createElementVNode as a, normalizeClass as u, createElementBlock as s, toDisplayString as B, createCommentVNode as t, renderSlot as l, createTextVNode as _, vShow as D } from "vue";
import { _ as N } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const $ = {
  key: 0,
  class: "modal-card-head"
}, g = { class: "modal-card-title" }, A = { key: 0 }, H = {
  key: 1,
  class: "modal-card-body"
}, S = {
  key: 2,
  class: "modal-card-foot"
}, V = {
  key: 3,
  class: "box is-clipped"
}, E = /* @__PURE__ */ k({
  __name: "modal",
  props: {
    withCancel: { type: Boolean },
    withHeader: { type: Boolean, default: !0 },
    withFooter: { type: Boolean, default: !0 },
    title: {},
    isDismisable: { type: Boolean, default: !1 },
    isCloseable: { type: Boolean, default: !0 },
    isCard: { type: Boolean, default: !1 },
    transistionName: {},
    transitionMode: {},
    isActive: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(m, { emit: p }) {
    const f = m, i = p;
    function d() {
      i("close");
    }
    function C() {
      i("close");
    }
    function h() {
      f.isDismisable && i("close");
    }
    return (e, n) => {
      const y = v("action-button");
      return o(), r(b, { name: "modal" }, {
        default: c(() => [
          w(a("div", {
            class: u(["modal", {
              "is-active": e.isActive
            }])
          }, [
            a("div", {
              onClick: h,
              class: "modal-background"
            }),
            a("div", {
              class: u(["modal-wrapper", {
                "modal-card": e.isCard,
                "modal-content": !e.isCard
              }])
            }, [
              e.withHeader && e.isCard ? (o(), s("header", $, [
                a("p", g, [
                  e.title ? (o(), s("span", A, B(e.title), 1)) : t("", !0),
                  l(e.$slots, "title", {}, void 0, !0)
                ]),
                e.isCloseable ? (o(), s("button", {
                  key: 0,
                  onClick: d,
                  class: "delete",
                  "aria-label": "close"
                })) : t("", !0)
              ])) : t("", !0),
              e.isCard ? (o(), s("section", H, [
                l(e.$slots, "default", {}, void 0, !0)
              ])) : t("", !0),
              e.withFooter && e.isCard ? (o(), s("footer", S, [
                e.withCancel ? (o(), r(y, {
                  key: 0,
                  onClick: C
                }, {
                  default: c(() => n[0] || (n[0] = [
                    _(" Cancel ")
                  ])),
                  _: 1
                })) : t("", !0),
                l(e.$slots, "footer", {}, void 0, !0)
              ])) : t("", !0),
              e.isCard ? t("", !0) : (o(), s("div", V, [
                l(e.$slots, "default", {}, void 0, !0)
              ])),
              (!e.isCard || !e.withHeader) && e.isCloseable ? (o(), s("button", {
                key: 4,
                onClick: d,
                class: "modal-close is-large",
                "aria-label": "close"
              })) : t("", !0)
            ], 2)
          ], 2), [
            [D, e.isActive]
          ])
        ]),
        _: 3
      });
    };
  }
}), z = /* @__PURE__ */ N(E, [["__scopeId", "data-v-2054ee70"]]);
export {
  z as default
};
