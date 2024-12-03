import { defineComponent as y, resolveComponent as B, openBlock as u, createElementBlock as m, createVNode as l, withCtx as f, renderSlot as t, createElementVNode as o, normalizeClass as n, unref as h } from "vue";
import { _ as g } from "./errors-BZdmzG52.js";
import { _ } from "./field-error.vue_vue_type_script_setup_true_lang-DiGo15DQ.js";
const b = { class: "field" }, v = ["placeholder", "disabled", "value"], I = "update:modelValue", N = /* @__PURE__ */ y({
  __name: "text-area",
  props: {
    modelValue: {},
    withToggle: { type: Boolean },
    classes: {},
    disabled: { type: Boolean },
    forLabel: {},
    placeholder: {},
    required: { type: Boolean },
    isLoading: { type: Boolean },
    isRounded: { type: Boolean },
    isExpanded: { type: Boolean },
    autocomplete: { type: Boolean },
    icon: {},
    iconType: {},
    iconPack: {},
    textIcon: { type: Boolean },
    leftIcon: {},
    iconClasses: {},
    leftIconType: {},
    rightIcon: {},
    error: {},
    hasAddons: { type: Boolean },
    isSmall: { type: Boolean },
    isMedium: { type: Boolean },
    isLarge: { type: Boolean },
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
    is12: { type: Boolean },
    isNarrow: { type: Boolean }
  },
  setup(s, { emit: r }) {
    const i = g(s), p = r;
    function d(e) {
      const a = e.target;
      p(I, a.value);
    }
    return (e, a) => {
      const c = B("field-label");
      return u(), m("div", null, [
        l(c, { required: e.required }, {
          default: f(() => [
            t(e.$slots, "default"),
            t(e.$slots, "description")
          ]),
          _: 3
        }, 8, ["required"]),
        o("div", b, [
          o("div", {
            class: n(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon
            }])
          }, [
            o("textarea", {
              class: n(["textarea", {
                "is-danger": h(i)
              }]),
              type: "text",
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: d
            }, "                ", 42, v)
          ], 2),
          l(_, { error: e.error }, null, 8, ["error"])
        ])
      ]);
    };
  }
});
export {
  N as default
};
