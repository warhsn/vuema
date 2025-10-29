import { defineComponent as C, computed as E, resolveComponent as B, createElementBlock as d, openBlock as l, createBlock as u, createCommentVNode as s, createElementVNode as y, createVNode as T, withCtx as f, renderSlot as i, normalizeClass as n, unref as a } from "vue";
import { _ as V } from "./errors-BZdmzG52.js";
import { _ as N } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as q } from "./sizes-tLhbz8lD.js";
const L = ["placeholder", "disabled", "value"], w = "update:modelValue", z = "focus", R = "blur", P = /* @__PURE__ */ C({
  __name: "time-input",
  props: {
    type: {},
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
  setup(e, { emit: h }) {
    const c = e, t = q(c), r = h;
    function g(o) {
      const p = o.target;
      r(w, p.value);
    }
    const I = () => r(z), v = () => r(R), b = V(c), $ = E(() => ({
      "is-danger": b.value,
      "is-rounded": c.isRounded,
      ...t
    }));
    return (o, p) => {
      const k = B("field-label"), m = B("b-icon");
      return l(), d("div", null, [
        o.$slots.default || o.$slots.description ? (l(), u(k, {
          key: 0,
          required: e.required
        }, {
          description: f(() => [
            i(o.$slots, "description")
          ]),
          default: f(() => [
            i(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : s("", !0),
        y("div", {
          class: n(["field", {
            "has-addons": e.hasAddons
          }])
        }, [
          o.$slots.left ? (l(), d("div", {
            key: 0,
            class: n(["control", a(t)])
          }, [
            i(o.$slots, "left", {
              class: n(a(t))
            })
          ], 2)) : s("", !0),
          y("div", {
            class: n(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            y("input", {
              type: "time",
              class: n(["input", $.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: g,
              onFocus: I,
              onBlur: v
            }, null, 42, L),
            e.leftIcon ? (l(), u(m, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon,
              "icon-type": e.leftIconType
            }, null, 8, ["icon", "icon-type"])) : s("", !0),
            e.rightIcon ? (l(), u(m, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon,
              "icon-type": e.rightIconType
            }, null, 8, ["icon", "icon-type"])) : s("", !0),
            i(o.$slots, "inner")
          ], 2),
          o.$slots.right ? (l(), d("div", {
            key: 1,
            class: n(["control", a(t)])
          }, [
            i(o.$slots, "right", {
              class: n(a(t))
            })
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
