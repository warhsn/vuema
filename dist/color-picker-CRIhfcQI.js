import { defineComponent as E, computed as B, resolveComponent as h, createElementBlock as c, openBlock as t, createBlock as d, createCommentVNode as n, createElementVNode as u, createVNode as V, withCtx as v, renderSlot as s, normalizeClass as l } from "vue";
import { _ as z } from "./errors-BZdmzG52.js";
import { _ as N } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as T } from "./sizes-tLhbz8lD.js";
import { _ as q } from "./index-CQJAgQa1.js";
const w = ["disabled", "value"], L = "update:modelValue", R = "focus", S = "blur", P = /* @__PURE__ */ E({
  __name: "color-picker",
  props: {
    modelValue: { default: "#000000" },
    showPreview: { type: Boolean },
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
  setup(e, { emit: g }) {
    const i = e, p = T(i), r = g;
    function I(o) {
      const a = o.target;
      r(L, a.value);
    }
    const k = () => r(R), b = () => r(S), y = z(i), $ = B(() => ({
      "is-danger": y.value,
      "is-rounded": i.isRounded,
      ...p
    })), m = B(() => {
      const { "is-expanded": o, ...a } = p;
      return {
        "is-danger": y.value,
        "is-rounded": i.isRounded,
        ...a
      };
    });
    return (o, a) => {
      const C = h("field-label"), f = h("b-icon");
      return t(), c("div", null, [
        o.$slots.default || o.$slots.description ? (t(), d(C, {
          key: 0,
          required: e.required
        }, {
          description: v(() => [
            s(o.$slots, "description", {}, void 0, !0)
          ]),
          default: v(() => [
            s(o.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["required"])) : n("", !0),
        u("div", {
          class: l(["field", {
            "has-addons": e.hasAddons
          }])
        }, [
          o.$slots.left ? (t(), c("div", {
            key: 0,
            class: l(["control", m.value])
          }, [
            s(o.$slots, "left", {}, void 0, !0)
          ], 2)) : n("", !0),
          u("div", {
            class: l(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            u("input", {
              class: l(["input color-picker-input", $.value]),
              type: "color",
              disabled: e.disabled,
              value: e.modelValue || "#000000",
              onInput: I,
              onFocus: k,
              onBlur: b
            }, null, 42, w),
            e.leftIcon ? (t(), d(f, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon,
              "icon-type": e.leftIconType
            }, null, 8, ["icon", "icon-type"])) : n("", !0),
            e.rightIcon ? (t(), d(f, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon,
              "icon-type": e.rightIconType
            }, null, 8, ["icon", "icon-type"])) : n("", !0),
            s(o.$slots, "inner", {}, void 0, !0)
          ], 2),
          o.$slots.right ? (t(), c("div", {
            key: 1,
            class: l(["control", m.value])
          }, [
            s(o.$slots, "right", {}, void 0, !0)
          ], 2)) : n("", !0)
        ], 2),
        V(N, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), j = /* @__PURE__ */ q(P, [["__scopeId", "data-v-116f7212"]]);
export {
  j as default
};
