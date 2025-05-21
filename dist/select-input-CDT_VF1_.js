import { defineComponent as L, ref as E, watch as S, computed as w, resolveComponent as c, createElementBlock as i, openBlock as t, createBlock as m, createCommentVNode as u, createElementVNode as r, createVNode as z, withCtx as y, renderSlot as f, normalizeClass as B, withDirectives as K, toDisplayString as v, Fragment as $, renderList as q, vModelSelect as N } from "vue";
import { _ as O } from "./errors-BZdmzG52.js";
import { _ as R } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as T } from "./sizes-tLhbz8lD.js";
const _ = ["multiple", "disabled", "size"], A = {
  key: 0,
  value: ""
}, D = ["value"], h = "update:modelValue", U = /* @__PURE__ */ L({
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
  setup(b, { emit: g }) {
    const o = b, C = T(o), d = g, s = E(o.modelValue);
    S(() => o.modelValue, (e) => {
      s.value = e;
    });
    function I(e) {
      const l = e.target;
      if (o.multiple) {
        const n = Array.from(l.selectedOptions).map((p) => p.value);
        s.value = n, d(h, Object.values(n));
      } else
        s.value = l.value, d(h, l.value);
    }
    const V = O(o), k = w(() => ({
      "is-multiple": o.multiple,
      "is-danger": V.value,
      "is-rounded": o.isRounded,
      "is-loading": o.isLoading,
      ...C
    }));
    return (e, l) => {
      const n = c("field-label"), p = c("b-icon");
      return t(), i("div", null, [
        e.$slots.default || e.$slots.description ? (t(), m(n, {
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
              class: B(["select is-fullwidth", k.value])
            }, [
              K(r("select", {
                multiple: e.multiple,
                disabled: e.disabled,
                size: e.itemCount,
                onChange: I,
                "onUpdate:modelValue": l[0] || (l[0] = (a) => s.value = a)
              }, [
                e.multiple ? u("", !0) : (t(), i("option", A, v(e.promptLabel), 1)),
                (t(!0), i($, null, q(e.items, (a) => (t(), i("option", {
                  value: a[e.valueKey],
                  key: a[e.valueKey]
                }, v(a[e.labelKey]), 9, D))), 128))
              ], 40, _), [
                [N, s.value]
              ]),
              e.leftIcon ? (t(), m(p, {
                key: 0,
                "icon-classes": e.leftIconClass,
                icon: e.leftIcon
              }, null, 8, ["icon-classes", "icon"])) : u("", !0)
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
