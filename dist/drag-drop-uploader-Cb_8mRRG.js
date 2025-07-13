import { defineComponent as A, ref as y, resolveComponent as H, createElementBlock as n, openBlock as r, createBlock as N, createCommentVNode as u, createElementVNode as l, createVNode as $, withCtx as C, renderSlot as E, withModifiers as h, normalizeClass as _, createTextVNode as q, toDisplayString as f, Fragment as P, renderList as O } from "vue";
import { _ as x } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { _ as R } from "./index-DmCRRUKr.js";
const G = ["multiple", "accept"], J = { class: "drag-drop-content" }, K = {
  key: 0,
  class: "drag-drop-prompt"
}, X = {
  key: 0,
  class: "drag-drop-help"
}, Z = {
  key: 1,
  class: "file-list"
}, j = { class: "file-info" }, Q = { class: "file-name" }, W = { class: "file-size" }, Y = {
  key: 0,
  class: "file-progress"
}, ee = ["value"], oe = { class: "file-status" }, se = {
  key: 0,
  class: "tag is-success is-small"
}, te = {
  key: 1,
  class: "tag is-danger is-small"
}, ae = {
  key: 2,
  class: "tag is-info is-small"
}, le = ["onClick"], re = {
  key: 1,
  class: "field is-grouped mt-3"
}, ne = { class: "control" }, ie = ["disabled"], de = { class: "control" }, pe = ["disabled"], ce = /* @__PURE__ */ A({
  __name: "drag-drop-uploader",
  props: {
    endpoint: {},
    accepts: { default: "*/*" },
    uploadButtonText: { default: "Upload" },
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
  emits: ["filesSelected", "uploadProgress", "file-uploaded", "upload-error", "upload-completed"],
  setup(T, { emit: w }) {
    const p = T, i = y([]), m = y(!1), c = y(!1), B = y(), g = w;
    function D(e) {
      e.dataTransfer && (e.dataTransfer.dropEffect = "copy"), m.value = !0;
    }
    function b() {
      m.value = !1;
    }
    function F(e) {
      var o;
      if (m.value = !1, (o = e.dataTransfer) != null && o.files) {
        const t = Array.from(e.dataTransfer.files);
        k(t);
      }
    }
    function M() {
      var e;
      (e = B.value) == null || e.click();
    }
    function U(e) {
      const o = e.target;
      if (o.files) {
        const t = Array.from(o.files);
        k(t);
      }
    }
    function k(e) {
      const o = e.filter((s) => !i.value.some(
        (a) => a.name === s.name && a.size === s.size
      )), t = o.map((s) => ({
        file: s,
        name: s.name,
        size: s.size,
        progress: 0,
        isUploading: !1,
        isComplete: !1,
        hasError: !1
      }));
      p.multiple ? i.value.push(...t) : i.value = t.slice(0, 1), g("filesSelected", o);
    }
    function S(e) {
      i.value.splice(e, 1);
    }
    function I() {
      i.value = [];
    }
    async function L() {
      if (!p.endpoint) return;
      c.value = !0;
      const e = [];
      try {
        for (const o of i.value)
          if (!o.isComplete) {
            o.isUploading = !0, o.hasError = !1;
            try {
              const t = await V(o);
              o.isComplete = !0, o.isUploading = !1, e.push(t), g("file-uploaded", { file: o.file, response: t });
            } catch (t) {
              o.hasError = !0, o.isUploading = !1, o.errorMessage = t instanceof Error ? t.message : "Upload failed", g("upload-error", { file: o.file, error: o.errorMessage });
            }
          }
        g("upload-completed", e);
      } finally {
        c.value = !1;
      }
    }
    async function V(e) {
      return new Promise((o, t) => {
        const s = new FormData();
        s.append("file", e.file), p.additionalData && Object.entries(p.additionalData).forEach(([d, v]) => {
          s.append(d, String(v));
        });
        const a = new XMLHttpRequest();
        a.upload.addEventListener("progress", (d) => {
          d.lengthComputable && (e.progress = Math.round(d.loaded / d.total * 100), g("uploadProgress", { file: e.file, progress: e.progress }));
        }), a.addEventListener("load", () => {
          if (a.status >= 200 && a.status < 300)
            try {
              const d = JSON.parse(a.responseText);
              o(d);
            } catch {
              o(a.responseText);
            }
          else
            t(new Error(`HTTP ${a.status}: ${a.statusText}`));
        }), a.addEventListener("error", () => {
          t(new Error("Network error occurred"));
        }), a.open("POST", p.endpoint), p.headers && Object.entries(p.headers).forEach(([d, v]) => {
          a.setRequestHeader(d, v);
        }), a.send(s);
      });
    }
    function z(e) {
      if (e === 0) return "0 Bytes";
      const o = 1024, t = ["Bytes", "KB", "MB", "GB"], s = Math.floor(Math.log(e) / Math.log(o));
      return parseFloat((e / Math.pow(o, s)).toFixed(2)) + " " + t[s];
    }
    return (e, o) => {
      const t = H("field-label");
      return r(), n("div", null, [
        e.$slots.default || e.$slots.description ? (r(), N(t, {
          key: 0,
          required: e.required
        }, {
          description: C(() => [
            E(e.$slots, "description", {}, void 0, !0)
          ]),
          default: C(() => [
            E(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["required"])) : u("", !0),
        l("div", {
          class: _(["drag-drop-uploader", {
            "is-dragover": m.value,
            "is-uploading": c.value,
            "has-files": i.value.length > 0
          }]),
          onDragover: h(D, ["prevent"]),
          onDragleave: h(b, ["prevent"]),
          onDrop: h(F, ["prevent"]),
          onClick: M
        }, [
          l("input", {
            ref_key: "fileInput",
            ref: B,
            type: "file",
            multiple: e.multiple,
            accept: e.accepts,
            onChange: U,
            style: { display: "none" }
          }, null, 40, G),
          l("div", J, [
            i.value.length === 0 ? (r(), n("div", K, [
              o[0] || (o[0] = l("svg", {
                class: "drag-drop-icon",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
              }, [
                l("path", { d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" })
              ], -1)),
              o[1] || (o[1] = l("p", { class: "drag-drop-text" }, [
                l("strong", null, "Click to upload"),
                q(" or drag and drop files here ")
              ], -1)),
              e.accepts ? (r(), n("p", X, " Accepted formats: " + f(e.accepts), 1)) : u("", !0)
            ])) : (r(), n("div", Z, [
              (r(!0), n(P, null, O(i.value, (s, a) => (r(), n("div", {
                key: a,
                class: _(["file-item", {
                  "is-uploading": s.isUploading,
                  "is-success": s.isComplete,
                  "is-error": s.hasError
                }])
              }, [
                l("div", j, [
                  l("span", Q, f(s.name), 1),
                  l("span", W, f(z(s.size)), 1)
                ]),
                s.isUploading ? (r(), n("div", Y, [
                  l("progress", {
                    class: "progress is-small is-primary",
                    value: s.progress,
                    max: "100"
                  }, f(s.progress) + "% ", 9, ee)
                ])) : u("", !0),
                l("div", oe, [
                  s.isComplete ? (r(), n("span", se, " Complete ")) : s.hasError ? (r(), n("span", te, " Error ")) : s.isUploading ? (r(), n("span", ae, f(s.progress) + "% ", 1)) : u("", !0)
                ]),
                s.isUploading ? u("", !0) : (r(), n("button", {
                  key: 1,
                  class: "delete is-small",
                  onClick: h((d) => S(a), ["stop"])
                }, null, 8, le))
              ], 2))), 128))
            ]))
          ])
        ], 34),
        i.value.length > 0 ? (r(), n("div", re, [
          l("div", ne, [
            l("button", {
              class: _(["button is-primary", { "is-loading": c.value }]),
              onClick: L,
              disabled: c.value || !e.endpoint
            }, f(e.uploadButtonText), 11, ie)
          ]),
          l("div", de, [
            l("button", {
              class: "button",
              onClick: I,
              disabled: c.value
            }, " Clear ", 8, pe)
          ])
        ])) : u("", !0),
        $(x, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), me = /* @__PURE__ */ R(ce, [["__scopeId", "data-v-69fba078"]]);
export {
  me as default
};
