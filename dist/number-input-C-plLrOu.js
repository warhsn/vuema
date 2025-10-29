import { defineComponent as z, computed as N, resolveComponent as k, createElementBlock as f, openBlock as s, createBlock as y, createCommentVNode as r, createElementVNode as h, withCtx as C, renderSlot as p, normalizeClass as d, createVNode as S, unref as q } from "vue";
import { _ as A } from "./errors-BZdmzG52.js";
import { _ as L } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as T } from "./sizes-tLhbz8lD.js";
const w = () => {
  let t = "";
  const u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = u.length;
  for (let a = 0; a < 10; a++)
    t += u.charAt(Math.floor(Math.random() * e));
  return t;
}, M = ["id", "placeholder", "autocomplete", "disabled", "value"], P = "update:modelValue", D = /* @__PURE__ */ z({
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
  setup(t, { emit: u }) {
    const e = t, a = T(e), B = w(), V = u, E = (n) => new Promise((i) => {
      const l = document.getElementById(B);
      l && (l.value = n), setTimeout(() => {
        i(!0);
      }, 100);
    });
    function $(n) {
      const l = n.target.value;
      let o = l.replace(/[^0-9.-]/g, "");
      e.min !== void 0 && Number(e.min) >= 0 && (o = l.replace(/[^0-9.]/g, "")), e.decimals || (o = o.replaceAll(".", ""));
      const b = o.split(".").length - 1;
      if (b > 1) {
        const c = o.split(".");
        o = c[0] + "." + c.slice(1).join("");
      }
      if (b) {
        const c = o.split(".");
        let x = c[1] || "";
        o = c[0] + "." + x.slice(0, e.decimals);
      }
      const m = Number(o);
      e.min !== void 0 && !isNaN(m) && m < e.min && (o = e.min.toString()), e.max !== void 0 && !isNaN(m) && m > e.max && (o = e.max.toString()), E(o).then(() => {
        V(P, o);
      });
    }
    const g = A(e), v = N(() => ({
      "is-danger": g.value,
      "has-icons-left": e.leftIcon,
      "has-icons-right": e.rightIcon,
      ...a
    })), I = N(() => {
      const { "is-expanded": n, ...i } = a;
      return {
        "is-danger": g.value,
        "is-rounded": e.isRounded,
        ...i
      };
    });
    return (n, i) => {
      const l = k("field-label"), o = k("b-icon");
      return s(), f("div", null, [
        n.$slots.default ? (s(), y(l, {
          key: 0,
          required: t.required
        }, {
          description: C(() => [
            p(n.$slots, "description")
          ]),
          default: C(() => [
            p(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : r("", !0),
        h("div", {
          class: d(["field", { "has-addons": t.hasAddons }])
        }, [
          n.$slots.left ? (s(), f("div", {
            key: 0,
            class: d(["control", I.value])
          }, [
            p(n.$slots, "left")
          ], 2)) : r("", !0),
          h("div", {
            class: d(["control", v.value])
          }, [
            h("input", {
              id: q(B),
              type: "text",
              class: d(["input", v.value]),
              placeholder: t.placeholder,
              autocomplete: t.autocomplete ? "on" : "off",
              disabled: t.disabled,
              value: t.modelValue,
              onInput: $
            }, null, 42, M),
            t.leftIcon ? (s(), y(o, {
              key: 0,
              class: "icon is-small is-left",
              icon: t.leftIcon
            }, null, 8, ["icon"])) : r("", !0),
            t.rightIcon ? (s(), y(o, {
              key: 1,
              class: "icon is-small is-right",
              icon: t.rightIcon
            }, null, 8, ["icon"])) : r("", !0)
          ], 2),
          n.$slots.right ? (s(), f("div", {
            key: 1,
            class: d(["control", I.value])
          }, [
            p(n.$slots, "right")
          ], 2)) : r("", !0),
          S(L, { error: t.error }, null, 8, ["error"])
        ], 2)
      ]);
    };
  }
});
export {
  D as default
};
