import { defineComponent as l, resolveComponent as o, createElementBlock as i, openBlock as t, normalizeClass as s, createVNode as p, withCtx as u, createBlock as m, createCommentVNode as f, createElementVNode as _, renderSlot as d } from "vue";
const C = /* @__PURE__ */ l({
  __name: "tab",
  props: {
    routeName: {},
    routeParams: { default: () => ({}) },
    activeValue: {},
    icon: {},
    iconType: { default: "" },
    iconPack: { default: "" },
    textIcon: { type: Boolean },
    leftIcon: {},
    iconClasses: {},
    leftIconClass: {},
    leftIconType: {},
    rightIconClass: {},
    rightIcon: {},
    rightIconType: {}
  },
  setup(n) {
    const e = n;
    return (c, k) => {
      const a = o("b-icon"), r = o("router-link");
      return t(), i("li", {
        class: s({
          "is-active": e.routeName === e.activeValue
        })
      }, [
        p(r, {
          to: {
            name: e.routeName,
            params: e.routeParams
          }
        }, {
          default: u(() => [
            e.icon ? (t(), m(a, {
              key: 0,
              icon: e.icon,
              "icon-type": e.iconType,
              "icon-pack": e.iconPack
            }, null, 8, ["icon", "icon-type", "icon-pack"])) : f("", !0),
            _("span", null, [
              d(c.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["to"])
      ], 2);
    };
  }
});
export {
  C as default
};
