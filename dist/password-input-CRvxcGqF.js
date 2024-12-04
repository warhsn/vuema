import { defineComponent as _, ref as $, computed as y, resolveComponent as m, openBlock as n, createElementBlock as d, createVNode as c, withCtx as h, renderSlot as f, createElementVNode as u, normalizeClass as o, createCommentVNode as i, createBlock as v } from "vue";
import { _ as N } from "./errors-BZdmzG52.js";
import { _ as T } from "./field-error.vue_vue_type_script_setup_true_lang-DiGo15DQ.js";
const q = ["type", "placeholder", "disabled", "value"], L = { class: "control" }, P = "update:modelValue", A = /* @__PURE__ */ _({
  __name: "password-input",
  props: {
    modelValue: {},
    withToggle: { type: Boolean },
    toggleClasses: {},
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
  setup(B, { emit: b }) {
    const l = B, k = b, r = $(!1);
    function I(e) {
      const a = e.target;
      k(P, a.value);
    }
    function w() {
      r.value = !r.value;
    }
    const C = N(l), s = y(() => ({
      "is-small": l.isSmall,
      "is-medium": l.isMedium,
      "is-large": l.isLarge
    })), g = y(() => ({
      "is-danger": C.value,
      "is-rounded": l.isRounded,
      ...s.value
    })), V = y(() => {
      let e = [l.toggleClasses];
      for (const [a, t] of Object.entries(g.value))
        t && e.push(a);
      for (const [a, t] of Object.entries(s.value))
        t && e.push(a);
      return e;
    });
    return (e, a) => {
      const t = m("field-label"), p = m("b-icon"), E = m("action-button");
      return n(), d("div", null, [
        c(t, { required: e.required }, {
          default: h(() => [
            f(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        u("div", {
          class: o(["field", {
            "has-addons": e.hasAddons || e.withToggle
          }])
        }, [
          e.$slots.left ? (n(), d("div", {
            key: 0,
            class: o(["control", s.value])
          }, [
            f(e.$slots, "left", {
              class: o(s.value)
            })
          ], 2)) : i("", !0),
          u("div", {
            class: o(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-expanded": e.isExpanded
            }])
          }, [
            u("input", {
              type: r.value ? "text" : "password",
              class: o(["input", g.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: I
            }, null, 42, q),
            e.leftIcon ? (n(), v(p, {
              key: 0,
              class: o(["icon is-small is-left", s.value]),
              icon: e.leftIcon
            }, null, 8, ["class", "icon"])) : i("", !0),
            e.rightIcon ? (n(), v(p, {
              key: 1,
              class: o(["icon is-small is-right", s.value]),
              icon: e.rightIcon
            }, null, 8, ["class", "icon"])) : i("", !0)
          ], 2),
          e.$slots.right ? (n(), d("div", {
            key: 1,
            class: o(["control", s.value])
          }, [
            f(e.$slots, "right")
          ], 2)) : i("", !0),
          e.withToggle ? (n(), d("div", {
            key: 2,
            class: o(["control", s.value])
          }, [
            c(E, {
              disabled: e.disabled,
              class: o(V.value),
              onClick: w
            }, {
              default: h(() => [
                c(p, {
                  icon: r.value ? "eye" : "eye-slash"
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["disabled", "class"])
          ], 2)) : i("", !0)
        ], 2),
        u("div", L, [
          c(T, { error: e.error }, null, 8, ["error"])
        ])
      ]);
    };
  }
});
export {
  A as default
};
