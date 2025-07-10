import { defineComponent as z, ref as y, resolveComponent as H, createElementBlock as n, openBlock as r, createBlock as N, createCommentVNode as u, createElementVNode as l, createVNode as $, withCtx as k, renderSlot as E, withModifiers as h, normalizeClass as _, createTextVNode as q, toDisplayString as m, Fragment as P, renderList as O } from "vue";
import { _ as R } from "./errors-BZdmzG52.js";
import { _ as x } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { _ as G } from "./index-wtNYsD4q.js";
const J = ["multiple", "accept"], K = { class: "drag-drop-content" }, X = {
  key: 0,
  class: "drag-drop-prompt"
}, Z = {
  key: 0,
  class: "drag-drop-help"
}, j = {
  key: 1,
  class: "file-list"
}, Q = { class: "file-info" }, W = { class: "file-name" }, Y = { class: "file-size" }, ee = {
  key: 0,
  class: "file-progress"
}, se = ["value"], oe = { class: "file-status" }, te = {
  key: 0,
  class: "tag is-success is-small"
}, ae = {
  key: 1,
  class: "tag is-danger is-small"
}, le = {
  key: 2,
  class: "tag is-info is-small"
}, re = ["onClick"], ne = {
  key: 1,
  class: "field is-grouped mt-3"
}, ie = { class: "control" }, de = ["disabled"], pe = { class: "control" }, ce = ["disabled"], ue = /* @__PURE__ */ z({
  __name: "drag-drop-uploader",
  props: {
    endpoint: {},
    accepts: { default: "*/*" },
    multiple: { type: Boolean, default: !0 },
    additionalData: {},
    headers: {},
    classes: {},
    disabled: { type: Boolean },
    forLabel: {},
    modelValue: { type: [Boolean, Number, String, Array, Date] },
    placeholder: {},
    required: { type: Boolean },
    isLoading: { type: Boolean },
    isRounded: { type: Boolean },
    autocomplete: { type: Boolean },
    icon: {},
    iconType: {},
    iconPack: {},
    textIcon: { type: Boolean },
    leftIcon: {},
    iconClasses: {},
    leftIconClass: {},
    leftIconType: {},
    rightIconClass: {},
    rightIcon: {},
    rightIconType: {},
    error: {},
    hasAddons: { type: Boolean },
    isNormal: { type: Boolean },
    isSmall: { type: Boolean },
    isMedium: { type: Boolean },
    isLarge: { type: Boolean },
    isResponsive: { type: Boolean },
    isExpanded: { type: Boolean },
    isFullwidth: { type: Boolean },
    is0: { type: Boolean },
    is1: { type: Boolean },
    is2: { type: Boolean },
    is3: { type: Boolean },
    is4: { type: Boolean },
    is5: { type: Boolean },
    is6: { type: Boolean },
    is7: { type: Boolean },
    is8: { type: Boolean },
    is9: { type: Boolean },
    is10: { type: Boolean },
    is11: { type: Boolean },
    is12: { type: Boolean }
  },
  emits: ["filesSelected", "uploadProgress", "uploadComplete", "uploadError", "allUploadsComplete"],
  setup(b, { emit: w }) {
    const p = b, i = y([]), g = y(!1), c = y(!1), B = y();
    R(p);
    const f = w;
    function D(e) {
      e.dataTransfer && (e.dataTransfer.dropEffect = "copy"), g.value = !0;
    }
    function F() {
      g.value = !1;
    }
    function T(e) {
      var s;
      if (g.value = !1, (s = e.dataTransfer) != null && s.files) {
        const t = Array.from(e.dataTransfer.files);
        C(t);
      }
    }
    function U() {
      var e;
      (e = B.value) == null || e.click();
    }
    function M(e) {
      const s = e.target;
      if (s.files) {
        const t = Array.from(s.files);
        C(t);
      }
    }
    function C(e) {
      const s = e.filter((o) => !i.value.some(
        (a) => a.name === o.name && a.size === o.size
      )), t = s.map((o) => ({
        file: o,
        name: o.name,
        size: o.size,
        progress: 0,
        isUploading: !1,
        isComplete: !1,
        hasError: !1
      }));
      p.multiple ? i.value.push(...t) : i.value = t.slice(0, 1), f("filesSelected", s);
    }
    function S(e) {
      i.value.splice(e, 1);
    }
    function A() {
      i.value = [];
    }
    async function I() {
      if (!p.endpoint) return;
      c.value = !0;
      const e = [];
      try {
        for (const s of i.value)
          if (!s.isComplete) {
            s.isUploading = !0, s.hasError = !1;
            try {
              const t = await L(s);
              s.isComplete = !0, s.isUploading = !1, e.push(t), f("uploadComplete", { file: s.file, response: t });
            } catch (t) {
              s.hasError = !0, s.isUploading = !1, s.errorMessage = t instanceof Error ? t.message : "Upload failed", f("uploadError", { file: s.file, error: s.errorMessage });
            }
          }
        f("allUploadsComplete", e);
      } finally {
        c.value = !1;
      }
    }
    async function L(e) {
      return new Promise((s, t) => {
        const o = new FormData();
        o.append("file", e.file), p.additionalData && Object.entries(p.additionalData).forEach(([d, v]) => {
          o.append(d, String(v));
        });
        const a = new XMLHttpRequest();
        a.upload.addEventListener("progress", (d) => {
          d.lengthComputable && (e.progress = Math.round(d.loaded / d.total * 100), f("uploadProgress", { file: e.file, progress: e.progress }));
        }), a.addEventListener("load", () => {
          if (a.status >= 200 && a.status < 300)
            try {
              const d = JSON.parse(a.responseText);
              s(d);
            } catch {
              s(a.responseText);
            }
          else
            t(new Error(`HTTP ${a.status}: ${a.statusText}`));
        }), a.addEventListener("error", () => {
          t(new Error("Network error occurred"));
        }), a.open("POST", p.endpoint), p.headers && Object.entries(p.headers).forEach(([d, v]) => {
          a.setRequestHeader(d, v);
        }), a.send(o);
      });
    }
    function V(e) {
      if (e === 0) return "0 Bytes";
      const s = 1024, t = ["Bytes", "KB", "MB", "GB"], o = Math.floor(Math.log(e) / Math.log(s));
      return parseFloat((e / Math.pow(s, o)).toFixed(2)) + " " + t[o];
    }
    return (e, s) => {
      const t = H("field-label");
      return r(), n("div", null, [
        e.$slots.default || e.$slots.description ? (r(), N(t, {
          key: 0,
          required: e.required
        }, {
          description: k(() => [
            E(e.$slots, "description", {}, void 0, !0)
          ]),
          default: k(() => [
            E(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["required"])) : u("", !0),
        l("div", {
          class: _(["drag-drop-uploader", {
            "is-dragover": g.value,
            "is-uploading": c.value,
            "has-files": i.value.length > 0
          }]),
          onDragover: h(D, ["prevent"]),
          onDragleave: h(F, ["prevent"]),
          onDrop: h(T, ["prevent"]),
          onClick: U
        }, [
          l("input", {
            ref_key: "fileInput",
            ref: B,
            type: "file",
            multiple: e.multiple,
            accept: e.accepts,
            onChange: M,
            style: { display: "none" }
          }, null, 40, J),
          l("div", K, [
            i.value.length === 0 ? (r(), n("div", X, [
              s[0] || (s[0] = l("svg", {
                class: "drag-drop-icon",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
              }, [
                l("path", { d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" })
              ], -1)),
              s[1] || (s[1] = l("p", { class: "drag-drop-text" }, [
                l("strong", null, "Click to upload"),
                q(" or drag and drop files here ")
              ], -1)),
              e.accepts ? (r(), n("p", Z, " Accepted formats: " + m(e.accepts), 1)) : u("", !0)
            ])) : (r(), n("div", j, [
              (r(!0), n(P, null, O(i.value, (o, a) => (r(), n("div", {
                key: a,
                class: _(["file-item", {
                  "is-uploading": o.isUploading,
                  "is-success": o.isComplete,
                  "is-error": o.hasError
                }])
              }, [
                l("div", Q, [
                  l("span", W, m(o.name), 1),
                  l("span", Y, m(V(o.size)), 1)
                ]),
                o.isUploading ? (r(), n("div", ee, [
                  l("progress", {
                    class: "progress is-small is-primary",
                    value: o.progress,
                    max: "100"
                  }, m(o.progress) + "% ", 9, se)
                ])) : u("", !0),
                l("div", oe, [
                  o.isComplete ? (r(), n("span", te, " Complete ")) : o.hasError ? (r(), n("span", ae, " Error ")) : o.isUploading ? (r(), n("span", le, m(o.progress) + "% ", 1)) : u("", !0)
                ]),
                o.isUploading ? u("", !0) : (r(), n("button", {
                  key: 1,
                  class: "delete is-small",
                  onClick: h((d) => S(a), ["stop"])
                }, null, 8, re))
              ], 2))), 128))
            ]))
          ])
        ], 34),
        i.value.length > 0 ? (r(), n("div", ne, [
          l("div", ie, [
            l("button", {
              class: _(["button is-primary", { "is-loading": c.value }]),
              onClick: I,
              disabled: c.value || !e.endpoint
            }, " Upload Files ", 10, de)
          ]),
          l("div", pe, [
            l("button", {
              class: "button",
              onClick: A,
              disabled: c.value
            }, " Clear All ", 8, ce)
          ])
        ])) : u("", !0),
        $(x, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), he = /* @__PURE__ */ G(ue, [["__scopeId", "data-v-bba913da"]]);
export {
  he as default
};
