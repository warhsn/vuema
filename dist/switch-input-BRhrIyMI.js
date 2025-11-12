import { defineComponent as u, computed as m, resolveComponent as f, createElementBlock as h, openBlock as r, createVNode as g, createElementVNode as p, unref as n, withCtx as t, renderSlot as l, createBlock as k, createCommentVNode as b, mergeProps as I } from "vue";
import { _ as C } from "./strings-EXVz6iyo.js";
const L = { class: "field" }, q = ["id", "name", "checked"], w = "update:modelValue", v = /* @__PURE__ */ u({
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
    is12: { type: Boolean },
    isSuccess: { type: Boolean },
    isWarning: { type: Boolean },
    isDanger: { type: Boolean },
    isInfo: { type: Boolean },
    isOutlined: { type: Boolean },
    isLink: { type: Boolean },
    isInverted: { type: Boolean },
    isPrimary: { type: Boolean },
    isWhite: { type: Boolean },
    isLight: { type: Boolean },
    isDark: { type: Boolean },
    isBlack: { type: Boolean },
    isText: { type: Boolean },
    isGhost: { type: Boolean }
  },
  setup(o, { emit: c }) {
    const e = o, d = c;
    function y() {
      d(w, !e.modelValue);
    }
    const i = C(), B = m(() => [
      e.classes,
      {
        "is-small": e.isSmall,
        "is-medium": e.isMedium,
        "is-large": e.isLarge,
        "is-primary": e.isPrimary,
        "is-info": e.isInfo,
        "is-success": e.isSuccess,
        "is-warning": e.isWarning,
        "is-danger": e.isDanger,
        "is-link": e.isLink,
        "is-dark": e.isDark,
        "is-light": e.isLight,
        "is-black": e.isBlack,
        "is-white": e.isWhite,
        "is-text": e.isText
      }
    ]);
    return (s, N) => {
      const a = f("field-label");
      return r(), h("div", null, [
        g(a, {
          for: n(i),
          required: o.required
        }, {
          description: t(() => [
            l(s.$slots, "description")
          ]),
          default: t(() => [
            l(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["for", "required"]),
        p("div", L, [
          p("input", I({
            onClick: y,
            id: n(i),
            type: "checkbox",
            name: n(i),
            checked: o.modelValue === !0
          }, { disabled: o.disabled }, {
            class: [B.value, "switch"]
          }), null, 16, q),
          s.$slots["inner-label"] ? (r(), k(a, {
            key: 0,
            for: n(i),
            required: o.required
          }, {
            default: t(() => [
              l(s.$slots, "inner-label")
            ]),
            _: 3
          }, 8, ["for", "required"])) : b("", !0)
        ])
      ]);
    };
  }
});
export {
  v as default
};
