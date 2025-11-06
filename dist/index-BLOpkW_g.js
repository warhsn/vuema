var O = Object.defineProperty;
var V = (t, o, e) => o in t ? O(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var f = (t, o, e) => V(t, typeof o != "symbol" ? o + "" : o, e);
import { defineAsyncComponent as s, defineComponent as E, ref as g, computed as L, createElementBlock as d, openBlock as u, normalizeClass as w, createVNode as x, TransitionGroup as z, withCtx as M, Fragment as I, renderList as Y, createElementVNode as h, createTextVNode as A, toDisplayString as D, createApp as k, inject as N, customRef as B, watch as b, onUnmounted as H, createBlock as S, Teleport as P, Transition as _, createCommentVNode as p, normalizeStyle as j, withModifiers as X, renderSlot as C, resolveDynamicComponent as R, mergeProps as U, toHandlers as W } from "vue";
function q(t) {
  t.component("column", s(() => import("./column-DFEEo01k.js"))), t.component("columns", s(() => import("./columns-CNwTQcJ_.js"))), t.component("flex", s(() => import("./flex-DqBNaLid.js")));
}
function J(t) {
  t.component("base-icon", s(() => import("./base-icon-BYFjiGHr.js"))), t.component("action-button", s(() => import("./button-BAAMBYA_.js"))), t.component("icon-button", s(() => import("./icon-button-CwHwxzPR.js"))), t.component("submit-button", s(() => import("./submit-button-Bn_nFpJX.js"))), t.component("buttons", s(() => import("./buttons-DZb92DV0.js"))), t.component("loader", s(() => import("./loader-cTvgaf4M.js"))), t.component("block", s(() => import("./block-BlcogPUp.js"))), t.component("box", s(() => import("./box-C_Lc5xp7.js"))), t.component("b-icon", s(() => import("./icon-QkQXAd6B.js"))), t.component("avatar", s(() => import("./avatar-BLY8bpEd.js")));
}
function G(t) {
  t.component("side-menu", s(() => import("./side-menu-DMXGleS_.js"))), t.component("side-menu-label", s(() => import("./side-menu-label-CQdW_NV6.js"))), t.component("side-menu-list", s(() => import("./side-menu-list-B4VpDsl5.js"))), t.component("side-menu-list-item", s(() => import("./side-menu-list-item-CBP4-o-8.js"))), t.component("dropdown", s(() => import("./dropdown-yeKJXV90.js"))), t.component("dropdown-divider", s(() => import("./dropdown-divider-MtZ1IyoO.js"))), t.component("dropdown-item", s(() => import("./dropdown-item-BU3bgDwG.js"))), t.component("dropdown-trigger", s(() => import("./dropdown-trigger-DTlJTm2u.js"))), t.component("modal", s(() => import("./modal-B5xyogKR.js"))), t.component("confirm", s(() => import("./confirm-dialog-BpLP07Yn.js"))), t.component("alert", s(() => import("./alert-dialog-BvvqFNT0.js"))), t.component("tabs", s(() => import("./tabs-BgHChJGc.js"))), t.component("tab", s(() => import("./tab-DkodDZA8.js"))), t.component("pagination", s(() => import("./pagination-ZmlL-kmb.js"))), t.component("steps", s(() => import("./steps-DMwtblRc.js")));
}
function K(t) {
  t.component("field-label", s(() => import("./field-label-CFVYVEYE.js"))), t.component("field-error", s(() => import("./field-error-B_nqpbkA.js"))), t.component("text-input", s(() => import("./text-input-C9dB0AG1.js"))), t.component("password-input", s(() => import("./password-input-CH5REUQz.js"))), t.component("text-area", s(() => import("./text-area-6XpXO9I0.js"))), t.component("select-input", s(() => import("./select-input-DCXVDHrA.js"))), t.component("radio-input", s(() => import("./radio-input-CtE5UlJ8.js"))), t.component("checkbox-input", s(() => import("./checkbox-input-Bpd318h_.js"))), t.component("color-picker", s(() => import("./color-picker-CsYBhHUY.js"))), t.component("switch-input", s(() => import("./switch-input-Dh_BR8Da.js"))), t.component("currency-input", s(() => import("./currency-input-CCdAZz29.js"))), t.component("tag-input", s(() => import("./tag-input-CpBTfq7I.js"))), t.component("file-input", s(() => import("./file-input-BKdZbe6E.js"))), t.component("number-input", s(() => import("./number-input-C-plLrOu.js"))), t.component("date-picker", s(() => import("./date-picker-CFWDX-Xe.js"))), t.component("time-input", s(() => import("./time-input-Cb3AaoUk.js"))), t.component("search-input", s(() => import("./search-input-fFJjK5GD.js"))), t.component("phone-input", s(() => import("./phone-input-CVBSL2X7.js"))), t.component("drag-drop-uploader", s(() => import("./drag-drop-uploader-ZFlopyDc.js")));
}
const Q = {
  position: "top",
  color: "dark",
  size: "medium",
  multiline: !1,
  always: !1
}, T = (t, o) => {
  t._tooltipInstance && t._tooltipInstance.cleanup();
  const e = { ...Q, ...o }, n = document.createElement("div");
  n.className = "bulma-tooltip", n.textContent = e.content, n.style.position = "absolute", n.style.zIndex = "9999", n.style.padding = "0.5rem 0.75rem", n.style.borderRadius = "4px", n.style.fontSize = "0.85rem", n.style.pointerEvents = "none", n.style.opacity = "0", n.style.transition = "opacity 150ms ease-in-out", e.size === "small" ? (n.style.fontSize = "0.75rem", n.style.padding = "0.25rem 0.5rem") : e.size === "large" && (n.style.fontSize = "1rem", n.style.padding = "0.75rem 1rem"), e.color === "primary" ? (n.style.backgroundColor = "#00d1b2", n.style.color = "#fff") : e.color === "link" ? (n.style.backgroundColor = "#3273dc", n.style.color = "#fff") : e.color === "info" ? (n.style.backgroundColor = "#209cee", n.style.color = "#fff") : e.color === "success" ? (n.style.backgroundColor = "#23d160", n.style.color = "#fff") : e.color === "warning" ? (n.style.backgroundColor = "#ffdd57", n.style.color = "rgba(0, 0, 0, 0.7)") : e.color === "danger" ? (n.style.backgroundColor = "#ff3860", n.style.color = "#fff") : (n.style.backgroundColor = "#363636", n.style.color = "#fff"), e.multiline ? (n.style.maxWidth = "300px", n.style.whiteSpace = "pre-wrap") : n.style.whiteSpace = "nowrap";
  const i = document.createElement("div");
  i.style.position = "absolute", i.style.width = "0", i.style.height = "0", i.style.borderStyle = "solid", i.style.borderWidth = "6px", i.style.pointerEvents = "none", e.position === "top" ? (i.style.borderColor = `${n.style.backgroundColor} transparent transparent transparent`, i.style.bottom = "-12px", i.style.left = "50%", i.style.transform = "translateX(-50%)") : e.position === "right" ? (i.style.borderColor = `transparent ${n.style.backgroundColor} transparent transparent`, i.style.left = "-12px", i.style.top = "50%", i.style.transform = "translateY(-50%)") : e.position === "bottom" ? (i.style.borderColor = `transparent transparent ${n.style.backgroundColor} transparent`, i.style.top = "-12px", i.style.left = "50%", i.style.transform = "translateX(-50%)") : e.position === "left" && (i.style.borderColor = `transparent transparent transparent ${n.style.backgroundColor}`, i.style.right = "-12px", i.style.top = "50%", i.style.transform = "translateY(-50%)"), n.appendChild(i), document.body.appendChild(n);
  const l = () => {
    const c = t.getBoundingClientRect(), m = n.getBoundingClientRect();
    e.position === "top" ? (n.style.left = `${c.left + c.width / 2 - m.width / 2 + window.scrollX}px`, n.style.top = `${c.top - m.height - 8 + window.scrollY}px`) : e.position === "right" ? (n.style.left = `${c.right + 8 + window.scrollX}px`, n.style.top = `${c.top + c.height / 2 - m.height / 2 + window.scrollY}px`) : e.position === "bottom" ? (n.style.left = `${c.left + c.width / 2 - m.width / 2 + window.scrollX}px`, n.style.top = `${c.bottom + 8 + window.scrollY}px`) : e.position === "left" && (n.style.left = `${c.left - m.width - 8 + window.scrollX}px`, n.style.top = `${c.top + c.height / 2 - m.height / 2 + window.scrollY}px`);
  }, r = () => {
    l(), n.style.opacity = "1";
  }, a = () => {
    e.always || (n.style.opacity = "0");
  };
  return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", a), t.addEventListener("focus", r), t.addEventListener("blur", a), e.always && r(), window.addEventListener("resize", l), window.addEventListener("scroll", l), t._tooltipInstance = {
    tooltip: n,
    cleanup: () => {
      t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", a), t.removeEventListener("focus", r), t.removeEventListener("blur", a), window.removeEventListener("resize", l), window.removeEventListener("scroll", l), document.body.removeChild(n), delete t._tooltipInstance;
    }
  }, t._tooltipInstance;
}, Z = {
  mounted(t, o) {
    const e = typeof o.value == "string" ? { content: o.value } : o.value;
    o.modifiers && (o.modifiers.top && (e.position = "top"), o.modifiers.right && (e.position = "right"), o.modifiers.bottom && (e.position = "bottom"), o.modifiers.left && (e.position = "left"), o.modifiers.primary && (e.color = "primary"), o.modifiers.link && (e.color = "link"), o.modifiers.info && (e.color = "info"), o.modifiers.success && (e.color = "success"), o.modifiers.warning && (e.color = "warning"), o.modifiers.danger && (e.color = "danger"), e.multiline = o.modifiers.multiline || e.multiline, e.always = o.modifiers.always || e.always), T(t, e);
  },
  updated(t, o) {
    const e = typeof o.value == "string" ? { content: o.value } : o.value;
    o.modifiers && (o.modifiers.top && (e.position = "top"), o.modifiers.right && (e.position = "right"), o.modifiers.bottom && (e.position = "bottom"), o.modifiers.left && (e.position = "left"), o.modifiers.primary && (e.color = "primary"), o.modifiers.link && (e.color = "link"), o.modifiers.info && (e.color = "info"), o.modifiers.success && (e.color = "success"), o.modifiers.warning && (e.color = "warning"), o.modifiers.danger && (e.color = "danger"), e.multiline = o.modifiers.multiline || e.multiline, e.always = o.modifiers.always || e.always), T(t, e);
  },
  beforeUnmount(t) {
    t._tooltipInstance && t._tooltipInstance.cleanup();
  }
}, tt = {
  install(t) {
    t.directive("tooltip", Z);
  }
};
function et(t) {
  t.use(tt);
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
    const o = g([]), e = L(() => `toast-${t.position}`), n = (l) => {
      const r = Date.now();
      setTimeout(() => {
        o.value.push({ ...l, id: r });
      }, o.value.length * 100), l.timeout !== 0 && setTimeout(() => {
        i(r);
      }, l.timeout || 3e3);
    }, i = (l) => {
      const r = o.value.findIndex((a) => a.id === l);
      r > -1 && o.value.splice(r, 1);
    };
    return {
      notifications: o,
      addToast: n,
      removeToast: i,
      positionClass: e
    };
  }
}), nt = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, i] of o)
    e[n] = i;
  return e;
}, it = ["onClick"];
function st(t, o, e, n, i, l) {
  return u(), d("div", {
    class: w(["toast-container", t.positionClass])
  }, [
    x(z, {
      name: t.transition,
      tag: "div",
      class: w(["toast-group", t.positionClass])
    }, {
      default: M(() => [
        (u(!0), d(I, null, Y(t.notifications, (r) => (u(), d("div", {
          key: r.id,
          class: "notification-wrapper"
        }, [
          h("div", {
            class: w(["notification", r.type])
          }, [
            h("button", {
              class: "delete",
              onClick: (a) => t.removeToast(r.id)
            }, null, 8, it),
            A(" " + D(r.message), 1)
          ], 2)
        ]))), 128))
      ]),
      _: 1
    }, 8, ["name", "class"])
  ], 2);
}
const $ = /* @__PURE__ */ nt(ot, [["render", st], ["__scopeId", "data-v-04e8babe"]]);
class rt {
  constructor(o = "bottom-right", e = 4e3, n = "toast") {
    f(this, "toastApp");
    f(this, "toastComponent");
    f(this, "position");
    f(this, "timeout");
    f(this, "transition");
    this.position = o, this.timeout = e, this.transition = n;
    const i = document.createElement("div");
    i.id = "toast-container", document.body.appendChild(i), this.toastApp = k($, {
      position: this.position
    }), this.toastComponent = this.toastApp.mount("#toast-container");
  }
  setPosition(o) {
    this.position = o, this.destroy();
    const e = document.createElement("div");
    e.id = "toast-container", document.body.appendChild(e), this.toastApp = k($, {
      position: this.position,
      timeout: this.timeout,
      transition: this.transition
    }), this.toastComponent = this.toastApp.mount("#toast-container");
  }
  success(o) {
    this.toastComponent.addToast({
      message: o,
      type: "is-success",
      timeout: this.timeout,
      transition: this.transition
    });
  }
  error(o) {
    this.toastComponent.addToast({
      message: o,
      type: "is-danger",
      timeout: this.timeout,
      transition: this.transition
    });
  }
  warning(o) {
    this.toastComponent.addToast({
      message: o,
      type: "is-warning",
      timeout: this.timeout,
      transition: this.transition
    });
  }
  info(o) {
    this.toastComponent.addToast({
      message: o,
      type: "is-info",
      timeout: this.timeout,
      transition: this.transition
    });
  }
  destroy() {
    const o = document.getElementById("toast-container");
    o && (this.toastApp.unmount(), o.remove());
  }
}
const F = Symbol("toaster");
function ht() {
  const t = N(F);
  if (!t)
    throw new Error("Toaster not provided! Did you forget to install the plugin?");
  return {
    success: (o) => t.success(o),
    error: (o) => t.error(o),
    warning: (o) => t.warning(o),
    info: (o) => t.info(o)
  };
}
function gt(t, o = 50) {
  let e;
  return B((n, i) => ({
    get() {
      return n(), t;
    },
    set(l) {
      clearTimeout(e), e = setTimeout(() => {
        t = l, i();
      }, o);
    }
  }));
}
function vt(t, o = {}) {
  const e = new Date(t), n = o.locale || "en-US", i = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !0
  };
  if (o.format) {
    const l = {
      YYYY: e.getFullYear().toString(),
      MMMM: e.toLocaleString(n, { month: "long" }),
      MMM: e.toLocaleString(n, { month: "short" }),
      MM: (e.getMonth() + 1).toString().padStart(2, "0"),
      DD: e.getDate().toString().padStart(2, "0"),
      D: e.getDate().toString(),
      HH: e.getHours().toString().padStart(2, "0"),
      hh: (e.getHours() % 12 || 12).toString().padStart(2, "0"),
      mm: e.getMinutes().toString().padStart(2, "0"),
      ss: e.getSeconds().toString().padStart(2, "0"),
      A: e.getHours() >= 12 ? "PM" : "AM"
    };
    return o.format.replace(/YYYY|MMMM|MMM|MM|DD|D|HH|hh|mm|ss|A/g, (r) => l[r]);
  }
  return new Intl.DateTimeFormat(n, i).format(e);
}
function wt(t, o, e, n) {
  let i = null;
  const l = (r) => {
    const a = Object.entries(r).reduce((c, [m, y]) => (y !== "" && y !== null && y !== void 0 && (c[m] = y), c), {});
    JSON.stringify(a) !== JSON.stringify(o.query) && (e.push({
      name: n.routeName,
      query: a
    }), n.onFiltersChange && n.onFiltersChange(a));
  };
  b(
    t,
    (r) => {
      n.debounce ? (i && clearTimeout(i), i = setTimeout(() => {
        l(r);
      }, n.debounce)) : l(r);
    },
    { deep: !0 }
  ), b(
    () => o.query,
    () => {
      Object.entries(o.query).forEach(([r, a]) => {
        r in t.value && (t.value[r] = a);
      });
    },
    { immediate: !0 }
  );
}
function Ct(t, o = "$", e = "en-US") {
  if (t == null)
    return `${o}0.00`;
  let n;
  if (typeof t == "string")
    n = parseFloat(t);
  else if (typeof t == "number")
    n = t;
  else if (typeof t == "object" && t.valueOf)
    n = t.valueOf();
  else
    return `${o}0.00`;
  if (isNaN(n))
    return `${o}0.00`;
  const i = n.toLocaleString(e, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${o}${i}`;
}
const lt = {
  key: 0,
  class: "flyout-header"
}, at = { class: "flyout-title" }, ct = {
  key: 0,
  class: "title is-4"
}, mt = { class: "flyout-content" }, ut = {
  key: 1,
  class: "flyout-footer"
}, dt = /* @__PURE__ */ E({
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
  setup(t, { emit: o }) {
    const e = t, n = o, i = () => {
      n("update:modelValue", !1), n("close");
    }, l = () => {
      e.closeOnOverlay && i();
    }, r = (a) => {
      a.key === "Escape" && e.closable && e.modelValue && i();
    };
    return b(
      () => e.modelValue,
      (a) => {
        a ? (document.addEventListener("keydown", r), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", r), document.body.style.overflow = "");
      },
      { immediate: !0 }
    ), H(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (a, c) => (u(), S(P, { to: "body" }, [
      x(_, { name: "flyout" }, {
        default: M(() => [
          t.modelValue ? (u(), d("div", {
            key: 0,
            class: "flyout-overlay",
            style: j(`z-index: ${t.zIndex};`),
            onClick: l
          }, [
            h("div", {
              class: "flyout-container",
              onClick: c[0] || (c[0] = X(() => {
              }, ["stop"]))
            }, [
              t.showHeader ? (u(), d("header", lt, [
                h("div", at, [
                  C(a.$slots, "header", {}, () => [
                    t.title ? (u(), d("h3", ct, D(t.title), 1)) : p("", !0)
                  ])
                ]),
                t.closable ? (u(), d("button", {
                  key: 0,
                  class: "delete is-large",
                  onClick: i
                })) : p("", !0)
              ])) : p("", !0),
              h("main", mt, [
                C(a.$slots, "default", { close: i }, () => [
                  t.component ? (u(), S(R(t.component), U({ key: 0 }, t.componentProps, { onClose: i }, W(t.componentListeners)), null, 16)) : p("", !0)
                ])
              ]),
              a.$slots.footer ? (u(), d("footer", ut, [
                C(a.$slots, "footer", { close: i })
              ])) : p("", !0)
            ])
          ], 4)) : p("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function v(t = {}) {
  const {
    initialValue: o = !1,
    onOpen: e,
    onClose: n
  } = t, i = g(o), l = () => {
    i.value || (i.value = !0, e == null || e());
  }, r = () => {
    i.value && (i.value = !1, n == null || n());
  };
  return {
    isOpen: i,
    open: l,
    close: r,
    toggle: () => {
      i.value ? r() : l();
    }
  };
}
function bt(t) {
  const o = {};
  for (const [e, n] of Object.entries(t))
    o[e] = v({ initialValue: n });
  return o;
}
function kt(t = {}) {
  const {
    confirmMessage: o = "Are you sure you want to close?",
    onConfirm: e,
    onCancel: n,
    ...i
  } = t, l = v(i), r = () => {
    confirm(o) ? (l.close(), e == null || e()) : n == null || n();
  };
  return {
    ...l,
    close: r,
    confirmClose: r,
    forceClose: () => {
      l.close();
    }
  };
}
function St(t, o = {}) {
  const { onSubmit: e, onReset: n, resetOnClose: i = !0 } = o, l = g({ ...t }), r = g({ ...t }), a = L(() => JSON.stringify(l.value) !== JSON.stringify(r.value)), c = () => {
    l.value = { ...r.value }, n == null || n();
  }, m = async () => {
    e && (await e(l.value), r.value = { ...l.value });
  };
  return {
    ...v({
      onClose: () => {
        i && c();
      }
    }),
    formData: l,
    isDirty: a,
    reset: c,
    submit: m
  };
}
function Tt(t = {}) {
  const o = v(t), e = g(!1);
  return {
    ...o,
    isLoading: e,
    withLoading: async (i) => {
      e.value = !0;
      try {
        return await i();
      } finally {
        e.value = !1;
      }
    }
  };
}
const $t = {
  install(t) {
    t.component("VuemaFlyout", dt);
  }
}, ft = {
  toaster: {
    position: "bottom-right",
    timeout: 4e3,
    transition: "toast"
  }
}, Et = {
  install: (t, o = ft) => {
    var n, i, l;
    q(t), J(t), G(t), K(t), et(t);
    const e = new rt(
      (n = o == null ? void 0 : o.toaster) == null ? void 0 : n.position,
      (i = o == null ? void 0 : o.toaster) == null ? void 0 : i.timeout,
      (l = o == null ? void 0 : o.toaster) == null ? void 0 : l.transition
    );
    t.provide(F, e), t.config.globalProperties.$toaster = e, t.unmount = () => e.destroy();
  }
};
export {
  Et as V,
  nt as _,
  gt as a,
  wt as b,
  Ct as c,
  $t as d,
  dt as e,
  vt as f,
  v as g,
  bt as h,
  kt as i,
  St as j,
  Tt as k,
  ht as u
};
