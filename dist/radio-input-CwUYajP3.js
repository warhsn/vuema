import { defineComponent as y, resolveComponent as u, openBlock as n, createElementBlock as l, createVNode as B, withCtx as m, renderSlot as f, createElementVNode as a, Fragment as _, renderList as h, unref as b, createTextVNode as g, toDisplayString as k } from "vue";
import { _ as C } from "./strings-EXVz6iyo.js";
const I = { class: "radios" }, N = ["onClick"], V = ["checked", "name", "disabled"], v = "update:modelValue", E = /* @__PURE__ */ y({
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
  setup(S, { emit: i }) {
    const s = i;
    function p(e, t) {
      t || s(v, e);
    }
    const r = C();
    return (e, t) => {
      const d = u("field-label");
      return n(), l("div", null, [
        B(d, { required: e.required }, {
          default: m(() => [
            f(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        a("div", I, [
          (n(!0), l(_, null, h(e.items, (o, c) => (n(), l("label", {
            onClick: (q) => p(o.id, o.disabled ?? !1),
            class: "radio",
            key: c
          }, [
            a("input", {
              type: "radio",
              checked: o.id === e.modelValue,
              name: b(r),
              disabled: o.disabled
            }, null, 8, V),
            g(" " + k(o.label), 1)
          ], 8, N))), 128))
        ])
      ]);
    };
  }
});
export {
  E as default
};