var _ = Object.defineProperty;
var x = (t, o, e) => o in t ? _(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var f = (t, o, e) => x(t, typeof o != "symbol" ? o + "" : o, e);
import { defineAsyncComponent as i, defineComponent as E, ref as g, computed as L, createElementBlock as d, openBlock as u, normalizeClass as w, createVNode as M, TransitionGroup as V, withCtx as D, Fragment as z, renderList as I, createElementVNode as h, createTextVNode as Y, toDisplayString as F, createApp as k, inject as A, customRef as N, watch as b, onUnmounted as B, createBlock as S, Teleport as H, Transition as P, createCommentVNode as p, normalizeStyle as j, withModifiers as X, renderSlot as C, resolveDynamicComponent as R, mergeProps as U, toHandlers as W } from "vue";
function q(t) {
  t.component("column", i(() => import("./column-DFEEo01k.js"))), t.component("columns", i(() => import("./columns-CNwTQcJ_.js"))), t.component("flex", i(() => import("./flex-CJOBxjf2.js")));
}
function J(t) {
  t.component("base-icon", i(() => import("./base-icon-BittugVB.js"))), t.component("action-button", i(() => import("./button-CecB7Pv-.js"))), t.component("icon-button", i(() => import("./icon-button-BiahoDPt.js"))), t.component("submit-button", i(() => import("./submit-button-BsPRc5u5.js"))), t.component("buttons", i(() => import("./buttons-DZb92DV0.js"))), t.component("loader", i(() => import("./loader-LODHwIEO.js"))), t.component("block", i(() => import("./block-BePOgl1T.js"))), t.component("box", i(() => import("./box-CWq7leWn.js"))), t.component("b-icon", i(() => import("./icon-XTRTXlk0.js"))), t.component("avatar", i(() => import("./avatar-Qs3jleId.js")));
}
function G(t) {
  t.component("side-menu", i(() => import("./side-menu-CNAw4J4Y.js"))), t.component("side-menu-label", i(() => import("./side-menu-label-cAlu0qug.js"))), t.component("side-menu-list", i(() => import("./side-menu-list-DfCl6oLX.js"))), t.component("side-menu-list-item", i(() => import("./side-menu-list-item-CPUeE0lg.js"))), t.component("dropdown", i(() => import("./dropdown-BFSCP8ZA.js"))), t.component("dropdown-divider", i(() => import("./dropdown-divider-ufm8h8z2.js"))), t.component("dropdown-item", i(() => import("./dropdown-item-BU3bgDwG.js"))), t.component("dropdown-trigger", i(() => import("./dropdown-trigger-DTlJTm2u.js"))), t.component("modal", i(() => import("./modal-CfaLOUJf.js"))), t.component("confirm", i(() => import("./confirm-dialog-D2lNlEAL.js"))), t.component("alert", i(() => import("./alert-dialog-CvLzMp9D.js"))), t.component("tabs", i(() => import("./tabs-BgHChJGc.js"))), t.component("tab", i(() => import("./tab-DkodDZA8.js"))), t.component("pagination", i(() => import("./pagination-DdbGWCH4.js"))), t.component("steps", i(() => import("./steps-BglGOm29.js")));
}
function K(t) {
  t.component("field-label", i(() => import("./field-label-BlqTt41h.js"))), t.component("text-input", i(() => import("./text-input-BdxEj3-B.js"))), t.component("password-input", i(() => import("./password-input-Brzii3IT.js"))), t.component("text-area", i(() => import("./text-area-C9T8WpS0.js"))), t.component("select-input", i(() => import("./select-input-CDT_VF1_.js"))), t.component("radio-input", i(() => import("./radio-input-B1Dp5itf.js"))), t.component("checkbox-input", i(() => import("./checkbox-input-B_xSXtDh.js"))), t.component("switch-input", i(() => import("./switch-input-DqyyquBs.js"))), t.component("currency-input", i(() => import("./currency-input-DeiaocXF.js"))), t.component("tag-input", i(() => import("./tag-input-CFTLx0Um.js"))), t.component("file-input", i(() => import("./file-input-D92IHPA5.js"))), t.component("number-input", i(() => import("./number-input-aApu1-1r.js"))), t.component("date-picker", i(() => import("./date-picker-DhfDhhUO.js"))), t.component("time-input", i(() => import("./time-input-HFkHu-_B.js"))), t.component("search-input", i(() => import("./search-input-BGtW3eO1.js"))), t.component("phone-input", i(() => import("./phone-input-B3FMiGJj.js"))), t.component("drag-drop-uploader", i(() => import("./drag-drop-uploader-BfMMB1gY.js")));
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
  const s = document.createElement("div");
  s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.borderStyle = "solid", s.style.borderWidth = "6px", s.style.pointerEvents = "none", e.position === "top" ? (s.style.borderColor = `${n.style.backgroundColor} transparent transparent transparent`, s.style.bottom = "-12px", s.style.left = "50%", s.style.transform = "translateX(-50%)") : e.position === "right" ? (s.style.borderColor = `transparent ${n.style.backgroundColor} transparent transparent`, s.style.left = "-12px", s.style.top = "50%", s.style.transform = "translateY(-50%)") : e.position === "bottom" ? (s.style.borderColor = `transparent transparent ${n.style.backgroundColor} transparent`, s.style.top = "-12px", s.style.left = "50%", s.style.transform = "translateX(-50%)") : e.position === "left" && (s.style.borderColor = `transparent transparent transparent ${n.style.backgroundColor}`, s.style.right = "-12px", s.style.top = "50%", s.style.transform = "translateY(-50%)"), n.appendChild(s), document.body.appendChild(n);
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
        s(r);
      }, l.timeout || 3e3);
    }, s = (l) => {
      const r = o.value.findIndex((a) => a.id === l);
      r > -1 && o.value.splice(r, 1);
    };
    return {
      notifications: o,
      addToast: n,
      removeToast: s,
      positionClass: e
    };
  }
}), nt = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
}, st = ["onClick"];
function it(t, o, e, n, s, l) {
  return u(), d("div", {
    class: w(["toast-container", t.positionClass])
  }, [
    M(V, {
      name: t.transition,
      tag: "div",
      class: w(["toast-group", t.positionClass])
    }, {
      default: D(() => [
        (u(!0), d(z, null, I(t.notifications, (r) => (u(), d("div", {
          key: r.id,
          class: "notification-wrapper"
        }, [
          h("div", {
            class: w(["notification", r.type])
          }, [
            h("button", {
              class: "delete",
              onClick: (a) => t.removeToast(r.id)
            }, null, 8, st),
            Y(" " + F(r.message), 1)
          ], 2)
        ]))), 128))
      ]),
      _: 1
    }, 8, ["name", "class"])
  ], 2);
}
const $ = /* @__PURE__ */ nt(ot, [["render", it], ["__scopeId", "data-v-04e8babe"]]);
class rt {
  constructor(o = "bottom-right", e = 4e3, n = "toast") {
    f(this, "toastApp");
    f(this, "toastComponent");
    f(this, "position");
    f(this, "timeout");
    f(this, "transition");
    this.position = o, this.timeout = e, this.transition = n;
    const s = document.createElement("div");
    s.id = "toast-container", document.body.appendChild(s), this.toastApp = k($, {
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
const O = Symbol("toaster");
function ht() {
  const t = A(O);
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
  return N((n, s) => ({
    get() {
      return n(), t;
    },
    set(l) {
      clearTimeout(e), e = setTimeout(() => {
        t = l, s();
      }, o);
    }
  }));
}
function vt(t, o = {}) {
  const e = new Date(t), n = o.locale || "en-US", s = {
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
  return new Intl.DateTimeFormat(n, s).format(e);
}
function wt(t, o, e, n) {
  let s = null;
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
      n.debounce ? (s && clearTimeout(s), s = setTimeout(() => {
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
  const s = n.toLocaleString(e, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${o}${s}`;
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
    const e = t, n = o, s = () => {
      n("update:modelValue", !1), n("close");
    }, l = () => {
      e.closeOnOverlay && s();
    }, r = (a) => {
      a.key === "Escape" && e.closable && e.modelValue && s();
    };
    return b(
      () => e.modelValue,
      (a) => {
        a ? (document.addEventListener("keydown", r), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", r), document.body.style.overflow = "");
      },
      { immediate: !0 }
    ), B(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (a, c) => (u(), S(H, { to: "body" }, [
      M(P, { name: "flyout" }, {
        default: D(() => [
          a.modelValue ? (u(), d("div", {
            key: 0,
            class: "flyout-overlay",
            style: j(`z-index: ${a.zIndex};`),
            onClick: l
          }, [
            h("div", {
              class: "flyout-container",
              onClick: c[0] || (c[0] = X(() => {
              }, ["stop"]))
            }, [
              a.showHeader ? (u(), d("header", lt, [
                h("div", at, [
                  C(a.$slots, "header", {}, () => [
                    a.title ? (u(), d("h3", ct, F(a.title), 1)) : p("", !0)
                  ])
                ]),
                a.closable ? (u(), d("button", {
                  key: 0,
                  class: "delete is-large",
                  onClick: s
                })) : p("", !0)
              ])) : p("", !0),
              h("main", mt, [
                C(a.$slots, "default", { close: s }, () => [
                  a.component ? (u(), S(R(a.component), U({ key: 0 }, a.componentProps, { onClose: s }, W(a.componentListeners)), null, 16)) : p("", !0)
                ])
              ]),
              a.$slots.footer ? (u(), d("footer", ut, [
                C(a.$slots, "footer", { close: s })
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
  } = t, s = g(o), l = () => {
    s.value || (s.value = !0, e == null || e());
  }, r = () => {
    s.value && (s.value = !1, n == null || n());
  };
  return {
    isOpen: s,
    open: l,
    close: r,
    toggle: () => {
      s.value ? r() : l();
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
    ...s
  } = t, l = v(s), r = () => {
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
  const { onSubmit: e, onReset: n, resetOnClose: s = !0 } = o, l = g({ ...t }), r = g({ ...t }), a = L(() => JSON.stringify(l.value) !== JSON.stringify(r.value)), c = () => {
    l.value = { ...r.value }, n == null || n();
  }, m = async () => {
    e && (await e(l.value), r.value = { ...l.value });
  };
  return {
    ...v({
      onClose: () => {
        s && c();
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
    withLoading: async (s) => {
      e.value = !0;
      try {
        return await s();
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
    var n, s, l;
    q(t), J(t), G(t), K(t), et(t);
    const e = new rt(
      (n = o == null ? void 0 : o.toaster) == null ? void 0 : n.position,
      (s = o == null ? void 0 : o.toaster) == null ? void 0 : s.timeout,
      (l = o == null ? void 0 : o.toaster) == null ? void 0 : l.transition
    );
    t.provide(O, e), t.config.globalProperties.$toaster = e, t.unmount = () => e.destroy();
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
