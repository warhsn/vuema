import { defineComponent as E, computed as f, resolveComponent as h, createElementBlock as d, openBlock as t, createBlock as r, createCommentVNode as n, createElementVNode as u, createVNode as T, withCtx as g, renderSlot as l, normalizeClass as s } from "vue";
import { _ as V } from "./errors-BZdmzG52.js";
import { _ as z } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as N } from "./sizes-tLhbz8lD.js";
const q = ["type", "placeholder", "disabled", "value"], L = "update:modelValue", R = "focus", S = "blur", M = /* @__PURE__ */ E({
  __name: "text-input",
  props: {
    type: { default: "text" },
    modelValue: {},
    withToggle: { type: Boolean },
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
  setup(e, { emit: I }) {
    const i = e, y = N(i), c = I;
    function v(o) {
      const a = o.target;
      c(L, a.value);
    }
    const b = () => c(R), $ = () => c(S), p = V(i), k = f(() => ({
      "is-danger": p.value,
      "is-rounded": i.isRounded,
      ...y
    })), m = f(() => {
      const { "is-expanded": o, ...a } = y;
      return {
        "is-danger": p.value,
        "is-rounded": i.isRounded,
        ...a
      };
    });
    return (o, a) => {
      const C = h("field-label"), B = h("b-icon");
      return t(), d("div", null, [
        o.$slots.default || o.$slots.description ? (t(), r(C, {
          key: 0,
          required: e.required
        }, {
          description: g(() => [
            l(o.$slots, "description")
          ]),
          default: g(() => [
            l(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : n("", !0),
        u("div", {
          class: s(["field", {
            "has-addons": e.hasAddons
          }])
        }, [
          o.$slots.left ? (t(), d("div", {
            key: 0,
            class: s(["control", m.value])
          }, [
            l(o.$slots, "left")
          ], 2)) : n("", !0),
          u("div", {
            class: s(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            u("input", {
              class: s(["input", k.value]),
              type: e.type,
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: v,
              onFocus: b,
              onBlur: $
            }, null, 42, q),
            e.leftIcon ? (t(), r(B, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon,
              "icon-type": e.leftIconType
            }, null, 8, ["icon", "icon-type"])) : n("", !0),
            e.rightIcon ? (t(), r(B, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon,
              "icon-type": e.rightIconType
            }, null, 8, ["icon", "icon-type"])) : n("", !0),
            l(o.$slots, "inner")
          ], 2),
          o.$slots.right ? (t(), d("div", {
            key: 1,
            class: s(["control", m.value])
          }, [
            l(o.$slots, "right")
          ], 2)) : n("", !0)
        ], 2),
        T(z, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  M as default
};
