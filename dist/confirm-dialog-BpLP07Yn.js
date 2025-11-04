import { defineComponent as N, ref as V, resolveComponent as u, createElementBlock as c, openBlock as n, createElementVNode as l, createBlock as w, renderSlot as k, Teleport as $, createVNode as o, Transition as z, withCtx as s, createCommentVNode as d, normalizeClass as m, toDisplayString as f, createTextVNode as y } from "vue";
const E = { class: "modal-wrapper modal-content" }, S = { class: "box is-clipped" }, D = {
  key: 0,
  class: "is-size-4 has-text-weight-bold mb-4 is-flex is-align-items-center"
}, P = {
  key: 0,
  class: "icon mr-2"
}, F = /* @__PURE__ */ N({
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
  setup(t, { expose: x, emit: B }) {
    const i = t, e = V(!1), r = B;
    function v() {
      e.value = !1, r("cancel");
    }
    function g() {
      e.value = !1, r("confirm");
    }
    function T() {
      e.value = !0;
    }
    function p() {
      e.value = !1;
    }
    function I() {
      e.value = !e.value;
    }
    return x({
      open: T,
      close: p,
      cancel: v,
      confirm: g,
      toggle: I
    }), (C, a) => {
      const h = u("b-icon"), b = u("action-button"), A = u("buttons");
      return n(), c("div", null, [
        l("div", {
          class: "is-inline-block",
          onClick: a[0] || (a[0] = (j) => e.value = !e.value)
        }, [
          k(C.$slots, "trigger")
        ]),
        (n(), w($, {
          to: i.to
        }, [
          o(z, {
            name: i.transition,
            mode: "in-out"
          }, {
            default: s(() => [
              e.value || t.confirming ? (n(), c("div", {
                key: 0,
                class: m(["modal", {
                  "is-active": e.value || t.confirming
                }])
              }, [
                a[1] || (a[1] = l("div", { class: "modal-background" }, null, -1)),
                l("div", E, [
                  l("div", S, [
                    t.title ? (n(), c("p", D, [
                      t.titleIcon ? (n(), c("span", P, [
                        o(h, {
                          icon: t.titleIcon,
                          "icon-type": t.titleIconType,
                          class: m(["mr-1", t.titleIconClass])
                        }, null, 8, ["icon", "icon-type", "class"])
                      ])) : d("", !0),
                      l("span", null, f(t.title), 1)
                    ])) : d("", !0),
                    k(C.$slots, "default"),
                    o(A, {
                      class: "mt-4",
                      align: t.controlAlignment
                    }, {
                      default: s(() => [
                        o(b, {
                          class: "is-small",
                          onClick: v
                        }, {
                          default: s(() => [
                            y(f(i.cancelText), 1)
                          ]),
                          _: 1
                        }),
                        o(b, {
                          loading: t.confirming,
                          onClick: g,
                          class: m(t.confirmButtonClass)
                        }, {
                          default: s(() => [
                            y(f(i.confirmText), 1)
                          ]),
                          _: 1
                        }, 8, ["loading", "class"])
                      ]),
                      _: 1
                    }, 8, ["align"])
                  ])
                ])
              ], 2)) : d("", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 8, ["to"]))
      ]);
    };
  }
});
export {
  F as default
};
