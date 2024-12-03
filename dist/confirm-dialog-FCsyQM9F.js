import { defineComponent as b, resolveComponent as o, openBlock as s, createBlock as y, Teleport as B, createVNode as t, withCtx as l, createElementBlock as a, normalizeClass as r, createCommentVNode as m, createElementVNode as k, toDisplayString as I, renderSlot as T, createTextVNode as f } from "vue";
const v = {
  key: 0,
  class: "is-size-4 has-text-weight-bold mb-4 is-flex is-align-items-center"
}, h = {
  key: 0,
  class: "icon mr-2"
}, V = /* @__PURE__ */ b({
  __name: "confirm-dialog",
  props: {
    cancelText: {},
    confirmText: {},
    confirming: { type: Boolean, default: !1 },
    confirmButtonClass: { default: "is-success" },
    cancelButtonClass: {},
    controlAlignment: { default: "right" },
    title: {},
    titleIcon: { default: null },
    titleIconType: { default: null },
    titleIconClass: { default: "has-text-danger" },
    isActive: { type: Boolean, default: !1 }
  },
  emits: ["cancel", "confirm"],
  setup(A, { emit: u }) {
    const i = u;
    function d() {
      i("cancel");
    }
    function p() {
      i("confirm");
    }
    return (e, n) => {
      const g = o("b-icon"), c = o("action-button"), C = o("buttons"), _ = o("modal");
      return s(), y(B, { to: "body" }, [
        t(_, {
          "is-closeable": !1,
          "is-active": e.isActive,
          "is-card": !1
        }, {
          default: l(() => [
            e.title ? (s(), a("p", v, [
              e.titleIcon ? (s(), a("span", h, [
                t(g, {
                  icon: e.titleIcon,
                  "icon-type": e.titleIconType,
                  class: r(["mr-1", e.titleIconClass])
                }, null, 8, ["icon", "icon-type", "class"])
              ])) : m("", !0),
              k("span", null, I(e.title), 1)
            ])) : m("", !0),
            T(e.$slots, "default"),
            t(C, {
              class: "mt-4",
              align: e.controlAlignment
            }, {
              default: l(() => [
                t(c, {
                  class: "is-small",
                  onClick: d
                }, {
                  default: l(() => n[0] || (n[0] = [
                    f(" Cancel ")
                  ])),
                  _: 1
                }),
                t(c, {
                  processing: e.confirming,
                  onClick: p,
                  class: r(e.confirmButtonClass)
                }, {
                  default: l(() => n[1] || (n[1] = [
                    f(" Proceed ")
                  ])),
                  _: 1
                }, 8, ["processing", "class"])
              ]),
              _: 1
            }, 8, ["align"])
          ]),
          _: 3
        }, 8, ["is-active"])
      ]);
    };
  }
});
export {
  V as default
};
