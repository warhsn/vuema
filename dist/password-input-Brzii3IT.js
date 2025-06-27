import { defineComponent as E, ref as T, computed as p, resolveComponent as y, createElementBlock as d, openBlock as l, createVNode as v, createElementVNode as c, withCtx as $, renderSlot as m, normalizeClass as o, createCommentVNode as i, createBlock as u } from "vue";
import { _ as N } from "./errors-BZdmzG52.js";
import { _ as q } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
const L = ["type", "placeholder", "disabled", "value"], _ = { class: "control" }, P = "update:modelValue", z = /* @__PURE__ */ E({
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
  setup(b, { emit: k }) {
    const a = b, r = T(!1), I = k;
    function C(e) {
      const n = e.target;
      I(P, n.value);
    }
    function w() {
      r.value = !r.value;
    }
    const V = N(a), s = p(() => ({
      "is-small": a.isSmall,
      "is-medium": a.isMedium,
      "is-large": a.isLarge
    })), f = p(() => ({
      "is-danger": V.value,
      "is-rounded": a.isRounded,
      ...s.value
    })), h = p(() => {
      let e = [a.toggleClasses];
      for (const [n, t] of Object.entries(f.value))
        t && e.push(n);
      for (const [n, t] of Object.entries(s.value))
        t && e.push(n);
      return e;
    });
    return (e, n) => {
      const t = y("field-label"), g = y("b-icon"), B = y("icon-button");
      return l(), d("div", null, [
        v(t, { required: e.required }, {
          default: $(() => [
            m(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"]),
        c("div", {
          class: o(["field", {
            "has-addons": e.hasAddons || e.withToggle
          }])
        }, [
          e.$slots.left ? (l(), d("div", {
            key: 0,
            class: o(["control", s.value])
          }, [
            m(e.$slots, "left", {
              class: o(s.value)
            })
          ], 2)) : i("", !0),
          c("div", {
            class: o(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-expanded": e.isExpanded
            }])
          }, [
            c("input", {
              type: r.value ? "text" : "password",
              class: o(["input", f.value]),
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: e.modelValue,
              onInput: C
            }, null, 42, L),
            e.leftIcon ? (l(), u(g, {
              key: 0,
              class: o(["icon is-small is-left", s.value]),
              icon: e.leftIcon
            }, null, 8, ["class", "icon"])) : i("", !0),
            e.rightIcon ? (l(), u(g, {
              key: 1,
              class: o(["icon is-small is-right", s.value]),
              icon: e.rightIcon
            }, null, 8, ["class", "icon"])) : i("", !0)
          ], 2),
          e.$slots.right ? (l(), d("div", {
            key: 1,
            class: o(["control", s.value])
          }, [
            m(e.$slots, "right")
          ], 2)) : i("", !0),
          e.withToggle ? (l(), d("div", {
            key: 2,
            onClick: w,
            class: o(["control", s.value])
          }, [
            r.value ? (l(), u(B, {
              key: 0,
              icon: "eye",
              disabled: e.disabled,
              class: o(h.value)
            }, null, 8, ["disabled", "class"])) : (l(), u(B, {
              key: 1,
              icon: "eye-slash",
              disabled: e.disabled,
              class: o(h.value)
            }, null, 8, ["disabled", "class"]))
          ], 2)) : i("", !0)
        ], 2),
        c("div", _, [
          v(q, { error: e.error }, null, 8, ["error"])
        ])
      ]);
    };
  }
});
export {
  z as default
};
