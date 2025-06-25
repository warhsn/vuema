import { defineComponent as y, resolveComponent as t, createBlock as B, openBlock as f, mergeProps as h, unref as s, createSlots as b, withCtx as o, renderSlot as l, createCommentVNode as I, createVNode as V, normalizeClass as C, createTextVNode as g, toDisplayString as k } from "vue";
import { _ as N } from "./errors-BZdmzG52.js";
import { u as S } from "./sizes-tLhbz8lD.js";
const $ = "update:modelValue", z = /* @__PURE__ */ y({
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
    hasAddons: { type: Boolean, default: !0 },
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
  setup(i, { emit: r }) {
    const p = r, n = i, a = S(n), d = N(n);
    function c(e) {
      p($, e);
    }
    return (e, q) => {
      const u = t("action-button"), m = t("number-input");
      return f(), B(m, h({
        required: e.required,
        "has-addons": e.hasAddons,
        "left-icon": e.leftIcon,
        errors: e.error,
        "has-errors": s(d),
        disabled: e.disabled,
        placeholder: e.placeholder,
        decimals: e.decimals,
        modelValue: e.modelValue,
        "is-expanded": e.isExpanded
      }, s(a), { "onUpdate:modelValue": c }), b({
        left: o(() => [
          V(u, {
            class: C(["is-static", s(a)])
          }, {
            default: o(() => [
              g(k(e.currency), 1)
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        default: o(() => [
          e.$slots.default ? l(e.$slots, "default", { key: 0 }) : I("", !0)
        ]),
        _: 2
      }, [
        e.$slots.description ? {
          name: "description",
          fn: o(() => [
            l(e.$slots, "description")
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["required", "has-addons", "left-icon", "errors", "has-errors", "disabled", "placeholder", "decimals", "modelValue", "is-expanded"]);
    };
  }
});
export {
  z as default
};
