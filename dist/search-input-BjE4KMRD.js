import { defineComponent as oe, ref as C, computed as I, watch as ae, resolveComponent as q, createElementBlock as f, openBlock as c, createBlock as L, createCommentVNode as y, createElementVNode as g, createVNode as ue, withCtx as P, renderSlot as z, Fragment as R, renderList as U, createTextVNode as se, toDisplayString as A, normalizeClass as T, withDirectives as ie, withKeys as K, withModifiers as w, vModelText as re } from "vue";
import { _ as ce } from "./errors-BZdmzG52.js";
import { _ as de } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as ve } from "./sizes-tLhbz8lD.js";
import { _ as fe } from "./index-B1o-IuE6.js";
const me = { class: "search-input" }, pe = {
  key: 0,
  class: "tags is-marginless"
}, ye = ["onClick", "disabled"], he = ["placeholder", "disabled", "onKeydown"], ge = {
  key: 1,
  class: "dropdown-menu"
}, we = { class: "dropdown-content" }, be = ["onMousedown", "onMouseenter"], b = "update:modelValue", Be = "focus", Ie = "blur", Ve = /* @__PURE__ */ oe({
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
    const t = o, H = ve(t), m = G, u = C(""), r = C(!1), s = C(0), i = C(null);
    function h() {
      return t.modelValue ? Array.isArray(t.modelValue) ? t.modelValue : [t.modelValue] : [];
    }
    function M() {
      if (t.emitFullObjects !== void 0)
        return t.emitFullObjects;
      const e = h();
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
          const d = v(n), a = v(e);
          return d === a;
        });
        if (l)
          return V(l);
      }
      return e[t.labelKey] || e.label || e.name || String(e);
    }
    function V(e) {
      return e ? e[t.labelKey] || e.label || e.name || String(e) : "";
    }
    function v(e) {
      return e ? e[t.valueKey] || e.value || e.id || e : null;
    }
    function S(e, l) {
      const n = v(e);
      return n ? String(n) : `item-${l}`;
    }
    const E = I(() => h()), k = I(() => t.allowNew && u.value && u.value.trim() !== "" && !J(u.value)), F = I(() => !t.multiple && t.modelValue && !t.disabled), p = I(() => {
      if (!t.items || t.items.length === 0) return [];
      if (!u.value)
        return t.items.filter((l) => !$(l));
      const e = u.value.toLowerCase();
      return t.items.filter((l) => V(l).toLowerCase().includes(e) && !$(l));
    });
    function $(e) {
      const l = h();
      if (l.length === 0) return !1;
      const n = v(e);
      return l.some((d) => v(d) === n);
    }
    function J(e) {
      return !t.items || t.items.length === 0 ? !1 : t.items.some(
        (l) => V(l).toLowerCase() === e.toLowerCase()
      );
    }
    function Q() {
      r.value = !0, s.value = 0, !t.multiple && t.modelValue && m(b, null);
    }
    function W() {
      r.value || (r.value = !0, s.value = 0);
    }
    const X = (e) => {
      i.value && (clearTimeout(i.value), i.value = null), !t.multiple && (e != null && e.target) && u.value && e.target.select(), r.value = !0, m(Be);
    }, Y = () => {
      i.value = setTimeout(() => {
        r.value = !1, m(Ie), i.value = null;
      }, 150);
    };
    function D(e) {
      if (i.value && (clearTimeout(i.value), i.value = null), !$(e)) {
        const l = M() ? e : v(e), n = t.multiple ? [...h(), l] : l;
        m(b, n);
      }
      u.value = "", s.value = 0, t.multiple || (r.value = !1);
    }
    function O(e) {
      if (i.value && (clearTimeout(i.value), i.value = null), t.allowNew && e && e.trim() !== "") {
        const l = {
          [t.valueKey]: `new-${Date.now()}`,
          [t.labelKey]: e.trim()
        }, n = M() ? l : v(l), d = t.multiple ? [...h(), n] : n;
        m(b, d), u.value = "", s.value = 0, t.multiple || (r.value = !1);
      }
    }
    function Z(e) {
      if (t.modelValue)
        if (!t.multiple)
          m(b, null);
        else {
          const l = v(e), n = h().filter((d) => v(d) !== l);
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
      const l = p.value.length + (k.value ? 1 : 0);
      if (l === 0) return;
      let n = s.value + e;
      n < 0 && (n = l - 1), n >= l && (n = 0), s.value = n;
    }
    function le() {
      r.value = !1, u.value = "", s.value = 0;
    }
    const te = ce(t), ne = I(() => ({
      "is-danger": te.value,
      "is-rounded": t.isRounded,
      ...H
    }));
    return ae(() => t.modelValue, (e) => {
      t.multiple || (e ? u.value = N(e) : u.value = "");
    }, { deep: !0, immediate: !0 }), (e, l) => {
      const n = q("field-label"), d = q("b-icon");
      return c(), f("div", null, [
        e.$slots.default || e.$slots.description ? (c(), L(n, {
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
          E.value.length > 0 && o.withTags && o.multiple ? (c(), f("div", pe, [
            (c(!0), f(R, null, U(E.value, (a, B) => (c(), f("span", {
              class: "tag",
              key: S(a, B)
            }, [
              se(A(N(a)) + " ", 1),
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
              "onUpdate:modelValue": l[0] || (l[0] = (a) => u.value = a),
              onInput: Q,
              onFocus: l[1] || (l[1] = (a) => X(a)),
              onBlur: Y,
              onClick: W,
              onKeydown: [
                K(w(ee, ["prevent"]), ["enter"]),
                l[2] || (l[2] = K(w((a) => x(1), ["prevent"]), ["down"])),
                l[3] || (l[3] = K(w((a) => x(-1), ["prevent"]), ["up"])),
                K(le, ["esc"])
              ]
            }, null, 42, he), [
              [re, u.value]
            ]),
            o.leftIcon ? (c(), L(d, {
              key: 0,
              class: "icon is-small is-left",
              icon: o.leftIcon,
              "icon-type": o.leftIconType
            }, null, 8, ["icon", "icon-type"])) : y("", !0),
            o.rightIcon ? (c(), L(d, {
              key: 1,
              class: "icon is-small is-right",
              icon: o.rightIcon,
              "icon-type": o.rightIconType
            }, null, 8, ["icon", "icon-type"])) : y("", !0),
            F.value ? (c(), f("span", {
              key: 2,
              class: "icon is-small is-right is-clickable clear-button",
              onMousedown: w(_, ["prevent"]),
              role: "button",
              "aria-label": "Clear selection"
            }, [...l[6] || (l[6] = [
              g("i", { class: "fas fa-times-circle" }, null, -1)
            ])], 32)) : y("", !0)
          ], 2),
          r.value && (p.value.length > 0 || k.value) ? (c(), f("div", ge, [
            g("div", we, [
              (c(!0), f(R, null, U(p.value, (a, B) => (c(), f("a", {
                key: S(a, B),
                class: T(["dropdown-item", { "is-active": B === s.value }]),
                onMousedown: w((j) => D(a), ["prevent"]),
                onMouseenter: (j) => s.value = B
              }, A(V(a)), 43, be))), 128)),
              k.value ? (c(), f("a", {
                key: 0,
                class: T(["dropdown-item", { "is-active": p.value.length === s.value }]),
                onMousedown: l[4] || (l[4] = w((a) => O(u.value), ["prevent"])),
                onMouseenter: l[5] || (l[5] = (a) => s.value = p.value.length)
              }, ' Add "' + A(u.value) + '" ', 35)) : y("", !0)
            ])
          ])) : y("", !0)
        ]),
        ue(de, { error: o.error }, null, 8, ["error"])
      ]);
    };
  }
}), Le = /* @__PURE__ */ fe(Ve, [["__scopeId", "data-v-b7c53638"]]);
export {
  Le as default
};
