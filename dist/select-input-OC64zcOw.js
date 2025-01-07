import { defineComponent as I, resolveComponent as a, openBlock as o, createElementBlock as n, createVNode as i, withCtx as r, renderSlot as p, createElementVNode as t, normalizeClass as d, unref as C, toDisplayString as u, createCommentVNode as c, Fragment as k, renderList as L, createBlock as E } from "vue";
import { _ as K } from "./errors-BZdmzG52.js";
import { _ as V } from "./field-error.vue_vue_type_script_setup_true_lang-DiGo15DQ.js";
const N = ["multiple", "disabled", "size"], S = {
  key: 0,
  value: ""
}, q = ["value", "selected"], w = "update:modelValue", $ = /* @__PURE__ */ I({
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
  setup(y, { emit: m }) {
    const B = y, f = m;
    function h(e) {
      const s = e.target;
      f(w, s.value);
    }
    const v = K(B);
    return (e, s) => {
      const b = a("field-label"), g = a("b-icon");
      return o(), n("div", null, [
        i(b, { required: e.required }, {
          description: r(() => [
            p(e.$slots, "description")
          ]),
          default: r(() => [
            p(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        t("div", null, [
          t("div", {
            class: d(["is-expanded control", {
              "has-icons-left": e.leftIcon
            }])
          }, [
            t("div", {
              class: d(["select is-fullwidth", {
                "is-multiple": e.multiple,
                "is-danger": C(v),
                "is-rounded": e.isRounded,
                "is-loading": e.isLoading
              }])
            }, [
              t("select", {
                multiple: e.multiple,
                disabled: e.disabled,
                size: e.itemCount,
                onInput: h
              }, [
                e.multiple ? c("", !0) : (o(), n("option", S, u(e.promptLabel), 1)),
                (o(!0), n(k, null, L(e.items, (l) => (o(), n("option", {
                  value: l[e.valueKey],
                  key: l[e.valueKey],
                  selected: l[e.valueKey] === e.modelValue
                }, u(l[e.labelKey]), 9, q))), 128))
              ], 40, N),
              e.leftIcon ? (o(), E(g, {
                key: 0,
                "icon-classes": e.leftIconClass,
                icon: e.leftIcon
              }, null, 8, ["icon-classes", "icon"])) : c("", !0)
            ], 2)
          ], 2)
        ]),
        i(V, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  $ as default
};
