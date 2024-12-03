import { defineComponent as $, computed as c, resolveComponent as u, openBlock as n, createElementBlock as t, createVNode as m, withCtx as y, renderSlot as a, createElementVNode as r, normalizeClass as o, createCommentVNode as i, createBlock as B } from "vue";
import { _ as C } from "./errors-BZdmzG52.js";
import { _ as E } from "./field-error.vue_vue_type_script_setup_true_lang-DiGo15DQ.js";
const V = ["placeholder", "disabled", "value"], L = "update:modelValue", S = /* @__PURE__ */ $({
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
  setup(f, { emit: h }) {
    const l = f, g = h;
    function v(e) {
      const d = e.target;
      g(L, d.value);
    }
    const I = C(l), s = c(() => ({
      "is-small": l.isSmall,
      "is-medium": l.isMedium,
      "is-large": l.isLarge
    })), b = c(() => ({
      "is-danger": I.value,
      "is-rounded": l.isRounded,
      ...s.value
    }));
    return (e, d) => {
      const k = u("field-label"), p = u("b-icon");
      return n(), t("div", null, [
        m(k, { required: e.required }, {
          description: y(() => [
            a(e.$slots, "description")
          ]),
          default: y(() => [
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
            class: o(["control", s.value])
          }, [
            a(e.$slots, "left", {
              class: o(s.value)
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
              class: o(["input", b.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: v
            }, null, 42, V),
            e.leftIcon ? (n(), B(p, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon
            }, null, 8, ["icon"])) : i("", !0),
            e.rightIcon ? (n(), B(p, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon
            }, null, 8, ["icon"])) : i("", !0),
            a(e.$slots, "inner")
          ], 2),
          e.$slots.right ? (n(), t("div", {
            key: 1,
            class: o(["control", s.value])
          }, [
            a(e.$slots, "right", {
              class: o(s.value)
            })
          ], 2)) : i("", !0)
        ], 2),
        m(E, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  S as default
};
