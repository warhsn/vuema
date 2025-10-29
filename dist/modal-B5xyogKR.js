import { defineComponent as w, ref as $, resolveComponent as g, createElementBlock as a, openBlock as t, createElementVNode as d, createBlock as C, renderSlot as i, Teleport as N, createVNode as V, Transition as D, withCtx as f, createCommentVNode as l, normalizeClass as m, toDisplayString as H, createTextVNode as T } from "vue";
const E = {
  key: 0,
  class: "modal-card-head"
}, F = { class: "modal-card-title" }, S = { key: 0 }, x = {
  key: 1,
  class: "modal-card-body"
}, z = {
  key: 2,
  class: "modal-card-foot"
}, A = {
  key: 3,
  class: "box is-clipped"
}, q = /* @__PURE__ */ w({
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
  setup(e, { expose: k, emit: y }) {
    const c = e, o = $(!1), r = y, u = () => {
      o.value = !1, r("close");
    }, v = () => o.value = !0, b = () => {
      o.value = !1, r("close");
    }, h = () => {
      c.isDismissable && r("close");
    };
    return k({
      close: u,
      open: v
    }), (s, n) => {
      const B = g("action-button");
      return t(), a("div", null, [
        d("div", {
          class: "is-inline-block",
          onClick: n[0] || (n[0] = (M) => o.value = !o.value)
        }, [
          i(s.$slots, "trigger")
        ]),
        (t(), C(N, {
          to: c.to
        }, [
          V(D, {
            name: c.transition,
            mode: "in-out"
          }, {
            default: f(() => [
              o.value ? (t(), a("div", {
                key: 0,
                class: m(["modal", {
                  "is-active": o.value
                }])
              }, [
                d("div", {
                  onClick: h,
                  class: "modal-background"
                }),
                d("div", {
                  class: m(["modal-wrapper", {
                    "modal-card": e.isCard,
                    "modal-content": !e.isCard
                  }])
                }, [
                  e.withHeader && e.isCard ? (t(), a("header", E, [
                    d("p", F, [
                      e.title ? (t(), a("span", S, H(e.title), 1)) : l("", !0),
                      i(s.$slots, "title")
                    ]),
                    e.isCloseable ? (t(), a("button", {
                      key: 0,
                      onClick: u,
                      class: "delete",
                      "aria-label": "close"
                    })) : l("", !0)
                  ])) : l("", !0),
                  e.isCard ? (t(), a("section", x, [
                    i(s.$slots, "default")
                  ])) : l("", !0),
                  e.withFooter && e.isCard ? (t(), a("footer", z, [
                    e.withCancel ? (t(), C(B, {
                      key: 0,
                      class: m(e.cancelButtonClasses),
                      onClick: b
                    }, {
                      default: f(() => [...n[1] || (n[1] = [
                        T(" Cancel ", -1)
                      ])]),
                      _: 1
                    }, 8, ["class"])) : l("", !0),
                    i(s.$slots, "footer")
                  ])) : l("", !0),
                  e.isCard ? l("", !0) : (t(), a("div", A, [
                    i(s.$slots, "default")
                  ])),
                  (!e.isCard || !e.withHeader) && e.isCloseable ? (t(), a("button", {
                    key: 4,
                    onClick: u,
                    class: "modal-close is-large",
                    "aria-label": "close"
                  })) : l("", !0)
                ], 2)
              ], 2)) : l("", !0)
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
