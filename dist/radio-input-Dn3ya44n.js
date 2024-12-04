import { defineComponent as c, resolveComponent as y, openBlock as n, createElementBlock as t, createVNode as u, withCtx as B, renderSlot as m, createElementVNode as l, Fragment as _, renderList as f, unref as b, createTextVNode as h, toDisplayString as k } from "vue";
import { _ as g } from "./strings-EXVz6iyo.js";
const N = { class: "radios" }, C = ["onClick"], V = ["checked", "name", "disabled"], I = "update:modelValue", T = /* @__PURE__ */ c({
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
    isExpanded: { type: Boolean },
    autocomplete: { type: Boolean },
    icon: {},
    iconType: {},
    iconPack: {},
    textIcon: { type: Boolean },
    leftIcon: {},
    iconClasses: {},
    leftIconType: {},
    rightIcon: {},
    error: {},
    hasAddons: { type: Boolean },
    isSmall: { type: Boolean },
    isMedium: { type: Boolean },
    isLarge: { type: Boolean },
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
    is12: { type: Boolean },
    isNarrow: { type: Boolean }
  },
  setup(S, { emit: a }) {
    const i = a;
    function s(e) {
      i(I, e);
    }
    const r = g();
    return (e, q) => {
      const d = y("field-label");
      return n(), t("div", null, [
        u(d, { required: e.required }, {
          default: B(() => [
            m(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        l("div", N, [
          (n(!0), t(_, null, f(e.items, (o, p) => (n(), t("label", {
            onClick: (v) => s(o.id),
            class: "radio",
            key: p
          }, [
            l("input", {
              type: "radio",
              checked: o.id === e.modelValue,
              name: b(r),
              disabled: o.disabled
            }, null, 8, V),
            h(" " + k(o.label), 1)
          ], 8, C))), 128))
        ])
      ]);
    };
  }
});
export {
  T as default
};
