import { defineComponent as ne, computed as b, onMounted as se, watch as we, createElementBlock as k, openBlock as v, createElementVNode as m, createCommentVNode as M, toDisplayString as z, Fragment as U, renderList as Y, normalizeClass as y, ref as N, reactive as Z, onUnmounted as Te, resolveComponent as _, createBlock as O, createVNode as T, withCtx as A, renderSlot as H, withModifiers as I, Transition as Me, normalizeStyle as Pe } from "vue";
import { _ as Se } from "./index-CjLbz_MK.js";
import { _ as ee } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { _ as te } from "./field-label.vue_vue_type_script_setup_true_lang-BnYuATQt.js";
import { _ as Be } from "./errors-BZdmzG52.js";
import { u as Ce } from "./sizes-tLhbz8lD.js";
function B(e) {
  if (!e || typeof e != "string") return null;
  const d = e.trim();
  if (!d) return null;
  const t = /^(\d{1,2}):(\d{2})$/, r = /^(\d{1,2}):(\d{2})\s*(AM|PM|am|pm|A|P)$/i;
  let p = d.match(t);
  if (p) {
    const s = parseInt(p[1], 10), h = parseInt(p[2], 10);
    if (s < 0 || s > 23 || h < 0 || h > 59) return null;
    const o = s >= 12 ? "PM" : "AM";
    return { hour: s, minute: h, period: o };
  }
  if (p = d.match(r), p) {
    let s = parseInt(p[1], 10);
    const h = parseInt(p[2], 10);
    let o = p[3].toUpperCase();
    o === "A" && (o = "AM"), o === "P" && (o = "PM");
    const g = o;
    return s < 1 || s > 12 || h < 0 || h > 59 ? null : (g === "AM" ? s = s === 12 ? 0 : s : s = s === 12 ? 12 : s + 12, { hour: s, minute: h, period: g === "AM" || s < 12 ? "AM" : "PM" });
  }
  return null;
}
function le(e, d) {
  const t = e.toString().padStart(2, "0"), r = d.toString().padStart(2, "0");
  return `${t}:${r}`;
}
function Ae(e, d) {
  const t = e >= 12 ? "PM" : "AM", p = (e === 0 ? 12 : e > 12 ? e - 12 : e).toString().padStart(2, "0"), s = d.toString().padStart(2, "0");
  return `${p}:${s} ${t}`;
}
function $(e, d, t = "24") {
  return t === "12" ? Ae(e, d) : le(e, d);
}
function q(e, d) {
  return d === "AM" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12;
}
function ie(e) {
  const d = e >= 12 ? "PM" : "AM";
  return { hour: e === 0 ? 12 : e > 12 ? e - 12 : e, period: d };
}
function oe(e, d, t, r) {
  const p = e * 60 + d;
  if (t) {
    const s = B(t);
    if (s) {
      const h = s.hour * 60 + s.minute;
      if (p < h) return !1;
    }
  }
  if (r) {
    const s = B(r);
    if (s) {
      const h = s.hour * 60 + s.minute;
      if (p > h) return !1;
    }
  }
  return !0;
}
function Ie(e = 1) {
  const d = [];
  for (let t = 0; t < 60; t += e)
    d.push(t);
  return d;
}
function $e(e = "24") {
  return e === "12" ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : Array.from({ length: 24 }, (d, t) => t);
}
const xe = { class: "time-selector" }, Ee = { class: "time-selector-content" }, De = { class: "time-selector-column" }, He = { class: "time-selector-label" }, Re = { class: "time-selector-scroll" }, Le = ["disabled", "onClick"], Ve = { class: "time-selector-column" }, We = { class: "time-selector-scroll" }, ze = ["disabled", "onClick"], Ne = {
  key: 0,
  class: "time-selector-column time-selector-period"
}, Oe = { class: "time-selector-scroll" }, qe = /* @__PURE__ */ ne({
  __name: "time-selector",
  props: {
    hour: {},
    minute: {},
    period: {},
    format: { default: "24" },
    minuteStep: { default: 1 },
    minTime: { default: null },
    maxTime: { default: null },
    isTimeDisabled: {}
  },
  emits: ["select-time", "update:hour", "update:minute", "update:period"],
  setup(e, { emit: d }) {
    const t = e, r = d, p = b(() => $e(t.format)), s = b(() => Ie(t.minuteStep)), h = (l) => l.toString().padStart(2, "0"), o = (l) => l.toString().padStart(2, "0"), g = (l) => {
      if (t.hour === null) return !1;
      if (t.format === "12") {
        const { hour: a } = ie(t.hour);
        return a === l;
      } else
        return t.hour === l;
    }, P = (l) => {
      const a = t.format === "12" ? q(l, t.period) : l, u = t.minute !== null ? t.minute : 0;
      return !!(!oe(a, u, t.minTime, t.maxTime) || t.isTimeDisabled && t.isTimeDisabled(a, u));
    }, C = (l) => {
      const a = t.hour !== null ? t.hour : 0;
      return !!(!oe(a, l, t.minTime, t.maxTime) || t.isTimeDisabled && t.isTimeDisabled(a, l));
    }, x = (l) => {
      if (P(l)) return;
      const a = t.format === "12" ? q(l, t.period) : l;
      r("update:hour", a), t.minute !== null && r("select-time", a, t.minute, t.period);
    }, R = (l) => {
      C(l) || (r("update:minute", l), t.hour !== null && r("select-time", t.hour, l, t.period));
    }, S = (l) => {
      if (r("update:period", l), t.hour !== null) {
        const { hour: a } = ie(t.hour), u = q(a, l);
        r("update:hour", u), t.minute !== null && r("select-time", u, t.minute, l);
      }
    };
    se(() => {
      E();
    }), we([() => t.hour, () => t.minute], () => {
      E();
    }, { flush: "post" });
    const E = () => {
      setTimeout(() => {
        document.querySelectorAll(".time-selector-option.is-selected").forEach((a) => {
          a.scrollIntoView({ block: "center", behavior: "smooth" });
        });
      }, 50);
    };
    return (l, a) => (v(), k("div", xe, [
      m("div", Ee, [
        m("div", De, [
          m("div", He, z((e.format === "12", "Hour")), 1),
          m("div", Re, [
            (v(!0), k(U, null, Y(p.value, (u) => (v(), k("button", {
              key: u,
              type: "button",
              class: y(["time-selector-option", {
                "is-selected": g(u),
                "is-disabled": P(u)
              }]),
              disabled: P(u),
              onClick: (L) => x(u)
            }, z(h(u)), 11, Le))), 128))
          ])
        ]),
        m("div", Ve, [
          a[2] || (a[2] = m("div", { class: "time-selector-label" }, "Minute", -1)),
          m("div", We, [
            (v(!0), k(U, null, Y(s.value, (u) => (v(), k("button", {
              key: u,
              type: "button",
              class: y(["time-selector-option", {
                "is-selected": e.minute === u,
                "is-disabled": C(u)
              }]),
              disabled: C(u),
              onClick: (L) => R(u)
            }, z(o(u)), 11, ze))), 128))
          ])
        ]),
        e.format === "12" ? (v(), k("div", Ne, [
          a[3] || (a[3] = m("div", { class: "time-selector-label" }, "Period", -1)),
          m("div", Oe, [
            m("button", {
              type: "button",
              class: y(["time-selector-option", { "is-selected": e.period === "AM" }]),
              onClick: a[0] || (a[0] = (u) => S("AM"))
            }, " AM ", 2),
            m("button", {
              type: "button",
              class: y(["time-selector-option", { "is-selected": e.period === "PM" }]),
              onClick: a[1] || (a[1] = (u) => S("PM"))
            }, " PM ", 2)
          ])
        ])) : M("", !0)
      ])
    ]));
  }
}), Ue = /* @__PURE__ */ Se(qe, [["__scopeId", "data-v-1933b339"]]), Ke = { key: 0 }, Fe = ["placeholder", "disabled", "value"], Ge = ["placeholder", "disabled", "value", "aria-expanded", "aria-describedby"], Xe = ["id"], et = /* @__PURE__ */ ne({
  __name: "time-input",
  props: {
    format: { default: "24" },
    minTime: {},
    maxTime: {},
    withIcon: { type: Boolean, default: !0 },
    minuteStep: { default: 1 },
    disabledTimes: {},
    isTimeDisabled: {},
    classes: {},
    disabled: { type: Boolean },
    forLabel: {},
    modelValue: { type: [Boolean, Number, String, Array, Date] },
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
  emits: ["update:model-value"],
  setup(e, { emit: d }) {
    const t = e, r = d, p = N(null), s = N(null), h = N(!1), o = Z({
      showingPicker: !1,
      selectedTime: null,
      hour: null,
      minute: null,
      period: "AM"
    }), g = Z({
      alignRight: !1,
      alignCenter: !1,
      showAbove: !1
    }), P = `time-picker-${Math.random().toString(36).substr(2, 9)}`, C = Ce(t), x = Be(t), R = b(() => o.showingPicker), S = b(() => !!o.selectedTime), E = b(() => {
      if (!o.selectedTime) return "";
      const i = B(o.selectedTime);
      return i ? le(i.hour, i.minute) : "";
    }), l = b(() => ({
      "is-danger": x.value,
      "is-rounded": t.isRounded,
      ...C
    })), a = b(() => ({
      "is-loading": t.isLoading,
      "is-expanded": t.isExpanded
    })), u = b(() => {
      const { "is-expanded": i, ...n } = C;
      return {
        "is-danger": x.value,
        "is-rounded": t.isRounded,
        ...n
      };
    }), L = b(() => {
      const i = {};
      return g.alignRight ? (i.right = "0", i.left = "auto", i.minWidth = "240px", i.maxWidth = "calc(100vw - 1rem)") : g.alignCenter ? (i.left = "50%", i.transform = "translateX(-50%)", i.maxWidth = "calc(100vw - 2rem)") : (i.left = "0", i.maxWidth = "calc(100vw - 1rem)"), g.showAbove ? (i.top = "auto", i.bottom = "calc(100% + 5px)") : i.top = "calc(100% + 5px)", i;
    });
    se(() => {
      G(), ae(), h.value || (document.addEventListener("click", j), document.addEventListener("keydown", F)), window.addEventListener("resize", K);
    }), Te(() => {
      h.value || (document.removeEventListener("click", j), document.removeEventListener("keydown", F)), window.removeEventListener("resize", K);
    });
    function K() {
      G(), o.showingPicker && J();
    }
    function F(i) {
      o.showingPicker && i.key === "Escape" && (i.preventDefault(), o.showingPicker = !1);
    }
    function re(i) {
      const { key: n } = i;
      if ((n === "ArrowDown" || n === " ") && !o.showingPicker) {
        i.preventDefault(), V();
        return;
      }
      if (n === "Escape" && o.showingPicker) {
        i.preventDefault(), o.showingPicker = !1;
        return;
      }
    }
    function G() {
      const i = "ontouchstart" in window || navigator.maxTouchPoints > 0, n = window.innerWidth <= 768, c = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      h.value = i && (n || c);
    }
    function ae() {
      if (t.modelValue) {
        const i = String(t.modelValue), n = B(i);
        n ? (o.hour = n.hour, o.minute = n.minute, o.period = n.period, o.selectedTime = $(n.hour, n.minute, t.format)) : w();
      } else
        w();
    }
    function w() {
      o.hour = null, o.minute = null, o.period = "AM", o.selectedTime = null;
    }
    function ue(i) {
      const c = i.target.value.trim();
      if (!c) {
        w(), r("update:model-value", "");
        return;
      }
      const f = B(c);
      if (f) {
        o.hour = f.hour, o.minute = f.minute, o.period = f.period;
        const D = $(f.hour, f.minute, t.format);
        o.selectedTime = D, r("update:model-value", D);
      } else
        w(), r("update:model-value", "");
    }
    function ce(i) {
      const c = i.target.value.trim();
      if (!c) {
        w(), r("update:model-value", "");
        return;
      }
      const f = B(c);
      f && (o.hour = f.hour, o.minute = f.minute, o.period = f.period, o.selectedTime = c, r("update:model-value", c));
    }
    function X() {
      if (!o.selectedTime) {
        w(), r("update:model-value", "");
        return;
      }
      const i = B(o.selectedTime);
      if (!i) {
        w(), r("update:model-value", "");
        return;
      }
      const n = $(i.hour, i.minute, t.format);
      o.selectedTime = n, r("update:model-value", n);
    }
    function j(i) {
      const n = i.target;
      p.value && !p.value.contains(n) && (o.showingPicker = !1);
    }
    function J() {
      if (!p.value) return;
      const i = 280, n = 16, c = p.value.getBoundingClientRect(), f = window.innerWidth, D = window.innerHeight;
      g.alignRight = !1, g.alignCenter = !1, g.showAbove = !1;
      const ve = c.left + i, ge = c.left, ye = f - c.right;
      ve > f - n && (c.right - i >= n ? g.alignRight = !0 : ge >= n && ye >= n ? g.alignCenter = !0 : g.alignRight = !0);
      const ke = 320, Q = D - c.bottom - n, be = c.top - n;
      Q < ke && be > Q && (g.showAbove = !0);
    }
    function V() {
      t.disabled || (o.showingPicker = !o.showingPicker, o.showingPicker && setTimeout(() => J(), 0));
    }
    function de(i) {
      o.hour = i;
    }
    function me(i) {
      o.minute = i;
    }
    function fe(i) {
      o.period = i;
    }
    function pe(i, n, c) {
      o.hour = i, o.minute = n, o.period = c;
      const f = $(i, n, t.format);
      o.selectedTime = f, r("update:model-value", f), setTimeout(() => {
        o.showingPicker = !1;
      }, 200);
    }
    function he() {
      const i = /* @__PURE__ */ new Date(), n = i.getHours(), c = i.getMinutes();
      o.hour = n, o.minute = c, o.period = n >= 12 ? "PM" : "AM";
      const f = $(n, c, t.format);
      o.selectedTime = f, r("update:model-value", f), o.showingPicker = !1;
    }
    function W() {
      w(), r("update:model-value", ""), o.showingPicker = !1;
    }
    return (i, n) => {
      const c = _("icon-button"), f = _("box");
      return v(), k("div", {
        class: "b-time-picker",
        ref_key: "pickerRef",
        ref: p
      }, [
        h.value ? (v(), k("div", Ke, [
          i.$slots.default || i.$slots.description ? (v(), O(te, {
            key: 0,
            required: e.required
          }, {
            description: A(() => [
              H(i.$slots, "description")
            ]),
            default: A(() => [
              H(i.$slots, "default")
            ]),
            _: 3
          }, 8, ["required"])) : M("", !0),
          m("div", {
            class: y(["field", { "has-addons": e.withIcon || S.value }])
          }, [
            e.withIcon ? (v(), k("div", {
              key: 0,
              class: y(["control", u.value])
            }, [
              T(c, {
                "is-small": e.isSmall,
                "is-medium": e.isMedium,
                "is-large": e.isLarge,
                onClick: n[0] || (n[0] = I(() => {
                }, ["prevent"])),
                class: "is-shadowless",
                role: "presentation",
                icon: "clock"
              }, null, 8, ["is-small", "is-medium", "is-large"])
            ], 2)) : M("", !0),
            m("div", {
              class: y(["control", a.value])
            }, [
              m("input", {
                type: "time",
                class: y(["input", l.value]),
                placeholder: e.placeholder,
                disabled: e.disabled,
                value: E.value,
                onInput: ue,
                onBlur: X
              }, null, 42, Fe)
            ], 2),
            S.value ? (v(), k("div", {
              key: 1,
              class: y(["control", u.value])
            }, [
              T(c, {
                "is-small": e.isSmall,
                "is-medium": e.isMedium,
                "is-large": e.isLarge,
                onClick: I(W, ["prevent"]),
                class: "is-shadowless",
                icon: "times-circle",
                title: "Clear time"
              }, null, 8, ["is-small", "is-medium", "is-large"])
            ], 2)) : M("", !0)
          ], 2),
          T(ee, { error: e.error }, null, 8, ["error"])
        ])) : (v(), k(U, { key: 1 }, [
          i.$slots.default || i.$slots.description ? (v(), O(te, {
            key: 0,
            required: e.required
          }, {
            description: A(() => [
              H(i.$slots, "description")
            ]),
            default: A(() => [
              H(i.$slots, "default")
            ]),
            _: 3
          }, 8, ["required"])) : M("", !0),
          m("div", {
            class: y(["field", { "has-addons": e.withIcon || S.value }])
          }, [
            e.withIcon ? (v(), k("div", {
              key: 0,
              class: y(["control", u.value])
            }, [
              T(c, {
                "is-small": e.isSmall,
                "is-medium": e.isMedium,
                "is-large": e.isLarge,
                onClick: I(V, ["prevent"]),
                class: "is-shadowless",
                icon: "clock"
              }, null, 8, ["is-small", "is-medium", "is-large"])
            ], 2)) : M("", !0),
            m("div", {
              class: y(["control", a.value])
            }, [
              m("input", {
                class: y(["input time-picker-input", l.value]),
                placeholder: e.placeholder,
                disabled: e.disabled,
                value: o.selectedTime,
                role: "combobox",
                "aria-expanded": o.showingPicker,
                "aria-haspopup": "dialog",
                "aria-describedby": P + "-description",
                onClick: V,
                onInput: ce,
                onBlur: X,
                onKeydown: re
              }, null, 42, Ge)
            ], 2),
            S.value ? (v(), k("div", {
              key: 1,
              class: y(["control", u.value])
            }, [
              T(c, {
                "is-small": e.isSmall,
                "is-medium": e.isMedium,
                "is-large": e.isLarge,
                onClick: I(W, ["prevent"]),
                class: "is-shadowless",
                icon: "times-circle",
                title: "Clear time"
              }, null, 8, ["is-small", "is-medium", "is-large"])
            ], 2)) : M("", !0)
          ], 2),
          T(ee, { error: e.error }, null, 8, ["error"]),
          T(Me, {
            name: "vuema-fade",
            mode: "in-out"
          }, {
            default: A(() => [
              R.value ? (v(), O(f, {
                key: 0,
                ref_key: "pickerWindow",
                ref: s,
                class: "b-time-picker-window",
                style: Pe(L.value),
                role: "dialog",
                "aria-label": "Select time",
                id: P + "-dialog",
                onClick: n[1] || (n[1] = I(() => {
                }, ["stop"]))
              }, {
                default: A(() => [
                  T(Ue, {
                    hour: o.hour,
                    minute: o.minute,
                    period: o.period,
                    format: e.format,
                    "minute-step": e.minuteStep,
                    "min-time": e.minTime,
                    "max-time": e.maxTime,
                    "is-time-disabled": e.isTimeDisabled,
                    "onUpdate:hour": de,
                    "onUpdate:minute": me,
                    "onUpdate:period": fe,
                    onSelectTime: pe
                  }, null, 8, ["hour", "minute", "period", "format", "minute-step", "min-time", "max-time", "is-time-disabled"]),
                  m("div", { class: "field is-grouped mt-3 px-3 pb-3" }, [
                    m("div", { class: "control" }, [
                      m("button", {
                        class: "button is-small is-light",
                        onClick: he,
                        type: "button"
                      }, " Now ")
                    ]),
                    m("div", { class: "control" }, [
                      m("button", {
                        class: "button is-small is-light",
                        onClick: W,
                        type: "button"
                      }, " Clear ")
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["style", "id"])) : M("", !0)
            ]),
            _: 1
          })
        ], 64)),
        m("div", {
          id: P + "-description",
          class: "is-sr-only",
          "aria-live": "polite"
        }, " Use arrow keys to navigate, Enter to select, Escape to close ", 8, Xe)
      ], 512);
    };
  }
});
export {
  et as default
};
