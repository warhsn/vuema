import { defineComponent as I, ref as p, resolveComponent as u, createElementBlock as a, openBlock as n, createElementVNode as l, createBlock as h, renderSlot as C, Teleport as A, createVNode as o, Transition as N, withCtx as s, createCommentVNode as d, normalizeClass as m, toDisplayString as r, createTextVNode as b } from "vue";
const V = { class: "modal-wrapper modal-content" }, w = { class: "box is-clipped" }, $ = {
  key: 0,
  class: "is-size-4 has-text-weight-bold mb-4 is-flex is-align-items-center"
}, z = {
  key: 0,
  class: "icon mr-2"
}, D = /* @__PURE__ */ I({
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
  setup(t, { emit: k }) {
    const i = t, e = p(!1), f = k;
    function y() {
      e.value = !1, f("cancel");
    }
    function x() {
      e.value = !1, f("confirm");
    }
    return (g, c) => {
      const B = u("b-icon"), v = u("action-button"), T = u("buttons");
      return n(), a("div", null, [
        l("div", {
          class: "is-inline-block",
          onClick: c[0] || (c[0] = (E) => e.value = !e.value)
        }, [
          C(g.$slots, "trigger")
        ]),
        (n(), h(A, {
          to: i.to
        }, [
          o(N, {
            name: i.transition,
            mode: "in-out"
          }, {
            default: s(() => [
              e.value || t.confirming ? (n(), a("div", {
                key: 0,
                class: m(["modal", {
                  "is-active": e.value || t.confirming
                }])
              }, [
                c[1] || (c[1] = l("div", { class: "modal-background" }, null, -1)),
                l("div", V, [
                  l("div", w, [
                    t.title ? (n(), a("p", $, [
                      t.titleIcon ? (n(), a("span", z, [
                        o(B, {
                          icon: t.titleIcon,
                          "icon-type": t.titleIconType,
                          class: m(["mr-1", t.titleIconClass])
                        }, null, 8, ["icon", "icon-type", "class"])
                      ])) : d("", !0),
                      l("span", null, r(t.title), 1)
                    ])) : d("", !0),
                    C(g.$slots, "default"),
                    o(T, {
                      class: "mt-4",
                      align: t.controlAlignment
                    }, {
                      default: s(() => [
                        o(v, {
                          class: "is-small",
                          onClick: y
                        }, {
                          default: s(() => [
                            b(r(i.cancelText), 1)
                          ]),
                          _: 1
                        }),
                        o(v, {
                          loading: t.confirming,
                          onClick: x,
                          class: m(t.confirmButtonClass)
                        }, {
                          default: s(() => [
                            b(r(i.confirmText), 1)
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
  D as default
};
