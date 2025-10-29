import { defineComponent as d, resolveComponent as y, createElementBlock as B, openBlock as u, createVNode as m, createElementVNode as n, unref as t, withCtx as f, renderSlot as i } from "vue";
import { _ as b } from "./strings-EXVz6iyo.js";
const h = ["for-label"], k = ["disabled", "name", "checked"], C = "update:modelValue", x = /* @__PURE__ */ d({
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
  setup(e, { emit: s }) {
    const c = e, p = s;
    function o() {
      p(C, !c.modelValue);
    }
    const l = b();
    return (a, I) => {
      const r = y("field-label");
      return u(), B("div", null, [
        m(r, {
          onClick: o,
          "for-label": t(l),
          required: e.required
        }, {
          default: f(() => [
            i(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["for-label", "required"]),
        n("label", {
          onClick: o,
          class: "checkbox",
          "for-label": t(l)
        }, [
          n("input", {
            disabled: e.disabled,
            class: "checkbox mr-1",
            type: "checkbox",
            name: t(l),
            checked: e.modelValue === !0
          }, null, 8, k),
          n("span", { onClick: o }, [
            i(a.$slots, "inner-label")
          ])
        ], 8, h)
      ]);
    };
  }
});
export {
  x as default
};
