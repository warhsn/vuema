import { defineComponent as C, computed as y, resolveComponent as m, openBlock as s, createElementBlock as r, createBlock as d, withCtx as B, renderSlot as t, createCommentVNode as a, createElementVNode as p, normalizeClass as o, createVNode as E } from "vue";
import { _ as V } from "./errors-BWO7vh4U.js";
import { _ as L } from "./field-error.vue_vue_type_script_setup_true_lang-C_t8qsdB.js";
const N = ["placeholder", "disabled", "value"], q = "update:modelValue", T = "focus", w = "blur", A = /* @__PURE__ */ C({
  __name: "text-input",
  props: {
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
  setup(f, { emit: h }) {
    const l = f, i = h;
    function g(e) {
      const c = e.target;
      i(q, c.value);
    }
    const v = () => i(T), I = () => i(w), b = V(l), n = y(() => ({
      "is-small": l.isSmall,
      "is-medium": l.isMedium,
      "is-large": l.isLarge
    })), $ = y(() => ({
      "is-danger": b.value,
      "is-rounded": l.isRounded,
      ...n.value
    }));
    return (e, c) => {
      const k = m("field-label"), u = m("b-icon");
      return s(), r("div", null, [
        e.$slots.default || e.$slots.description ? (s(), d(k, {
          key: 0,
          required: e.required
        }, {
          description: B(() => [
            t(e.$slots, "description")
          ]),
          default: B(() => [
            t(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : a("", !0),
        p("div", {
          class: o(["field", {
            "has-addons": e.hasAddons
          }])
        }, [
          e.$slots.left ? (s(), r("div", {
            key: 0,
            class: o(["control", n.value])
          }, [
            t(e.$slots, "left", {
              class: o(n.value)
            })
          ], 2)) : a("", !0),
          p("div", {
            class: o(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            p("input", {
              type: "text",
              class: o(["input", $.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: g,
              onFocus: v,
              onBlur: I
            }, null, 42, N),
            e.leftIcon ? (s(), d(u, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon
            }, null, 8, ["icon"])) : a("", !0),
            e.rightIcon ? (s(), d(u, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon
            }, null, 8, ["icon"])) : a("", !0),
            t(e.$slots, "inner")
          ], 2),
          e.$slots.right ? (s(), r("div", {
            key: 1,
            class: o(["control", n.value])
          }, [
            t(e.$slots, "right", {
              class: o(n.value)
            })
          ], 2)) : a("", !0)
        ], 2),
        E(L, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  A as default
};
