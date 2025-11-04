import { defineComponent as x, ref as B, resolveComponent as a, createElementBlock as s, openBlock as o, createElementVNode as l, createBlock as I, renderSlot as v, Teleport as T, createVNode as i, Transition as h, withCtx as c, createCommentVNode as u, normalizeClass as d, toDisplayString as A, createTextVNode as N } from "vue";
const V = { class: "modal-wrapper modal-content" }, w = { class: "box is-clipped" }, _ = {
  key: 0,
  class: "is-size-4 has-text-weight-bold mb-4 is-flex is-align-items-center"
}, $ = {
  key: 0,
  class: "icon mr-2"
}, D = /* @__PURE__ */ x({
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
  setup(t, { expose: g, emit: z }) {
    const r = t, e = B(!1);
    function m() {
      e.value = !1;
    }
    function p() {
      e.value = !0;
    }
    function k() {
      e.value = !e.value;
    }
    return g({
      open: p,
      close: m,
      toggle: k
    }), (f, n) => {
      const C = a("b-icon"), b = a("action-button"), y = a("buttons");
      return o(), s("div", null, [
        l("div", {
          class: "is-inline-block",
          onClick: n[0] || (n[0] = (E) => e.value = !e.value)
        }, [
          v(f.$slots, "trigger")
        ]),
        (o(), I(T, {
          to: r.to
        }, [
          i(h, {
            name: r.transition,
            mode: "in-out"
          }, {
            default: c(() => [
              e.value ? (o(), s("div", {
                key: 0,
                class: d(["modal", {
                  "is-active": e.value
                }])
              }, [
                n[2] || (n[2] = l("div", { class: "modal-background" }, null, -1)),
                l("div", V, [
                  l("div", w, [
                    t.title ? (o(), s("p", _, [
                      t.titleIcon ? (o(), s("span", $, [
                        i(C, {
                          icon: t.titleIcon,
                          "icon-type": t.titleIconType,
                          class: d(["mr-1", t.titleIconClass])
                        }, null, 8, ["icon", "icon-type", "class"])
                      ])) : u("", !0),
                      l("span", null, A(t.title), 1)
                    ])) : u("", !0),
                    v(f.$slots, "default"),
                    i(y, {
                      class: "mt-4",
                      align: t.controlAlignment
                    }, {
                      default: c(() => [
                        i(b, {
                          onClick: m,
                          class: d(t.okButtonClass)
                        }, {
                          default: c(() => [...n[1] || (n[1] = [
                            N(" Okay ", -1)
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
  D as default
};
