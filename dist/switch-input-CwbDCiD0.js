import { defineComponent as y, resolveComponent as B, openBlock as m, createElementBlock as f, createVNode as i, unref as n, withCtx as l, renderSlot as t, createElementVNode as s, mergeProps as h } from "vue";
import { _ as b } from "./strings-EXVz6iyo.js";
const _ = { class: "field" }, g = ["id", "name", "checked"], I = "update:modelValue", N = /* @__PURE__ */ y({
  __name: "switch-input",
  props: {
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
  setup(r, { emit: p }) {
    const d = r, c = p;
    function u() {
      c(I, !d.modelValue);
    }
    const o = b();
    return (e, k) => {
      const a = B("field-label");
      return m(), f("div", null, [
        i(a, {
          for: n(o),
          required: e.required
        }, {
          description: l(() => [
            t(e.$slots, "description")
          ]),
          default: l(() => [
            t(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["for", "required"]),
        s("div", _, [
          s("input", h({
            onClick: u,
            id: n(o),
            type: "checkbox",
            name: n(o),
            checked: e.modelValue === !0
          }, { disabled: e.disabled }, {
            class: [e.classes, "switch"]
          }), null, 16, g),
          i(a, {
            for: n(o),
            required: e.required
          }, {
            default: l(() => [
              t(e.$slots, "inner-label")
            ]),
            _: 3
          }, 8, ["for", "required"])
        ])
      ]);
    };
  }
});
export {
  N as default
};
