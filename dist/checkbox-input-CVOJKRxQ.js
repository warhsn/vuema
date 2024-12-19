import { defineComponent as d, resolveComponent as y, openBlock as B, createElementBlock as u, createVNode as m, unref as l, withCtx as f, renderSlot as n, createElementVNode as t } from "vue";
import { _ as b } from "./strings-EXVz6iyo.js";
const h = ["for-label"], _ = ["disabled", "name", "checked"], k = "update:modelValue", N = /* @__PURE__ */ d({
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
  setup(a, { emit: s }) {
    const i = a, p = s;
    function r() {
      p(k, !i.modelValue);
    }
    const o = b();
    return (e, I) => {
      const c = y("field-label");
      return B(), u("div", null, [
        m(c, {
          "for-label": l(o),
          required: e.required
        }, {
          default: f(() => [
            n(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["for-label", "required"]),
        t("label", {
          onClick: r,
          class: "checkbox",
          "for-label": l(o)
        }, [
          t("input", {
            disabled: e.disabled,
            class: "checkbox mr-1",
            type: "checkbox",
            name: l(o),
            checked: e.modelValue === !0,
            '"': ""
          }, null, 8, _),
          n(e.$slots, "inner-label")
        ], 8, h)
      ]);
    };
  }
});
export {
  N as default
};
