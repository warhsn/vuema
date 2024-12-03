import { defineComponent as pt, reactive as mt, onMounted as yt, computed as U, resolveComponent as K, openBlock as st, createElementBlock as at, createVNode as X, withCtx as G, withDirectives as _t, withModifiers as tt, createElementVNode as g, toDisplayString as ot, Fragment as $t, renderList as vt, normalizeClass as ut, vShow as gt, renderSlot as Mt } from "vue";
var et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nt(w) {
  return w && w.__esModule && Object.prototype.hasOwnProperty.call(w, "default") ? w.default : w;
}
var dt = { exports: {} };
(function(w, z) {
  (function(s, u) {
    w.exports = u();
  })(et, function() {
    var s = 1e3, u = 6e4, Y = 36e5, B = "millisecond", m = "second", h = "minute", W = "hour", l = "day", b = "week", _ = "month", L = "quarter", D = "year", I = "date", F = "Invalid Date", rt = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, f = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(a) {
      var n = ["th", "st", "nd", "rd"], t = a % 100;
      return "[" + a + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, N = function(a, n, t) {
      var r = String(a);
      return !r || r.length >= n ? a : "" + Array(n + 1 - r.length).join(t) + a;
    }, P = { s: N, z: function(a) {
      var n = -a.utcOffset(), t = Math.abs(n), r = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + N(r, 2, "0") + ":" + N(e, 2, "0");
    }, m: function a(n, t) {
      if (n.date() < t.date()) return -a(t, n);
      var r = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(r, _), o = t - e < 0, i = n.clone().add(r + (o ? -1 : 1), _);
      return +(-(r + (t - e) / (o ? e - i : i - e)) || 0);
    }, a: function(a) {
      return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
    }, p: function(a) {
      return { M: _, y: D, w: b, d: l, D: I, h: W, m: h, s: m, ms: B, Q: L }[a] || String(a || "").toLowerCase().replace(/s$/, "");
    }, u: function(a) {
      return a === void 0;
    } }, j = "en", S = {};
    S[j] = f;
    var $ = "$isDayjsObject", k = function(a) {
      return a instanceof Q || !(!a || !a[$]);
    }, A = function a(n, t, r) {
      var e;
      if (!n) return j;
      if (typeof n == "string") {
        var o = n.toLowerCase();
        S[o] && (e = o), t && (S[o] = t, e = o);
        var i = n.split("-");
        if (!e && i.length > 1) return a(i[0]);
      } else {
        var d = n.name;
        S[d] = n, e = d;
      }
      return !r && e && (j = e), e || !r && j;
    }, y = function(a, n) {
      if (k(a)) return a.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = a, t.args = arguments, new Q(t);
    }, c = P;
    c.l = A, c.i = k, c.w = function(a, n) {
      return y(a, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var Q = function() {
      function a(t) {
        this.$L = A(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[$] = !0;
      }
      var n = a.prototype;
      return n.parse = function(t) {
        this.$d = function(r) {
          var e = r.date, o = r.utc;
          if (e === null) return /* @__PURE__ */ new Date(NaN);
          if (c.u(e)) return /* @__PURE__ */ new Date();
          if (e instanceof Date) return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var i = e.match(rt);
            if (i) {
              var d = i[2] - 1 || 0, p = (i[7] || "0").substring(0, 3);
              return o ? new Date(Date.UTC(i[1], d, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, p)) : new Date(i[1], d, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, p);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return c;
      }, n.isValid = function() {
        return this.$d.toString() !== F;
      }, n.isSame = function(t, r) {
        var e = y(t);
        return this.startOf(r) <= e && e <= this.endOf(r);
      }, n.isAfter = function(t, r) {
        return y(t) < this.startOf(r);
      }, n.isBefore = function(t, r) {
        return this.endOf(r) < y(t);
      }, n.$g = function(t, r, e) {
        return c.u(t) ? this[r] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, r) {
        var e = this, o = !!c.u(r) || r, i = c.p(t), d = function(V, O) {
          var H = c.w(e.$u ? Date.UTC(e.$y, O, V) : new Date(e.$y, O, V), e);
          return o ? H : H.endOf(l);
        }, p = function(V, O) {
          return c.w(e.toDate()[V].apply(e.toDate("s"), (o ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(O)), e);
        }, v = this.$W, x = this.$M, T = this.$D, q = "set" + (this.$u ? "UTC" : "");
        switch (i) {
          case D:
            return o ? d(1, 0) : d(31, 11);
          case _:
            return o ? d(1, x) : d(0, x + 1);
          case b:
            var E = this.$locale().weekStart || 0, J = (v < E ? v + 7 : v) - E;
            return d(o ? T - J : T + (6 - J), x);
          case l:
          case I:
            return p(q + "Hours", 0);
          case W:
            return p(q + "Minutes", 1);
          case h:
            return p(q + "Seconds", 2);
          case m:
            return p(q + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, r) {
        var e, o = c.p(t), i = "set" + (this.$u ? "UTC" : ""), d = (e = {}, e[l] = i + "Date", e[I] = i + "Date", e[_] = i + "Month", e[D] = i + "FullYear", e[W] = i + "Hours", e[h] = i + "Minutes", e[m] = i + "Seconds", e[B] = i + "Milliseconds", e)[o], p = o === l ? this.$D + (r - this.$W) : r;
        if (o === _ || o === D) {
          var v = this.clone().set(I, 1);
          v.$d[d](p), v.init(), this.$d = v.set(I, Math.min(this.$D, v.daysInMonth())).$d;
        } else d && this.$d[d](p);
        return this.init(), this;
      }, n.set = function(t, r) {
        return this.clone().$set(t, r);
      }, n.get = function(t) {
        return this[c.p(t)]();
      }, n.add = function(t, r) {
        var e, o = this;
        t = Number(t);
        var i = c.p(r), d = function(x) {
          var T = y(o);
          return c.w(T.date(T.date() + Math.round(x * t)), o);
        };
        if (i === _) return this.set(_, this.$M + t);
        if (i === D) return this.set(D, this.$y + t);
        if (i === l) return d(1);
        if (i === b) return d(7);
        var p = (e = {}, e[h] = u, e[W] = Y, e[m] = s, e)[i] || 1, v = this.$d.getTime() + t * p;
        return c.w(v, this);
      }, n.subtract = function(t, r) {
        return this.add(-1 * t, r);
      }, n.format = function(t) {
        var r = this, e = this.$locale();
        if (!this.isValid()) return e.invalidDate || F;
        var o = t || "YYYY-MM-DDTHH:mm:ssZ", i = c.z(this), d = this.$H, p = this.$m, v = this.$M, x = e.weekdays, T = e.months, q = e.meridiem, E = function(O, H, Z, R) {
          return O && (O[H] || O(r, o)) || Z[H].slice(0, R);
        }, J = function(O) {
          return c.s(d % 12 || 12, O, "0");
        }, V = q || function(O, H, Z) {
          var R = O < 12 ? "AM" : "PM";
          return Z ? R.toLowerCase() : R;
        };
        return o.replace(C, function(O, H) {
          return H || function(Z) {
            switch (Z) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return c.s(r.$y, 4, "0");
              case "M":
                return v + 1;
              case "MM":
                return c.s(v + 1, 2, "0");
              case "MMM":
                return E(e.monthsShort, v, T, 3);
              case "MMMM":
                return E(T, v);
              case "D":
                return r.$D;
              case "DD":
                return c.s(r.$D, 2, "0");
              case "d":
                return String(r.$W);
              case "dd":
                return E(e.weekdaysMin, r.$W, x, 2);
              case "ddd":
                return E(e.weekdaysShort, r.$W, x, 3);
              case "dddd":
                return x[r.$W];
              case "H":
                return String(d);
              case "HH":
                return c.s(d, 2, "0");
              case "h":
                return J(1);
              case "hh":
                return J(2);
              case "a":
                return V(d, p, !0);
              case "A":
                return V(d, p, !1);
              case "m":
                return String(p);
              case "mm":
                return c.s(p, 2, "0");
              case "s":
                return String(r.$s);
              case "ss":
                return c.s(r.$s, 2, "0");
              case "SSS":
                return c.s(r.$ms, 3, "0");
              case "Z":
                return i;
            }
            return null;
          }(O) || i.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, r, e) {
        var o, i = this, d = c.p(r), p = y(t), v = (p.utcOffset() - this.utcOffset()) * u, x = this - p, T = function() {
          return c.m(i, p);
        };
        switch (d) {
          case D:
            o = T() / 12;
            break;
          case _:
            o = T();
            break;
          case L:
            o = T() / 3;
            break;
          case b:
            o = (x - v) / 6048e5;
            break;
          case l:
            o = (x - v) / 864e5;
            break;
          case W:
            o = x / Y;
            break;
          case h:
            o = x / u;
            break;
          case m:
            o = x / s;
            break;
          default:
            o = x;
        }
        return e ? o : c.a(o);
      }, n.daysInMonth = function() {
        return this.endOf(_).$D;
      }, n.$locale = function() {
        return S[this.$L];
      }, n.locale = function(t, r) {
        if (!t) return this.$L;
        var e = this.clone(), o = A(t, r, !0);
        return o && (e.$L = o), e;
      }, n.clone = function() {
        return c.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, a;
    }(), it = Q.prototype;
    return y.prototype = it, [["$ms", B], ["$s", m], ["$m", h], ["$H", W], ["$W", l], ["$M", _], ["$y", D], ["$D", I]].forEach(function(a) {
      it[a[1]] = function(n) {
        return this.$g(n, a[0], a[1]);
      };
    }), y.extend = function(a, n) {
      return a.$i || (a(n, Q, y), a.$i = !0), y;
    }, y.locale = A, y.isDayjs = k, y.unix = function(a) {
      return y(1e3 * a);
    }, y.en = S[j], y.Ls = S, y.p = {}, y;
  });
})(dt);
var kt = dt.exports;
const M = /* @__PURE__ */ nt(kt);
var lt = { exports: {} };
(function(w, z) {
  (function(s, u) {
    w.exports = u();
  })(et, function() {
    return function(s, u) {
      u.prototype.weekday = function(Y) {
        var B = this.$locale().weekStart || 0, m = this.$W, h = (m < B ? m + 7 : m) - B;
        return this.$utils().u(Y) ? h : this.subtract(h, "day").add(Y, "day");
      };
    };
  });
})(lt);
var xt = lt.exports;
const wt = /* @__PURE__ */ nt(xt);
var ft = { exports: {} };
(function(w, z) {
  (function(s, u) {
    w.exports = u();
  })(et, function() {
    var s = "day";
    return function(u, Y, B) {
      var m = function(l) {
        return l.add(4 - l.isoWeekday(), s);
      }, h = Y.prototype;
      h.isoWeekYear = function() {
        return m(this).year();
      }, h.isoWeek = function(l) {
        if (!this.$utils().u(l)) return this.add(7 * (l - this.isoWeek()), s);
        var b, _, L, D, I = m(this), F = (b = this.isoWeekYear(), _ = this.$u, L = (_ ? B.utc : B)().year(b).startOf("year"), D = 4 - L.isoWeekday(), L.isoWeekday() > 4 && (D += 7), L.add(D, s));
        return I.diff(F, "week") + 1;
      }, h.isoWeekday = function(l) {
        return this.$utils().u(l) ? this.day() || 7 : this.day(this.day() % 7 ? l : l - 7);
      };
      var W = h.startOf;
      h.startOf = function(l, b) {
        var _ = this.$utils(), L = !!_.u(b) || b;
        return _.p(l) === "isoweek" ? L ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : W.bind(this)(l, b);
      };
    };
  });
})(ft);
var bt = ft.exports;
const Dt = /* @__PURE__ */ nt(bt);
var ht = { exports: {} };
(function(w, z) {
  (function(s, u) {
    w.exports = u();
  })(et, function() {
    return function(s, u, Y) {
      Y.updateLocale = function(B, m) {
        var h = Y.Ls[B];
        if (h) return (m ? Object.keys(m) : []).forEach(function(W) {
          h[W] = m[W];
        }), h;
      };
    };
  });
})(ht);
var St = ht.exports;
const Ot = /* @__PURE__ */ nt(St), Yt = { class: "b-date-picker" }, Bt = { class: "fixed-grid has-4-cols" }, Wt = { class: "grid" }, Ct = { class: "cell" }, Tt = { class: "cell is-col-span-2" }, Lt = { class: "has-text-centered" }, It = { class: "cell" }, jt = { class: "fixed-grid has-7-cols" }, At = { class: "grid" }, Ht = ["onClick"], ct = "update:model-value", Et = /* @__PURE__ */ pt({
  __name: "date-picker",
  props: {
    locale: {},
    format: { default: "YYYY-MM-DD" },
    minDate: {},
    maxDate: {},
    classes: {},
    disabled: { type: Boolean },
    forLabel: {},
    modelValue: { type: [Boolean, Number, String, Array, Date] },
    placeholder: {},
    required: { type: Boolean },
    isLoading: { type: Boolean },
    isRounded: { type: Boolean },
    isExpanded: { type: Boolean },
    autocomplete: { type: Boolean },
    icon: {},
    iconType: {},
    iconPack: {},
    textIcon: { type: Boolean },
    leftIcon: {},
    iconClasses: {},
    leftIconType: {},
    rightIcon: {},
    error: {},
    hasAddons: { type: Boolean },
    isSmall: { type: Boolean },
    isMedium: { type: Boolean },
    isLarge: { type: Boolean },
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
    is12: { type: Boolean },
    isNarrow: { type: Boolean }
  },
  setup(w, { emit: z }) {
    M.extend(Ot), M.extend(wt), M.extend(Dt), M.updateLocale("en", {
      weekStart: 1
    });
    const s = mt({
      showing_picker: !1,
      current_date: M(),
      // Initialize with current date
      selected_date: null,
      min_date: null,
      max_date: null
    }), u = w, Y = z;
    yt(() => {
      u.modelValue ? (M(String(u.modelValue)).isValid() ? s.current_date = M(String(u.modelValue)) : (s.current_date = M(), Y(ct, s.current_date.format(u.format))), s.selected_date = s.current_date.format(u.format)) : (s.current_date = M(), s.selected_date = s.current_date.format(u.format)), u.minDate && (s.min_date = M(u.minDate)), u.maxDate && (s.max_date = M(u.maxDate));
    });
    function B(C) {
      Y(ct, C);
    }
    function m() {
      s.showing_picker = !s.showing_picker;
    }
    function h(C) {
      B(C), s.current_date = M(C), s.selected_date = s.current_date.format(u.format), m();
    }
    function W() {
      s.current_date = s.current_date.subtract(1, "month");
    }
    function l() {
      s.current_date = s.current_date.add(1, "month");
    }
    U(() => s.current_date.format(u.format));
    const b = U(() => M().format(u.format)), _ = U(() => s.showing_picker), L = U(() => s.current_date.format("MMMM")), D = U(() => s.current_date.format("YYYY"));
    function I() {
      return s.current_date.startOf("month").weekday();
    }
    function F() {
      return s.current_date.endOf("month").weekday();
    }
    const rt = U(() => {
      const C = I(), f = [];
      if (C !== 0) {
        const S = s.current_date.subtract(1, "month"), $ = S.format("YYYY-MM-");
        let k = S.daysInMonth();
        f.push({
          class: "has-text-grey",
          date: M(`${$}${k}`),
          day: k
        });
        const A = [...Array(C - 1).keys()];
        for (const y of A)
          k--, f.unshift({
            class: "has-text-grey",
            date: M(`${$}${k}`),
            day: k
          });
      }
      const N = Array(s.current_date.daysInMonth()).fill(null).map((S, $) => ({
        class: "",
        date: M(
          `${s.current_date.format("YYYY-MM-")}${($ + 1).toString().padStart(2, "0")}`
        ),
        day: $ + 1
      })), P = F(), j = [];
      if (P !== 6) {
        const $ = s.current_date.add(1, "month").format("YYYY-MM-");
        let k = 0;
        const A = [...Array(6 - P).keys()];
        for (const y of A)
          k++, j.push({
            class: "has-text-grey",
            date: M(`${$}${k.toString().padStart(2, "0")}`),
            day: k
          });
      }
      return [...f, ...N, ...j];
    });
    return (C, f) => {
      const N = K("b-icon"), P = K("action-button"), j = K("box"), S = K("text-input");
      return st(), at("div", Yt, [
        X(S, {
          classes: "is-clickable",
          onClick: m,
          "model-value": s.selected_date,
          error: C.error,
          required: C.required,
          "has-addons": ""
        }, {
          left: G(() => [
            X(P, { role: "presentation" }, {
              default: G(() => [
                X(N, { icon: "calendar" })
              ]),
              _: 1
            })
          ]),
          inner: G(() => [
            _t(X(j, {
              onClick: f[0] || (f[0] = tt(() => {
              }, ["stop"])),
              class: "b-date-picker-window"
            }, {
              default: G(() => [
                g("div", Bt, [
                  g("div", Wt, [
                    g("div", Ct, [
                      g("div", {
                        onClick: tt(W, ["stop"]),
                        class: "arrow prev is-clickable"
                      })
                    ]),
                    g("div", Tt, [
                      g("p", Lt, ot(L.value) + " " + ot(D.value), 1)
                    ]),
                    g("div", It, [
                      g("div", {
                        onClick: tt(l, ["stop"]),
                        class: "arrow next is-clickable is-pulled-right"
                      })
                    ])
                  ])
                ]),
                g("div", jt, [
                  g("div", At, [
                    f[1] || (f[1] = g("div", { class: "cell has-text-centered has-text-weight-bold" }, "Mon", -1)),
                    f[2] || (f[2] = g("div", { class: "cell has-text-centered has-text-weight-bold" }, "Tue", -1)),
                    f[3] || (f[3] = g("div", { class: "cell has-text-centered has-text-weight-bold" }, "Wed", -1)),
                    f[4] || (f[4] = g("div", { class: "cell has-text-centered has-text-weight-bold" }, "Thu", -1)),
                    f[5] || (f[5] = g("div", { class: "cell has-text-centered has-text-weight-bold" }, "Fri", -1)),
                    f[6] || (f[6] = g("div", { class: "cell has-text-centered has-text-weight-bold" }, "Sat", -1)),
                    f[7] || (f[7] = g("div", { class: "cell has-text-centered has-text-weight-bold" }, "Sun", -1)),
                    (st(!0), at($t, null, vt(rt.value, ($, k) => (st(), at("div", {
                      key: k,
                      class: ut(["cell has-text-centered is-clickable", {
                        "has-background-primary": $.date.format(u.format) === b.value,
                        "has-background-grey": $.date.format(u.format) === s.selected_date,
                        "has-text-black": $.date.format(u.format) === b.value || $.date.format(u.format) === s.selected_date
                      }]),
                      onClick: tt((A) => h($.date.format(u.format)), ["stop"])
                    }, [
                      g("span", {
                        class: ut($.class)
                      }, ot($.day), 3)
                    ], 10, Ht))), 128))
                  ])
                ])
              ]),
              _: 1
            }, 512), [
              [gt, _.value]
            ])
          ]),
          default: G(() => [
            Mt(C.$slots, "default")
          ]),
          _: 3
        }, 8, ["model-value", "error", "required"])
      ]);
    };
  }
});
export {
  Et as default
};
