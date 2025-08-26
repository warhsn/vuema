import { defineComponent as B, ref as w, resolveComponent as $, createElementBlock as s, openBlock as o, createElementVNode as n, createBlock as m, renderSlot as l, Teleport as g, createVNode as N, Transition as V, withCtx as p, createCommentVNode as t, normalizeClass as u, toDisplayString as D, createTextVNode as H } from "vue";
const T = {
  key: 0,
  class: "modal-card-head"
}, E = { class: "modal-card-title" }, F = { key: 0 }, S = {
  key: 1,
  class: "modal-card-body"
}, z = {
  key: 2,
  class: "modal-card-foot"
}, A = {
  key: 3,
  class: "box is-clipped"
}, q = /* @__PURE__ */ B({
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
  setup(C, { expose: f, emit: k }) {
    const r = C, a = w(!1), d = k, c = () => {
      a.value = !1, d("close");
    }, y = () => a.value = !0, v = () => {
      a.value = !1, d("close");
    }, b = () => {
      r.isDismissable && d("close");
    };
    return f({
      close: c,
      open: y
    }), (e, i) => {
      const h = $("action-button");
      return o(), s("div", null, [
        n("div", {
          class: "is-inline-block",
          onClick: i[0] || (i[0] = (M) => a.value = !a.value)
        }, [
          l(e.$slots, "trigger")
        ]),
        (o(), m(g, {
          to: r.to
        }, [
          N(V, {
            name: r.transition,
            mode: "in-out"
          }, {
            default: p(() => [
              a.value ? (o(), s("div", {
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
                  e.withHeader && e.isCard ? (o(), s("header", T, [
                    n("p", E, [
                      e.title ? (o(), s("span", F, D(e.title), 1)) : t("", !0),
                      l(e.$slots, "title")
                    ]),
                    e.isCloseable ? (o(), s("button", {
                      key: 0,
                      onClick: c,
                      class: "delete",
                      "aria-label": "close"
                    })) : t("", !0)
                  ])) : t("", !0),
                  e.isCard ? (o(), s("section", S, [
                    l(e.$slots, "default")
                  ])) : t("", !0),
                  e.withFooter && e.isCard ? (o(), s("footer", z, [
                    e.withCancel ? (o(), m(h, {
                      key: 0,
                      class: u(e.cancelButtonClasses),
                      onClick: v
                    }, {
                      default: p(() => [...i[1] || (i[1] = [
                        H(" Cancel ", -1)
                      ])]),
                      _: 1
                    }, 8, ["class"])) : t("", !0),
                    l(e.$slots, "footer")
                  ])) : t("", !0),
                  e.isCard ? t("", !0) : (o(), s("div", A, [
                    l(e.$slots, "default")
                  ])),
                  (!e.isCard || !e.withHeader) && e.isCloseable ? (o(), s("button", {
                    key: 4,
                    onClick: c,
                    class: "modal-close is-large",
                    "aria-label": "close"
                  })) : t("", !0)
                ], 2)
              ], 2)) : t("", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 8, ["to"]))
      ]);
    };
  }
});
export {
  q as default
};
