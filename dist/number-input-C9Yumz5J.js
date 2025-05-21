import { defineComponent as S, computed as q, resolveComponent as I, createElementBlock as y, openBlock as a, createVNode as v, createElementVNode as h, withCtx as z, renderSlot as d, normalizeClass as i, createCommentVNode as m, unref as u, createBlock as b } from "vue";
import { _ as A } from "./errors-BZdmzG52.js";
import { _ as L } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as T } from "./sizes-tLhbz8lD.js";
const w = () => {
  let r = "";
  const c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = c.length;
  for (let l = 0; l < 10; l++)
    r += c.charAt(Math.floor(Math.random() * o));
  return r;
}, M = ["id", "placeholder", "autocomplete", "disabled", "value"], P = "update:modelValue", D = /* @__PURE__ */ S({
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
  setup(r, { emit: c }) {
    const o = r, l = T(o), B = w(), N = c, C = (e) => new Promise((f) => {
      const n = document.getElementById(B);
      n && (n.value = e), setTimeout(() => {
        f(!0);
      }, 100);
    });
    function V(e) {
      const n = e.target.value;
      let t = n.replace(/[^0-9.-]/g, "");
      o.min !== void 0 && Number(o.min) >= 0 && (t = n.replace(/[^0-9.]/g, "")), o.decimals || (t = t.replaceAll(".", ""));
      const g = t.split(".").length - 1;
      if (g > 1) {
        const s = t.split(".");
        t = s[0] + "." + s.slice(1).join("");
      }
      if (g) {
        const s = t.split(".");
        let $ = s[1] || "";
        t = s[0] + "." + $.slice(0, o.decimals);
      }
      const p = Number(t);
      o.min !== void 0 && !isNaN(p) && p < o.min && (t = o.min.toString()), o.max !== void 0 && !isNaN(p) && p > o.max && (t = o.max.toString()), C(t).then(() => {
        N(P, t);
      });
    }
    const k = A(o), E = q(() => ({
      "has-icons-left": o.leftIcon,
      "has-icons-right": o.rightIcon,
      ...l
    }));
    return (e, f) => {
      const n = I("field-label"), t = I("b-icon");
      return a(), y("div", null, [
        v(n, { required: e.required }, {
          default: z(() => [
            d(e.$slots, "default"),
            d(e.$slots, "description")
          ]),
          _: 3
        }, 8, ["required"]),
        h("div", {
          class: i(["field", { "has-addons": e.hasAddons }])
        }, [
          e.$slots.left ? (a(), y("div", {
            key: 0,
            class: i(["control", u(l)])
          }, [
            d(e.$slots, "left")
          ], 2)) : m("", !0),
          h("div", {
            class: i(["control", E.value])
          }, [
            h("input", {
              id: u(B),
              type: "text",
              class: i(["input", { "is-danger": u(k) }]),
              placeholder: e.placeholder,
              autocomplete: e.autocomplete ? "on" : "off",
              disabled: e.disabled,
              value: e.modelValue,
              onInput: V
            }, null, 42, M),
            e.leftIcon ? (a(), b(t, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon
            }, null, 8, ["icon"])) : m("", !0),
            e.rightIcon ? (a(), b(t, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon
            }, null, 8, ["icon"])) : m("", !0)
          ], 2),
          e.$slots.right ? (a(), y("div", {
            key: 1,
            class: i(["control", u(l)])
          }, [
            d(e.$slots, "right")
          ], 2)) : m("", !0),
          v(L, { error: e.error }, null, 8, ["error"])
        ], 2)
      ]);
    };
  }
});
export {
  D as default
};
