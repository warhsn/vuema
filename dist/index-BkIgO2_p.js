var O = Object.defineProperty;
var I = (t, e, o) => e in t ? O(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var f = (t, e, o) => I(t, typeof e != "symbol" ? e + "" : e, o);
import { defineAsyncComponent as s, defineComponent as E, ref as g, computed as L, createElementBlock as d, openBlock as u, normalizeClass as w, createVNode as x, TransitionGroup as V, withCtx as M, Fragment as z, renderList as Y, createElementVNode as h, createTextVNode as A, toDisplayString as D, createApp as k, inject as N, customRef as _, watch as b, onUnmounted as B, createBlock as S, Teleport as H, Transition as P, createCommentVNode as p, normalizeStyle as j, withModifiers as X, renderSlot as C, resolveDynamicComponent as R, mergeProps as U, toHandlers as W } from "vue";
function q(t) {
  t.component("column", s(() => import("./column-DFEEo01k.js"))), t.component("columns", s(() => import("./columns-CNwTQcJ_.js"))), t.component("flex", s(() => import("./flex-BlOSNMxY.js")));
}
function J(t) {
  t.component("base-icon", s(() => import("./base-icon-BYFjiGHr.js"))), t.component("action-button", s(() => import("./button-BAAMBYA_.js"))), t.component("icon-button", s(() => import("./icon-button-CwHwxzPR.js"))), t.component("submit-button", s(() => import("./submit-button-Bn_nFpJX.js"))), t.component("buttons", s(() => import("./buttons-DZb92DV0.js"))), t.component("loader", s(() => import("./loader-BFbhNYwT.js"))), t.component("block", s(() => import("./block-9UJnZPt9.js"))), t.component("box", s(() => import("./box-DTClrjdI.js"))), t.component("b-icon", s(() => import("./icon-QkQXAd6B.js"))), t.component("avatar", s(() => import("./avatar-DyvyzNYk.js")));
}
function G(t) {
  t.component("side-menu", s(() => import("./side-menu-C6-Kclpg.js"))), t.component("side-menu-label", s(() => import("./side-menu-label-DF_ZaIKL.js"))), t.component("side-menu-list", s(() => import("./side-menu-list-CoTgLjV_.js"))), t.component("side-menu-list-item", s(() => import("./side-menu-list-item-uVMuYAWs.js"))), t.component("dropdown", s(() => import("./dropdown-yeKJXV90.js"))), t.component("dropdown-divider", s(() => import("./dropdown-divider-DxScbaCJ.js"))), t.component("dropdown-item", s(() => import("./dropdown-item-BU3bgDwG.js"))), t.component("dropdown-trigger", s(() => import("./dropdown-trigger-DTlJTm2u.js"))), t.component("modal", s(() => import("./modal-B5xyogKR.js"))), t.component("confirm", s(() => import("./confirm-dialog-BpLP07Yn.js"))), t.component("alert", s(() => import("./alert-dialog-BvvqFNT0.js"))), t.component("tabs", s(() => import("./tabs-BgHChJGc.js"))), t.component("tab", s(() => import("./tab-DkodDZA8.js"))), t.component("pagination", s(() => import("./pagination-oHeyjFTB.js"))), t.component("steps", s(() => import("./steps-D_s94O3k.js")));
}
function K(t) {
  t.component("field-label", s(() => import("./field-label-BPGAcVCp.js"))), t.component("field-error", s(() => import("./field-error-B_nqpbkA.js"))), t.component("text-input", s(() => import("./text-input-C9dB0AG1.js"))), t.component("password-input", s(() => import("./password-input-CH5REUQz.js"))), t.component("text-area", s(() => import("./text-area-6XpXO9I0.js"))), t.component("select-input", s(() => import("./select-input-DCXVDHrA.js"))), t.component("radio-input", s(() => import("./radio-input-CtE5UlJ8.js"))), t.component("checkbox-input", s(() => import("./checkbox-input-Bpd318h_.js"))), t.component("color-picker", s(() => import("./color-picker-BNNIsEar.js"))), t.component("switch-input", s(() => import("./switch-input-BRhrIyMI.js"))), t.component("currency-input", s(() => import("./currency-input-CCdAZz29.js"))), t.component("tag-input", s(() => import("./tag-input-CpBTfq7I.js"))), t.component("file-input", s(() => import("./file-input-BKdZbe6E.js"))), t.component("number-input", s(() => import("./number-input-C-plLrOu.js"))), t.component("date-picker", s(() => import("./date-picker-DODXOGUW.js"))), t.component("time-input", s(() => import("./time-input-BcqZX5dE.js"))), t.component("search-input", s(() => import("./search-input-D5rJTT8K.js"))), t.component("phone-input", s(() => import("./phone-input-Bcwy2YXc.js"))), t.component("drag-drop-uploader", s(() => import("./drag-drop-uploader-g5dUZP0y.js")));
}
const Q = {
  position: "top",
  color: "dark",
  size: "medium",
  multiline: !1,
  always: !1
}, T = (t, e) => {
  t._tooltipInstance && t._tooltipInstance.cleanup();
  const o = { ...Q, ...e }, n = document.createElement("div");
  n.className = "bulma-tooltip", n.textContent = o.content, n.style.position = "absolute", n.style.zIndex = "9999", n.style.padding = "0.5rem 0.75rem", n.style.borderRadius = "4px", n.style.fontSize = "0.85rem", n.style.pointerEvents = "none", n.style.opacity = "0", n.style.transition = "opacity 150ms ease-in-out", o.size === "small" ? (n.style.fontSize = "0.75rem", n.style.padding = "0.25rem 0.5rem") : o.size === "large" && (n.style.fontSize = "1rem", n.style.padding = "0.75rem 1rem"), o.color === "primary" ? (n.style.backgroundColor = "#00d1b2", n.style.color = "#fff") : o.color === "link" ? (n.style.backgroundColor = "#3273dc", n.style.color = "#fff") : o.color === "info" ? (n.style.backgroundColor = "#209cee", n.style.color = "#fff") : o.color === "success" ? (n.style.backgroundColor = "#23d160", n.style.color = "#fff") : o.color === "warning" ? (n.style.backgroundColor = "#ffdd57", n.style.color = "rgba(0, 0, 0, 0.7)") : o.color === "danger" ? (n.style.backgroundColor = "#ff3860", n.style.color = "#fff") : (n.style.backgroundColor = "#363636", n.style.color = "#fff"), o.multiline ? (n.style.maxWidth = "300px", n.style.whiteSpace = "pre-wrap") : n.style.whiteSpace = "nowrap";
  const i = document.createElement("div");
  i.style.position = "absolute", i.style.width = "0", i.style.height = "0", i.style.borderStyle = "solid", i.style.borderWidth = "6px", i.style.pointerEvents = "none", o.position === "top" ? (i.style.borderColor = `${n.style.backgroundColor} transparent transparent transparent`, i.style.bottom = "-12px", i.style.left = "50%", i.style.transform = "translateX(-50%)") : o.position === "right" ? (i.style.borderColor = `transparent ${n.style.backgroundColor} transparent transparent`, i.style.left = "-12px", i.style.top = "50%", i.style.transform = "translateY(-50%)") : o.position === "bottom" ? (i.style.borderColor = `transparent transparent ${n.style.backgroundColor} transparent`, i.style.top = "-12px", i.style.left = "50%", i.style.transform = "translateX(-50%)") : o.position === "left" && (i.style.borderColor = `transparent transparent transparent ${n.style.backgroundColor}`, i.style.right = "-12px", i.style.top = "50%", i.style.transform = "translateY(-50%)"), n.appendChild(i), document.body.appendChild(n);
  const l = () => {
    const c = t.getBoundingClientRect(), m = n.getBoundingClientRect();
    o.position === "top" ? (n.style.left = `${c.left + c.width / 2 - m.width / 2 + window.scrollX}px`, n.style.top = `${c.top - m.height - 8 + window.scrollY}px`) : o.position === "right" ? (n.style.left = `${c.right + 8 + window.scrollX}px`, n.style.top = `${c.top + c.height / 2 - m.height / 2 + window.scrollY}px`) : o.position === "bottom" ? (n.style.left = `${c.left + c.width / 2 - m.width / 2 + window.scrollX}px`, n.style.top = `${c.bottom + 8 + window.scrollY}px`) : o.position === "left" && (n.style.left = `${c.left - m.width - 8 + window.scrollX}px`, n.style.top = `${c.top + c.height / 2 - m.height / 2 + window.scrollY}px`);
  }, r = () => {
    l(), n.style.opacity = "1";
  }, a = () => {
    o.always || (n.style.opacity = "0");
  };
  return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", a), t.addEventListener("focus", r), t.addEventListener("blur", a), o.always && r(), window.addEventListener("resize", l), window.addEventListener("scroll", l), t._tooltipInstance = {
    tooltip: n,
    cleanup: () => {
      t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", a), t.removeEventListener("focus", r), t.removeEventListener("blur", a), window.removeEventListener("resize", l), window.removeEventListener("scroll", l), document.body.removeChild(n), delete t._tooltipInstance;
    }
  }, t._tooltipInstance;
}, Z = {
  mounted(t, e) {
    if (!e.value) return;
    const o = typeof e.value == "string" ? { content: e.value } : { ...e.value };
    e.modifiers && (e.modifiers.top && (o.position = "top"), e.modifiers.right && (o.position = "right"), e.modifiers.bottom && (o.position = "bottom"), e.modifiers.left && (o.position = "left"), e.modifiers.primary && (o.color = "primary"), e.modifiers.link && (o.color = "link"), e.modifiers.info && (o.color = "info"), e.modifiers.success && (o.color = "success"), e.modifiers.warning && (o.color = "warning"), e.modifiers.danger && (o.color = "danger"), e.modifiers.multiline && (o.multiline = !0), e.modifiers.always && (o.always = !0)), T(t, o);
  },
  updated(t, e) {
    if (console.log("tooltip updated", e.value), !e.value) {
      t._tooltipInstance && t._tooltipInstance.cleanup();
      return;
    }
    const o = typeof e.value == "string" ? { content: e.value } : { ...e.value };
    e.modifiers && (e.modifiers.top && (o.position = "top"), e.modifiers.right && (o.position = "right"), e.modifiers.bottom && (o.position = "bottom"), e.modifiers.left && (o.position = "left"), e.modifiers.primary && (o.color = "primary"), e.modifiers.link && (o.color = "link"), e.modifiers.info && (o.color = "info"), e.modifiers.success && (o.color = "success"), e.modifiers.warning && (o.color = "warning"), e.modifiers.danger && (o.color = "danger"), e.modifiers.multiline && (o.multiline = !0), e.modifiers.always && (o.always = !0)), T(t, o);
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
    const e = g([]), o = L(() => `toast-${t.position}`), n = (l) => {
      const r = Date.now();
      setTimeout(() => {
        e.value.push({ ...l, id: r });
      }, e.value.length * 100), l.timeout !== 0 && setTimeout(() => {
        i(r);
      }, l.timeout || 3e3);
    }, i = (l) => {
      const r = e.value.findIndex((a) => a.id === l);
      r > -1 && e.value.splice(r, 1);
    };
    return {
      notifications: e,
      addToast: n,
      removeToast: i,
      positionClass: o
    };
  }
}), nt = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, i] of e)
    o[n] = i;
  return o;
}, it = ["onClick"];
function st(t, e, o, n, i, l) {
  return u(), d("div", {
    class: w(["toast-container", t.positionClass])
  }, [
    x(V, {
      name: t.transition,
      tag: "div",
      class: w(["toast-group", t.positionClass])
    }, {
      default: M(() => [
        (u(!0), d(z, null, Y(t.notifications, (r) => (u(), d("div", {
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
  constructor(e = "bottom-right", o = 4e3, n = "toast") {
    f(this, "toastApp");
    f(this, "toastComponent");
    f(this, "position");
    f(this, "timeout");
    f(this, "transition");
    this.position = e, this.timeout = o, this.transition = n;
    const i = document.createElement("div");
    i.id = "toast-container", document.body.appendChild(i), this.toastApp = k($, {
      position: this.position
    }), this.toastComponent = this.toastApp.mount("#toast-container");
  }
  setPosition(e) {
    this.position = e, this.destroy();
    const o = document.createElement("div");
    o.id = "toast-container", document.body.appendChild(o), this.toastApp = k($, {
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
  const t = N(F);
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
  return _((n, i) => ({
    get() {
      return n(), t;
    },
    set(l) {
      clearTimeout(o), o = setTimeout(() => {
        t = l, i();
      }, e);
    }
  }));
}
function vt(t, e = {}) {
  const o = new Date(t), n = e.locale || "en-US", i = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !0
  };
  if (e.format) {
    const l = {
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
    return e.format.replace(/YYYY|MMMM|MMM|MM|DD|D|HH|hh|mm|ss|A/g, (r) => l[r]);
  }
  return new Intl.DateTimeFormat(n, i).format(o);
}
function wt(t, e, o, n) {
  let i = null;
  const l = (r) => {
    const a = Object.entries(r).reduce((c, [m, y]) => (y !== "" && y !== null && y !== void 0 && (c[m] = y), c), {});
    JSON.stringify(a) !== JSON.stringify(e.query) && (o.push({
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
    () => e.query,
    () => {
      Object.entries(e.query).forEach(([r, a]) => {
        r in t.value && (t.value[r] = a);
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
  const i = n.toLocaleString(o, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${e}${i}`;
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
  setup(t, { emit: e }) {
    const o = t, n = e, i = () => {
      n("update:modelValue", !1), n("close");
    }, l = () => {
      o.closeOnOverlay && i();
    }, r = (a) => {
      a.key === "Escape" && o.closable && o.modelValue && i();
    };
    return b(
      () => o.modelValue,
      (a) => {
        a ? (document.addEventListener("keydown", r), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", r), document.body.style.overflow = "");
      },
      { immediate: !0 }
    ), B(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (a, c) => (u(), S(H, { to: "body" }, [
      x(P, { name: "flyout" }, {
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
    initialValue: e = !1,
    onOpen: o,
    onClose: n
  } = t, i = g(e), l = () => {
    i.value || (i.value = !0, o == null || o());
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
  const e = {};
  for (const [o, n] of Object.entries(t))
    e[o] = v({ initialValue: n });
  return e;
}
function kt(t = {}) {
  const {
    confirmMessage: e = "Are you sure you want to close?",
    onConfirm: o,
    onCancel: n,
    ...i
  } = t, l = v(i), r = () => {
    confirm(e) ? (l.close(), o == null || o()) : n == null || n();
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
function St(t, e = {}) {
  const { onSubmit: o, onReset: n, resetOnClose: i = !0 } = e, l = g({ ...t }), r = g({ ...t }), a = L(() => JSON.stringify(l.value) !== JSON.stringify(r.value)), c = () => {
    l.value = { ...r.value }, n == null || n();
  }, m = async () => {
    o && (await o(l.value), r.value = { ...l.value });
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
  const e = v(t), o = g(!1);
  return {
    ...e,
    isLoading: o,
    withLoading: async (i) => {
      o.value = !0;
      try {
        return await i();
      } finally {
        o.value = !1;
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
  install: (t, e = ft) => {
    var n, i, l;
    q(t), J(t), G(t), K(t), et(t);
    const o = new rt(
      (n = e == null ? void 0 : e.toaster) == null ? void 0 : n.position,
      (i = e == null ? void 0 : e.toaster) == null ? void 0 : i.timeout,
      (l = e == null ? void 0 : e.toaster) == null ? void 0 : l.transition
    );
    t.provide(F, o), t.config.globalProperties.$toaster = o, t.unmount = () => o.destroy();
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
