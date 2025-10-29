import { defineComponent as L, ref as E, watch as S, computed as w, resolveComponent as p, createElementBlock as u, openBlock as a, createBlock as y, createCommentVNode as r, createElementVNode as c, createVNode as z, withCtx as f, renderSlot as B, normalizeClass as v, withDirectives as K, toDisplayString as h, Fragment as $, renderList as q, vModelSelect as N } from "vue";
import { _ as O } from "./errors-BZdmzG52.js";
import { _ as R } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as T } from "./sizes-tLhbz8lD.js";
const x = ["multiple", "disabled", "size"], A = {
  key: 0,
  value: ""
}, D = ["value"], b = "update:modelValue", U = /* @__PURE__ */ L({
  __name: "select-input",
  props: {
    modelValue: { default: () => [] },
    items: {},
    valueKey: {},
    labelKey: {},
    promptLabel: { default: "- Select an Option -" },
    multiple: { type: Boolean, default: !1 },
    itemCount: {},
    classes: {},
    disabled: { type: Boolean },
    forLabel: {},
    placeholder: {},
    required: { type: Boolean },
    isLoading: { type: Boolean, default: !1 },
    isRounded: { type: Boolean, default: !1 },
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
    const l = e, C = T(l), m = g, n = E(l.modelValue);
    S(() => l.modelValue, (o) => {
      n.value = o;
    });
    function I(o) {
      const t = o.target;
      if (l.multiple) {
        const i = Array.from(t.selectedOptions).map((d) => d.value);
        n.value = i, m(b, Object.values(i));
      } else
        n.value = t.value, m(b, t.value);
    }
    const V = O(l), k = w(() => ({
      "is-multiple": l.multiple,
      "is-danger": V.value,
      "is-rounded": l.isRounded,
      "is-loading": l.isLoading,
      ...C
    }));
    return (o, t) => {
      const i = p("field-label"), d = p("b-icon");
      return a(), u("div", null, [
        o.$slots.default || o.$slots.description ? (a(), y(i, {
          key: 0,
          required: e.required
        }, {
          description: f(() => [
            B(o.$slots, "description")
          ]),
          default: f(() => [
            B(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : r("", !0),
        c("div", null, [
          c("div", {
            class: v(["is-expanded control", {
              "has-icons-left": e.leftIcon
            }])
          }, [
            c("div", {
              class: v(["select is-fullwidth", k.value])
            }, [
              K(c("select", {
                multiple: e.multiple,
                disabled: e.disabled,
                size: e.itemCount,
                onChange: I,
                "onUpdate:modelValue": t[0] || (t[0] = (s) => n.value = s)
              }, [
                e.multiple ? r("", !0) : (a(), u("option", A, h(e.promptLabel), 1)),
                (a(!0), u($, null, q(e.items, (s) => (a(), u("option", {
                  value: s[e.valueKey],
                  key: s[e.valueKey]
                }, h(s[e.labelKey]), 9, D))), 128))
              ], 40, x), [
                [N, n.value]
              ]),
              e.leftIcon ? (a(), y(d, {
                key: 0,
                "icon-classes": e.leftIconClass,
                icon: e.leftIcon
              }, null, 8, ["icon-classes", "icon"])) : r("", !0)
            ], 2)
          ], 2)
        ]),
        z(R, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  U as default
};
