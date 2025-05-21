import { defineComponent as C, computed as E, resolveComponent as y, createElementBlock as r, openBlock as o, createBlock as p, createCommentVNode as s, createElementVNode as d, createVNode as T, withCtx as m, renderSlot as n, normalizeClass as l, unref as B } from "vue";
import { _ as V } from "./errors-BZdmzG52.js";
import { _ as N } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as q } from "./sizes-tLhbz8lD.js";
const L = ["placeholder", "disabled", "value"], w = "update:modelValue", z = "focus", R = "blur", P = /* @__PURE__ */ C({
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
    const t = f, i = q(t), a = h;
    function g(e) {
      const c = e.target;
      a(w, c.value);
    }
    const I = () => a(z), v = () => a(R), b = V(t), $ = E(() => ({
      "is-danger": b.value,
      "is-rounded": t.isRounded,
      ...i
    }));
    return (e, c) => {
      const k = y("field-label"), u = y("b-icon");
      return o(), r("div", null, [
        e.$slots.default || e.$slots.description ? (o(), p(k, {
          key: 0,
          required: e.required
        }, {
          description: m(() => [
            n(e.$slots, "description")
          ]),
          default: m(() => [
            n(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : s("", !0),
        d("div", {
          class: l(["field", {
            "has-addons": e.hasAddons
          }])
        }, [
          e.$slots.left ? (o(), r("div", {
            key: 0,
            class: l(["control", B(i)])
          }, [
            n(e.$slots, "left")
          ], 2)) : s("", !0),
          d("div", {
            class: l(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            d("input", {
              type: "text",
              class: l(["input", $.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: g,
              onFocus: I,
              onBlur: v
            }, null, 42, L),
            e.leftIcon ? (o(), p(u, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon,
              "icon-type": e.leftIconType
            }, null, 8, ["icon", "icon-type"])) : s("", !0),
            e.rightIcon ? (o(), p(u, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon,
              "icon-type": e.rightIconType
            }, null, 8, ["icon", "icon-type"])) : s("", !0),
            n(e.$slots, "inner")
          ], 2),
          e.$slots.right ? (o(), r("div", {
            key: 1,
            class: l(["control", B(i)])
          }, [
            n(e.$slots, "right")
          ], 2)) : s("", !0)
        ], 2),
        T(N, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  P as default
};
