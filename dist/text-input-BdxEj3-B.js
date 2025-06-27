import { defineComponent as E, computed as B, resolveComponent as f, createElementBlock as r, openBlock as o, createBlock as d, createCommentVNode as s, createElementVNode as p, createVNode as T, withCtx as h, renderSlot as n, normalizeClass as l } from "vue";
import { _ as V } from "./errors-BZdmzG52.js";
import { _ as z } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as N } from "./sizes-tLhbz8lD.js";
const q = ["type", "placeholder", "disabled", "value"], L = "update:modelValue", R = "focus", S = "blur", P = /* @__PURE__ */ E({
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
  setup(g, { emit: I }) {
    const t = g, c = N(t), a = I;
    function v(e) {
      const i = e.target;
      a(L, i.value);
    }
    const b = () => a(R), $ = () => a(S), u = V(t), k = B(() => ({
      "is-danger": u.value,
      "is-rounded": t.isRounded,
      ...c
    })), y = B(() => {
      const { "is-expanded": e, ...i } = c;
      return {
        "is-danger": u.value,
        "is-rounded": t.isRounded,
        ...i
      };
    });
    return (e, i) => {
      const C = f("field-label"), m = f("b-icon");
      return o(), r("div", null, [
        e.$slots.default || e.$slots.description ? (o(), d(C, {
          key: 0,
          required: e.required
        }, {
          description: h(() => [
            n(e.$slots, "description")
          ]),
          default: h(() => [
            n(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : s("", !0),
        p("div", {
          class: l(["field", {
            "has-addons": e.hasAddons
          }])
        }, [
          e.$slots.left ? (o(), r("div", {
            key: 0,
            class: l(["control", y.value])
          }, [
            n(e.$slots, "left")
          ], 2)) : s("", !0),
          p("div", {
            class: l(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            p("input", {
              class: l(["input", k.value]),
              type: e.type,
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: v,
              onFocus: b,
              onBlur: $
            }, null, 42, q),
            e.leftIcon ? (o(), d(m, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon,
              "icon-type": e.leftIconType
            }, null, 8, ["icon", "icon-type"])) : s("", !0),
            e.rightIcon ? (o(), d(m, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon,
              "icon-type": e.rightIconType
            }, null, 8, ["icon", "icon-type"])) : s("", !0),
            n(e.$slots, "inner")
          ], 2),
          e.$slots.right ? (o(), r("div", {
            key: 1,
            class: l(["control", y.value])
          }, [
            n(e.$slots, "right")
          ], 2)) : s("", !0)
        ], 2),
        T(z, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  P as default
};
