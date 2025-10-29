import { defineComponent as n, createElementBlock as l, openBlock as t, renderSlot as a, createCommentVNode as s } from "vue";
const i = ["for"], p = {
  key: 0,
  class: "has-text-danger"
}, B = /* @__PURE__ */ n({
  __name: "field-label",
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
  setup(e) {
    return (o, r) => (t(), l("label", {
      for: e.forLabel,
      class: "label"
    }, [
      a(o.$slots, "default"),
      e.required ? (t(), l("span", p, " * ")) : s("", !0),
      a(o.$slots, "description")
    ], 8, i));
  }
});
export {
  B as default
};
