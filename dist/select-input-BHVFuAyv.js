import { defineComponent as V, ref as L, watch as k, resolveComponent as d, openBlock as s, createElementBlock as i, createVNode as m, withCtx as c, renderSlot as y, createElementVNode as r, normalizeClass as f, unref as E, withDirectives as S, toDisplayString as B, createCommentVNode as v, Fragment as w, renderList as K, vModelSelect as q, createBlock as N } from "vue";
import { _ as z } from "./errors-BWO7vh4U.js";
import { _ as M } from "./field-error.vue_vue_type_script_setup_true_lang-C_t8qsdB.js";
const O = ["multiple", "disabled", "size"], R = {
  key: 0,
  value: ""
}, T = ["value"], h = "update:modelValue", F = /* @__PURE__ */ V({
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
    const t = b, u = g, o = L(t.modelValue);
    k(() => t.modelValue, (e) => {
      o.value = e;
    });
    function C(e) {
      const l = e.target;
      if (t.multiple) {
        const n = Array.from(l.selectedOptions).map((p) => p.value);
        o.value = n, u(h, Object.values(n));
      } else
        o.value = l.value, u(h, l.value);
    }
    const I = z(t);
    return (e, l) => {
      const n = d("field-label"), p = d("b-icon");
      return s(), i("div", null, [
        m(n, { required: e.required }, {
          description: c(() => [
            y(e.$slots, "description")
          ]),
          default: c(() => [
            y(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        r("div", null, [
          r("div", {
            class: f(["is-expanded control", {
              "has-icons-left": e.leftIcon
            }])
          }, [
            r("div", {
              class: f(["select is-fullwidth", {
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
                "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value = a)
              }, [
                e.multiple ? v("", !0) : (s(), i("option", R, B(e.promptLabel), 1)),
                (s(!0), i(w, null, K(e.items, (a) => (s(), i("option", {
                  value: a[e.valueKey],
                  key: a[e.valueKey]
                }, B(a[e.labelKey]), 9, T))), 128))
              ], 40, O), [
                [q, o.value]
              ]),
              e.leftIcon ? (s(), N(p, {
                key: 0,
                "icon-classes": e.leftIconClass,
                icon: e.leftIcon
              }, null, 8, ["icon-classes", "icon"])) : v("", !0)
            ], 2)
          ], 2)
        ]),
        m(M, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  F as default
};
