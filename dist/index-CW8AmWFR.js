var C = Object.defineProperty;
var b = (t, o, e) => o in t ? C(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var p = (t, o, e) => b(t, typeof o != "symbol" ? o + "" : o, e);
import { defineAsyncComponent as n, defineComponent as k, ref as T, computed as x, createElementBlock as d, openBlock as u, normalizeClass as f, createVNode as E, TransitionGroup as _, withCtx as $, Fragment as L, renderList as I, createElementVNode as y, createTextVNode as S, toDisplayString as z, createApp as h, inject as A, customRef as D } from "vue";
function R(t) {
  t.component("column", n(() => import("./column-DFEEo01k.js"))), t.component("columns", n(() => import("./columns-CNwTQcJ_.js"))), t.component("flex", n(() => import("./flex-DUc3ckwr.js")));
}
function X(t) {
  t.component("base-icon", n(() => import("./base-icon-D9TihyI9.js"))), t.component("action-button", n(() => import("./button-CecB7Pv-.js"))), t.component("icon-button", n(() => import("./icon-button-BiahoDPt.js"))), t.component("submit-button", n(() => import("./submit-button-BBryhJxf.js"))), t.component("buttons", n(() => import("./buttons-DZb92DV0.js"))), t.component("loader", n(() => import("./loader-PHVx3boC.js"))), t.component("block", n(() => import("./block-DAGTtJCf.js"))), t.component("box", n(() => import("./box-7fAVcObL.js"))), t.component("b-icon", n(() => import("./icon-XTRTXlk0.js"))), t.component("avatar", n(() => import("./avatar-Qs3jleId.js")));
}
function Y(t) {
  t.component("side-menu", n(() => import("./side-menu-0a7VM6nM.js"))), t.component("side-menu-label", n(() => import("./side-menu-label-BvTuqiJD.js"))), t.component("side-menu-list", n(() => import("./side-menu-list-XhXAPS4N.js"))), t.component("side-menu-list-item", n(() => import("./side-menu-list-item-B-RqQ2Cn.js"))), t.component("dropdown", n(() => import("./dropdown-BFSCP8ZA.js"))), t.component("dropdown-divider", n(() => import("./dropdown-divider-x71RmOBn.js"))), t.component("dropdown-item", n(() => import("./dropdown-item-BU3bgDwG.js"))), t.component("dropdown-trigger", n(() => import("./dropdown-trigger-DTlJTm2u.js"))), t.component("modal", n(() => import("./modal-C5xJoYjS.js"))), t.component("confirm", n(() => import("./confirm-dialog-D2lNlEAL.js"))), t.component("alert", n(() => import("./alert-dialog-Cx7UVq1h.js"))), t.component("tabs", n(() => import("./tabs-BgHChJGc.js"))), t.component("tab", n(() => import("./tab-DkodDZA8.js"))), t.component("pagination", n(() => import("./pagination-C8Y1xs4n.js")));
}
function B(t) {
  t.component("field-label", n(() => import("./field-label-BlqTt41h.js"))), t.component("text-input", n(() => import("./text-input-CbltCGMd.js"))), t.component("password-input", n(() => import("./password-input-CYj3PcqC.js"))), t.component("text-area", n(() => import("./text-area-BLLtHf0h.js"))), t.component("select-input", n(() => import("./select-input-CDT_VF1_.js"))), t.component("radio-input", n(() => import("./radio-input-B1Dp5itf.js"))), t.component("checkbox-input", n(() => import("./checkbox-input-B_xSXtDh.js"))), t.component("switch-input", n(() => import("./switch-input-DqyyquBs.js"))), t.component("currency-input", n(() => import("./currency-input-D08wAQyo.js"))), t.component("tag-input", n(() => import("./tag-input-CFTLx0Um.js"))), t.component("file-input", n(() => import("./file-input-DZouJbmP.js"))), t.component("number-input", n(() => import("./number-input-C9Yumz5J.js"))), t.component("date-picker", n(() => import("./date-picker-DVqtR9gc.js"))), t.component("time-input", n(() => import("./time-input-IRoEV9yT.js")));
}
const N = {
  position: "top",
  color: "dark",
  size: "medium",
  multiline: !1,
  always: !1
}, w = (t, o) => {
  t._tooltipInstance && t._tooltipInstance.cleanup();
  const e = { ...N, ...o }, i = document.createElement("div");
  i.className = "bulma-tooltip", i.textContent = e.content, i.style.position = "absolute", i.style.zIndex = "9999", i.style.padding = "0.5rem 0.75rem", i.style.borderRadius = "4px", i.style.fontSize = "0.85rem", i.style.pointerEvents = "none", i.style.opacity = "0", i.style.transition = "opacity 150ms ease-in-out", e.size === "small" ? (i.style.fontSize = "0.75rem", i.style.padding = "0.25rem 0.5rem") : e.size === "large" && (i.style.fontSize = "1rem", i.style.padding = "0.75rem 1rem"), e.color === "primary" ? (i.style.backgroundColor = "#00d1b2", i.style.color = "#fff") : e.color === "link" ? (i.style.backgroundColor = "#3273dc", i.style.color = "#fff") : e.color === "info" ? (i.style.backgroundColor = "#209cee", i.style.color = "#fff") : e.color === "success" ? (i.style.backgroundColor = "#23d160", i.style.color = "#fff") : e.color === "warning" ? (i.style.backgroundColor = "#ffdd57", i.style.color = "rgba(0, 0, 0, 0.7)") : e.color === "danger" ? (i.style.backgroundColor = "#ff3860", i.style.color = "#fff") : (i.style.backgroundColor = "#363636", i.style.color = "#fff"), e.multiline ? (i.style.maxWidth = "300px", i.style.whiteSpace = "pre-wrap") : i.style.whiteSpace = "nowrap";
  const s = document.createElement("div");
  s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.borderStyle = "solid", s.style.borderWidth = "6px", s.style.pointerEvents = "none", e.position === "top" ? (s.style.borderColor = `${i.style.backgroundColor} transparent transparent transparent`, s.style.bottom = "-12px", s.style.left = "50%", s.style.transform = "translateX(-50%)") : e.position === "right" ? (s.style.borderColor = `transparent ${i.style.backgroundColor} transparent transparent`, s.style.left = "-12px", s.style.top = "50%", s.style.transform = "translateY(-50%)") : e.position === "bottom" ? (s.style.borderColor = `transparent transparent ${i.style.backgroundColor} transparent`, s.style.top = "-12px", s.style.left = "50%", s.style.transform = "translateX(-50%)") : e.position === "left" && (s.style.borderColor = `transparent transparent transparent ${i.style.backgroundColor}`, s.style.right = "-12px", s.style.top = "50%", s.style.transform = "translateY(-50%)"), i.appendChild(s), document.body.appendChild(i);
  const r = () => {
    const a = t.getBoundingClientRect(), c = i.getBoundingClientRect();
    e.position === "top" ? (i.style.left = `${a.left + a.width / 2 - c.width / 2 + window.scrollX}px`, i.style.top = `${a.top - c.height - 8 + window.scrollY}px`) : e.position === "right" ? (i.style.left = `${a.right + 8 + window.scrollX}px`, i.style.top = `${a.top + a.height / 2 - c.height / 2 + window.scrollY}px`) : e.position === "bottom" ? (i.style.left = `${a.left + a.width / 2 - c.width / 2 + window.scrollX}px`, i.style.top = `${a.bottom + 8 + window.scrollY}px`) : e.position === "left" && (i.style.left = `${a.left - c.width - 8 + window.scrollX}px`, i.style.top = `${a.top + a.height / 2 - c.height / 2 + window.scrollY}px`);
  }, l = () => {
    r(), i.style.opacity = "1";
  }, m = () => {
    e.always || (i.style.opacity = "0");
  };
  return t.addEventListener("mouseenter", l), t.addEventListener("mouseleave", m), t.addEventListener("focus", l), t.addEventListener("blur", m), e.always && l(), window.addEventListener("resize", r), window.addEventListener("scroll", r), t._tooltipInstance = {
    tooltip: i,
    cleanup: () => {
      t.removeEventListener("mouseenter", l), t.removeEventListener("mouseleave", m), t.removeEventListener("focus", l), t.removeEventListener("blur", m), window.removeEventListener("resize", r), window.removeEventListener("scroll", r), document.body.removeChild(i), delete t._tooltipInstance;
    }
  }, t._tooltipInstance;
}, O = {
  mounted(t, o) {
    const e = typeof o.value == "string" ? { content: o.value } : o.value;
    o.modifiers && (o.modifiers.top && (e.position = "top"), o.modifiers.right && (e.position = "right"), o.modifiers.bottom && (e.position = "bottom"), o.modifiers.left && (e.position = "left"), o.modifiers.primary && (e.color = "primary"), o.modifiers.link && (e.color = "link"), o.modifiers.info && (e.color = "info"), o.modifiers.success && (e.color = "success"), o.modifiers.warning && (e.color = "warning"), o.modifiers.danger && (e.color = "danger"), e.multiline = o.modifiers.multiline || e.multiline, e.always = o.modifiers.always || e.always), w(t, e);
  },
  updated(t, o) {
    const e = typeof o.value == "string" ? { content: o.value } : o.value;
    o.modifiers && (o.modifiers.top && (e.position = "top"), o.modifiers.right && (e.position = "right"), o.modifiers.bottom && (e.position = "bottom"), o.modifiers.left && (e.position = "left"), o.modifiers.primary && (e.color = "primary"), o.modifiers.link && (e.color = "link"), o.modifiers.info && (e.color = "info"), o.modifiers.success && (e.color = "success"), o.modifiers.warning && (e.color = "warning"), o.modifiers.danger && (e.color = "danger"), e.multiline = o.modifiers.multiline || e.multiline, e.always = o.modifiers.always || e.always), w(t, e);
  },
  beforeUnmount(t) {
    t._tooltipInstance && t._tooltipInstance.cleanup();
  }
}, P = {
  install(t) {
    t.directive("tooltip", O);
  }
};
function V(t) {
  t.use(P);
}
const F = k({
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
    const o = T([]), e = x(() => `toast-${t.position}`), i = (r) => {
      const l = Date.now();
      setTimeout(() => {
        o.value.push({ ...r, id: l });
      }, o.value.length * 100), r.timeout !== 0 && setTimeout(() => {
        s(l);
      }, r.timeout || 3e3);
    }, s = (r) => {
      const l = o.value.findIndex((m) => m.id === r);
      l > -1 && o.value.splice(l, 1);
    };
    return {
      notifications: o,
      addToast: i,
      removeToast: s,
      positionClass: e
    };
  }
}), U = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [i, s] of o)
    e[i] = s;
  return e;
}, W = ["onClick"];
function j(t, o, e, i, s, r) {
  return u(), d("div", {
    class: f(["toast-container", t.positionClass])
  }, [
    E(_, {
      name: t.transition,
      tag: "div",
      class: f(["toast-group", t.positionClass])
    }, {
      default: $(() => [
        (u(!0), d(L, null, I(t.notifications, (l) => (u(), d("div", {
          key: l.id,
          class: "notification-wrapper"
        }, [
          y("div", {
            class: f(["notification", l.type])
          }, [
            y("button", {
              class: "delete",
              onClick: (m) => t.removeToast(l.id)
            }, null, 8, W),
            S(" " + z(l.message), 1)
          ], 2)
        ]))), 128))
      ]),
      _: 1
    }, 8, ["name", "class"])
  ], 2);
}
const v = /* @__PURE__ */ U(F, [["render", j], ["__scopeId", "data-v-04e8babe"]]);
class G {
  constructor(o = "bottom-right", e = 4e3, i = "toast") {
    p(this, "toastApp");
    p(this, "toastComponent");
    p(this, "position");
    p(this, "timeout");
    p(this, "transition");
    this.position = o, this.timeout = e, this.transition = i;
    const s = document.createElement("div");
    s.id = "toast-container", document.body.appendChild(s), this.toastApp = h(v, {
      position: this.position
    }), this.toastComponent = this.toastApp.mount("#toast-container");
  }
  setPosition(o) {
    this.position = o, this.destroy();
    const e = document.createElement("div");
    e.id = "toast-container", document.body.appendChild(e), this.toastApp = h(v, {
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
const g = Symbol("toaster");
function K() {
  const t = A(g);
  if (!t)
    throw new Error("Toaster not provided! Did you forget to install the plugin?");
  return {
    success: (o) => t.success(o),
    error: (o) => t.error(o),
    warning: (o) => t.warning(o),
    info: (o) => t.info(o)
  };
}
function M(t, o = 50) {
  let e;
  return D((i, s) => ({
    get() {
      return i(), t;
    },
    set(r) {
      clearTimeout(e), e = setTimeout(() => {
        t = r, s();
      }, o);
    }
  }));
}
const q = {
  toaster: {
    position: "bottom-right",
    timeout: 4e3,
    transition: "toast"
  }
}, Q = {
  install: (t, o = q) => {
    var i, s, r;
    R(t), X(t), Y(t), B(t), V(t);
    const e = new G(
      (i = o == null ? void 0 : o.toaster) == null ? void 0 : i.position,
      (s = o == null ? void 0 : o.toaster) == null ? void 0 : s.timeout,
      (r = o == null ? void 0 : o.toaster) == null ? void 0 : r.transition
    );
    t.provide(g, e), t.config.globalProperties.$toaster = e, t.unmount = () => e.destroy();
  }
};
export {
  Q as V,
  U as _,
  M as a,
  K as u
};
