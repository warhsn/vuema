import { defineComponent as $, computed as u, resolveComponent as m, openBlock as n, createElementBlock as t, createVNode as y, withCtx as B, renderSlot as a, createElementVNode as r, normalizeClass as o, createCommentVNode as i, createBlock as f } from "vue";
import { _ as E } from "./errors-BWO7vh4U.js";
import { _ as N } from "./field-error.vue_vue_type_script_setup_true_lang-C_t8qsdB.js";
const V = ["placeholder", "disabled", "value"], L = "update:modelValue", q = "focus", S = /* @__PURE__ */ $({
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
  setup(h, { emit: g }) {
    const s = h, d = g;
    function v(e) {
      const p = e.target;
      d(L, p.value);
    }
    const I = () => d(q), b = E(s), l = u(() => ({
      "is-small": s.isSmall,
      "is-medium": s.isMedium,
      "is-large": s.isLarge
    })), k = u(() => ({
      "is-danger": b.value,
      "is-rounded": s.isRounded,
      ...l.value
    }));
    return (e, p) => {
      const C = m("field-label"), c = m("b-icon");
      return n(), t("div", null, [
        y(C, { required: e.required }, {
          description: B(() => [
            a(e.$slots, "description")
          ]),
          default: B(() => [
            a(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        r("div", {
          class: o(["field", {
            "has-addons": e.hasAddons
          }])
        }, [
          e.$slots.left ? (n(), t("div", {
            key: 0,
            class: o(["control", l.value])
          }, [
            a(e.$slots, "left", {
              class: o(l.value)
            })
          ], 2)) : i("", !0),
          r("div", {
            class: o(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            r("input", {
              type: "text",
              class: o(["input", k.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: v,
              onFocus: I
            }, null, 42, V),
            e.leftIcon ? (n(), f(c, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon
            }, null, 8, ["icon"])) : i("", !0),
            e.rightIcon ? (n(), f(c, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon
            }, null, 8, ["icon"])) : i("", !0),
            a(e.$slots, "inner")
          ], 2),
          e.$slots.right ? (n(), t("div", {
            key: 1,
            class: o(["control", l.value])
          }, [
            a(e.$slots, "right", {
              class: o(l.value)
            })
          ], 2)) : i("", !0)
        ], 2),
        y(N, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  S as default
};
