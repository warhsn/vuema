var g = Object.defineProperty;
var y = (t, o, e) => o in t ? g(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var c = (t, o, e) => y(t, typeof o != "symbol" ? o + "" : o, e);
import { defineAsyncComponent as n, defineComponent as C, ref as v, computed as T, openBlock as a, createElementBlock as u, normalizeClass as d, createVNode as w, TransitionGroup as _, withCtx as k, Fragment as A, renderList as x, createElementVNode as l, createTextVNode as E, toDisplayString as $, createApp as h, inject as S, customRef as V } from "vue";
function D(t) {
  t.component("column", n(() => import("./column-CCAP556S.js"))), t.component("columns", n(() => import("./columns-DWoNJgSX.js"))), t.component("flex", n(() => import("./flex-Bit9oXfU.js")));
}
function B(t) {
  t.component("base-icon", n(() => import("./base-icon-B-tbkkJe.js"))), t.component("action-button", n(() => import("./button-hK6oV9xO.js"))), t.component("icon-button", n(() => import("./icon-button-DJGpY_Pf.js"))), t.component("submit-button", n(() => import("./submit-button-DYsgDvB_.js"))), t.component("buttons", n(() => import("./buttons-C2PrXJUd.js"))), t.component("loader", n(() => import("./loader-DVHc-pH8.js"))), t.component("block", n(() => import("./block-9x-FVKai.js"))), t.component("box", n(() => import("./box-CwgkNfLD.js"))), t.component("b-icon", n(() => import("./icon-iMiYgm47.js"))), t.component("avatar", n(() => import("./avatar-DuymQACc.js")));
}
function I(t) {
  t.component("side-menu", n(() => import("./side-menu-Ej5hMlAG.js"))), t.component("side-menu-label", n(() => import("./side-menu-label-DylWht1C.js"))), t.component("side-menu-list", n(() => import("./side-menu-list-Ch5R5Ryk.js"))), t.component("side-menu-list-item", n(() => import("./side-menu-list-item-DvJBMpSd.js"))), t.component("dropdown", n(() => import("./dropdown-BP_CwBx3.js"))), t.component("dropdown-divider", n(() => import("./dropdown-divider-BWAONKVI.js"))), t.component("dropdown-item", n(() => import("./dropdown-item-BUIdaown.js"))), t.component("dropdown-trigger", n(() => import("./dropdown-trigger-C9QKT2QF.js"))), t.component("modal", n(() => import("./modal-bYere2Ki.js"))), t.component("confirm", n(() => import("./confirm-dialog-BQTZ5qyU.js"))), t.component("alert", n(() => import("./alert-dialog-w-nS6SoS.js"))), t.component("tabs", n(() => import("./tabs-CijP3t8Y.js"))), t.component("tab", n(() => import("./tab-C-ZFdJQY.js")));
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
  return a(), u("div", {
    class: d(["toast-container", t.positionClass])
  }, [
    w(_, {
      name: t.transition,
      tag: "div",
      class: d(["toast-group", t.positionClass])
    }, {
      default: k(() => [
        (a(!0), u(A, null, x(t.notifications, (m) => (a(), u("div", {
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
const b = Symbol("toaster");
function q() {
  const t = S(b);
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
  t.component("field-label", n(() => import("./field-label-B7n3LkGe.js"))), t.component("text-input", n(() => import("./text-input-YsWYud3U.js"))), t.component("password-input", n(() => import("./password-input-tBB4pK44.js"))), t.component("text-area", n(() => import("./text-area-BtFpKQ0w.js"))), t.component("select-input", n(() => import("./select-input-Doxpc706.js"))), t.component("radio-input", n(() => import("./radio-input-CwUYajP3.js"))), t.component("checkbox-input", n(() => import("./checkbox-input-DtBpftvj.js"))), t.component("switch-input", n(() => import("./switch-input-CwbDCiD0.js"))), t.component("currency-input", n(() => import("./currency-input-DqYkxU7X.js"))), t.component("tag-input", n(() => import("./tag-input-DwwCvg4V.js"))), t.component("file-input", n(() => import("./file-input-BIsSd6C-.js"))), t.component("number-input", n(() => import("./number-input-_Q__nRcB.js"))), t.component("date-picker", n(() => import("./date-picker-BLw5mX6Z.js")));
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
    t.provide(b, e), t.config.globalProperties.$toaster = e, t.unmount = () => {
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
