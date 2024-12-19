import { defineComponent as c, resolveComponent as y, openBlock as n, createElementBlock as t, createVNode as u, withCtx as B, renderSlot as m, createElementVNode as l, Fragment as f, renderList as _, unref as h, createTextVNode as b, toDisplayString as g } from "vue";
import { _ as k } from "./strings-EXVz6iyo.js";
const C = { class: "radios" }, I = ["onClick"], N = ["checked", "name", "disabled"], V = "update:modelValue", E = /* @__PURE__ */ c({
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
  setup(v, { emit: a }) {
    const i = a;
    function s(e) {
      i(V, e);
    }
    const p = k();
    return (e, S) => {
      const r = y("field-label");
      return n(), t("div", null, [
        u(r, { required: e.required }, {
          default: B(() => [
            m(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        l("div", C, [
          (n(!0), t(f, null, _(e.items, (o, d) => (n(), t("label", {
            onClick: (q) => s(o.id),
            class: "radio",
            key: d
          }, [
            l("input", {
              type: "radio",
              checked: o.id === e.modelValue,
              name: h(p),
              disabled: o.disabled
            }, null, 8, N),
            b(" " + g(o.label), 1)
          ], 8, I))), 128))
        ])
      ]);
    };
  }
});
export {
  E as default
};
