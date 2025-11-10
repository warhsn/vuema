import { defineComponent as oe, ref as C, computed as V, watch as ae, resolveComponent as q, createElementBlock as v, openBlock as c, createBlock as A, createCommentVNode as y, createElementVNode as g, createVNode as ue, withCtx as P, renderSlot as z, Fragment as R, renderList as U, createTextVNode as se, toDisplayString as L, normalizeClass as T, withDirectives as ie, withKeys as K, withModifiers as w, vModelText as re } from "vue";
import { _ as ce } from "./errors-BZdmzG52.js";
import { _ as de } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as fe } from "./sizes-tLhbz8lD.js";
import { _ as ve } from "./index-DUjqbKyF.js";
const me = { class: "search-input" }, pe = {
  key: 0,
  class: "tags is-marginless"
}, ye = ["onClick", "disabled"], he = ["placeholder", "disabled", "onKeydown"], ge = {
  key: 1,
  class: "dropdown-menu"
}, we = { class: "dropdown-content" }, be = ["onMousedown", "onMouseenter"], b = "update:modelValue", Be = "focus", Ve = "blur", Ie = /* @__PURE__ */ oe({
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
  setup(o, { emit: G }) {
    const l = o, H = fe(l), m = G, u = C(""), r = C(!1), s = C(0), i = C(null);
    function h() {
      return l.modelValue ? Array.isArray(l.modelValue) ? l.modelValue : [l.modelValue] : [];
    }
    function M() {
      if (l.emitFullObjects !== void 0)
        return l.emitFullObjects;
      const e = h();
      if (e.length === 0)
        return !1;
      const t = e[0];
      return typeof t == "object" && t !== null && t.hasOwnProperty(l.labelKey);
    }
    function N(e) {
      if (e && e[l.labelKey])
        return e[l.labelKey];
      if (l.items && l.items.length > 0) {
        const t = l.items.find((n) => {
          const d = f(n), a = f(e);
          return d === a;
        });
        if (t)
          return I(t);
      }
      return e[l.labelKey] || e.label || e.name || String(e);
    }
    function I(e) {
      return e ? e[l.labelKey] || e.label || e.name || String(e) : "";
    }
    function f(e) {
      return e ? e[l.valueKey] || e.value || e.id || e : null;
    }
    function S(e, t) {
      const n = f(e);
      return n ? String(n) : `item-${t}`;
    }
    const E = V(() => h()), k = V(() => l.allowNew && u.value && u.value.trim() !== "" && !J(u.value)), F = V(() => l.multiple || l.disabled || !l.modelValue ? !1 : Array.isArray(l.modelValue) ? l.modelValue.length > 0 : !0), p = V(() => {
      if (!l.items || l.items.length === 0) return [];
      if (!u.value)
        return l.items.filter((t) => !$(t));
      const e = u.value.toLowerCase();
      return l.items.filter((t) => I(t).toLowerCase().includes(e) && !$(t));
    });
    function $(e) {
      const t = h();
      if (t.length === 0) return !1;
      const n = f(e);
      return t.some((d) => f(d) === n);
    }
    function J(e) {
      return !l.items || l.items.length === 0 ? !1 : l.items.some(
        (t) => I(t).toLowerCase() === e.toLowerCase()
      );
    }
    function Q() {
      r.value = !0, s.value = 0, !l.multiple && l.modelValue && m(b, null);
    }
    function W() {
      r.value || (r.value = !0, s.value = 0);
    }
    const X = (e) => {
      i.value && (clearTimeout(i.value), i.value = null), !l.multiple && (e != null && e.target) && u.value && e.target.select(), r.value = !0, m(Be);
    }, Y = () => {
      i.value = setTimeout(() => {
        r.value = !1, m(Ve), i.value = null;
      }, 150);
    };
    function D(e) {
      if (i.value && (clearTimeout(i.value), i.value = null), !$(e)) {
        const t = M() ? e : f(e), n = l.multiple ? [...h(), t] : t;
        m(b, n);
      }
      u.value = "", s.value = 0, l.multiple || (r.value = !1);
    }
    function O(e) {
      if (i.value && (clearTimeout(i.value), i.value = null), l.allowNew && e && e.trim() !== "") {
        const t = {
          [l.valueKey]: `new-${Date.now()}`,
          [l.labelKey]: e.trim()
        }, n = M() ? t : f(t), d = l.multiple ? [...h(), n] : n;
        m(b, d), u.value = "", s.value = 0, l.multiple || (r.value = !1);
      }
    }
    function Z(e) {
      if (l.modelValue)
        if (!l.multiple)
          m(b, null);
        else {
          const t = f(e), n = h().filter((d) => f(d) !== t);
          m(b, n);
        }
    }
    function _() {
      i.value && (clearTimeout(i.value), i.value = null), m(b, null), u.value = "", r.value = !1;
    }
    function ee() {
      s.value >= 0 && s.value < p.value.length ? D(p.value[s.value]) : k.value && s.value === p.value.length && O(u.value);
    }
    function x(e) {
      if (!r.value) {
        r.value = !0;
        return;
      }
      const t = p.value.length + (k.value ? 1 : 0);
      if (t === 0) return;
      let n = s.value + e;
      n < 0 && (n = t - 1), n >= t && (n = 0), s.value = n;
    }
    function le() {
      r.value = !1, u.value = "", s.value = 0;
    }
    const te = ce(l), ne = V(() => ({
      "is-danger": te.value,
      "is-rounded": l.isRounded,
      ...H
    }));
    return ae(() => l.modelValue, (e) => {
      l.multiple || (e ? u.value = N(e) : u.value = "");
    }, { deep: !0, immediate: !0 }), (e, t) => {
      const n = q("field-label"), d = q("b-icon");
      return c(), v("div", null, [
        e.$slots.default || e.$slots.description ? (c(), A(n, {
          key: 0,
          required: o.required
        }, {
          description: P(() => [
            z(e.$slots, "description", {}, void 0, !0)
          ]),
          default: P(() => [
            z(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["required"])) : y("", !0),
        g("div", me, [
          E.value.length > 0 && o.withTags && o.multiple ? (c(), v("div", pe, [
            (c(!0), v(R, null, U(E.value, (a, B) => (c(), v("span", {
              class: "tag",
              key: S(a, B)
            }, [
              se(L(N(a)) + " ", 1),
              g("button", {
                class: "delete is-small",
                onClick: (j) => Z(a),
                disabled: o.disabled
              }, null, 8, ye)
            ]))), 128))
          ])) : y("", !0),
          g("div", {
            class: T(["control", {
              "has-icons-left": o.leftIcon,
              "has-icons-right": o.rightIcon || F.value,
              "is-loading": o.isLoading,
              "is-expanded": o.isExpanded
            }])
          }, [
            ie(g("input", {
              type: "text",
              class: T(["input", ne.value]),
              placeholder: o.searchPlaceholder || o.placeholder,
              disabled: o.disabled,
              "onUpdate:modelValue": t[0] || (t[0] = (a) => u.value = a),
              onInput: Q,
              onFocus: t[1] || (t[1] = (a) => X(a)),
              onBlur: Y,
              onClick: W,
              onKeydown: [
                K(w(ee, ["prevent"]), ["enter"]),
                t[2] || (t[2] = K(w((a) => x(1), ["prevent"]), ["down"])),
                t[3] || (t[3] = K(w((a) => x(-1), ["prevent"]), ["up"])),
                K(le, ["esc"])
              ]
            }, null, 42, he), [
              [re, u.value]
            ]),
            o.leftIcon ? (c(), A(d, {
              key: 0,
              class: "icon is-small is-left",
              icon: o.leftIcon,
              "icon-type": o.leftIconType
            }, null, 8, ["icon", "icon-type"])) : y("", !0),
            o.rightIcon ? (c(), A(d, {
              key: 1,
              class: "icon is-small is-right",
              icon: o.rightIcon,
              "icon-type": o.rightIconType
            }, null, 8, ["icon", "icon-type"])) : y("", !0),
            F.value ? (c(), v("span", {
              key: 2,
              class: "icon is-small is-right is-clickable clear-button",
              onMousedown: w(_, ["prevent"]),
              role: "button",
              "aria-label": "Clear selection"
            }, [...t[6] || (t[6] = [
              g("i", { class: "fas fa-times-circle" }, null, -1)
            ])], 32)) : y("", !0)
          ], 2),
          r.value && (p.value.length > 0 || k.value) ? (c(), v("div", ge, [
            g("div", we, [
              (c(!0), v(R, null, U(p.value, (a, B) => (c(), v("a", {
                key: S(a, B),
                class: T(["dropdown-item", { "is-active": B === s.value }]),
                onMousedown: w((j) => D(a), ["prevent"]),
                onMouseenter: (j) => s.value = B
              }, L(I(a)), 43, be))), 128)),
              k.value ? (c(), v("a", {
                key: 0,
                class: T(["dropdown-item", { "is-active": p.value.length === s.value }]),
                onMousedown: t[4] || (t[4] = w((a) => O(u.value), ["prevent"])),
                onMouseenter: t[5] || (t[5] = (a) => s.value = p.value.length)
              }, ' Add "' + L(u.value) + '" ', 35)) : y("", !0)
            ])
          ])) : y("", !0)
        ]),
        ue(de, { error: o.error }, null, 8, ["error"])
      ]);
    };
  }
}), Ae = /* @__PURE__ */ ve(Ie, [["__scopeId", "data-v-e67c2557"]]);
export {
  Ae as default
};
