import { defineComponent as V, ref as k, watch as L, resolveComponent as m, openBlock as o, createElementBlock as i, createBlock as c, withCtx as y, renderSlot as f, createCommentVNode as u, createElementVNode as r, normalizeClass as B, unref as E, withDirectives as S, toDisplayString as v, Fragment as w, renderList as K, vModelSelect as $, createVNode as q } from "vue";
import { _ as N } from "./errors-BWO7vh4U.js";
import { _ as z } from "./field-error.vue_vue_type_script_setup_true_lang-C_t8qsdB.js";
const M = ["multiple", "disabled", "size"], O = {
  key: 0,
  value: ""
}, R = ["value"], h = "update:modelValue", F = /* @__PURE__ */ V({
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
    isSmall: { type: Boolean, default: !1 },
    isMedium: { type: Boolean, default: !1 },
    isLarge: { type: Boolean, default: !1 },
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
  setup(b, { emit: g }) {
    const t = b, d = g, s = k(t.modelValue);
    L(() => t.modelValue, (e) => {
      s.value = e;
    });
    function C(e) {
      const l = e.target;
      if (t.multiple) {
        const n = Array.from(l.selectedOptions).map((p) => p.value);
        s.value = n, d(h, Object.values(n));
      } else
        s.value = l.value, d(h, l.value);
    }
    const I = N(t);
    return (e, l) => {
      const n = m("field-label"), p = m("b-icon");
      return o(), i("div", null, [
        e.$slots.default || e.$slots.description ? (o(), c(n, {
          key: 0,
          required: e.required
        }, {
          description: y(() => [
            f(e.$slots, "description")
          ]),
          default: y(() => [
            f(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : u("", !0),
        r("div", null, [
          r("div", {
            class: B(["is-expanded control", {
              "has-icons-left": e.leftIcon
            }])
          }, [
            r("div", {
              class: B(["select is-fullwidth", {
                "is-multiple": e.multiple,
                "is-danger": E(I),
                "is-rounded": e.isRounded,
                "is-loading": e.isLoading,
                "is-small": e.isSmall,
                "is-medium": e.isMedium,
                "is-large": e.isLarge
              }])
            }, [
              S(r("select", {
                multiple: e.multiple,
                disabled: e.disabled,
                size: e.itemCount,
                onChange: C,
                "onUpdate:modelValue": l[0] || (l[0] = (a) => s.value = a)
              }, [
                e.multiple ? u("", !0) : (o(), i("option", O, v(e.promptLabel), 1)),
                (o(!0), i(w, null, K(e.items, (a) => (o(), i("option", {
                  value: a[e.valueKey],
                  key: a[e.valueKey]
                }, v(a[e.labelKey]), 9, R))), 128))
              ], 40, M), [
                [$, s.value]
              ]),
              e.leftIcon ? (o(), c(p, {
                key: 0,
                "icon-classes": e.leftIconClass,
                icon: e.leftIcon
              }, null, 8, ["icon-classes", "icon"])) : u("", !0)
            ], 2)
          ], 2)
        ]),
        q(z, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  F as default
};
