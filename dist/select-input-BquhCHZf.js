import { defineComponent as b, resolveComponent as a, openBlock as o, createElementBlock as n, createVNode as i, withCtx as g, renderSlot as I, createElementVNode as t, normalizeClass as r, unref as C, toDisplayString as p, createCommentVNode as d, Fragment as k, renderList as L, createBlock as E } from "vue";
import { _ as K } from "./errors-BZdmzG52.js";
import { _ as V } from "./field-error.vue_vue_type_script_setup_true_lang-DiGo15DQ.js";
const N = ["multiple", "disabled", "size"], S = {
  key: 0,
  value: ""
}, q = ["value", "selected"], w = "update:modelValue", _ = /* @__PURE__ */ b({
  __name: "select-input",
  props: {
    valueKey: {},
    labelKey: {},
    items: {},
    promptLabel: { default: "- Select an Option -" },
    leftIconClass: {},
    multiple: { type: Boolean },
    itemCount: {},
    classes: {},
    disabled: { type: Boolean },
    forLabel: {},
    modelValue: { type: [Boolean, Number, String, Array, Date] },
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
  setup(u, { emit: c }) {
    const y = u, m = c;
    function B(e) {
      const s = e.target;
      m(w, s.value);
    }
    const f = K(y);
    return (e, s) => {
      const h = a("field-label"), v = a("b-icon");
      return o(), n("div", null, [
        i(h, { required: e.required }, {
          default: g(() => [
            I(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        t("div", null, [
          t("div", {
            class: r(["is-expanded control", {
              "has-icons-left": e.leftIcon
            }])
          }, [
            t("div", {
              class: r(["select is-fullwidth", {
                "is-multiple": e.multiple,
                "is-danger": C(f),
                "is-rounded": e.isRounded,
                "is-loading": e.isLoading
              }])
            }, [
              t("select", {
                multiple: e.multiple,
                disabled: e.disabled,
                size: e.itemCount,
                onInput: B
              }, [
                e.multiple ? d("", !0) : (o(), n("option", S, p(e.promptLabel), 1)),
                (o(!0), n(k, null, L(e.items, (l) => (o(), n("option", {
                  value: l[e.valueKey],
                  key: l[e.valueKey],
                  selected: l[e.valueKey] === e.modelValue
                }, p(l[e.labelKey]), 9, q))), 128))
              ], 40, N),
              e.leftIcon ? (o(), E(v, {
                key: 0,
                "icon-classes": e.leftIconClass,
                icon: e.leftIcon
              }, null, 8, ["icon-classes", "icon"])) : d("", !0)
            ], 2)
          ], 2)
        ]),
        i(V, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  _ as default
};
