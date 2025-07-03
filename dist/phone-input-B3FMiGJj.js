import { defineComponent as F, computed as i, resolveComponent as b, createElementBlock as f, openBlock as c, createBlock as C, createCommentVNode as u, createElementVNode as s, createVNode as A, withCtx as L, renderSlot as m, normalizeClass as p, Fragment as P, renderList as q, toDisplayString as M } from "vue";
import { _ as H } from "./errors-BZdmzG52.js";
import { _ as K } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as U } from "./sizes-tLhbz8lD.js";
const G = { class: "field has-addons" }, O = { class: "control" }, W = ["disabled", "value"], J = ["value"], j = ["placeholder", "disabled", "value"], x = /* @__PURE__ */ F({
  __name: "phone-input",
  props: {
    modelValue: {},
    placeholder: { default: "Enter phone number" },
    classes: {},
    disabled: { type: Boolean },
    forLabel: {},
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
  emits: ["update:modelValue", "focus", "blur"],
  setup(S, { emit: V }) {
    const l = S, d = V, y = U(l), g = H(l), h = {
      1: { pattern: /^(\d{3})(\d{3})(\d{4})$/, format: "($1) $2-$3", maxLength: 10 },
      44: { pattern: /^(\d{2,4})(\d{6,8})$/, format: "$1 $2", maxLength: 11 },
      49: { pattern: /^(\d{3,4})(\d{6,8})$/, format: "$1 $2", maxLength: 11 },
      33: { pattern: /^(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})$/, format: "$1 $2 $3 $4 $5", maxLength: 9 },
      61: { pattern: /^(\d{1})(\d{4})(\d{4})$/, format: "$1 $2 $3", maxLength: 9 }
    }, v = [
      { code: "+1", name: "United States/Canada" },
      { code: "+7", name: "Russia" },
      { code: "+20", name: "Egypt" },
      { code: "+27", name: "South Africa" },
      { code: "+30", name: "Greece" },
      { code: "+31", name: "Netherlands" },
      { code: "+32", name: "Belgium" },
      { code: "+33", name: "France" },
      { code: "+34", name: "Spain" },
      { code: "+36", name: "Hungary" },
      { code: "+39", name: "Italy" },
      { code: "+40", name: "Romania" },
      { code: "+41", name: "Switzerland" },
      { code: "+43", name: "Austria" },
      { code: "+44", name: "United Kingdom" },
      { code: "+45", name: "Denmark" },
      { code: "+46", name: "Sweden" },
      { code: "+47", name: "Norway" },
      { code: "+48", name: "Poland" },
      { code: "+49", name: "Germany" },
      { code: "+52", name: "Mexico" },
      { code: "+55", name: "Brazil" },
      { code: "+60", name: "Malaysia" },
      { code: "+61", name: "Australia" },
      { code: "+62", name: "Indonesia" },
      { code: "+63", name: "Philippines" },
      { code: "+65", name: "Singapore" },
      { code: "+66", name: "Thailand" },
      { code: "+81", name: "Japan" },
      { code: "+82", name: "South Korea" },
      { code: "+84", name: "Vietnam" },
      { code: "+86", name: "China" },
      { code: "+90", name: "Turkey" },
      { code: "+91", name: "India" },
      { code: "+351", name: "Portugal" },
      { code: "+353", name: "Ireland" },
      { code: "+354", name: "Iceland" },
      { code: "+358", name: "Finland" },
      { code: "+370", name: "Lithuania" },
      { code: "+371", name: "Latvia" },
      { code: "+372", name: "Estonia" },
      { code: "+385", name: "Croatia" },
      { code: "+386", name: "Slovenia" },
      { code: "+387", name: "Bosnia and Herzegovina" },
      { code: "+420", name: "Czech Republic" },
      { code: "+421", name: "Slovakia" },
      { code: "+852", name: "Hong Kong" },
      { code: "+853", name: "Macau" },
      { code: "+886", name: "Taiwan" },
      { code: "+966", name: "Saudi Arabia" },
      { code: "+971", name: "UAE" },
      { code: "+972", name: "Israel" }
    ];
    function k(e) {
      if (!e) return "";
      const o = (l.countryCode || "").replace(/\D/g, ""), a = h[o];
      if (a) {
        const t = e.match(a.pattern);
        if (t)
          return a.format.replace(/\$(\d)/g, (n, B) => t[parseInt(B)]);
      }
      return e.length > 6 ? `${e.slice(0, 3)} ${e.slice(3, 6)} ${e.slice(6)}` : e.length > 3 ? `${e.slice(0, 3)} ${e.slice(3)}` : e;
    }
    const r = i(() => {
      if (!l.modelValue) return "";
      const e = v.filter((o) => l.modelValue.startsWith(o.code)).sort((o, a) => a.code.length - o.code.length)[0];
      return (e == null ? void 0 : e.code) || "";
    }), $ = i(() => l.modelValue ? r.value ? l.modelValue.replace(r.value, "").replace(/\D/g, "") : l.modelValue.replace(/\D/g, "") : "");
    function D(e) {
      const a = e.target.value.replace(/\D/g, ""), t = r.value.replace(/\D/g, ""), n = h[t];
      if (n && a.length > n.maxLength) {
        const R = a.slice(0, n.maxLength), T = r.value + R;
        d("update:modelValue", T);
        return;
      }
      const B = r.value + a;
      d("update:modelValue", B);
    }
    function E(e) {
      const t = e.target.value + $.value;
      d("update:modelValue", t);
    }
    const N = i(() => k($.value));
    i(() => {
      const e = r.value.replace(/\D/g, ""), o = $.value;
      if (!e || !o || !v.map((n) => n.code.replace(/\D/g, "")).includes(e)) return !1;
      const t = h[e];
      return t ? o.length === t.maxLength && t.pattern.test(o) : o.length >= 7 && o.length <= 15;
    });
    const w = i(() => ({
      "is-danger": g.value,
      "is-rounded": l.isRounded,
      ...y
    })), z = i(() => ({
      "is-danger": g.value,
      "is-rounded": l.isRounded,
      ...y
    })), I = i(() => {
      const { "is-expanded": e, ...o } = y;
      return {
        "is-danger": g.value,
        "is-rounded": l.isRounded,
        ...o
      };
    });
    return (e, o) => {
      const a = b("field-label"), t = b("b-icon");
      return c(), f("div", null, [
        e.$slots.default || e.$slots.description ? (c(), C(a, {
          key: 0,
          required: e.required
        }, {
          description: L(() => [
            m(e.$slots, "description")
          ]),
          default: L(() => [
            m(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : u("", !0),
        s("div", G, [
          e.$slots.left ? (c(), f("div", {
            key: 0,
            class: p(["control", I.value])
          }, [
            m(e.$slots, "left")
          ], 2)) : u("", !0),
          s("div", O, [
            s("div", {
              class: p(["select", z.value]),
              style: { "min-width": "60px" }
            }, [
              s("select", {
                disabled: e.disabled,
                value: r.value,
                onChange: E,
                onFocus: o[0] || (o[0] = (n) => d("focus")),
                onBlur: o[1] || (o[1] = (n) => d("blur"))
              }, [
                o[4] || (o[4] = s("option", { value: "" }, "Code", -1)),
                (c(), f(P, null, q(v, (n) => s("option", {
                  key: n.code,
                  value: n.code
                }, M(n.code), 9, J)), 64))
              ], 40, W)
            ], 2)
          ]),
          s("div", {
            class: p(["control", {
              "has-icons-left": e.leftIcon,
              "has-icons-right": e.rightIcon,
              "is-loading": e.isLoading,
              "is-expanded": e.isExpanded
            }])
          }, [
            s("input", {
              class: p(["input", w.value]),
              type: "tel",
              placeholder: e.placeholder,
              disabled: e.disabled,
              value: N.value,
              onInput: D,
              onFocus: o[2] || (o[2] = (n) => d("focus")),
              onBlur: o[3] || (o[3] = (n) => d("blur"))
            }, null, 42, j),
            e.leftIcon ? (c(), C(t, {
              key: 0,
              class: "icon is-small is-left",
              icon: e.leftIcon,
              "icon-type": e.leftIconType
            }, null, 8, ["icon", "icon-type"])) : u("", !0),
            e.rightIcon ? (c(), C(t, {
              key: 1,
              class: "icon is-small is-right",
              icon: e.rightIcon,
              "icon-type": e.rightIconType
            }, null, 8, ["icon", "icon-type"])) : u("", !0),
            m(e.$slots, "inner")
          ], 2),
          e.$slots.right ? (c(), f("div", {
            key: 1,
            class: p(["control", I.value])
          }, [
            m(e.$slots, "right")
          ], 2)) : u("", !0)
        ]),
        A(K, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  x as default
};
