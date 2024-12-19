import { defineComponent as c, resolveComponent as y, openBlock as n, createElementBlock as t, createVNode as u, withCtx as B, renderSlot as m, createElementVNode as l, Fragment as _, renderList as f, unref as h, createTextVNode as b, toDisplayString as k } from "vue";
import { _ as g } from "./strings-EXVz6iyo.js";
const N = { class: "radios" }, C = ["onClick"], V = ["checked", "name", "disabled"], v = "update:modelValue", T = /* @__PURE__ */ c({
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
    leftIconType: {},
    rightIcon: {},
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
  setup(I, { emit: a }) {
    const i = a;
    function s(e) {
      i(v, e);
    }
    const p = g();
    return (e, S) => {
      const r = y("field-label");
      return n(), t("div", null, [
        u(r, { required: e.required }, {
          default: B(() => [
            m(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        l("div", N, [
          (n(!0), t(_, null, f(e.items, (o, d) => (n(), t("label", {
            onClick: (q) => s(o.id),
            class: "radio",
            key: d
          }, [
            l("input", {
              type: "radio",
              checked: o.id === e.modelValue,
              name: h(p),
              disabled: o.disabled
            }, null, 8, V),
            b(" " + k(o.label), 1)
          ], 8, C))), 128))
        ])
      ]);
    };
  }
});
export {
  T as default
};
