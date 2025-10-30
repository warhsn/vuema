import { defineComponent as te, ref as T, computed as k, watch as ne, resolveComponent as j, createElementBlock as m, openBlock as c, createBlock as L, createCommentVNode as h, createElementVNode as w, createVNode as oe, withCtx as q, renderSlot as P, Fragment as z, renderList as R, createTextVNode as ae, toDisplayString as A, normalizeClass as C, withDirectives as ue, withKeys as K, withModifiers as b, vModelText as se } from "vue";
import { _ as ie } from "./errors-BZdmzG52.js";
import { _ as re } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as ce } from "./sizes-tLhbz8lD.js";
import { _ as de } from "./index-B246DAUR.js";
const fe = { class: "search-input" }, ve = {
  key: 0,
  class: "tags is-marginless"
}, me = ["onClick", "disabled"], pe = ["placeholder", "disabled", "onKeydown"], ye = {
  key: 1,
  class: "dropdown-menu"
}, he = { class: "dropdown-content" }, ge = ["onMousedown", "onMouseenter"], B = "update:modelValue", we = "focus", be = "blur", Be = /* @__PURE__ */ te({
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
    multiple: { type: Boolean, default: !0 },
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
  setup(o, { emit: U }) {
    const t = o, G = ce(t), p = U, u = T(""), i = T(!1), s = T(0), r = T(null);
    function y() {
      return t.modelValue ? Array.isArray(t.modelValue) ? t.modelValue : [t.modelValue] : [];
    }
    function N() {
      if (t.emitFullObjects !== void 0)
        return t.emitFullObjects;
      const e = y();
      if (e.length === 0)
        return !1;
      const l = e[0];
      return typeof l == "object" && l !== null && l.hasOwnProperty(t.labelKey);
    }
    function M(e) {
      if (e && e[t.labelKey])
        return e[t.labelKey];
      if (t.items && t.items.length > 0) {
        const l = t.items.find((n) => {
          const d = f(n), a = f(e);
          return d === a;
        });
        if (l)
          return I(l);
      }
      return e[t.labelKey] || e.label || e.name || String(e);
    }
    function I(e) {
      return e ? e[t.labelKey] || e.label || e.name || String(e) : "";
    }
    function f(e) {
      return e ? e[t.valueKey] || e.value || e.id || e : null;
    }
    function S(e, l) {
      const n = f(e);
      return n ? String(n) : `item-${l}`;
    }
    const E = k(() => y()), V = k(() => t.allowNew && u.value && u.value.trim() !== "" && !H(u.value)), v = k(() => {
      if (!t.items || t.items.length === 0) return [];
      if (!u.value)
        return t.items.filter((l) => !$(l));
      const e = u.value.toLowerCase();
      return t.items.filter((l) => I(l).toLowerCase().includes(e) && !$(l));
    });
    function $(e) {
      const l = y();
      if (l.length === 0) return !1;
      const n = f(e);
      return l.some((d) => f(d) === n);
    }
    function H(e) {
      return !t.items || t.items.length === 0 ? !1 : t.items.some(
        (l) => I(l).toLowerCase() === e.toLowerCase()
      );
    }
    function J() {
      i.value = !0, s.value = 0, !t.multiple && t.modelValue && p(B, null);
    }
    function Q() {
      i.value || (i.value = !0, s.value = 0);
    }
    const W = (e) => {
      r.value && (clearTimeout(r.value), r.value = null), !t.multiple && (e != null && e.target) && u.value && e.target.select(), i.value = !0, p(we);
    }, X = () => {
      r.value = setTimeout(() => {
        i.value = !1, p(be), r.value = null;
      }, 150);
    };
    function F(e) {
      if (r.value && (clearTimeout(r.value), r.value = null), !$(e)) {
        const l = N() ? e : f(e), n = t.multiple ? [...y(), l] : l;
        p(B, n);
      }
      u.value = "", s.value = 0, t.multiple || (i.value = !1);
    }
    function D(e) {
      if (r.value && (clearTimeout(r.value), r.value = null), t.allowNew && e && e.trim() !== "") {
        const l = {
          [t.valueKey]: `new-${Date.now()}`,
          [t.labelKey]: e.trim()
        }, n = N() ? l : f(l), d = t.multiple ? [...y(), n] : n;
        p(B, d), u.value = "", s.value = 0, t.multiple || (i.value = !1);
      }
    }
    function Y(e) {
      if (t.modelValue)
        if (!t.multiple)
          p(B, null);
        else {
          const l = f(e), n = y().filter((d) => f(d) !== l);
          p(B, n);
        }
    }
    function Z() {
      s.value >= 0 && s.value < v.value.length ? F(v.value[s.value]) : V.value && s.value === v.value.length && D(u.value);
    }
    function O(e) {
      if (!i.value) {
        i.value = !0;
        return;
      }
      const l = v.value.length + (V.value ? 1 : 0);
      if (l === 0) return;
      let n = s.value + e;
      n < 0 && (n = l - 1), n >= l && (n = 0), s.value = n;
    }
    function _() {
      i.value = !1, u.value = "", s.value = 0;
    }
    const ee = ie(t), le = k(() => ({
      "is-danger": ee.value,
      "is-rounded": t.isRounded,
      ...G
    }));
    return ne(() => t.modelValue, (e) => {
      t.multiple || (e ? u.value = M(e) : u.value = "");
    }, { deep: !0, immediate: !0 }), (e, l) => {
      const n = j("field-label"), d = j("b-icon");
      return c(), m("div", null, [
        e.$slots.default || e.$slots.description ? (c(), L(n, {
          key: 0,
          required: o.required
        }, {
          description: q(() => [
            P(e.$slots, "description", {}, void 0, !0)
          ]),
          default: q(() => [
            P(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["required"])) : h("", !0),
        w("div", fe, [
          E.value.length > 0 && o.withTags && o.multiple ? (c(), m("div", ve, [
            (c(!0), m(z, null, R(E.value, (a, g) => (c(), m("span", {
              class: "tag",
              key: S(a, g)
            }, [
              ae(A(M(a)) + " ", 1),
              w("button", {
                class: "delete is-small",
                onClick: (x) => Y(a),
                disabled: o.disabled
              }, null, 8, me)
            ]))), 128))
          ])) : h("", !0),
          w("div", {
            class: C(["control", {
              "has-icons-left": o.leftIcon,
              "has-icons-right": o.rightIcon,
              "is-loading": o.isLoading,
              "is-expanded": o.isExpanded
            }])
          }, [
            ue(w("input", {
              type: "text",
              class: C(["input", le.value]),
              placeholder: o.searchPlaceholder || o.placeholder,
              disabled: o.disabled,
              "onUpdate:modelValue": l[0] || (l[0] = (a) => u.value = a),
              onInput: J,
              onFocus: l[1] || (l[1] = (a) => W(a)),
              onBlur: X,
              onClick: Q,
              onKeydown: [
                K(b(Z, ["prevent"]), ["enter"]),
                l[2] || (l[2] = K(b((a) => O(1), ["prevent"]), ["down"])),
                l[3] || (l[3] = K(b((a) => O(-1), ["prevent"]), ["up"])),
                K(_, ["esc"])
              ]
            }, null, 42, pe), [
              [se, u.value]
            ]),
            o.leftIcon ? (c(), L(d, {
              key: 0,
              class: "icon is-small is-left",
              icon: o.leftIcon,
              "icon-type": o.leftIconType
            }, null, 8, ["icon", "icon-type"])) : h("", !0),
            o.rightIcon ? (c(), L(d, {
              key: 1,
              class: "icon is-small is-right",
              icon: o.rightIcon,
              "icon-type": o.rightIconType
            }, null, 8, ["icon", "icon-type"])) : h("", !0)
          ], 2),
          i.value && (v.value.length > 0 || V.value) ? (c(), m("div", ye, [
            w("div", he, [
              (c(!0), m(z, null, R(v.value, (a, g) => (c(), m("a", {
                key: S(a, g),
                class: C(["dropdown-item", { "is-active": g === s.value }]),
                onMousedown: b((x) => F(a), ["prevent"]),
                onMouseenter: (x) => s.value = g
              }, A(I(a)), 43, ge))), 128)),
              V.value ? (c(), m("a", {
                key: 0,
                class: C(["dropdown-item", { "is-active": v.value.length === s.value }]),
                onMousedown: l[4] || (l[4] = b((a) => D(u.value), ["prevent"])),
                onMouseenter: l[5] || (l[5] = (a) => s.value = v.value.length)
              }, ' Add "' + A(u.value) + '" ', 35)) : h("", !0)
            ])
          ])) : h("", !0)
        ]),
        oe(re, { error: o.error }, null, 8, ["error"])
      ]);
    };
  }
}), Ke = /* @__PURE__ */ de(Be, [["__scopeId", "data-v-ff2b925b"]]);
export {
  Ke as default
};
