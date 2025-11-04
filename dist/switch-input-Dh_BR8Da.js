import { defineComponent as y, resolveComponent as B, createElementBlock as m, openBlock as s, createVNode as f, createElementVNode as r, unref as l, withCtx as n, renderSlot as a, createBlock as h, createCommentVNode as b, mergeProps as k } from "vue";
import { _ as g } from "./strings-EXVz6iyo.js";
const C = { class: "field" }, I = ["id", "name", "checked"], q = "update:modelValue", w = /* @__PURE__ */ y({
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
  setup(e, { emit: d }) {
    const c = e, p = d;
    function u() {
      p(q, !c.modelValue);
    }
    const o = g();
    return (t, N) => {
      const i = B("field-label");
      return s(), m("div", null, [
        f(i, {
          for: l(o),
          required: e.required
        }, {
          description: n(() => [
            a(t.$slots, "description")
          ]),
          default: n(() => [
            a(t.$slots, "default")
          ]),
          _: 3
        }, 8, ["for", "required"]),
        r("div", C, [
          r("input", k({
            onClick: u,
            id: l(o),
            type: "checkbox",
            name: l(o),
            checked: e.modelValue === !0
          }, { disabled: e.disabled }, {
            class: [e.classes, "switch"]
          }), null, 16, I),
          t.$slots["inner-label"] ? (s(), h(i, {
            key: 0,
            for: l(o),
            required: e.required
          }, {
            default: n(() => [
              a(t.$slots, "inner-label")
            ]),
            _: 3
          }, 8, ["for", "required"])) : b("", !0)
        ])
      ]);
    };
  }
});
export {
  w as default
};
