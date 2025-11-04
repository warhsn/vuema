import { defineComponent as T, computed as c, resolveComponent as L, createElementBlock as y, openBlock as u, createBlock as I, createCommentVNode as m, createElementVNode as s, createVNode as F, withCtx as S, renderSlot as p, normalizeClass as f, Fragment as A, renderList as P, toDisplayString as q } from "vue";
import { _ as M } from "./errors-BZdmzG52.js";
import { _ as H } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { u as K } from "./sizes-tLhbz8lD.js";
const U = { class: "field has-addons" }, G = { class: "control" }, O = ["disabled", "value"], W = ["value"], J = ["placeholder", "disabled", "value"], Z = /* @__PURE__ */ T({
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
  setup(n, { emit: V }) {
    const d = n, i = V, g = K(d), h = M(d), v = {
      1: { pattern: /^(\d{3})(\d{3})(\d{4})$/, format: "($1) $2-$3", maxLength: 10 },
      44: { pattern: /^(\d{2,4})(\d{6,8})$/, format: "$1 $2", maxLength: 11 },
      49: { pattern: /^(\d{3,4})(\d{6,8})$/, format: "$1 $2", maxLength: 11 },
      33: { pattern: /^(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})$/, format: "$1 $2 $3 $4 $5", maxLength: 9 },
      61: { pattern: /^(\d{1})(\d{4})(\d{4})$/, format: "$1 $2 $3", maxLength: 9 }
    }, $ = [
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
      const o = (d.countryCode || "").replace(/\D/g, ""), t = v[o];
      if (t) {
        const l = e.match(t.pattern);
        if (l)
          return t.format.replace(/\$(\d)/g, (a, C) => l[parseInt(C)]);
      }
      return e.length > 6 ? `${e.slice(0, 3)} ${e.slice(3, 6)} ${e.slice(6)}` : e.length > 3 ? `${e.slice(0, 3)} ${e.slice(3)}` : e;
    }
    const r = c(() => {
      if (!d.modelValue) return "";
      const e = $.filter((o) => d.modelValue.startsWith(o.code)).sort((o, t) => t.code.length - o.code.length)[0];
      return (e == null ? void 0 : e.code) || "";
    }), B = c(() => d.modelValue ? r.value ? d.modelValue.replace(r.value, "").replace(/\D/g, "") : d.modelValue.replace(/\D/g, "") : "");
    function D(e) {
      const t = e.target.value.replace(/\D/g, ""), l = r.value.replace(/\D/g, ""), a = v[l];
      if (a && t.length > a.maxLength) {
        const z = t.slice(0, a.maxLength), R = r.value + z;
        i("update:modelValue", R);
        return;
      }
      const C = r.value + t;
      i("update:modelValue", C);
    }
    function E(e) {
      const l = e.target.value + B.value;
      i("update:modelValue", l);
    }
    const x = c(() => k(B.value));
    c(() => {
      const e = r.value.replace(/\D/g, ""), o = B.value;
      if (!e || !o || !$.map((a) => a.code.replace(/\D/g, "")).includes(e)) return !1;
      const l = v[e];
      return l ? o.length === l.maxLength && l.pattern.test(o) : o.length >= 7 && o.length <= 15;
    });
    const N = c(() => ({
      "is-danger": h.value,
      "is-rounded": d.isRounded,
      ...g
    })), w = c(() => ({
      "is-danger": h.value,
      "is-rounded": d.isRounded,
      ...g
    })), b = c(() => {
      const { "is-expanded": e, ...o } = g;
      return {
        "is-danger": h.value,
        "is-rounded": d.isRounded,
        ...o
      };
    });
    return (e, o) => {
      const t = L("field-label"), l = L("b-icon");
      return u(), y("div", null, [
        e.$slots.default || e.$slots.description ? (u(), I(t, {
          key: 0,
          required: n.required
        }, {
          description: S(() => [
            p(e.$slots, "description")
          ]),
          default: S(() => [
            p(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["required"])) : m("", !0),
        s("div", U, [
          e.$slots.left ? (u(), y("div", {
            key: 0,
            class: f(["control", b.value])
          }, [
            p(e.$slots, "left")
          ], 2)) : m("", !0),
          s("div", G, [
            s("div", {
              class: f(["select", w.value]),
              style: { "min-width": "60px" }
            }, [
              s("select", {
                disabled: n.disabled,
                value: r.value,
                onChange: E,
                onFocus: o[0] || (o[0] = (a) => i("focus")),
                onBlur: o[1] || (o[1] = (a) => i("blur"))
              }, [
                o[4] || (o[4] = s("option", { value: "" }, "Code", -1)),
                (u(), y(A, null, P($, (a) => s("option", {
                  key: a.code,
                  value: a.code
                }, q(a.code), 9, W)), 64))
              ], 40, O)
            ], 2)
          ]),
          s("div", {
            class: f(["control", {
              "has-icons-left": n.leftIcon,
              "has-icons-right": n.rightIcon,
              "is-loading": n.isLoading,
              "is-expanded": n.isExpanded
            }])
          }, [
            s("input", {
              class: f(["input", N.value]),
              type: "tel",
              placeholder: n.placeholder,
              disabled: n.disabled,
              value: x.value,
              onInput: D,
              onFocus: o[2] || (o[2] = (a) => i("focus")),
              onBlur: o[3] || (o[3] = (a) => i("blur"))
            }, null, 42, J),
            n.leftIcon ? (u(), I(l, {
              key: 0,
              class: "icon is-small is-left",
              icon: n.leftIcon,
              "icon-type": n.leftIconType
            }, null, 8, ["icon", "icon-type"])) : m("", !0),
            n.rightIcon ? (u(), I(l, {
              key: 1,
              class: "icon is-small is-right",
              icon: n.rightIcon,
              "icon-type": n.rightIconType
            }, null, 8, ["icon", "icon-type"])) : m("", !0),
            p(e.$slots, "inner")
          ], 2),
          e.$slots.right ? (u(), y("div", {
            key: 1,
            class: f(["control", b.value])
          }, [
            p(e.$slots, "right")
          ], 2)) : m("", !0)
        ]),
        F(H, { error: n.error }, null, 8, ["error"])
      ]);
    };
  }
});
export {
  Z as default
};
