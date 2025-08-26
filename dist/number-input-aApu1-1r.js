import { defineComponent as S, computed as N, resolveComponent as k, createElementBlock as f, openBlock as s, createBlock as y, createCommentVNode as r, createElementVNode as h, withCtx as C, renderSlot as m, normalizeClass as c, createVNode as q, unref as A } from "vue";
import { _ as L } from "./errors-BZdmzG52.js";
import { _ as T } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as w } from "./sizes-tLhbz8lD.js";
const M = () => {
  let d = "";
  const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = p.length;
  for (let l = 0; l < 10; l++)
    d += p.charAt(Math.floor(Math.random() * o));
  return d;
}, P = ["id", "placeholder", "autocomplete", "disabled", "value"], R = "update:modelValue", D = /* @__PURE__ */ S({
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
  setup(d, { emit: p }) {
    const o = d, l = w(o), B = M(), V = p, E = (e) => new Promise((a) => {
      const n = document.getElementById(B);
      n && (n.value = e), setTimeout(() => {
        a(!0);
      }, 100);
    });
    function $(e) {
      const n = e.target.value;
      let t = n.replace(/[^0-9.-]/g, "");
      o.min !== void 0 && Number(o.min) >= 0 && (t = n.replace(/[^0-9.]/g, "")), o.decimals || (t = t.replaceAll(".", ""));
      const b = t.split(".").length - 1;
      if (b > 1) {
        const i = t.split(".");
        t = i[0] + "." + i.slice(1).join("");
      }
      if (b) {
        const i = t.split(".");
        let z = i[1] || "";
        t = i[0] + "." + z.slice(0, o.decimals);
      }
      const u = Number(t);
      o.min !== void 0 && !isNaN(u) && u < o.min && (t = o.min.toString()), o.max !== void 0 && !isNaN(u) && u > o.max && (t = o.max.toString()), E(t).then(() => {
        V(R, t);
      });
    }
    const g = L(o), v = N(() => ({
      "is-danger": g.value,
      "has-icons-left": o.leftIcon,
      "has-icons-right": o.rightIcon,
      ...l
    })), I = N(() => {
      const { "is-expanded": e, ...a } = l;
      return {
        "is-danger": g.value,
        "is-rounded": o.isRounded,
        ...a
      };
    });
    return (e, a) => {
      const n = k("field-label"), t = k("b-icon");
      return s(), f("div", null, [
        e.$slots.default ? (s(), y(n, {
          key: 0,
          required: e.required
        }, {
          description: C(() => [
            m(e.$slots, "description")
          ]),
          default: C(() => [
            m(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : r("", !0),
        h("div", {
          class: c(["field", { "has-addons": e.hasAddons }])
        }, [
          e.$slots.left ? (s(), f("div", {
            key: 0,
            class: c(["control", I.value])
          }, [
            m(e.$slots, "left")
          ], 2)) : r("", !0),
          h("div", {
            class: c(["control", v.value])
          }, [
            h("input", {
              id: A(B),
              type: "text",
              class: c(["input", v.value]),
              placeholder: e.placeholder,
              autocomplete: e.autocomplete ? "on" : "off",
              disabled: e.disabled,
              value: e.modelValue,
              onInput: $
            }, null, 42, P),
            e.leftIcon ? (s(), y(t, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon
            }, null, 8, ["icon"])) : r("", !0),
            e.rightIcon ? (s(), y(t, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon
            }, null, 8, ["icon"])) : r("", !0)
          ], 2),
          e.$slots.right ? (s(), f("div", {
            key: 1,
            class: c(["control", I.value])
          }, [
            m(e.$slots, "right")
          ], 2)) : r("", !0),
          q(T, { error: e.error }, null, 8, ["error"])
        ], 2)
      ]);
    };
  }
});
export {
  D as default
};
