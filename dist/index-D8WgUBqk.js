var v = Object.defineProperty;
var y = (t, o, e) => o in t ? v(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var c = (t, o, e) => y(t, typeof o != "symbol" ? o + "" : o, e);
import { defineAsyncComponent as n, defineComponent as C, ref as b, computed as T, openBlock as a, createElementBlock as p, normalizeClass as d, createVNode as w, TransitionGroup as _, withCtx as k, Fragment as x, renderList as A, createElementVNode as l, createTextVNode as E, toDisplayString as $, createApp as f, inject as V } from "vue";
function S(t) {
  t.component("column", n(() => import("./column-CCAP556S.js"))), t.component("columns", n(() => import("./columns-DWoNJgSX.js"))), t.component("flex", n(() => import("./flex-WOzez6MT.js")));
}
function B(t) {
  t.component("base-icon", n(() => import("./base-icon-B-tbkkJe.js"))), t.component("action-button", n(() => import("./button-hK6oV9xO.js"))), t.component("icon-button", n(() => import("./icon-button-DJGpY_Pf.js"))), t.component("submit-button", n(() => import("./submit-button-DYsgDvB_.js"))), t.component("buttons", n(() => import("./buttons-C2PrXJUd.js"))), t.component("loader", n(() => import("./loader-PGU2NYax.js"))), t.component("block", n(() => import("./block-fowFlckF.js"))), t.component("box", n(() => import("./box-GBTjyBai.js"))), t.component("b-icon", n(() => import("./icon-iMiYgm47.js"))), t.component("avatar", n(() => import("./avatar-DuymQACc.js")));
}
function D(t) {
  t.component("side-menu", n(() => import("./side-menu-DOipZmKF.js"))), t.component("side-menu-label", n(() => import("./side-menu-label-DI_gOVwI.js"))), t.component("side-menu-list", n(() => import("./side-menu-list-BOCb3SUh.js"))), t.component("side-menu-list-item", n(() => import("./side-menu-list-item-C9YfVknz.js"))), t.component("dropdown", n(() => import("./dropdown-BP_CwBx3.js"))), t.component("dropdown-divider", n(() => import("./dropdown-divider-BWfFnDGf.js"))), t.component("dropdown-item", n(() => import("./dropdown-item-BUIdaown.js"))), t.component("dropdown-trigger", n(() => import("./dropdown-trigger-C9QKT2QF.js"))), t.component("modal", n(() => import("./modal-bYere2Ki.js"))), t.component("confirm", n(() => import("./confirm-dialog-BQTZ5qyU.js"))), t.component("alert", n(() => import("./alert-dialog-w-nS6SoS.js")));
}
const I = C({
  name: "Toast",
  props: {
    position: {
      type: String,
      default: "top-right"
    }
  },
  setup(t) {
    const o = b([]), e = T(() => `toast-${t.position}`), m = (s) => {
      const i = Date.now();
      setTimeout(() => {
        o.value.push({ ...s, id: i });
      }, o.value.length * 100), s.timeout !== 0 && setTimeout(() => {
        r(i);
      }, s.timeout || 3e3);
    }, r = (s) => {
      const i = o.value.findIndex((u) => u.id === s);
      i > -1 && o.value.splice(i, 1);
    };
    return {
      notifications: o,
      addToast: m,
      removeToast: r,
      positionClass: e
    };
  }
}), N = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [m, r] of o)
    e[m] = r;
  return e;
}, F = ["onClick"];
function L(t, o, e, m, r, s) {
  return a(), p("div", {
    class: d(["toast-container", t.positionClass])
  }, [
    w(_, {
      name: "toast",
      tag: "div",
      class: d(["toast-group", t.positionClass])
    }, {
      default: k(() => [
        (a(!0), p(x, null, A(t.notifications, (i) => (a(), p("div", {
          key: i.id,
          class: "notification-wrapper"
        }, [
          l("div", {
            class: d(["notification", i.type])
          }, [
            l("button", {
              class: "delete",
              onClick: (u) => t.removeToast(i.id)
            }, null, 8, F),
            E(" " + $(i.message), 1)
          ], 2)
        ]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 2);
}
const h = /* @__PURE__ */ N(I, [["render", L], ["__scopeId", "data-v-f29563f0"]]);
class P {
  constructor(o = "top-right") {
    c(this, "toastApp");
    c(this, "toastComponent");
    c(this, "position");
    this.position = o;
    const e = document.createElement("div");
    e.id = "toast-container", document.body.appendChild(e), this.toastApp = f(h, {
      position: this.position
    }), this.toastComponent = this.toastApp.mount("#toast-container");
  }
  setPosition(o) {
    this.position = o, this.destroy();
    const e = document.createElement("div");
    e.id = "toast-container", document.body.appendChild(e), this.toastApp = f(h, {
      position: this.position
    }), this.toastComponent = this.toastApp.mount("#toast-container");
  }
  success(o, e = 3e3) {
    this.toastComponent.addToast({
      message: o,
      type: "is-success",
      timeout: e
    });
  }
  error(o, e = 3e3) {
    this.toastComponent.addToast({
      message: o,
      type: "is-danger",
      timeout: e
    });
  }
  warning(o, e = 3e3) {
    this.toastComponent.addToast({
      message: o,
      type: "is-warning",
      timeout: e
    });
  }
  info(o, e = 3e3) {
    this.toastComponent.addToast({
      message: o,
      type: "is-info",
      timeout: e
    });
  }
  destroy() {
    const o = document.getElementById("toast-container");
    o && (this.toastApp.unmount(), o.remove());
  }
}
const g = Symbol("toaster");
function O() {
  const t = V(g);
  if (!t)
    throw new Error("Toaster not provided! Did you forget to install the plugin?");
  return {
    success: (o) => t.success(o),
    error: (o) => t.error(o),
    warning: (o) => t.warning(o),
    info: (o) => t.info(o)
  };
}
function j(t) {
  t.component("field-label", n(() => import("./field-label-B7n3LkGe.js"))), t.component("text-input", n(() => import("./text-input-YsWYud3U.js"))), t.component("password-input", n(() => import("./password-input-tBB4pK44.js"))), t.component("text-area", n(() => import("./text-area-BtFpKQ0w.js"))), t.component("select-input", n(() => import("./select-input-BquhCHZf.js"))), t.component("radio-input", n(() => import("./radio-input-CwUYajP3.js"))), t.component("checkbox-input", n(() => import("./checkbox-input-DtBpftvj.js"))), t.component("switch-input", n(() => import("./switch-input-CwbDCiD0.js"))), t.component("currency-input", n(() => import("./currency-input-DqYkxU7X.js"))), t.component("tag-input", n(() => import("./tag-input-DwwCvg4V.js"))), t.component("file-input", n(() => import("./file-input-BIsSd6C-.js"))), t.component("number-input", n(() => import("./number-input-_Q__nRcB.js"))), t.component("date-picker", n(() => import("./date-picker-hMNHgleg.js")));
}
const q = {
  install: (t) => {
    S(t), B(t), D(t), j(t);
    const o = new P("bottom-right");
    t.provide(g, o), t.config.globalProperties.$toaster = o, t.unmount = () => {
      o.destroy();
    };
  }
};
export {
  q as V,
  N as _,
  O as u
};
