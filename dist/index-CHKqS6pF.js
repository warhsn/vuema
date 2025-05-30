var b = Object.defineProperty;
var S = (t, o, e) => o in t ? b(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var p = (t, o, e) => S(t, typeof o != "symbol" ? o + "" : o, e);
import { defineAsyncComponent as s, defineComponent as T, ref as k, computed as x, createElementBlock as u, openBlock as d, normalizeClass as f, createVNode as E, TransitionGroup as $, withCtx as _, Fragment as L, renderList as M, createElementVNode as y, createTextVNode as D, toDisplayString as Y, createApp as h, inject as A, customRef as I, watch as g } from "vue";
function F(t) {
  t.component("column", s(() => import("./column-DFEEo01k.js"))), t.component("columns", s(() => import("./columns-CNwTQcJ_.js"))), t.component("flex", s(() => import("./flex-CgdRGIpJ.js")));
}
function z(t) {
  t.component("base-icon", s(() => import("./base-icon-D9TihyI9.js"))), t.component("action-button", s(() => import("./button-CecB7Pv-.js"))), t.component("icon-button", s(() => import("./icon-button-BiahoDPt.js"))), t.component("submit-button", s(() => import("./submit-button-BBryhJxf.js"))), t.component("buttons", s(() => import("./buttons-DZb92DV0.js"))), t.component("loader", s(() => import("./loader-Df55YDRN.js"))), t.component("block", s(() => import("./block-DgfYd4O6.js"))), t.component("box", s(() => import("./box-CmlXsRO8.js"))), t.component("b-icon", s(() => import("./icon-XTRTXlk0.js"))), t.component("avatar", s(() => import("./avatar-Qs3jleId.js")));
}
function N(t) {
  t.component("side-menu", s(() => import("./side-menu-Du18EM_a.js"))), t.component("side-menu-label", s(() => import("./side-menu-label-DEmv4kYx.js"))), t.component("side-menu-list", s(() => import("./side-menu-list-BHZ1BHXb.js"))), t.component("side-menu-list-item", s(() => import("./side-menu-list-item-DSp6Z2wy.js"))), t.component("dropdown", s(() => import("./dropdown-BFSCP8ZA.js"))), t.component("dropdown-divider", s(() => import("./dropdown-divider-CJ3n4TYK.js"))), t.component("dropdown-item", s(() => import("./dropdown-item-BU3bgDwG.js"))), t.component("dropdown-trigger", s(() => import("./dropdown-trigger-DTlJTm2u.js"))), t.component("modal", s(() => import("./modal-C5xJoYjS.js"))), t.component("confirm", s(() => import("./confirm-dialog-D2lNlEAL.js"))), t.component("alert", s(() => import("./alert-dialog-Cx7UVq1h.js"))), t.component("tabs", s(() => import("./tabs-BgHChJGc.js"))), t.component("tab", s(() => import("./tab-DkodDZA8.js"))), t.component("pagination", s(() => import("./pagination-DtG_OL1M.js")));
}
function O(t) {
  t.component("field-label", s(() => import("./field-label-BlqTt41h.js"))), t.component("text-input", s(() => import("./text-input-DfuY0ED7.js"))), t.component("password-input", s(() => import("./password-input-CYj3PcqC.js"))), t.component("text-area", s(() => import("./text-area-BLLtHf0h.js"))), t.component("select-input", s(() => import("./select-input-CDT_VF1_.js"))), t.component("radio-input", s(() => import("./radio-input-B1Dp5itf.js"))), t.component("checkbox-input", s(() => import("./checkbox-input-B_xSXtDh.js"))), t.component("switch-input", s(() => import("./switch-input-DqyyquBs.js"))), t.component("currency-input", s(() => import("./currency-input-Dlp4-ltP.js"))), t.component("tag-input", s(() => import("./tag-input-CFTLx0Um.js"))), t.component("file-input", s(() => import("./file-input-DZouJbmP.js"))), t.component("number-input", s(() => import("./number-input-C9Yumz5J.js"))), t.component("date-picker", s(() => import("./date-picker-WHp1qHDd.js"))), t.component("time-input", s(() => import("./time-input-IRoEV9yT.js")));
}
const H = {
  position: "top",
  color: "dark",
  size: "medium",
  multiline: !1,
  always: !1
}, w = (t, o) => {
  t._tooltipInstance && t._tooltipInstance.cleanup();
  const e = { ...H, ...o }, i = document.createElement("div");
  i.className = "bulma-tooltip", i.textContent = e.content, i.style.position = "absolute", i.style.zIndex = "9999", i.style.padding = "0.5rem 0.75rem", i.style.borderRadius = "4px", i.style.fontSize = "0.85rem", i.style.pointerEvents = "none", i.style.opacity = "0", i.style.transition = "opacity 150ms ease-in-out", e.size === "small" ? (i.style.fontSize = "0.75rem", i.style.padding = "0.25rem 0.5rem") : e.size === "large" && (i.style.fontSize = "1rem", i.style.padding = "0.75rem 1rem"), e.color === "primary" ? (i.style.backgroundColor = "#00d1b2", i.style.color = "#fff") : e.color === "link" ? (i.style.backgroundColor = "#3273dc", i.style.color = "#fff") : e.color === "info" ? (i.style.backgroundColor = "#209cee", i.style.color = "#fff") : e.color === "success" ? (i.style.backgroundColor = "#23d160", i.style.color = "#fff") : e.color === "warning" ? (i.style.backgroundColor = "#ffdd57", i.style.color = "rgba(0, 0, 0, 0.7)") : e.color === "danger" ? (i.style.backgroundColor = "#ff3860", i.style.color = "#fff") : (i.style.backgroundColor = "#363636", i.style.color = "#fff"), e.multiline ? (i.style.maxWidth = "300px", i.style.whiteSpace = "pre-wrap") : i.style.whiteSpace = "nowrap";
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.width = "0", n.style.height = "0", n.style.borderStyle = "solid", n.style.borderWidth = "6px", n.style.pointerEvents = "none", e.position === "top" ? (n.style.borderColor = `${i.style.backgroundColor} transparent transparent transparent`, n.style.bottom = "-12px", n.style.left = "50%", n.style.transform = "translateX(-50%)") : e.position === "right" ? (n.style.borderColor = `transparent ${i.style.backgroundColor} transparent transparent`, n.style.left = "-12px", n.style.top = "50%", n.style.transform = "translateY(-50%)") : e.position === "bottom" ? (n.style.borderColor = `transparent transparent ${i.style.backgroundColor} transparent`, n.style.top = "-12px", n.style.left = "50%", n.style.transform = "translateX(-50%)") : e.position === "left" && (n.style.borderColor = `transparent transparent transparent ${i.style.backgroundColor}`, n.style.right = "-12px", n.style.top = "50%", n.style.transform = "translateY(-50%)"), i.appendChild(n), document.body.appendChild(i);
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
    const o = k([]), e = x(() => `toast-${t.position}`), i = (r) => {
      const l = Date.now();
      setTimeout(() => {
        o.value.push({ ...r, id: l });
      }, o.value.length * 100), r.timeout !== 0 && setTimeout(() => {
        n(l);
      }, r.timeout || 3e3);
    }, n = (r) => {
      const l = o.value.findIndex((m) => m.id === r);
      l > -1 && o.value.splice(l, 1);
    };
    return {
      notifications: o,
      addToast: i,
      removeToast: n,
      positionClass: e
    };
  }
}), V = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [i, n] of o)
    e[i] = n;
  return e;
}, q = ["onClick"];
function U(t, o, e, i, n, r) {
  return d(), u("div", {
    class: f(["toast-container", t.positionClass])
  }, [
    E($, {
      name: t.transition,
      tag: "div",
      class: f(["toast-group", t.positionClass])
    }, {
      default: _(() => [
        (d(!0), u(L, null, M(t.notifications, (l) => (d(), u("div", {
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
            D(" " + Y(l.message), 1)
          ], 2)
        ]))), 128))
      ]),
      _: 1
    }, 8, ["name", "class"])
  ], 2);
}
const v = /* @__PURE__ */ V(B, [["render", U], ["__scopeId", "data-v-04e8babe"]]);
class j {
  constructor(o = "bottom-right", e = 4e3, i = "toast") {
    p(this, "toastApp");
    p(this, "toastComponent");
    p(this, "position");
    p(this, "timeout");
    p(this, "transition");
    this.position = o, this.timeout = e, this.transition = i;
    const n = document.createElement("div");
    n.id = "toast-container", document.body.appendChild(n), this.toastApp = h(v, {
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
  const t = A(C);
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
  return I((i, n) => ({
    get() {
      return i(), t;
    },
    set(r) {
      clearTimeout(e), e = setTimeout(() => {
        t = r, n();
      }, o);
    }
  }));
}
function Z(t, o = {}) {
  const e = new Date(t), i = o.locale || "en-US", n = {
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
      MMM: e.toLocaleString(i, { month: "short" }),
      MMMM: e.toLocaleString(i, { month: "long" }),
      DD: e.getDate().toString().padStart(2, "0"),
      HH: e.getHours().toString().padStart(2, "0"),
      hh: (e.getHours() % 12 || 12).toString().padStart(2, "0"),
      mm: e.getMinutes().toString().padStart(2, "0"),
      ss: e.getSeconds().toString().padStart(2, "0"),
      A: e.getHours() >= 12 ? "PM" : "AM"
    };
    return o.format.replace(/YYYY|MM(MM)?|DD|HH|hh|mm|ss|A/g, (l) => r[l]);
  }
  return new Intl.DateTimeFormat(i, n).format(e);
}
function tt(t, o, e, i) {
  g(
    t,
    (n) => {
      const r = Object.entries(n).reduce((l, [m, a]) => (a !== "" && a !== null && a !== void 0 && (l[m] = a), l), {});
      JSON.stringify(r) !== JSON.stringify(o.query) && (e.push({
        name: i.routeName,
        query: r
      }), i.onFiltersChange && i.onFiltersChange(r));
    },
    { deep: !0 }
  ), g(
    () => o.query,
    () => {
      Object.entries(o.query).forEach(([n, r]) => {
        n in t.value && (t.value[n] = r);
      });
    },
    { immediate: !0 }
  );
}
function ot(t, o = "$", e = "en-US") {
  const i = typeof t == "string" ? parseFloat(t) : t;
  if (isNaN(i))
    return `${o}0.00`;
  const n = i.toLocaleString(e, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${o}${n}`;
}
const W = {
  toaster: {
    position: "bottom-right",
    timeout: 4e3,
    transition: "toast"
  }
}, et = {
  install: (t, o = W) => {
    var i, n, r;
    F(t), z(t), N(t), O(t), X(t);
    const e = new j(
      (i = o == null ? void 0 : o.toaster) == null ? void 0 : i.position,
      (n = o == null ? void 0 : o.toaster) == null ? void 0 : n.timeout,
      (r = o == null ? void 0 : o.toaster) == null ? void 0 : r.transition
    );
    t.provide(C, e), t.config.globalProperties.$toaster = e, t.unmount = () => e.destroy();
  }
};
export {
  et as V,
  V as _,
  Q as a,
  tt as b,
  ot as c,
  Z as f,
  K as u
};
