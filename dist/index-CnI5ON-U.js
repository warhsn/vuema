var b = Object.defineProperty;
var S = (t, o, e) => o in t ? b(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var p = (t, o, e) => S(t, typeof o != "symbol" ? o + "" : o, e);
import { defineAsyncComponent as s, defineComponent as T, ref as k, computed as x, createElementBlock as d, openBlock as u, normalizeClass as f, createVNode as E, TransitionGroup as _, withCtx as $, Fragment as L, renderList as M, createElementVNode as y, createTextVNode as Y, toDisplayString as D, createApp as h, inject as I, customRef as A, watch as g } from "vue";
function z(t) {
  t.component("column", s(() => import("./column-DFEEo01k.js"))), t.component("columns", s(() => import("./columns-CNwTQcJ_.js"))), t.component("flex", s(() => import("./flex-C8Hsae8N.js")));
}
function F(t) {
  t.component("base-icon", s(() => import("./base-icon-D9TihyI9.js"))), t.component("action-button", s(() => import("./button-CecB7Pv-.js"))), t.component("icon-button", s(() => import("./icon-button-BiahoDPt.js"))), t.component("submit-button", s(() => import("./submit-button-BBryhJxf.js"))), t.component("buttons", s(() => import("./buttons-DZb92DV0.js"))), t.component("loader", s(() => import("./loader-CHbjEPxQ.js"))), t.component("block", s(() => import("./block-B72ligb_.js"))), t.component("box", s(() => import("./box-COzig0t8.js"))), t.component("b-icon", s(() => import("./icon-XTRTXlk0.js"))), t.component("avatar", s(() => import("./avatar-Qs3jleId.js")));
}
function O(t) {
  t.component("side-menu", s(() => import("./side-menu-DVCPOv1F.js"))), t.component("side-menu-label", s(() => import("./side-menu-label-N526ua78.js"))), t.component("side-menu-list", s(() => import("./side-menu-list-DZuk3XuT.js"))), t.component("side-menu-list-item", s(() => import("./side-menu-list-item-D9NlFvxM.js"))), t.component("dropdown", s(() => import("./dropdown-BFSCP8ZA.js"))), t.component("dropdown-divider", s(() => import("./dropdown-divider-Ca6M8Xa1.js"))), t.component("dropdown-item", s(() => import("./dropdown-item-BU3bgDwG.js"))), t.component("dropdown-trigger", s(() => import("./dropdown-trigger-DTlJTm2u.js"))), t.component("modal", s(() => import("./modal-C5xJoYjS.js"))), t.component("confirm", s(() => import("./confirm-dialog-D2lNlEAL.js"))), t.component("alert", s(() => import("./alert-dialog-Cx7UVq1h.js"))), t.component("tabs", s(() => import("./tabs-BgHChJGc.js"))), t.component("tab", s(() => import("./tab-DkodDZA8.js"))), t.component("pagination", s(() => import("./pagination-C8Y1xs4n.js")));
}
function N(t) {
  t.component("field-label", s(() => import("./field-label-BlqTt41h.js"))), t.component("text-input", s(() => import("./text-input-DfuY0ED7.js"))), t.component("password-input", s(() => import("./password-input-CYj3PcqC.js"))), t.component("text-area", s(() => import("./text-area-BLLtHf0h.js"))), t.component("select-input", s(() => import("./select-input-CDT_VF1_.js"))), t.component("radio-input", s(() => import("./radio-input-B1Dp5itf.js"))), t.component("checkbox-input", s(() => import("./checkbox-input-B_xSXtDh.js"))), t.component("switch-input", s(() => import("./switch-input-DqyyquBs.js"))), t.component("currency-input", s(() => import("./currency-input-D08wAQyo.js"))), t.component("tag-input", s(() => import("./tag-input-CFTLx0Um.js"))), t.component("file-input", s(() => import("./file-input-DZouJbmP.js"))), t.component("number-input", s(() => import("./number-input-C9Yumz5J.js"))), t.component("date-picker", s(() => import("./date-picker-D8_7a_fv.js"))), t.component("time-input", s(() => import("./time-input-IRoEV9yT.js")));
}
const H = {
  position: "top",
  color: "dark",
  size: "medium",
  multiline: !1,
  always: !1
}, w = (t, o) => {
  t._tooltipInstance && t._tooltipInstance.cleanup();
  const e = { ...H, ...o }, n = document.createElement("div");
  n.className = "bulma-tooltip", n.textContent = e.content, n.style.position = "absolute", n.style.zIndex = "9999", n.style.padding = "0.5rem 0.75rem", n.style.borderRadius = "4px", n.style.fontSize = "0.85rem", n.style.pointerEvents = "none", n.style.opacity = "0", n.style.transition = "opacity 150ms ease-in-out", e.size === "small" ? (n.style.fontSize = "0.75rem", n.style.padding = "0.25rem 0.5rem") : e.size === "large" && (n.style.fontSize = "1rem", n.style.padding = "0.75rem 1rem"), e.color === "primary" ? (n.style.backgroundColor = "#00d1b2", n.style.color = "#fff") : e.color === "link" ? (n.style.backgroundColor = "#3273dc", n.style.color = "#fff") : e.color === "info" ? (n.style.backgroundColor = "#209cee", n.style.color = "#fff") : e.color === "success" ? (n.style.backgroundColor = "#23d160", n.style.color = "#fff") : e.color === "warning" ? (n.style.backgroundColor = "#ffdd57", n.style.color = "rgba(0, 0, 0, 0.7)") : e.color === "danger" ? (n.style.backgroundColor = "#ff3860", n.style.color = "#fff") : (n.style.backgroundColor = "#363636", n.style.color = "#fff"), e.multiline ? (n.style.maxWidth = "300px", n.style.whiteSpace = "pre-wrap") : n.style.whiteSpace = "nowrap";
  const i = document.createElement("div");
  i.style.position = "absolute", i.style.width = "0", i.style.height = "0", i.style.borderStyle = "solid", i.style.borderWidth = "6px", i.style.pointerEvents = "none", e.position === "top" ? (i.style.borderColor = `${n.style.backgroundColor} transparent transparent transparent`, i.style.bottom = "-12px", i.style.left = "50%", i.style.transform = "translateX(-50%)") : e.position === "right" ? (i.style.borderColor = `transparent ${n.style.backgroundColor} transparent transparent`, i.style.left = "-12px", i.style.top = "50%", i.style.transform = "translateY(-50%)") : e.position === "bottom" ? (i.style.borderColor = `transparent transparent ${n.style.backgroundColor} transparent`, i.style.top = "-12px", i.style.left = "50%", i.style.transform = "translateX(-50%)") : e.position === "left" && (i.style.borderColor = `transparent transparent transparent ${n.style.backgroundColor}`, i.style.right = "-12px", i.style.top = "50%", i.style.transform = "translateY(-50%)"), n.appendChild(i), document.body.appendChild(n);
  const r = () => {
    const a = t.getBoundingClientRect(), c = n.getBoundingClientRect();
    e.position === "top" ? (n.style.left = `${a.left + a.width / 2 - c.width / 2 + window.scrollX}px`, n.style.top = `${a.top - c.height - 8 + window.scrollY}px`) : e.position === "right" ? (n.style.left = `${a.right + 8 + window.scrollX}px`, n.style.top = `${a.top + a.height / 2 - c.height / 2 + window.scrollY}px`) : e.position === "bottom" ? (n.style.left = `${a.left + a.width / 2 - c.width / 2 + window.scrollX}px`, n.style.top = `${a.bottom + 8 + window.scrollY}px`) : e.position === "left" && (n.style.left = `${a.left - c.width - 8 + window.scrollX}px`, n.style.top = `${a.top + a.height / 2 - c.height / 2 + window.scrollY}px`);
  }, l = () => {
    r(), n.style.opacity = "1";
  }, m = () => {
    e.always || (n.style.opacity = "0");
  };
  return t.addEventListener("mouseenter", l), t.addEventListener("mouseleave", m), t.addEventListener("focus", l), t.addEventListener("blur", m), e.always && l(), window.addEventListener("resize", r), window.addEventListener("scroll", r), t._tooltipInstance = {
    tooltip: n,
    cleanup: () => {
      t.removeEventListener("mouseenter", l), t.removeEventListener("mouseleave", m), t.removeEventListener("focus", l), t.removeEventListener("blur", m), window.removeEventListener("resize", r), window.removeEventListener("scroll", r), document.body.removeChild(n), delete t._tooltipInstance;
    }
  }, t._tooltipInstance;
}, P = {
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
}, R = {
  install(t) {
    t.directive("tooltip", P);
  }
};
function X(t) {
  t.use(R);
}
const B = T({
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
    const o = k([]), e = x(() => `toast-${t.position}`), n = (r) => {
      const l = Date.now();
      setTimeout(() => {
        o.value.push({ ...r, id: l });
      }, o.value.length * 100), r.timeout !== 0 && setTimeout(() => {
        i(l);
      }, r.timeout || 3e3);
    }, i = (r) => {
      const l = o.value.findIndex((m) => m.id === r);
      l > -1 && o.value.splice(l, 1);
    };
    return {
      notifications: o,
      addToast: n,
      removeToast: i,
      positionClass: e
    };
  }
}), V = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, i] of o)
    e[n] = i;
  return e;
}, q = ["onClick"];
function j(t, o, e, n, i, r) {
  return u(), d("div", {
    class: f(["toast-container", t.positionClass])
  }, [
    E(_, {
      name: t.transition,
      tag: "div",
      class: f(["toast-group", t.positionClass])
    }, {
      default: $(() => [
        (u(!0), d(L, null, M(t.notifications, (l) => (u(), d("div", {
          key: l.id,
          class: "notification-wrapper"
        }, [
          y("div", {
            class: f(["notification", l.type])
          }, [
            y("button", {
              class: "delete",
              onClick: (m) => t.removeToast(l.id)
            }, null, 8, q),
            Y(" " + D(l.message), 1)
          ], 2)
        ]))), 128))
      ]),
      _: 1
    }, 8, ["name", "class"])
  ], 2);
}
const v = /* @__PURE__ */ V(B, [["render", j], ["__scopeId", "data-v-04e8babe"]]);
class U {
  constructor(o = "bottom-right", e = 4e3, n = "toast") {
    p(this, "toastApp");
    p(this, "toastComponent");
    p(this, "position");
    p(this, "timeout");
    p(this, "transition");
    this.position = o, this.timeout = e, this.transition = n;
    const i = document.createElement("div");
    i.id = "toast-container", document.body.appendChild(i), this.toastApp = h(v, {
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
const C = Symbol("toaster");
function K() {
  const t = I(C);
  if (!t)
    throw new Error("Toaster not provided! Did you forget to install the plugin?");
  return {
    success: (o) => t.success(o),
    error: (o) => t.error(o),
    warning: (o) => t.warning(o),
    info: (o) => t.info(o)
  };
}
function Q(t, o = 50) {
  let e;
  return A((n, i) => ({
    get() {
      return n(), t;
    },
    set(r) {
      clearTimeout(e), e = setTimeout(() => {
        t = r, i();
      }, o);
    }
  }));
}
function Z(t, o = {}) {
  const e = new Date(t), n = o.locale || "en-US", i = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !0
  };
  if (o.format) {
    const r = {
      YYYY: e.getFullYear().toString(),
      MM: (e.getMonth() + 1).toString().padStart(2, "0"),
      MMM: e.toLocaleString(n, { month: "short" }),
      MMMM: e.toLocaleString(n, { month: "long" }),
      DD: e.getDate().toString().padStart(2, "0"),
      HH: e.getHours().toString().padStart(2, "0"),
      hh: (e.getHours() % 12 || 12).toString().padStart(2, "0"),
      mm: e.getMinutes().toString().padStart(2, "0"),
      ss: e.getSeconds().toString().padStart(2, "0"),
      A: e.getHours() >= 12 ? "PM" : "AM"
    };
    return o.format.replace(/YYYY|MM(MM)?|DD|HH|hh|mm|ss|A/g, (l) => r[l]);
  }
  return new Intl.DateTimeFormat(n, i).format(e);
}
function tt(t, o, e, n) {
  g(
    t,
    (i) => {
      const r = Object.entries(i).reduce((l, [m, a]) => (a !== "" && a !== null && a !== void 0 && (l[m] = a), l), {});
      JSON.stringify(r) !== JSON.stringify(o.query) && (e.push({
        name: n.routeName,
        query: r
      }), n.onFiltersChange && n.onFiltersChange(r));
    },
    { deep: !0 }
  ), g(
    () => o.query,
    () => {
      Object.entries(o.query).forEach(([i, r]) => {
        i in t.value && (t.value[i] = r);
      });
    },
    { immediate: !0 }
  );
}
const W = {
  toaster: {
    position: "bottom-right",
    timeout: 4e3,
    transition: "toast"
  }
}, ot = {
  install: (t, o = W) => {
    var n, i, r;
    z(t), F(t), O(t), N(t), X(t);
    const e = new U(
      (n = o == null ? void 0 : o.toaster) == null ? void 0 : n.position,
      (i = o == null ? void 0 : o.toaster) == null ? void 0 : i.timeout,
      (r = o == null ? void 0 : o.toaster) == null ? void 0 : r.transition
    );
    t.provide(C, e), t.config.globalProperties.$toaster = e, t.unmount = () => e.destroy();
  }
};
export {
  ot as V,
  V as _,
  Q as a,
  tt as b,
  Z as f,
  K as u
};
