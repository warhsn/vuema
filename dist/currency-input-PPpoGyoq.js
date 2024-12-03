import { defineComponent as u, resolveComponent as n, openBlock as y, createElementBlock as m, createVNode as a, unref as B, withCtx as o, createTextVNode as f, toDisplayString as h, renderSlot as l } from "vue";
import { _ as b } from "./errors-BZdmzG52.js";
const E = "update:modelValue", v = /* @__PURE__ */ u({
  __name: "currency-input",
  props: {
    modelValue: {},
    currency: { default: "$" },
    options: {},
    min: {},
    max: {},
    decimals: { default: 2 },
    classes: {},
    disabled: { type: Boolean },
    forLabel: {},
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
    hasAddons: { type: Boolean, default: !0 },
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
  setup(s, { emit: t }) {
    const r = t, i = b(s);
    function p(e) {
      console.log("JERE"), r(E, e);
    }
    return (e, V) => {
      const d = n("action-button"), c = n("number-input");
      return y(), m("div", null, [
        a(c, {
          required: e.required,
          "has-addons": e.hasAddons,
          "left-icon": e.leftIcon,
          errors: e.error,
          "has-errors": B(i),
          disabled: e.disabled,
          placeholder: e.placeholder,
          decimals: e.decimals,
          value: e.modelValue,
          "is-expanded": e.isExpanded,
          "onUpdate:modelValue": p
        }, {
          left: o(() => [
            a(d, { class: "is-static" }, {
              default: o(() => [
                f(h(e.currency), 1)
              ]),
              _: 1
            })
          ]),
          description: o(() => [
            l(e.$slots, "description")
          ]),
          default: o(() => [
            l(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required", "has-addons", "left-icon", "errors", "has-errors", "disabled", "placeholder", "decimals", "value", "is-expanded"])
      ]);
    };
  }
});
export {
  v as default
};
