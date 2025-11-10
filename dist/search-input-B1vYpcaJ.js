import { defineComponent as oe, ref as T, computed as V, watch as ae, resolveComponent as q, createElementBlock as v, openBlock as c, normalizeClass as I, createBlock as A, createCommentVNode as y, createElementVNode as h, createVNode as ue, withCtx as P, renderSlot as z, Fragment as R, renderList as U, createTextVNode as se, toDisplayString as L, withDirectives as ie, withKeys as K, withModifiers as w, vModelText as re } from "vue";
import { _ as ce } from "./errors-BZdmzG52.js";
import { _ as de } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as fe } from "./sizes-tLhbz8lD.js";
import { _ as ve } from "./index-BFie7iaW.js";
const me = { class: "search-input" }, pe = {
  key: 0,
  class: "tags is-marginless"
}, ye = ["onClick", "disabled"], he = { class: "field" }, ge = ["placeholder", "disabled", "onKeydown"], we = {
  key: 1,
  class: "dropdown-menu"
}, be = { class: "dropdown-content" }, Be = ["onMousedown", "onMouseenter"], b = "update:modelValue", Ve = "focus", Ie = "blur", Ce = /* @__PURE__ */ oe({
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
    const t = o, H = fe(t), m = G, u = T(""), r = T(!1), s = T(0), i = T(null);
    function g() {
      return t.modelValue ? Array.isArray(t.modelValue) ? t.modelValue : [t.modelValue] : [];
    }
    function M() {
      if (t.emitFullObjects !== void 0)
        return t.emitFullObjects;
      const e = g();
      if (e.length === 0)
        return !1;
      const l = e[0];
      return typeof l == "object" && l !== null && l.hasOwnProperty(t.labelKey);
    }
    function N(e) {
      if (e && e[t.labelKey])
        return e[t.labelKey];
      if (t.items && t.items.length > 0) {
        const l = t.items.find((n) => {
          const d = f(n), a = f(e);
          return d === a;
        });
        if (l)
          return C(l);
      }
      return e[t.labelKey] || e.label || e.name || String(e);
    }
    function C(e) {
      return e ? e[t.labelKey] || e.label || e.name || String(e) : "";
    }
    function f(e) {
      return e ? e[t.valueKey] || e.value || e.id || e : null;
    }
    function S(e, l) {
      const n = f(e);
      return n ? String(n) : `item-${l}`;
    }
    const E = V(() => g()), k = V(() => t.allowNew && u.value && u.value.trim() !== "" && !J(u.value)), x = V(() => t.multiple || t.disabled || !t.modelValue ? !1 : Array.isArray(t.modelValue) ? t.modelValue.length > 0 : !0), p = V(() => {
      if (!t.items || t.items.length === 0) return [];
      if (!u.value)
        return t.items.filter((l) => !$(l));
      const e = u.value.toLowerCase();
      return t.items.filter((l) => C(l).toLowerCase().includes(e) && !$(l));
    });
    function $(e) {
      const l = g();
      if (l.length === 0) return !1;
      const n = f(e);
      return l.some((d) => f(d) === n);
    }
    function J(e) {
      return !t.items || t.items.length === 0 ? !1 : t.items.some(
        (l) => C(l).toLowerCase() === e.toLowerCase()
      );
    }
    function Q() {
      r.value = !0, s.value = 0, !t.multiple && t.modelValue && m(b, null);
    }
    function W() {
      r.value || (r.value = !0, s.value = 0);
    }
    const X = (e) => {
      i.value && (clearTimeout(i.value), i.value = null), !t.multiple && (e != null && e.target) && u.value && e.target.select(), r.value = !0, m(Ve);
    }, Y = () => {
      i.value = setTimeout(() => {
        r.value = !1, m(Ie), i.value = null;
      }, 150);
    };
    function F(e) {
      if (i.value && (clearTimeout(i.value), i.value = null), !$(e)) {
        const l = M() ? e : f(e), n = t.multiple ? [...g(), l] : l;
        m(b, n);
      }
      u.value = "", s.value = 0, t.multiple || (r.value = !1);
    }
    function D(e) {
      if (i.value && (clearTimeout(i.value), i.value = null), t.allowNew && e && e.trim() !== "") {
        const l = {
          [t.valueKey]: `new-${Date.now()}`,
          [t.labelKey]: e.trim()
        }, n = M() ? l : f(l), d = t.multiple ? [...g(), n] : n;
        m(b, d), u.value = "", s.value = 0, t.multiple || (r.value = !1);
      }
    }
    function Z(e) {
      if (t.modelValue)
        if (!t.multiple)
          m(b, null);
        else {
          const l = f(e), n = g().filter((d) => f(d) !== l);
          m(b, n);
        }
    }
    function _() {
      i.value && (clearTimeout(i.value), i.value = null), m(b, null), u.value = "", r.value = !1;
    }
    function ee() {
      s.value >= 0 && s.value < p.value.length ? F(p.value[s.value]) : k.value && s.value === p.value.length && D(u.value);
    }
    function O(e) {
      if (!r.value) {
        r.value = !0;
        return;
      }
      const l = p.value.length + (k.value ? 1 : 0);
      if (l === 0) return;
      let n = s.value + e;
      n < 0 && (n = l - 1), n >= l && (n = 0), s.value = n;
    }
    function le() {
      r.value = !1, u.value = "", s.value = 0;
    }
    const te = ce(t), ne = V(() => {
      const e = {
        "is-danger": te.value,
        "is-rounded": t.isRounded,
        ...H
      };
      return t.classes && t.classes.split(" ").forEach((l) => {
        l.trim() && (e[l.trim()] = !0);
      }), e;
    });
    return ae(() => t.modelValue, (e) => {
      t.multiple || (e ? u.value = N(e) : u.value = "");
    }, { deep: !0, immediate: !0 }), (e, l) => {
      const n = q("field-label"), d = q("b-icon");
      return c(), v("div", {
        class: I({ "is-flex-grow-1": o.isExpanded })
      }, [
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
        h("div", me, [
          E.value.length > 0 && o.withTags && o.multiple ? (c(), v("div", pe, [
            (c(!0), v(R, null, U(E.value, (a, B) => (c(), v("span", {
              class: "tag",
              key: S(a, B)
            }, [
              se(L(N(a)) + " ", 1),
              h("button", {
                class: "delete is-small",
                onClick: (j) => Z(a),
                disabled: o.disabled
              }, null, 8, ye)
            ]))), 128))
          ])) : y("", !0),
          h("div", he, [
            h("div", {
              class: I(["control", {
                "has-icons-left": o.leftIcon,
                "has-icons-right": o.rightIcon || x.value,
                "is-loading": o.isLoading,
                "is-expanded": o.isExpanded
              }])
            }, [
              ie(h("input", {
                type: "text",
                class: I(["input", ne.value]),
                placeholder: o.searchPlaceholder || o.placeholder,
                disabled: o.disabled,
                "onUpdate:modelValue": l[0] || (l[0] = (a) => u.value = a),
                onInput: Q,
                onFocus: l[1] || (l[1] = (a) => X(a)),
                onBlur: Y,
                onClick: W,
                onKeydown: [
                  K(w(ee, ["prevent"]), ["enter"]),
                  l[2] || (l[2] = K(w((a) => O(1), ["prevent"]), ["down"])),
                  l[3] || (l[3] = K(w((a) => O(-1), ["prevent"]), ["up"])),
                  K(le, ["esc"])
                ]
              }, null, 42, ge), [
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
              x.value ? (c(), v("span", {
                key: 2,
                class: "icon is-small is-right is-clickable clear-button",
                onMousedown: w(_, ["prevent"]),
                role: "button",
                "aria-label": "Clear selection"
              }, [...l[6] || (l[6] = [
                h("i", { class: "fas fa-times-circle" }, null, -1)
              ])], 32)) : y("", !0)
            ], 2)
          ]),
          r.value && (p.value.length > 0 || k.value) ? (c(), v("div", we, [
            h("div", be, [
              (c(!0), v(R, null, U(p.value, (a, B) => (c(), v("a", {
                key: S(a, B),
                class: I(["dropdown-item", { "is-active": B === s.value }]),
                onMousedown: w((j) => F(a), ["prevent"]),
                onMouseenter: (j) => s.value = B
              }, L(C(a)), 43, Be))), 128)),
              k.value ? (c(), v("a", {
                key: 0,
                class: I(["dropdown-item", { "is-active": p.value.length === s.value }]),
                onMousedown: l[4] || (l[4] = w((a) => D(u.value), ["prevent"])),
                onMouseenter: l[5] || (l[5] = (a) => s.value = p.value.length)
              }, ' Add "' + L(u.value) + '" ', 35)) : y("", !0)
            ])
          ])) : y("", !0)
        ]),
        ue(de, { error: o.error }, null, 8, ["error"])
      ], 2);
    };
  }
}), Le = /* @__PURE__ */ ve(Ce, [["__scopeId", "data-v-6cd20c27"]]);
export {
  Le as default
};
