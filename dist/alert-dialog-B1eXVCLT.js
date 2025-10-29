import { defineComponent as b, ref as p, resolveComponent as a, createElementBlock as s, openBlock as o, createElementVNode as l, createBlock as y, renderSlot as f, Teleport as B, createVNode as i, Transition as x, withCtx as c, createCommentVNode as u, normalizeClass as d, toDisplayString as I, createTextVNode as T } from "vue";
const h = { class: "modal-wrapper modal-content" }, A = { class: "box is-clipped" }, N = {
  key: 0,
  class: "is-size-4 has-text-weight-bold mb-4 is-flex is-align-items-center"
}, V = {
  key: 0,
  class: "icon mr-2"
}, z = /* @__PURE__ */ b({
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
  setup(t, { emit: w }) {
    const r = t, n = p(!1);
    function v() {
      n.value = !1;
    }
    return (m, e) => {
      const g = a("b-icon"), k = a("action-button"), C = a("buttons");
      return o(), s("div", null, [
        l("div", {
          class: "is-inline-block",
          onClick: e[0] || (e[0] = (_) => n.value = !n.value)
        }, [
          f(m.$slots, "trigger")
        ]),
        (o(), y(B, {
          to: r.to
        }, [
          i(x, {
            name: r.transition,
            mode: "in-out"
          }, {
            default: c(() => [
              n.value ? (o(), s("div", {
                key: 0,
                class: d(["modal", {
                  "is-active": n.value
                }])
              }, [
                e[2] || (e[2] = l("div", { class: "modal-background" }, null, -1)),
                l("div", h, [
                  l("div", A, [
                    t.title ? (o(), s("p", N, [
                      t.titleIcon ? (o(), s("span", V, [
                        i(g, {
                          icon: t.titleIcon,
                          "icon-type": t.titleIconType,
                          class: d(["mr-1", t.titleIconClass])
                        }, null, 8, ["icon", "icon-type", "class"])
                      ])) : u("", !0),
                      l("span", null, I(t.title), 1)
                    ])) : u("", !0),
                    f(m.$slots, "default"),
                    i(C, {
                      class: "mt-4",
                      align: t.controlAlignment
                    }, {
                      default: c(() => [
                        i(k, {
                          onClick: v,
                          class: d(t.okButtonClass)
                        }, {
                          default: c(() => [...e[1] || (e[1] = [
                            T(" Okay ", -1)
                          ])]),
                          _: 1
                        }, 8, ["class"])
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
  z as default
};
