import { defineComponent as _, ref as I, resolveComponent as r, createElementBlock as a, openBlock as n, createElementVNode as o, createBlock as h, renderSlot as g, Teleport as A, createVNode as l, Transition as N, withCtx as c, createCommentVNode as u, normalizeClass as d, toDisplayString as m, createTextVNode as v } from "vue";
const V = { class: "modal-wrapper modal-content" }, w = { class: "box is-clipped" }, $ = {
  key: 0,
  class: "is-size-4 has-text-weight-bold mb-4 is-flex is-align-items-center"
}, z = {
  key: 0,
  class: "icon mr-2"
}, D = /* @__PURE__ */ _({
  __name: "confirm-dialog",
  props: {
    cancelText: { default: "Cancel" },
    confirmText: { default: "Proceed" },
    confirming: { type: Boolean, default: !1 },
    confirmButtonClass: { default: "is-success" },
    cancelButtonClass: {},
    controlAlignment: { default: "right" },
    title: {},
    titleIcon: { default: null },
    titleIconType: { default: null },
    titleIconClass: { default: "" },
    to: { default: "body" },
    transition: { default: "modal" },
    okButtonClass: {},
    isActive: { type: Boolean }
  },
  emits: ["cancel", "confirm"],
  setup(C, { emit: b }) {
    const i = C, t = I(!1), f = b;
    function k() {
      t.value = !1, f("cancel");
    }
    function y() {
      t.value = !1, f("confirm");
    }
    return (e, s) => {
      const B = r("b-icon"), p = r("action-button"), T = r("buttons");
      return n(), a("div", null, [
        o("div", {
          class: "is-inline-block",
          onClick: s[0] || (s[0] = (E) => t.value = !t.value)
        }, [
          g(e.$slots, "trigger")
        ]),
        (n(), h(A, {
          to: i.to
        }, [
          l(N, {
            name: i.transition,
            mode: "in-out"
          }, {
            default: c(() => [
              t.value || e.confirming ? (n(), a("div", {
                key: 0,
                class: d(["modal", {
                  "is-active": t.value || e.confirming
                }])
              }, [
                s[1] || (s[1] = o("div", { class: "modal-background" }, null, -1)),
                o("div", V, [
                  o("div", w, [
                    e.title ? (n(), a("p", $, [
                      e.titleIcon ? (n(), a("span", z, [
                        l(B, {
                          icon: e.titleIcon,
                          "icon-type": e.titleIconType,
                          class: d(["mr-1", e.titleIconClass])
                        }, null, 8, ["icon", "icon-type", "class"])
                      ])) : u("", !0),
                      o("span", null, m(e.title), 1)
                    ])) : u("", !0),
                    g(e.$slots, "default"),
                    l(T, {
                      class: "mt-4",
                      align: e.controlAlignment
                    }, {
                      default: c(() => [
                        l(p, {
                          class: "is-small",
                          onClick: k
                        }, {
                          default: c(() => [
                            v(m(i.cancelText), 1)
                          ]),
                          _: 1
                        }),
                        l(p, {
                          loading: e.confirming,
                          onClick: y,
                          class: d(e.confirmButtonClass)
                        }, {
                          default: c(() => [
                            v(m(i.confirmText), 1)
                          ]),
                          _: 1
                        }, 8, ["loading", "class"])
                      ]),
                      _: 1
                    }, 8, ["align"])
                  ])
                ])
              ], 2)) : u("", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 8, ["to"]))
      ]);
    };
  }
});
export {
  D as default
};
