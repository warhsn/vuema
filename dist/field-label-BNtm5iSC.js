import { defineComponent as n, openBlock as o, createElementBlock as a, renderSlot as l, createCommentVNode as t } from "vue";
const s = ["for"], p = {
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
  setup(i) {
    return (e, r) => (o(), a("label", {
      for: e.forLabel,
      class: "label"
    }, [
      l(e.$slots, "default"),
      e.required ? (o(), a("span", p, " * ")) : t("", !0),
      l(e.$slots, "description")
    ], 8, s));
  }
});
export {
  B as default
};
