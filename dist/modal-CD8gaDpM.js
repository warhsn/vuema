import { defineComponent as h, resolveComponent as b, openBlock as o, createBlock as r, Transition as v, withCtx as c, createElementBlock as s, normalizeClass as u, createElementVNode as i, toDisplayString as B, createCommentVNode as t, renderSlot as a, createTextVNode as w } from "vue";
import { _ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const N = {
  key: 0,
  class: "modal-card-head"
}, $ = { class: "modal-card-title" }, g = { key: 0 }, A = {
  key: 1,
  class: "modal-card-body"
}, D = {
  key: 2,
  class: "modal-card-foot"
}, H = {
  key: 3,
  class: "box is-clipped"
}, V = /* @__PURE__ */ h({
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
    const f = m, l = p;
    function d() {
      l("close");
    }
    function C() {
      l("close");
    }
    function y() {
      f.isDismisable && l("close");
    }
    return (e, n) => {
      const k = b("action-button");
      return o(), r(v, {
        name: "modal",
        mode: "in-out"
      }, {
        default: c(() => [
          e.isActive ? (o(), s("div", {
            key: 0,
            class: u(["modal", {
              "is-active": e.isActive
            }])
          }, [
            i("div", {
              onClick: y,
              class: "modal-background"
            }),
            i("div", {
              class: u(["modal-wrapper", {
                "modal-card": e.isCard,
                "modal-content": !e.isCard
              }])
            }, [
              e.withHeader && e.isCard ? (o(), s("header", N, [
                i("p", $, [
                  e.title ? (o(), s("span", g, B(e.title), 1)) : t("", !0),
                  a(e.$slots, "title", {}, void 0, !0)
                ]),
                e.isCloseable ? (o(), s("button", {
                  key: 0,
                  onClick: d,
                  class: "delete",
                  "aria-label": "close"
                })) : t("", !0)
              ])) : t("", !0),
              e.isCard ? (o(), s("section", A, [
                a(e.$slots, "default", {}, void 0, !0)
              ])) : t("", !0),
              e.withFooter && e.isCard ? (o(), s("footer", D, [
                e.withCancel ? (o(), r(k, {
                  key: 0,
                  onClick: C
                }, {
                  default: c(() => n[0] || (n[0] = [
                    w(" Cancel ")
                  ])),
                  _: 1
                })) : t("", !0),
                a(e.$slots, "footer", {}, void 0, !0)
              ])) : t("", !0),
              e.isCard ? t("", !0) : (o(), s("div", H, [
                a(e.$slots, "default", {}, void 0, !0)
              ])),
              (!e.isCard || !e.withHeader) && e.isCloseable ? (o(), s("button", {
                key: 4,
                onClick: d,
                class: "modal-close is-large",
                "aria-label": "close"
              })) : t("", !0)
            ], 2)
          ], 2)) : t("", !0)
        ]),
        _: 3
      });
    };
  }
}), S = /* @__PURE__ */ _(V, [["__scopeId", "data-v-ec83da24"]]);
export {
  S as default
};
