import { defineComponent as E, resolveComponent as B, openBlock as a, createElementBlock as u, createVNode as g, withCtx as $, renderSlot as d, createElementVNode as f, normalizeClass as h, createCommentVNode as p, unref as I, createBlock as v } from "vue";
import { _ as q } from "./errors-BZdmzG52.js";
import { _ as A } from "./field-error.vue_vue_type_script_setup_true_lang-DiGo15DQ.js";
const L = () => {
  let i = "";
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = r.length;
  for (let l = 0; l < 10; l++)
    i += r.charAt(Math.floor(Math.random() * t));
  return i;
}, S = {
  key: 0,
  class: "control"
}, w = ["id", "placeholder", "autocomplete", "disabled", "value"], M = {
  key: 1,
  class: "control"
}, P = "update:modelValue", j = /* @__PURE__ */ E({
  __name: "number-input",
  props: {
    modelValue: {},
    min: {},
    max: {},
    decimals: {},
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
  setup(i, { emit: r }) {
    const t = i, l = L(), b = r, N = (e) => new Promise((m) => {
      const n = document.getElementById(l);
      n && (n.value = e), setTimeout(() => {
        m(!0);
      }, 100);
    });
    function V(e) {
      const n = e.target.value;
      let o = n.replace(/[^0-9.-]/g, "");
      t.min !== void 0 && Number(t.min) >= 0 && (o = n.replace(/[^0-9.]/g, "")), t.decimals || (o = o.replaceAll(".", ""));
      const y = o.split(".").length - 1;
      if (y > 1) {
        const s = o.split(".");
        o = s[0] + "." + s.slice(1).join("");
      }
      if (y) {
        const s = o.split(".");
        let C = s[1] || "";
        o = s[0] + "." + C.slice(0, t.decimals);
      }
      const c = Number(o);
      t.min !== void 0 && !isNaN(c) && c < t.min && (o = t.min.toString()), t.max !== void 0 && !isNaN(c) && c > t.max && (o = t.max.toString()), N(o).then(() => {
        b(P, o);
      });
    }
    const k = q(t);
    return (e, m) => {
      const n = B("field-label"), o = B("b-icon");
      return a(), u("div", null, [
        g(n, { required: e.required }, {
          default: $(() => [
            d(e.$slots, "default"),
            d(e.$slots, "description")
          ]),
          _: 3
        }, 8, ["required"]),
        f("div", {
          class: h(["field", { "has-addons": e.hasAddons }])
        }, [
          e.$slots.left ? (a(), u("div", S, [
            d(e.$slots, "left")
          ])) : p("", !0),
          f("div", {
            class: h(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-expanded": e.isExpanded
            }])
          }, [
            f("input", {
              id: I(l),
              type: "text",
              class: h(["input", { "is-danger": I(k) }]),
              placeholder: e.placeholder,
              autocomplete: e.autocomplete ? "on" : "off",
              disabled: e.disabled,
              value: e.modelValue,
              onInput: V
            }, null, 42, w),
            e.leftIcon ? (a(), v(o, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon
            }, null, 8, ["icon"])) : p("", !0),
            e.rightIcon ? (a(), v(o, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon
            }, null, 8, ["icon"])) : p("", !0)
          ], 2),
          e.$slots.right ? (a(), u("div", M, [
            d(e.$slots, "right")
          ])) : p("", !0),
          g(A, { error: e.error }, null, 8, ["error"])
        ], 2)
      ]);
    };
  }
});
export {
  j as default
};
