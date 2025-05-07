import { defineComponent as C, computed as y, resolveComponent as m, createElementBlock as r, openBlock as s, createBlock as p, createCommentVNode as i, createElementVNode as d, createVNode as E, withCtx as B, renderSlot as t, normalizeClass as o } from "vue";
import { _ as T } from "./errors-BZdmzG52.js";
import { _ as V } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
const L = ["placeholder", "disabled", "value"], N = "update:modelValue", q = "focus", w = "blur", A = /* @__PURE__ */ C({
  __name: "time-input",
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
    const l = f, a = h;
    function g(e) {
      const c = e.target;
      a(N, c.value);
    }
    const v = () => a(q), I = () => a(w), b = T(l), n = y(() => ({
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
        e.$slots.default || e.$slots.description ? (s(), p(k, {
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
        }, 8, ["required"])) : i("", !0),
        d("div", {
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
          ], 2)) : i("", !0),
          d("div", {
            class: o(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            d("input", {
              type: "time",
              class: o(["input", $.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: g,
              onFocus: v,
              onBlur: I
            }, null, 42, L),
            e.leftIcon ? (s(), p(u, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon,
              "icon-type": e.leftIconType
            }, null, 8, ["icon", "icon-type"])) : i("", !0),
            e.rightIcon ? (s(), p(u, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon,
              "icon-type": e.rightIconType
            }, null, 8, ["icon", "icon-type"])) : i("", !0),
            t(e.$slots, "inner")
          ], 2),
          e.$slots.right ? (s(), r("div", {
            key: 1,
            class: o(["control", n.value])
          }, [
            t(e.$slots, "right", {
              class: o(n.value)
            })
          ], 2)) : i("", !0)
        ], 2),
        E(V, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  A as default
};
