import { defineComponent as T, ref as _, computed as y, resolveComponent as m, openBlock as n, createElementBlock as c, createVNode as d, withCtx as g, renderSlot as f, createElementVNode as u, normalizeClass as o, createCommentVNode as i, createBlock as B } from "vue";
import { _ as $ } from "./errors-BZdmzG52.js";
import { _ as N } from "./field-error.vue_vue_type_script_setup_true_lang-DiGo15DQ.js";
const q = ["type", "placeholder", "disabled", "value"], L = { class: "control" }, P = "update:modelValue", z = /* @__PURE__ */ T({
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
  setup(v, { emit: b }) {
    const l = v, I = b, r = _(!1);
    function k(e) {
      const a = e.target;
      I(P, a.value);
    }
    function C() {
      r.value = !r.value;
    }
    const w = $(l), s = y(() => ({
      "is-small": l.isSmall,
      "is-medium": l.isMedium,
      "is-large": l.isLarge
    })), h = y(() => ({
      "is-danger": w.value,
      "is-rounded": l.isRounded,
      ...s.value
    })), V = y(() => {
      let e = [l.toggleClasses];
      for (const [a, t] of Object.entries(h.value))
        t && e.push(a);
      for (const [a, t] of Object.entries(s.value))
        t && e.push(a);
      return e;
    });
    return (e, a) => {
      const t = m("field-label"), p = m("b-icon"), E = m("action-button");
      return n(), c("div", null, [
        d(t, { required: e.required }, {
          default: g(() => [
            f(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        u("div", {
          class: o(["field", {
            "has-addons": e.hasAddons || e.withToggle
          }])
        }, [
          e.$slots.left ? (n(), c("div", {
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
              class: o(["input", h.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: k
            }, null, 42, q),
            e.leftIcon ? (n(), B(p, {
              key: 0,
              class: o(["icon is-small is-left", s.value]),
              icon: e.leftIcon
            }, null, 8, ["class", "icon"])) : i("", !0),
            e.rightIcon ? (n(), B(p, {
              key: 1,
              class: o(["icon is-small is-right", s.value]),
              icon: e.rightIcon
            }, null, 8, ["class", "icon"])) : i("", !0)
          ], 2),
          e.$slots.right ? (n(), c("div", {
            key: 1,
            class: o(["control", s.value])
          }, [
            f(e.$slots, "right")
          ], 2)) : i("", !0),
          e.withToggle ? (n(), c("div", {
            key: 2,
            class: o(["control", s.value])
          }, [
            d(E, {
              disabled: e.disabled,
              class: o(V.value),
              onClick: C
            }, {
              default: g(() => [
                d(p, {
                  icon: r.value ? "eye" : "eye-slash"
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["disabled", "class"])
          ], 2)) : i("", !0)
        ], 2),
        u("div", L, [
          d(N, { error: e.error }, null, 8, ["error"])
        ])
      ]);
    };
  }
});
export {
  z as default
};
