import { defineComponent as y, resolveComponent as B, createElementBlock as u, openBlock as m, createVNode as a, createElementVNode as t, withCtx as f, renderSlot as n, normalizeClass as s, unref as h } from "vue";
import { _ as g } from "./errors-BZdmzG52.js";
import { _ as I } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
const v = { class: "field" }, b = ["placeholder", "disabled", "value"], x = "update:modelValue", N = /* @__PURE__ */ y({
  __name: "text-area",
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
  setup(e, { emit: i }) {
    const r = g(e), c = i;
    function d(o) {
      const l = o.target;
      c(x, l.value);
    }
    return (o, l) => {
      const p = B("field-label");
      return m(), u("div", null, [
        a(p, { required: e.required }, {
          default: f(() => [
            n(o.$slots, "default"),
            n(o.$slots, "description")
          ]),
          _: 3
        }, 8, ["required"]),
        t("div", v, [
          t("div", {
            class: s(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon
            }])
          }, [
            t("textarea", {
              class: s(["textarea", {
                "is-danger": h(r)
              }]),
              type: "text",
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: d
            }, "                ", 42, b)
          ], 2),
          a(I, { error: e.error }, null, 8, ["error"])
        ])
      ]);
    };
  }
});
export {
  N as default
};
