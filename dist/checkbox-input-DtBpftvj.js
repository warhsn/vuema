import { defineComponent as d, resolveComponent as y, openBlock as B, createElementBlock as u, createVNode as m, unref as n, withCtx as f, renderSlot as t, createElementVNode as a } from "vue";
import { _ as b } from "./strings-EXVz6iyo.js";
const h = ["for-label"], k = ["disabled", "name", "checked"], _ = "update:modelValue", N = /* @__PURE__ */ d({
  __name: "checkbox-input",
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
  setup(s, { emit: i }) {
    const p = s, r = i;
    function o() {
      r(_, !p.modelValue);
    }
    const l = b();
    return (e, C) => {
      const c = y("field-label");
      return B(), u("div", null, [
        m(c, {
          onClick: o,
          "for-label": n(l),
          required: e.required
        }, {
          default: f(() => [
            t(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["for-label", "required"]),
        a("label", {
          onClick: o,
          class: "checkbox",
          "for-label": n(l)
        }, [
          a("input", {
            disabled: e.disabled,
            class: "checkbox mr-1",
            type: "checkbox",
            name: n(l),
            checked: e.modelValue === !0
          }, null, 8, k),
          a("span", { onClick: o }, [
            t(e.$slots, "inner-label")
          ])
        ], 8, h)
      ]);
    };
  }
});
export {
  N as default
};
