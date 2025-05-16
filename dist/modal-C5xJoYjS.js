import { defineComponent as h, ref as B, resolveComponent as w, createElementBlock as t, openBlock as o, createElementVNode as n, createBlock as m, renderSlot as l, Teleport as $, createVNode as g, Transition as N, withCtx as f, createCommentVNode as s, normalizeClass as u, toDisplayString as V, createTextVNode as D } from "vue";
const H = {
  key: 0,
  class: "modal-card-head"
}, T = { class: "modal-card-title" }, E = { key: 0 }, F = {
  key: 1,
  class: "modal-card-body"
}, S = {
  key: 2,
  class: "modal-card-foot"
}, z = {
  key: 3,
  class: "box is-clipped"
}, j = /* @__PURE__ */ h({
  __name: "modal",
  props: {
    withCancel: { type: Boolean },
    withHeader: { type: Boolean, default: !0 },
    withFooter: { type: Boolean, default: !0 },
    title: {},
    isDismissable: { type: Boolean, default: !1 },
    isCloseable: { type: Boolean, default: !0 },
    isCard: { type: Boolean, default: !0 },
    to: { default: "body" },
    transition: { default: "modal" },
    cancelButtonClasses: {},
    transistionName: {},
    transitionMode: {}
  },
  emits: ["close"],
  setup(p, { expose: C, emit: k }) {
    const r = p, a = B(!1), d = k;
    function c() {
      a.value = !1, d("close");
    }
    function y() {
      a.value = !1, d("close");
    }
    function b() {
      r.isDismissable && d("close");
    }
    return C({
      close: c
    }), (e, i) => {
      const v = w("action-button");
      return o(), t("div", null, [
        n("div", {
          class: "is-inline-block",
          onClick: i[0] || (i[0] = (A) => a.value = !a.value)
        }, [
          l(e.$slots, "trigger")
        ]),
        (o(), m($, {
          to: r.to
        }, [
          g(N, {
            name: r.transition,
            mode: "in-out"
          }, {
            default: f(() => [
              a.value ? (o(), t("div", {
                key: 0,
                class: u(["modal", {
                  "is-active": a.value
                }])
              }, [
                n("div", {
                  onClick: b,
                  class: "modal-background"
                }),
                n("div", {
                  class: u(["modal-wrapper", {
                    "modal-card": e.isCard,
                    "modal-content": !e.isCard
                  }])
                }, [
                  e.withHeader && e.isCard ? (o(), t("header", H, [
                    n("p", T, [
                      e.title ? (o(), t("span", E, V(e.title), 1)) : s("", !0),
                      l(e.$slots, "title")
                    ]),
                    e.isCloseable ? (o(), t("button", {
                      key: 0,
                      onClick: c,
                      class: "delete",
                      "aria-label": "close"
                    })) : s("", !0)
                  ])) : s("", !0),
                  e.isCard ? (o(), t("section", F, [
                    l(e.$slots, "default")
                  ])) : s("", !0),
                  e.withFooter && e.isCard ? (o(), t("footer", S, [
                    e.withCancel ? (o(), m(v, {
                      key: 0,
                      class: u(e.cancelButtonClasses),
                      onClick: y
                    }, {
                      default: f(() => i[1] || (i[1] = [
                        D(" Cancel ")
                      ])),
                      _: 1,
                      __: [1]
                    }, 8, ["class"])) : s("", !0),
                    l(e.$slots, "footer")
                  ])) : s("", !0),
                  e.isCard ? s("", !0) : (o(), t("div", z, [
                    l(e.$slots, "default")
                  ])),
                  (!e.isCard || !e.withHeader) && e.isCloseable ? (o(), t("button", {
                    key: 4,
                    onClick: c,
                    class: "modal-close is-large",
                    "aria-label": "close"
                  })) : s("", !0)
                ], 2)
              ], 2)) : s("", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 8, ["to"]))
      ]);
    };
  }
});
export {
  j as default
};
