var b = Object.defineProperty;
var y = (t, o, e) => o in t ? b(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var c = (t, o, e) => y(t, typeof o != "symbol" ? o + "" : o, e);
import { defineAsyncComponent as n, defineComponent as C, ref as v, computed as T, createElementBlock as a, openBlock as u, normalizeClass as d, createVNode as w, TransitionGroup as _, withCtx as k, Fragment as A, renderList as x, createElementVNode as l, createTextVNode as E, toDisplayString as $, createApp as h, inject as S, customRef as V } from "vue";
function D(t) {
  t.component("column", n(() => import("./column-DFEEo01k.js"))), t.component("columns", n(() => import("./columns-CNwTQcJ_.js"))), t.component("flex", n(() => import("./flex-BxY6Yw1I.js")));
}
function B(t) {
  t.component("base-icon", n(() => import("./base-icon-D9TihyI9.js"))), t.component("action-button", n(() => import("./button-CecB7Pv-.js"))), t.component("icon-button", n(() => import("./icon-button-BiahoDPt.js"))), t.component("submit-button", n(() => import("./submit-button-BBryhJxf.js"))), t.component("buttons", n(() => import("./buttons-DZb92DV0.js"))), t.component("loader", n(() => import("./loader-C2eIvxdP.js"))), t.component("block", n(() => import("./block-DF13vAdI.js"))), t.component("box", n(() => import("./box-Vprckokg.js"))), t.component("b-icon", n(() => import("./icon-XTRTXlk0.js"))), t.component("avatar", n(() => import("./avatar-DELBhsXx.js")));
}
function I(t) {
  t.component("side-menu", n(() => import("./side-menu-DcnQOep3.js"))), t.component("side-menu-label", n(() => import("./side-menu-label-D-QOJbgm.js"))), t.component("side-menu-list", n(() => import("./side-menu-list-CTHDNbwm.js"))), t.component("side-menu-list-item", n(() => import("./side-menu-list-item-CwJADDkd.js"))), t.component("dropdown", n(() => import("./dropdown-BFSCP8ZA.js"))), t.component("dropdown-divider", n(() => import("./dropdown-divider-C_c0ZhDe.js"))), t.component("dropdown-item", n(() => import("./dropdown-item-BU3bgDwG.js"))), t.component("dropdown-trigger", n(() => import("./dropdown-trigger-DTlJTm2u.js"))), t.component("modal", n(() => import("./modal-DOnTKQ2u.js"))), t.component("confirm", n(() => import("./confirm-dialog-D2lNlEAL.js"))), t.component("alert", n(() => import("./alert-dialog-BxM5Y4SM.js"))), t.component("tabs", n(() => import("./tabs-BgHChJGc.js"))), t.component("tab", n(() => import("./tab-DkodDZA8.js"))), t.component("pagination", n(() => import("./pagination-CWJ6mKMs.js")));
}
const N = C({
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
    const o = v([]), e = T(() => `toast-${t.position}`), s = (r) => {
      const m = Date.now();
      setTimeout(() => {
        o.value.push({ ...r, id: m });
      }, o.value.length * 100), r.timeout !== 0 && setTimeout(() => {
        i(m);
      }, r.timeout || 3e3);
    }, i = (r) => {
      const m = o.value.findIndex((p) => p.id === r);
      m > -1 && o.value.splice(m, 1);
    };
    return {
      notifications: o,
      addToast: s,
      removeToast: i,
      positionClass: e
    };
  }
}), F = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, i] of o)
    e[s] = i;
  return e;
}, L = ["onClick"];
function O(t, o, e, s, i, r) {
  return u(), a("div", {
    class: d(["toast-container", t.positionClass])
  }, [
    w(_, {
      name: t.transition,
      tag: "div",
      class: d(["toast-group", t.positionClass])
    }, {
      default: k(() => [
        (u(!0), a(A, null, x(t.notifications, (m) => (u(), a("div", {
          key: m.id,
          class: "notification-wrapper"
        }, [
          l("div", {
            class: d(["notification", m.type])
          }, [
            l("button", {
              class: "delete",
              onClick: (p) => t.removeToast(m.id)
            }, null, 8, L),
            E(" " + $(m.message), 1)
          ], 2)
        ]))), 128))
      ]),
      _: 1
    }, 8, ["name", "class"])
  ], 2);
}
const f = /* @__PURE__ */ F(N, [["render", O], ["__scopeId", "data-v-04e8babe"]]);
class P {
  constructor(o = "bottom-right", e = 4e3, s = "toast") {
    c(this, "toastApp");
    c(this, "toastComponent");
    c(this, "position");
    c(this, "timeout");
    c(this, "transition");
    this.position = o, this.timeout = e, this.transition = s;
    const i = document.createElement("div");
    i.id = "toast-container", document.body.appendChild(i), this.toastApp = h(f, {
      position: this.position
    }), this.toastComponent = this.toastApp.mount("#toast-container");
  }
  setPosition(o) {
    this.position = o, this.destroy();
    const e = document.createElement("div");
    e.id = "toast-container", document.body.appendChild(e), this.toastApp = h(f, {
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
function q() {
  const t = S(g);
  if (!t)
    throw new Error("Toaster not provided! Did you forget to install the plugin?");
  return {
    success: (o) => t.success(o),
    error: (o) => t.error(o),
    warning: (o) => t.warning(o),
    info: (o) => t.info(o)
  };
}
function R(t) {
  t.component("field-label", n(() => import("./field-label-BlqTt41h.js"))), t.component("text-input", n(() => import("./text-input-C9sH6vtx.js"))), t.component("password-input", n(() => import("./password-input-CYj3PcqC.js"))), t.component("text-area", n(() => import("./text-area-BLLtHf0h.js"))), t.component("select-input", n(() => import("./select-input-D95Hi9Td.js"))), t.component("radio-input", n(() => import("./radio-input-B1Dp5itf.js"))), t.component("checkbox-input", n(() => import("./checkbox-input-B_xSXtDh.js"))), t.component("switch-input", n(() => import("./switch-input-DqyyquBs.js"))), t.component("currency-input", n(() => import("./currency-input-D08wAQyo.js"))), t.component("tag-input", n(() => import("./tag-input-CFTLx0Um.js"))), t.component("file-input", n(() => import("./file-input-DZouJbmP.js"))), t.component("number-input", n(() => import("./number-input-DnpwATPJ.js"))), t.component("date-picker", n(() => import("./date-picker-BiUdMu4m.js"))), t.component("time-input", n(() => import("./time-input-DsTaPOgf.js")));
}
function H(t, o = 50) {
  let e;
  return V((s, i) => ({
    get() {
      return s(), t;
    },
    set(r) {
      clearTimeout(e), e = setTimeout(() => {
        t = r, i();
      }, o);
    }
  }));
}
const j = {
  toaster: {
    position: "bottom-right",
    timeout: 4e3,
    transition: "toast"
  }
}, J = {
  install: (t, o = j) => {
    var s, i, r;
    D(t), B(t), I(t), R(t);
    const e = new P(
      (s = o == null ? void 0 : o.toaster) == null ? void 0 : s.position,
      (i = o == null ? void 0 : o.toaster) == null ? void 0 : i.timeout,
      (r = o == null ? void 0 : o.toaster) == null ? void 0 : r.transition
    );
    t.provide(g, e), t.config.globalProperties.$toaster = e, t.unmount = () => {
      e.destroy();
    };
  }
};
export {
  J as V,
  F as _,
  H as a,
  q as u
};
