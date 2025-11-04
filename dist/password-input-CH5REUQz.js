import { defineComponent as E, ref as T, computed as m, resolveComponent as p, createElementBlock as r, openBlock as t, createVNode as b, createElementVNode as u, withCtx as $, renderSlot as f, normalizeClass as l, createCommentVNode as c, createBlock as y } from "vue";
import { _ as N } from "./errors-BZdmzG52.js";
import { _ as q } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
const L = ["type", "placeholder", "disabled", "value"], x = { class: "control" }, P = "update:modelValue", z = /* @__PURE__ */ E({
  __name: "password-input",
  props: {
    modelValue: {},
    withToggle: { type: Boolean },
    toggleClasses: {},
    type: {},
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
  setup(e, { emit: k }) {
    const a = e, d = T(!1), I = k;
    function C(o) {
      const n = o.target;
      I(P, n.value);
    }
    function w() {
      d.value = !d.value;
    }
    const V = N(a), s = m(() => ({
      "is-small": a.isSmall,
      "is-medium": a.isMedium,
      "is-large": a.isLarge
    })), h = m(() => ({
      "is-danger": V.value,
      "is-rounded": a.isRounded,
      ...s.value
    })), g = m(() => {
      let o = [a.toggleClasses];
      for (const [n, i] of Object.entries(h.value))
        i && o.push(n);
      for (const [n, i] of Object.entries(s.value))
        i && o.push(n);
      return o;
    });
    return (o, n) => {
      const i = p("field-label"), B = p("b-icon"), v = p("icon-button");
      return t(), r("div", null, [
        b(i, { required: e.required }, {
          default: $(() => [
            f(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        u("div", {
          class: l(["field", {
            "has-addons": e.hasAddons || e.withToggle
          }])
        }, [
          o.$slots.left ? (t(), r("div", {
            key: 0,
            class: l(["control", s.value])
          }, [
            f(o.$slots, "left", {
              class: l(s.value)
            })
          ], 2)) : c("", !0),
          u("div", {
            class: l(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-expanded": e.isExpanded
            }])
          }, [
            u("input", {
              type: d.value ? "text" : "password",
              class: l(["input", h.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: C
            }, null, 42, L),
            e.leftIcon ? (t(), y(B, {
              key: 0,
              class: l(["icon is-small is-left", s.value]),
              icon: e.leftIcon
            }, null, 8, ["class", "icon"])) : c("", !0),
            e.rightIcon ? (t(), y(B, {
              key: 1,
              class: l(["icon is-small is-right", s.value]),
              icon: e.rightIcon
            }, null, 8, ["class", "icon"])) : c("", !0)
          ], 2),
          o.$slots.right ? (t(), r("div", {
            key: 1,
            class: l(["control", s.value])
          }, [
            f(o.$slots, "right")
          ], 2)) : c("", !0),
          e.withToggle ? (t(), r("div", {
            key: 2,
            onClick: w,
            class: l(["control", s.value])
          }, [
            d.value ? (t(), y(v, {
              key: 0,
              icon: "eye",
              disabled: e.disabled,
              class: l(g.value)
            }, null, 8, ["disabled", "class"])) : (t(), y(v, {
              key: 1,
              icon: "eye-slash",
              disabled: e.disabled,
              class: l(g.value)
            }, null, 8, ["disabled", "class"]))
          ], 2)) : c("", !0)
        ], 2),
        u("div", x, [
          b(q, { error: e.error }, null, 8, ["error"])
        ])
      ]);
    };
  }
});
export {
  z as default
};
