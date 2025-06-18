var O = Object.defineProperty;
var _ = (t, e, o) => e in t ? O(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var f = (t, e, o) => _(t, typeof e != "symbol" ? e + "" : e, o);
import { defineAsyncComponent as i, defineComponent as E, ref as h, computed as T, createElementBlock as d, openBlock as m, normalizeClass as v, createVNode as L, TransitionGroup as x, withCtx as M, Fragment as V, renderList as z, createElementVNode as y, createTextVNode as I, toDisplayString as D, createApp as b, inject as Y, customRef as A, watch as C, onUnmounted as N, createBlock as k, Teleport as B, Transition as H, createCommentVNode as p, normalizeStyle as P, withModifiers as j, renderSlot as w, resolveDynamicComponent as X, mergeProps as R, toHandlers as U } from "vue";
function W(t) {
  t.component("column", i(() => import("./column-DFEEo01k.js"))), t.component("columns", i(() => import("./columns-CNwTQcJ_.js"))), t.component("flex", i(() => import("./flex-DmCuLun4.js")));
}
function q(t) {
  t.component("base-icon", i(() => import("./base-icon-BittugVB.js"))), t.component("action-button", i(() => import("./button-CecB7Pv-.js"))), t.component("icon-button", i(() => import("./icon-button-BiahoDPt.js"))), t.component("submit-button", i(() => import("./submit-button-BBryhJxf.js"))), t.component("buttons", i(() => import("./buttons-DZb92DV0.js"))), t.component("loader", i(() => import("./loader-Bkf-SMFn.js"))), t.component("block", i(() => import("./block-kWU4NMp6.js"))), t.component("box", i(() => import("./box-DTQAxAbD.js"))), t.component("b-icon", i(() => import("./icon-XTRTXlk0.js"))), t.component("avatar", i(() => import("./avatar-Qs3jleId.js")));
}
function J(t) {
  t.component("side-menu", i(() => import("./side-menu-B0U1T7G1.js"))), t.component("side-menu-label", i(() => import("./side-menu-label-C-o2Mc3p.js"))), t.component("side-menu-list", i(() => import("./side-menu-list-DZOCH0Kv.js"))), t.component("side-menu-list-item", i(() => import("./side-menu-list-item-ACq_7ZK3.js"))), t.component("dropdown", i(() => import("./dropdown-BFSCP8ZA.js"))), t.component("dropdown-divider", i(() => import("./dropdown-divider-B7JPEmkN.js"))), t.component("dropdown-item", i(() => import("./dropdown-item-BU3bgDwG.js"))), t.component("dropdown-trigger", i(() => import("./dropdown-trigger-DTlJTm2u.js"))), t.component("modal", i(() => import("./modal-C5xJoYjS.js"))), t.component("confirm", i(() => import("./confirm-dialog-D2lNlEAL.js"))), t.component("alert", i(() => import("./alert-dialog-Cx7UVq1h.js"))), t.component("tabs", i(() => import("./tabs-BgHChJGc.js"))), t.component("tab", i(() => import("./tab-DkodDZA8.js"))), t.component("pagination", i(() => import("./pagination-BLZykKo-.js")));
}
function G(t) {
  t.component("field-label", i(() => import("./field-label-BlqTt41h.js"))), t.component("text-input", i(() => import("./text-input-DfuY0ED7.js"))), t.component("password-input", i(() => import("./password-input-CYj3PcqC.js"))), t.component("text-area", i(() => import("./text-area-BLLtHf0h.js"))), t.component("select-input", i(() => import("./select-input-CDT_VF1_.js"))), t.component("radio-input", i(() => import("./radio-input-B1Dp5itf.js"))), t.component("checkbox-input", i(() => import("./checkbox-input-B_xSXtDh.js"))), t.component("switch-input", i(() => import("./switch-input-DqyyquBs.js"))), t.component("currency-input", i(() => import("./currency-input-Dlp4-ltP.js"))), t.component("tag-input", i(() => import("./tag-input-CFTLx0Um.js"))), t.component("file-input", i(() => import("./file-input-DZouJbmP.js"))), t.component("number-input", i(() => import("./number-input-C9Yumz5J.js"))), t.component("date-picker", i(() => import("./date-picker-DK5Aci9l.js"))), t.component("time-input", i(() => import("./time-input-IRoEV9yT.js")));
}
const K = {
  position: "top",
  color: "dark",
  size: "medium",
  multiline: !1,
  always: !1
}, S = (t, e) => {
  t._tooltipInstance && t._tooltipInstance.cleanup();
  const o = { ...K, ...e }, n = document.createElement("div");
  n.className = "bulma-tooltip", n.textContent = o.content, n.style.position = "absolute", n.style.zIndex = "9999", n.style.padding = "0.5rem 0.75rem", n.style.borderRadius = "4px", n.style.fontSize = "0.85rem", n.style.pointerEvents = "none", n.style.opacity = "0", n.style.transition = "opacity 150ms ease-in-out", o.size === "small" ? (n.style.fontSize = "0.75rem", n.style.padding = "0.25rem 0.5rem") : o.size === "large" && (n.style.fontSize = "1rem", n.style.padding = "0.75rem 1rem"), o.color === "primary" ? (n.style.backgroundColor = "#00d1b2", n.style.color = "#fff") : o.color === "link" ? (n.style.backgroundColor = "#3273dc", n.style.color = "#fff") : o.color === "info" ? (n.style.backgroundColor = "#209cee", n.style.color = "#fff") : o.color === "success" ? (n.style.backgroundColor = "#23d160", n.style.color = "#fff") : o.color === "warning" ? (n.style.backgroundColor = "#ffdd57", n.style.color = "rgba(0, 0, 0, 0.7)") : o.color === "danger" ? (n.style.backgroundColor = "#ff3860", n.style.color = "#fff") : (n.style.backgroundColor = "#363636", n.style.color = "#fff"), o.multiline ? (n.style.maxWidth = "300px", n.style.whiteSpace = "pre-wrap") : n.style.whiteSpace = "nowrap";
  const s = document.createElement("div");
  s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.borderStyle = "solid", s.style.borderWidth = "6px", s.style.pointerEvents = "none", o.position === "top" ? (s.style.borderColor = `${n.style.backgroundColor} transparent transparent transparent`, s.style.bottom = "-12px", s.style.left = "50%", s.style.transform = "translateX(-50%)") : o.position === "right" ? (s.style.borderColor = `transparent ${n.style.backgroundColor} transparent transparent`, s.style.left = "-12px", s.style.top = "50%", s.style.transform = "translateY(-50%)") : o.position === "bottom" ? (s.style.borderColor = `transparent transparent ${n.style.backgroundColor} transparent`, s.style.top = "-12px", s.style.left = "50%", s.style.transform = "translateX(-50%)") : o.position === "left" && (s.style.borderColor = `transparent transparent transparent ${n.style.backgroundColor}`, s.style.right = "-12px", s.style.top = "50%", s.style.transform = "translateY(-50%)"), n.appendChild(s), document.body.appendChild(n);
  const r = () => {
    const c = t.getBoundingClientRect(), u = n.getBoundingClientRect();
    o.position === "top" ? (n.style.left = `${c.left + c.width / 2 - u.width / 2 + window.scrollX}px`, n.style.top = `${c.top - u.height - 8 + window.scrollY}px`) : o.position === "right" ? (n.style.left = `${c.right + 8 + window.scrollX}px`, n.style.top = `${c.top + c.height / 2 - u.height / 2 + window.scrollY}px`) : o.position === "bottom" ? (n.style.left = `${c.left + c.width / 2 - u.width / 2 + window.scrollX}px`, n.style.top = `${c.bottom + 8 + window.scrollY}px`) : o.position === "left" && (n.style.left = `${c.left - u.width - 8 + window.scrollX}px`, n.style.top = `${c.top + c.height / 2 - u.height / 2 + window.scrollY}px`);
  }, l = () => {
    r(), n.style.opacity = "1";
  }, a = () => {
    o.always || (n.style.opacity = "0");
  };
  return t.addEventListener("mouseenter", l), t.addEventListener("mouseleave", a), t.addEventListener("focus", l), t.addEventListener("blur", a), o.always && l(), window.addEventListener("resize", r), window.addEventListener("scroll", r), t._tooltipInstance = {
    tooltip: n,
    cleanup: () => {
      t.removeEventListener("mouseenter", l), t.removeEventListener("mouseleave", a), t.removeEventListener("focus", l), t.removeEventListener("blur", a), window.removeEventListener("resize", r), window.removeEventListener("scroll", r), document.body.removeChild(n), delete t._tooltipInstance;
    }
  }, t._tooltipInstance;
}, Q = {
  mounted(t, e) {
    const o = typeof e.value == "string" ? { content: e.value } : e.value;
    e.modifiers && (e.modifiers.top && (o.position = "top"), e.modifiers.right && (o.position = "right"), e.modifiers.bottom && (o.position = "bottom"), e.modifiers.left && (o.position = "left"), e.modifiers.primary && (o.color = "primary"), e.modifiers.link && (o.color = "link"), e.modifiers.info && (o.color = "info"), e.modifiers.success && (o.color = "success"), e.modifiers.warning && (o.color = "warning"), e.modifiers.danger && (o.color = "danger"), o.multiline = e.modifiers.multiline || o.multiline, o.always = e.modifiers.always || o.always), S(t, o);
  },
  updated(t, e) {
    const o = typeof e.value == "string" ? { content: e.value } : e.value;
    e.modifiers && (e.modifiers.top && (o.position = "top"), e.modifiers.right && (o.position = "right"), e.modifiers.bottom && (o.position = "bottom"), e.modifiers.left && (o.position = "left"), e.modifiers.primary && (o.color = "primary"), e.modifiers.link && (o.color = "link"), e.modifiers.info && (o.color = "info"), e.modifiers.success && (o.color = "success"), e.modifiers.warning && (o.color = "warning"), e.modifiers.danger && (o.color = "danger"), o.multiline = e.modifiers.multiline || o.multiline, o.always = e.modifiers.always || o.always), S(t, o);
  },
  beforeUnmount(t) {
    t._tooltipInstance && t._tooltipInstance.cleanup();
  }
}, Z = {
  install(t) {
    t.directive("tooltip", Q);
  }
};
function tt(t) {
  t.use(Z);
}
const ot = E({
  name: "Toast",
  props: {
    position: {
      type: String,
      default: "top-right"
    },
    transition: {
      type: String,
      default: "toast"
    }
  },
  setup(t) {
    const e = h([]), o = T(() => `toast-${t.position}`), n = (r) => {
      const l = Date.now();
      setTimeout(() => {
        e.value.push({ ...r, id: l });
      }, e.value.length * 100), r.timeout !== 0 && setTimeout(() => {
        s(l);
      }, r.timeout || 3e3);
    }, s = (r) => {
      const l = e.value.findIndex((a) => a.id === r);
      l > -1 && e.value.splice(l, 1);
    };
    return {
      notifications: e,
      addToast: n,
      removeToast: s,
      positionClass: o
    };
  }
}), et = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of e)
    o[n] = s;
  return o;
}, nt = ["onClick"];
function st(t, e, o, n, s, r) {
  return m(), d("div", {
    class: v(["toast-container", t.positionClass])
  }, [
    L(x, {
      name: t.transition,
      tag: "div",
      class: v(["toast-group", t.positionClass])
    }, {
      default: M(() => [
        (m(!0), d(V, null, z(t.notifications, (l) => (m(), d("div", {
          key: l.id,
          class: "notification-wrapper"
        }, [
          y("div", {
            class: v(["notification", l.type])
          }, [
            y("button", {
              class: "delete",
              onClick: (a) => t.removeToast(l.id)
            }, null, 8, nt),
            I(" " + D(l.message), 1)
          ], 2)
        ]))), 128))
      ]),
      _: 1
    }, 8, ["name", "class"])
  ], 2);
}
const $ = /* @__PURE__ */ et(ot, [["render", st], ["__scopeId", "data-v-04e8babe"]]);
class it {
  constructor(e = "bottom-right", o = 4e3, n = "toast") {
    f(this, "toastApp");
    f(this, "toastComponent");
    f(this, "position");
    f(this, "timeout");
    f(this, "transition");
    this.position = e, this.timeout = o, this.transition = n;
    const s = document.createElement("div");
    s.id = "toast-container", document.body.appendChild(s), this.toastApp = b($, {
      position: this.position
    }), this.toastComponent = this.toastApp.mount("#toast-container");
  }
  setPosition(e) {
    this.position = e, this.destroy();
    const o = document.createElement("div");
    o.id = "toast-container", document.body.appendChild(o), this.toastApp = b($, {
      position: this.position,
      timeout: this.timeout,
      transition: this.transition
    }), this.toastComponent = this.toastApp.mount("#toast-container");
  }
  success(e) {
    this.toastComponent.addToast({
      message: e,
      type: "is-success",
      timeout: this.timeout,
      transition: this.transition
    });
  }
  error(e) {
    this.toastComponent.addToast({
      message: e,
      type: "is-danger",
      timeout: this.timeout,
      transition: this.transition
    });
  }
  warning(e) {
    this.toastComponent.addToast({
      message: e,
      type: "is-warning",
      timeout: this.timeout,
      transition: this.transition
    });
  }
  info(e) {
    this.toastComponent.addToast({
      message: e,
      type: "is-info",
      timeout: this.timeout,
      transition: this.transition
    });
  }
  destroy() {
    const e = document.getElementById("toast-container");
    e && (this.toastApp.unmount(), e.remove());
  }
}
const F = Symbol("toaster");
function ht() {
  const t = Y(F);
  if (!t)
    throw new Error("Toaster not provided! Did you forget to install the plugin?");
  return {
    success: (e) => t.success(e),
    error: (e) => t.error(e),
    warning: (e) => t.warning(e),
    info: (e) => t.info(e)
  };
}
function gt(t, e = 50) {
  let o;
  return A((n, s) => ({
    get() {
      return n(), t;
    },
    set(r) {
      clearTimeout(o), o = setTimeout(() => {
        t = r, s();
      }, e);
    }
  }));
}
function vt(t, e = {}) {
  const o = new Date(t), n = e.locale || "en-US", s = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !0
  };
  if (e.format) {
    const r = {
      YYYY: o.getFullYear().toString(),
      MMMM: o.toLocaleString(n, { month: "long" }),
      MMM: o.toLocaleString(n, { month: "short" }),
      MM: (o.getMonth() + 1).toString().padStart(2, "0"),
      DD: o.getDate().toString().padStart(2, "0"),
      D: o.getDate().toString(),
      HH: o.getHours().toString().padStart(2, "0"),
      hh: (o.getHours() % 12 || 12).toString().padStart(2, "0"),
      mm: o.getMinutes().toString().padStart(2, "0"),
      ss: o.getSeconds().toString().padStart(2, "0"),
      A: o.getHours() >= 12 ? "PM" : "AM"
    };
    return e.format.replace(/YYYY|MMMM|MMM|MM|DD|D|HH|hh|mm|ss|A/g, (l) => r[l]);
  }
  return new Intl.DateTimeFormat(n, s).format(o);
}
function wt(t, e, o, n) {
  C(
    t,
    (s) => {
      const r = Object.entries(s).reduce((l, [a, c]) => (c !== "" && c !== null && c !== void 0 && (l[a] = c), l), {});
      JSON.stringify(r) !== JSON.stringify(e.query) && (o.push({
        name: n.routeName,
        query: r
      }), n.onFiltersChange && n.onFiltersChange(r));
    },
    { deep: !0 }
  ), C(
    () => e.query,
    () => {
      Object.entries(e.query).forEach(([s, r]) => {
        s in t.value && (t.value[s] = r);
      });
    },
    { immediate: !0 }
  );
}
function Ct(t, e = "$", o = "en-US") {
  if (t == null)
    return `${e}0.00`;
  let n;
  if (typeof t == "string")
    n = parseFloat(t);
  else if (typeof t == "number")
    n = t;
  else if (typeof t == "object" && t.valueOf)
    n = t.valueOf();
  else
    return `${e}0.00`;
  if (isNaN(n))
    return `${e}0.00`;
  const s = n.toLocaleString(o, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${e}${s}`;
}
const rt = {
  key: 0,
  class: "flyout-header"
}, lt = { class: "flyout-title" }, at = {
  key: 0,
  class: "title is-4"
}, ct = { class: "flyout-content" }, mt = {
  key: 1,
  class: "flyout-footer"
}, ut = /* @__PURE__ */ E({
  __name: "flyout",
  props: {
    modelValue: { type: Boolean },
    title: {},
    position: { default: "right" },
    size: { default: "medium" },
    closable: { type: Boolean, default: !0 },
    closeOnOverlay: { type: Boolean, default: !0 },
    showHeader: { type: Boolean, default: !0 },
    component: {},
    componentProps: {},
    componentListeners: {},
    zIndex: { default: 100 }
  },
  emits: ["update:modelValue", "close"],
  setup(t, { emit: e }) {
    const o = t, n = e, s = () => {
      n("update:modelValue", !1), n("close");
    }, r = () => {
      o.closeOnOverlay && s();
    }, l = (a) => {
      a.key === "Escape" && o.closable && o.modelValue && s();
    };
    return C(
      () => o.modelValue,
      (a) => {
        a ? (document.addEventListener("keydown", l), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", l), document.body.style.overflow = "");
      },
      { immediate: !0 }
    ), N(() => {
      document.removeEventListener("keydown", l), document.body.style.overflow = "";
    }), (a, c) => (m(), k(B, { to: "body" }, [
      L(H, { name: "flyout" }, {
        default: M(() => [
          a.modelValue ? (m(), d("div", {
            key: 0,
            class: "flyout-overlay",
            style: P(`z-index: ${a.zIndex};`),
            onClick: r
          }, [
            y("div", {
              class: "flyout-container",
              onClick: c[0] || (c[0] = j(() => {
              }, ["stop"]))
            }, [
              a.showHeader ? (m(), d("header", rt, [
                y("div", lt, [
                  w(a.$slots, "header", {}, () => [
                    a.title ? (m(), d("h3", at, D(a.title), 1)) : p("", !0)
                  ])
                ]),
                a.closable ? (m(), d("button", {
                  key: 0,
                  class: "delete is-large",
                  onClick: s
                })) : p("", !0)
              ])) : p("", !0),
              y("main", ct, [
                w(a.$slots, "default", { close: s }, () => [
                  a.component ? (m(), k(X(a.component), R({ key: 0 }, a.componentProps, { onClose: s }, U(a.componentListeners)), null, 16)) : p("", !0)
                ])
              ]),
              a.$slots.footer ? (m(), d("footer", mt, [
                w(a.$slots, "footer", { close: s })
              ])) : p("", !0)
            ])
          ], 4)) : p("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function g(t = {}) {
  const {
    initialValue: e = !1,
    onOpen: o,
    onClose: n
  } = t, s = h(e), r = () => {
    s.value || (s.value = !0, o == null || o());
  }, l = () => {
    s.value && (s.value = !1, n == null || n());
  };
  return {
    isOpen: s,
    open: r,
    close: l,
    toggle: () => {
      s.value ? l() : r();
    }
  };
}
function bt(t) {
  const e = {};
  for (const [o, n] of Object.entries(t))
    e[o] = g({ initialValue: n });
  return e;
}
function kt(t = {}) {
  const {
    confirmMessage: e = "Are you sure you want to close?",
    onConfirm: o,
    onCancel: n,
    ...s
  } = t, r = g(s), l = () => {
    confirm(e) ? (r.close(), o == null || o()) : n == null || n();
  };
  return {
    ...r,
    close: l,
    confirmClose: l,
    forceClose: () => {
      r.close();
    }
  };
}
function St(t, e = {}) {
  const { onSubmit: o, onReset: n, resetOnClose: s = !0 } = e, r = h({ ...t }), l = h({ ...t }), a = T(() => JSON.stringify(r.value) !== JSON.stringify(l.value)), c = () => {
    r.value = { ...l.value }, n == null || n();
  }, u = async () => {
    o && (await o(r.value), l.value = { ...r.value });
  };
  return {
    ...g({
      onClose: () => {
        s && c();
      }
    }),
    formData: r,
    isDirty: a,
    reset: c,
    submit: u
  };
}
function $t(t = {}) {
  const e = g(t), o = h(!1);
  return {
    ...e,
    isLoading: o,
    withLoading: async (s) => {
      o.value = !0;
      try {
        return await s();
      } finally {
        o.value = !1;
      }
    }
  };
}
const Et = {
  install(t) {
    t.component("VuemaFlyout", ut);
  }
}, dt = {
  toaster: {
    position: "bottom-right",
    timeout: 4e3,
    transition: "toast"
  }
}, Tt = {
  install: (t, e = dt) => {
    var n, s, r;
    W(t), q(t), J(t), G(t), tt(t);
    const o = new it(
      (n = e == null ? void 0 : e.toaster) == null ? void 0 : n.position,
      (s = e == null ? void 0 : e.toaster) == null ? void 0 : s.timeout,
      (r = e == null ? void 0 : e.toaster) == null ? void 0 : r.transition
    );
    t.provide(F, o), t.config.globalProperties.$toaster = o, t.unmount = () => o.destroy();
  }
};
export {
  Tt as V,
  et as _,
  gt as a,
  wt as b,
  Ct as c,
  Et as d,
  ut as e,
  vt as f,
  g,
  bt as h,
  kt as i,
  St as j,
  $t as k,
  ht as u
};
