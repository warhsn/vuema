import { defineComponent as V, ref as k, watch as L, resolveComponent as d, openBlock as n, createElementBlock as i, createVNode as c, withCtx as m, renderSlot as y, createElementVNode as r, normalizeClass as B, unref as E, withDirectives as w, toDisplayString as f, createCommentVNode as v, Fragment as K, renderList as S, vModelSelect as q, createBlock as N } from "vue";
import { _ as z } from "./errors-BZdmzG52.js";
import { _ as O } from "./field-error.vue_vue_type_script_setup_true_lang-DiGo15DQ.js";
const R = ["multiple", "disabled", "size"], T = {
  key: 0,
  value: ""
}, $ = ["value"], h = "update:modelValue", M = /* @__PURE__ */ V({
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
  setup(b, { emit: g }) {
    const s = b, u = g, l = k(s.modelValue);
    L(() => s.modelValue, (e) => {
      l.value = e;
    });
    function C(e) {
      const o = e.target;
      if (s.multiple) {
        const a = Array.from(o.selectedOptions).map((p) => p.value);
        l.value = a, u(h, Object.values(a));
      } else
        l.value = o.value, u(h, o.value);
    }
    const I = z(s);
    return (e, o) => {
      const a = d("field-label"), p = d("b-icon");
      return n(), i("div", null, [
        c(a, { required: e.required }, {
          description: m(() => [
            y(e.$slots, "description")
          ]),
          default: m(() => [
            y(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
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
                "is-loading": e.isLoading
              }])
            }, [
              w(r("select", {
                multiple: e.multiple,
                disabled: e.disabled,
                size: e.itemCount,
                onChange: C,
                "onUpdate:modelValue": o[0] || (o[0] = (t) => l.value = t)
              }, [
                e.multiple ? v("", !0) : (n(), i("option", T, f(e.promptLabel), 1)),
                (n(!0), i(K, null, S(e.items, (t) => (n(), i("option", {
                  value: t[e.valueKey],
                  key: t[e.valueKey]
                }, f(t[e.labelKey]), 9, $))), 128))
              ], 40, R), [
                [q, l.value]
              ]),
              e.leftIcon ? (n(), N(p, {
                key: 0,
                "icon-classes": e.leftIconClass,
                icon: e.leftIcon
              }, null, 8, ["icon-classes", "icon"])) : v("", !0)
            ], 2)
          ], 2)
        ]),
        c(O, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  M as default
};
