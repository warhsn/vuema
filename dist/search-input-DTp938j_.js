import { defineComponent as ee, ref as B, computed as k, watch as le, resolveComponent as F, createElementBlock as v, openBlock as i, createBlock as C, createCommentVNode as f, createElementVNode as h, createVNode as oe, withCtx as O, renderSlot as j, Fragment as A, renderList as q, createTextVNode as ne, toDisplayString as K, normalizeClass as V, withDirectives as te, withKeys as I, withModifiers as w, vModelText as ae } from "vue";
import { _ as se } from "./errors-BZdmzG52.js";
import { _ as ue } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as ie } from "./sizes-tLhbz8lD.js";
import { _ as re } from "./index-CG_6R7pT.js";
const de = { class: "search-input" }, ce = {
  key: 0,
  class: "tags is-marginless"
}, pe = ["onClick", "disabled"], ve = ["placeholder", "disabled", "onKeydown"], fe = {
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
    withTags: { type: Boolean, default: !0 },
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
  setup(P, { emit: z }) {
    const l = P, R = ie(l), m = z, s = B(""), r = B(!1), a = B(0), u = B(null);
    function L() {
      if (l.emitFullObjects !== void 0)
        return l.emitFullObjects;
      if (!l.modelValue || l.modelValue.length === 0)
        return !1;
      const e = l.modelValue[0];
      return typeof e == "object" && e !== null && e.hasOwnProperty(l.labelKey);
    }
    function _(e) {
      if (e && e[l.labelKey])
        return e[l.labelKey];
      if (l.items && l.items.length > 0) {
        const o = l.items.find((n) => {
          const c = d(n), t = d(e);
          return c === t;
        });
        if (o)
          return g(o);
      }
      return e[l.labelKey] || e.label || e.name || String(e);
    }
    function g(e) {
      return e ? e[l.labelKey] || e.label || e.name || String(e) : "";
    }
    function d(e) {
      return e ? e[l.valueKey] || e.value || e.id || e : null;
    }
    function N(e, o) {
      const n = d(e);
      return n ? String(n) : `item-${o}`;
    }
    const b = k(() => l.allowNew && s.value && s.value.trim() !== "" && !U(s.value)), p = k(() => {
      if (!l.items || l.items.length === 0) return [];
      if (!s.value)
        return l.items.filter((o) => !T(o));
      const e = s.value.toLowerCase();
      return l.items.filter((o) => g(o).toLowerCase().includes(e) && !T(o));
    });
    function T(e) {
      if (!l.modelValue || l.modelValue.length === 0) return !1;
      const o = d(e);
      return l.modelValue.some((n) => d(n) === o);
    }
    function U(e) {
      return !l.items || l.items.length === 0 ? !1 : l.items.some(
        (o) => g(o).toLowerCase() === e.toLowerCase()
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
      if (u.value && (clearTimeout(u.value), u.value = null), !T(e)) {
        const o = L() ? e : d(e), n = [...l.modelValue || [], o];
        m($, n);
      }
      s.value = "", a.value = 0;
    }
    function M(e) {
      if (u.value && (clearTimeout(u.value), u.value = null), l.allowNew && e && e.trim() !== "") {
        const o = {
          [l.valueKey]: `new-${Date.now()}`,
          [l.labelKey]: e.trim()
        }, n = L() ? o : d(o), c = [...l.modelValue || [], n];
        m($, c), s.value = "", a.value = 0;
      }
    }
    function W(e) {
      if (!l.modelValue) return;
      const o = d(e), n = l.modelValue.filter((c) => d(c) !== o);
      m($, n);
    }
    function X() {
      a.value >= 0 && a.value < p.value.length ? S(p.value[a.value]) : b.value && a.value === p.value.length && M(s.value);
    }
    function E(e) {
      if (!r.value) {
        r.value = !0;
        return;
      }
      const o = p.value.length + (b.value ? 1 : 0);
      if (o === 0) return;
      let n = a.value + e;
      n < 0 && (n = o - 1), n >= o && (n = 0), a.value = n;
    }
    function Y() {
      r.value = !1, s.value = "", a.value = 0;
    }
    const Z = se(l), x = k(() => ({
      "is-danger": Z.value,
      "is-rounded": l.isRounded,
      ...R
    }));
    return le(() => l.modelValue, (e) => {
    }, { deep: !0 }), (e, o) => {
      const n = F("field-label"), c = F("b-icon");
      return i(), v("div", null, [
        e.$slots.default || e.$slots.description ? (i(), C(n, {
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
        h("div", de, [
          e.modelValue && e.modelValue.length > 0 && e.withTags ? (i(), v("div", ce, [
            (i(!0), v(A, null, q(e.modelValue, (t, y) => (i(), v("span", {
              class: "tag",
              key: N(t, y)
            }, [
              ne(K(_(t)) + " ", 1),
              h("button", {
                class: "delete is-small",
                onClick: (D) => W(t),
                disabled: e.disabled
              }, null, 8, pe)
            ]))), 128))
          ])) : f("", !0),
          h("div", {
            class: V(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            te(h("input", {
              type: "text",
              class: V(["input", x.value]),
              placeholder: e.searchPlaceholder || e.placeholder,
              disabled: e.disabled,
              "onUpdate:modelValue": o[0] || (o[0] = (t) => s.value = t),
              onInput: G,
              onFocus: J,
              onBlur: Q,
              onClick: H,
              onKeydown: [
                I(w(X, ["prevent"]), ["enter"]),
                o[1] || (o[1] = I(w((t) => E(1), ["prevent"]), ["down"])),
                o[2] || (o[2] = I(w((t) => E(-1), ["prevent"]), ["up"])),
                I(Y, ["esc"])
              ]
            }, null, 42, ve), [
              [ae, s.value]
            ]),
            e.leftIcon ? (i(), C(c, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon,
              "icon-type": e.leftIconType
            }, null, 8, ["icon", "icon-type"])) : f("", !0),
            e.rightIcon ? (i(), C(c, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon,
              "icon-type": e.rightIconType
            }, null, 8, ["icon", "icon-type"])) : f("", !0)
          ], 2),
          r.value && (p.value.length > 0 || b.value) ? (i(), v("div", fe, [
            h("div", me, [
              (i(!0), v(A, null, q(p.value, (t, y) => (i(), v("a", {
                key: N(t, y),
                class: V(["dropdown-item", { "is-active": y === a.value }]),
                onMousedown: w((D) => S(t), ["prevent"]),
                onMouseenter: (D) => a.value = y
              }, K(g(t)), 43, ye))), 128)),
              b.value ? (i(), v("a", {
                key: 0,
                class: V(["dropdown-item", { "is-active": p.value.length === a.value }]),
                onMousedown: o[3] || (o[3] = w((t) => M(s.value), ["prevent"])),
                onMouseenter: o[4] || (o[4] = (t) => a.value = p.value.length)
              }, ' Add "' + K(s.value) + '" ', 35)) : f("", !0)
            ])
          ])) : f("", !0)
        ]),
        oe(ue, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), ke = /* @__PURE__ */ re(ge, [["__scopeId", "data-v-06a1289a"]]);
export {
  ke as default
};
