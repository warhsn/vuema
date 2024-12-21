import { defineComponent as b, ref as h, resolveComponent as B, openBlock as o, createElementBlock as t, createElementVNode as n, renderSlot as l, createBlock as m, Teleport as w, createVNode as $, Transition as g, withCtx as f, normalizeClass as c, toDisplayString as N, createCommentVNode as s, createTextVNode as V } from "vue";
const D = {
  key: 0,
  class: "modal-card-head"
}, H = { class: "modal-card-title" }, T = { key: 0 }, A = {
  key: 1,
  class: "modal-card-body"
}, E = {
  key: 2,
  class: "modal-card-foot"
}, F = {
  key: 3,
  class: "box is-clipped"
}, M = /* @__PURE__ */ b({
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
    transitionMode: {},
    isActive: { type: Boolean }
  },
  emits: ["close"],
  setup(p, { emit: C }) {
    const r = p, a = h(!1), d = C;
    function u() {
      a.value = !1, d("close");
    }
    function k() {
      a.value = !1, d("close");
    }
    function y() {
      r.isDismissable && d("close");
    }
    return (e, i) => {
      const v = B("action-button");
      return o(), t("div", null, [
        n("div", {
          class: "is-inline-block",
          onClick: i[0] || (i[0] = (S) => a.value = !a.value)
        }, [
          l(e.$slots, "trigger")
        ]),
        (o(), m(w, {
          to: r.to
        }, [
          $(g, {
            name: r.transition,
            mode: "in-out"
          }, {
            default: f(() => [
              a.value ? (o(), t("div", {
                key: 0,
                class: c(["modal", {
                  "is-active": a.value
                }])
              }, [
                n("div", {
                  onClick: y,
                  class: "modal-background"
                }),
                n("div", {
                  class: c(["modal-wrapper", {
                    "modal-card": e.isCard,
                    "modal-content": !e.isCard
                  }])
                }, [
                  e.withHeader && e.isCard ? (o(), t("header", D, [
                    n("p", H, [
                      e.title ? (o(), t("span", T, N(e.title), 1)) : s("", !0),
                      l(e.$slots, "title")
                    ]),
                    e.isCloseable ? (o(), t("button", {
                      key: 0,
                      onClick: u,
                      class: "delete",
                      "aria-label": "close"
                    })) : s("", !0)
                  ])) : s("", !0),
                  e.isCard ? (o(), t("section", A, [
                    l(e.$slots, "default")
                  ])) : s("", !0),
                  e.withFooter && e.isCard ? (o(), t("footer", E, [
                    e.withCancel ? (o(), m(v, {
                      key: 0,
                      class: c(e.cancelButtonClasses),
                      onClick: k
                    }, {
                      default: f(() => i[1] || (i[1] = [
                        V(" Cancel ")
                      ])),
                      _: 1
                    }, 8, ["class"])) : s("", !0),
                    l(e.$slots, "footer")
                  ])) : s("", !0),
                  e.isCard ? s("", !0) : (o(), t("div", F, [
                    l(e.$slots, "default")
                  ])),
                  (!e.isCard || !e.withHeader) && e.isCloseable ? (o(), t("button", {
                    key: 4,
                    onClick: u,
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
  M as default
};
