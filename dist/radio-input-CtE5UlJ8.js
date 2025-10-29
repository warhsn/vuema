import { defineComponent as u, resolveComponent as B, createElementBlock as t, openBlock as l, createVNode as m, createElementVNode as i, withCtx as f, renderSlot as h, Fragment as _, renderList as b, createTextVNode as g, unref as k, toDisplayString as C } from "vue";
import { _ as I } from "./strings-EXVz6iyo.js";
const N = { class: "radios" }, V = ["onClick"], v = ["checked", "name", "disabled"], x = "update:modelValue", T = /* @__PURE__ */ u({
  __name: "radio-input",
  props: {
    items: {},
    classes: {},
    disabled: { type: Boolean },
    forLabel: {},
    modelValue: { type: [Boolean, Number, String, Array, Date] },
    placeholder: {},
    required: { type: Boolean },
    isLoading: { type: Boolean },
    isRounded: { type: Boolean },
    autocomplete: { type: Boolean },
    icon: {},
    iconType: {},
    iconPack: {},
    textIcon: { type: Boolean },
    leftIcon: {},
    iconClasses: {},
    leftIconClass: {},
    leftIconType: {},
    rightIconClass: {},
    rightIcon: {},
    rightIconType: {},
    error: {},
    hasAddons: { type: Boolean },
    isNormal: { type: Boolean },
    isSmall: { type: Boolean },
    isMedium: { type: Boolean },
    isLarge: { type: Boolean },
    isResponsive: { type: Boolean },
    isExpanded: { type: Boolean },
    isFullwidth: { type: Boolean },
    is0: { type: Boolean },
    is1: { type: Boolean },
    is2: { type: Boolean },
    is3: { type: Boolean },
    is4: { type: Boolean },
    is5: { type: Boolean },
    is6: { type: Boolean },
    is7: { type: Boolean },
    is8: { type: Boolean },
    is9: { type: Boolean },
    is10: { type: Boolean },
    is11: { type: Boolean },
    is12: { type: Boolean }
  },
  setup(o, { emit: s }) {
    const d = s;
    function r(n, a) {
      a || d(x, n);
    }
    const p = I();
    return (n, a) => {
      const c = B("field-label");
      return l(), t("div", null, [
        m(c, { required: o.required }, {
          default: f(() => [
            h(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        i("div", N, [
          (l(!0), t(_, null, b(o.items, (e, y) => (l(), t("label", {
            onClick: (S) => r(e.id, e.disabled ?? !1),
            class: "radio",
            key: y
          }, [
            i("input", {
              type: "radio",
              checked: e.id === o.modelValue,
              name: k(p),
              disabled: e.disabled
            }, null, 8, v),
            g(" " + C(e.label), 1)
          ], 8, V))), 128))
        ])
      ]);
    };
  }
});
export {
  T as default
};
