import { defineComponent as ee, ref as V, computed as C, watch as le, resolveComponent as F, createElementBlock as p, openBlock as i, createBlock as T, createCommentVNode as f, createElementVNode as w, createVNode as oe, withCtx as O, renderSlot as j, Fragment as A, renderList as q, createTextVNode as ne, toDisplayString as K, normalizeClass as B, withDirectives as te, withKeys as I, withModifiers as g, vModelText as ae } from "vue";
import { _ as se } from "./errors-BZdmzG52.js";
import { _ as ue } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as ie } from "./sizes-tLhbz8lD.js";
import { _ as re } from "./index-DCDRMJjf.js";
const de = { class: "search-input" }, ce = {
  key: 0,
  class: "tags is-marginless"
}, ve = ["onClick", "disabled"], pe = ["placeholder", "disabled", "onKeydown"], fe = {
  key: 1,
  class: "dropdown-menu"
}, me = { class: "dropdown-content" }, ye = ["onMousedown", "onMouseenter"], $ = "update:modelValue", he = "focus", we = "blur", ge = /* @__PURE__ */ ee({
  __name: "search-input",
  props: {
    modelValue: { default: () => [] },
    items: {},
    valueKey: { default: "value" },
    labelKey: { default: "label" },
    searchPlaceholder: { default: "Search..." },
    allowNew: { type: Boolean, default: !1 },
    emitFullObjects: { type: Boolean, default: !1 },
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
  setup(P, { emit: _ }) {
    const l = P, z = ie(l), m = _, s = V(""), r = V(!1), a = V(0), u = V(null);
    function L() {
      if (l.emitFullObjects !== void 0)
        return l.emitFullObjects;
      if (!l.modelValue || l.modelValue.length === 0)
        return !1;
      const e = l.modelValue[0];
      return typeof e == "object" && e !== null && e.hasOwnProperty(l.labelKey);
    }
    function R(e) {
      if (e && e[l.labelKey])
        return e[l.labelKey];
      if (l.items && l.items.length > 0) {
        const o = l.items.find((n) => {
          const v = d(n), t = d(e);
          return v === t;
        });
        if (o)
          return b(o);
      }
      return e[l.labelKey] || e.label || e.name || String(e);
    }
    function b(e) {
      return e ? e[l.labelKey] || e.label || e.name || String(e) : "";
    }
    function d(e) {
      return e ? e[l.valueKey] || e.value || e.id || e : null;
    }
    function N(e, o) {
      const n = d(e);
      return n ? String(n) : `item-${o}`;
    }
    const y = C(() => l.allowNew && s.value && s.value.trim() !== "" && !U(s.value)), c = C(() => {
      if (!l.items || l.items.length === 0) return [];
      if (!s.value)
        return l.items.filter((o) => !k(o));
      const e = s.value.toLowerCase();
      return l.items.filter((o) => b(o).toLowerCase().includes(e) && !k(o));
    });
    function k(e) {
      if (!l.modelValue || l.modelValue.length === 0) return !1;
      const o = d(e);
      return l.modelValue.some((n) => d(n) === o);
    }
    function U(e) {
      return !l.items || l.items.length === 0 ? !1 : l.items.some(
        (o) => b(o).toLowerCase() === e.toLowerCase()
      );
    }
    function G() {
      r.value = !0, a.value = 0;
    }
    function H() {
      r.value || (r.value = !0, a.value = 0);
    }
    const J = () => {
      u.value && (clearTimeout(u.value), u.value = null), r.value = !0, m(he);
    }, Q = () => {
      u.value = setTimeout(() => {
        r.value = !1, m(we), u.value = null;
      }, 150);
    };
    function S(e) {
      if (u.value && (clearTimeout(u.value), u.value = null), !k(e)) {
        const o = L() ? e : d(e), n = [...l.modelValue || [], o];
        m($, n);
      }
      s.value = "", a.value = 0;
    }
    function M(e) {
      if (u.value && (clearTimeout(u.value), u.value = null), l.allowNew && e && e.trim() !== "") {
        const o = {
          [l.valueKey]: `new-${Date.now()}`,
          // Generate a unique ID
          [l.labelKey]: e.trim()
        }, n = L() ? o : d(o), v = [...l.modelValue || [], n];
        m($, v), s.value = "", a.value = 0;
      }
    }
    function W(e) {
      if (!l.modelValue) return;
      const o = d(e), n = l.modelValue.filter((v) => d(v) !== o);
      m($, n);
    }
    function X() {
      c.value.length + (y.value ? 1 : 0), a.value >= 0 && a.value < c.value.length ? S(c.value[a.value]) : y.value && a.value === c.value.length && M(s.value);
    }
    function E(e) {
      if (!r.value) {
        r.value = !0;
        return;
      }
      const o = c.value.length + (y.value ? 1 : 0);
      if (o === 0) return;
      let n = a.value + e;
      n < 0 && (n = o - 1), n >= o && (n = 0), a.value = n;
    }
    function Y() {
      r.value = !1, s.value = "", a.value = 0;
    }
    const Z = se(l), x = C(() => ({
      "is-danger": Z.value,
      "is-rounded": l.isRounded,
      ...z
    }));
    return le(() => l.modelValue, (e) => {
    }, { deep: !0 }), (e, o) => {
      const n = F("field-label"), v = F("b-icon");
      return i(), p("div", null, [
        e.$slots.default || e.$slots.description ? (i(), T(n, {
          key: 0,
          required: e.required
        }, {
          description: O(() => [
            j(e.$slots, "description", {}, void 0, !0)
          ]),
          default: O(() => [
            j(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["required"])) : f("", !0),
        w("div", de, [
          e.modelValue && e.modelValue.length > 0 ? (i(), p("div", ce, [
            (i(!0), p(A, null, q(e.modelValue, (t, h) => (i(), p("span", {
              class: "tag",
              key: N(t, h)
            }, [
              ne(K(R(t)) + " ", 1),
              w("button", {
                class: "delete is-small",
                onClick: (D) => W(t),
                disabled: e.disabled
              }, null, 8, ve)
            ]))), 128))
          ])) : f("", !0),
          w("div", {
            class: B(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            te(w("input", {
              type: "text",
              class: B(["input", x.value]),
              placeholder: e.searchPlaceholder || e.placeholder,
              disabled: e.disabled,
              "onUpdate:modelValue": o[0] || (o[0] = (t) => s.value = t),
              onInput: G,
              onFocus: J,
              onBlur: Q,
              onClick: H,
              onKeydown: [
                I(g(X, ["prevent"]), ["enter"]),
                o[1] || (o[1] = I(g((t) => E(1), ["prevent"]), ["down"])),
                o[2] || (o[2] = I(g((t) => E(-1), ["prevent"]), ["up"])),
                I(Y, ["esc"])
              ]
            }, null, 42, pe), [
              [ae, s.value]
            ]),
            e.leftIcon ? (i(), T(v, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon,
              "icon-type": e.leftIconType
            }, null, 8, ["icon", "icon-type"])) : f("", !0),
            e.rightIcon ? (i(), T(v, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon,
              "icon-type": e.rightIconType
            }, null, 8, ["icon", "icon-type"])) : f("", !0)
          ], 2),
          r.value && (c.value.length > 0 || y.value) ? (i(), p("div", fe, [
            w("div", me, [
              (i(!0), p(A, null, q(c.value, (t, h) => (i(), p("a", {
                key: N(t, h),
                class: B(["dropdown-item", { "is-active": h === a.value }]),
                onMousedown: g((D) => S(t), ["prevent"]),
                onMouseenter: (D) => a.value = h
              }, K(b(t)), 43, ye))), 128)),
              y.value ? (i(), p("a", {
                key: 0,
                class: B(["dropdown-item", { "is-active": c.value.length === a.value }]),
                onMousedown: o[3] || (o[3] = g((t) => M(s.value), ["prevent"])),
                onMouseenter: o[4] || (o[4] = (t) => a.value = c.value.length)
              }, ' Add "' + K(s.value) + '" ', 35)) : f("", !0)
            ])
          ])) : f("", !0)
        ]),
        oe(ue, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), Ce = /* @__PURE__ */ re(ge, [["__scopeId", "data-v-f3b97951"]]);
export {
  Ce as default
};
