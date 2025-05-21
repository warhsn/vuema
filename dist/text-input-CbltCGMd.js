import { defineComponent as C, computed as E, resolveComponent as m, createElementBlock as p, openBlock as s, createBlock as c, createCommentVNode as l, createElementVNode as d, createVNode as T, withCtx as B, renderSlot as t, normalizeClass as o, unref as i } from "vue";
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
    const a = f, n = q(a), r = h;
    function g(e) {
      const u = e.target;
      r(w, u.value);
    }
    const I = () => r(z), v = () => r(R), b = V(a), $ = E(() => ({
      "is-danger": b.value,
      "is-rounded": a.isRounded,
      ...n
    }));
    return (e, u) => {
      const k = m("field-label"), y = m("b-icon");
      return s(), p("div", null, [
        e.$slots.default || e.$slots.description ? (s(), c(k, {
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
        }, 8, ["required"])) : l("", !0),
        d("div", {
          class: o(["field", {
            "has-addons": e.hasAddons
          }])
        }, [
          e.$slots.left ? (s(), p("div", {
            key: 0,
            class: o(["control", i(n)])
          }, [
            t(e.$slots, "left", {
              class: o(i(n))
            })
          ], 2)) : l("", !0),
          d("div", {
            class: o(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            d("input", {
              type: "text",
              class: o(["input", $.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: g,
              onFocus: I,
              onBlur: v
            }, null, 42, L),
            e.leftIcon ? (s(), c(y, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon,
              "icon-type": e.leftIconType
            }, null, 8, ["icon", "icon-type"])) : l("", !0),
            e.rightIcon ? (s(), c(y, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon,
              "icon-type": e.rightIconType
            }, null, 8, ["icon", "icon-type"])) : l("", !0),
            t(e.$slots, "inner")
          ], 2),
          e.$slots.right ? (s(), p("div", {
            key: 1,
            class: o(["control", i(n)])
          }, [
            t(e.$slots, "right", {
              class: o(i(n))
            })
          ], 2)) : l("", !0)
        ], 2),
        T(N, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  P as default
};
