import { defineComponent as C, ref as _, resolveComponent as a, createElementBlock as s, openBlock as n, createElementVNode as l, createBlock as b, renderSlot as m, Teleport as y, createVNode as i, Transition as B, withCtx as c, createCommentVNode as r, normalizeClass as u, toDisplayString as I, createTextVNode as T } from "vue";
const h = { class: "modal-wrapper modal-content" }, A = { class: "box is-clipped" }, N = {
  key: 0,
  class: "is-size-4 has-text-weight-bold mb-4 is-flex is-align-items-center"
}, V = {
  key: 0,
  class: "icon mr-2"
}, E = /* @__PURE__ */ C({
  __name: "alert-dialog",
  props: {
    cancelText: {},
    confirmText: {},
    confirming: { type: Boolean },
    confirmButtonClass: {},
    cancelButtonClass: {},
    controlAlignment: { default: "right" },
    title: {},
    titleIcon: { default: null },
    titleIconType: { default: null },
    titleIconClass: { default: "has-text-danger" },
    to: { default: "body" },
    transition: { default: "modal" },
    okButtonClass: { default: "is-success" },
    isActive: { type: Boolean }
  },
  emits: ["close"],
  setup(p, { emit: w }) {
    const d = p, o = _(!1);
    function f() {
      o.value = !1;
    }
    return (t, e) => {
      const v = a("b-icon"), g = a("action-button"), k = a("buttons");
      return n(), s("div", null, [
        l("div", {
          class: "is-inline-block",
          onClick: e[0] || (e[0] = ($) => o.value = !o.value)
        }, [
          m(t.$slots, "trigger")
        ]),
        (n(), b(y, {
          to: d.to
        }, [
          i(B, {
            name: d.transition,
            mode: "in-out"
          }, {
            default: c(() => [
              o.value ? (n(), s("div", {
                key: 0,
                class: u(["modal", {
                  "is-active": o.value
                }])
              }, [
                e[2] || (e[2] = l("div", { class: "modal-background" }, null, -1)),
                l("div", h, [
                  l("div", A, [
                    t.title ? (n(), s("p", N, [
                      t.titleIcon ? (n(), s("span", V, [
                        i(v, {
                          icon: t.titleIcon,
                          "icon-type": t.titleIconType,
                          class: u(["mr-1", t.titleIconClass])
                        }, null, 8, ["icon", "icon-type", "class"])
                      ])) : r("", !0),
                      l("span", null, I(t.title), 1)
                    ])) : r("", !0),
                    m(t.$slots, "default"),
                    i(k, {
                      class: "mt-4",
                      align: t.controlAlignment
                    }, {
                      default: c(() => [
                        i(g, {
                          onClick: f,
                          class: u(t.okButtonClass)
                        }, {
                          default: c(() => e[1] || (e[1] = [
                            T(" Okay ", -1)
                          ])),
                          _: 1,
                          __: [1]
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }, 8, ["align"])
                  ])
                ])
              ], 2)) : r("", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 8, ["to"]))
      ]);
    };
  }
});
export {
  E as default
};
