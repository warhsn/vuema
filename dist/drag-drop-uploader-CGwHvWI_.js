import { defineComponent as I, ref as h, resolveComponent as L, createElementBlock as i, openBlock as n, createBlock as z, createCommentVNode as g, createElementVNode as l, createVNode as A, withCtx as T, renderSlot as C, withModifiers as v, normalizeClass as _, createTextVNode as O, toDisplayString as m, Fragment as P, renderList as x } from "vue";
import { _ as q } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { _ as R } from "./index-D_FMbkGZ.js";
const J = ["multiple", "accept"], G = { class: "drag-drop-content" }, K = {
  key: 0,
  class: "drag-drop-prompt"
}, X = {
  key: 0,
  class: "drag-drop-help"
}, Z = {
  key: 1,
  class: "file-list"
}, Q = { class: "file-info" }, W = { class: "file-name" }, Y = { class: "file-size" }, j = {
  key: 0,
  class: "file-progress"
}, ee = ["value"], se = { class: "file-status" }, oe = {
  key: 0,
  class: "tag is-success is-small"
}, te = {
  key: 1,
  class: "tag is-danger is-small"
}, re = {
  key: 2,
  class: "tag is-info is-small"
}, ae = ["onClick"], le = {
  key: 1,
  class: "field is-grouped mt-3"
}, ne = { class: "control" }, ie = ["disabled"], de = { class: "control" }, pe = ["disabled"], ce = /* @__PURE__ */ I({
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
  emits: ["filesSelected", "uploadProgress", "file-uploaded", "upload-error", "upload-completed", "upload-failed"],
  setup(E, { emit: w }) {
    const p = E, d = h([]), y = h(!1), u = h(!1), B = h(), f = w;
    function D(e) {
      e.dataTransfer && (e.dataTransfer.dropEffect = "copy"), y.value = !0;
    }
    function M() {
      y.value = !1;
    }
    function b(e) {
      var r;
      if (y.value = !1, (r = e.dataTransfer) != null && r.files) {
        const o = Array.from(e.dataTransfer.files);
        k(o);
      }
    }
    function F() {
      var e;
      (e = B.value) == null || e.click();
    }
    function S(e) {
      const r = e.target;
      if (r.files) {
        const o = Array.from(r.files);
        k(o);
      }
    }
    function k(e) {
      const r = e.filter((s) => !d.value.some(
        (t) => t.name === s.name && t.size === s.size
      )), o = r.map((s) => ({
        file: s,
        name: s.name,
        size: s.size,
        progress: 0,
        isUploading: !1,
        isComplete: !1,
        hasError: !1
      }));
      p.multiple ? d.value.push(...o) : d.value = o.slice(0, 1), f("filesSelected", r);
    }
    function U(e) {
      d.value.splice(e, 1);
    }
    function $() {
      d.value = [];
    }
    async function N() {
      if (!p.endpoint) return;
      u.value = !0;
      const e = [], r = [];
      try {
        for (const o of d.value)
          if (!o.isComplete) {
            o.isUploading = !0, o.hasError = !1;
            try {
              const s = await V(o);
              o.isComplete = !0, o.isUploading = !1, e.push(s), f("file-uploaded", { file: o.file, response: s });
            } catch (s) {
              o.hasError = !0, o.isUploading = !1, o.errorMessage = s instanceof Error ? s.message : "Upload failed", r.push({ file: o.file, error: o.errorMessage }), f("upload-error", { file: o.file, error: o.errorMessage });
            }
          }
        r.length === 0 && e.length > 0 ? f("upload-completed", e) : r.length > 0 && f("upload-failed", r);
      } finally {
        u.value = !1;
      }
    }
    async function V(e) {
      return new Promise((r, o) => {
        const s = new FormData();
        s.append("file", e.file), p.additionalData && Object.entries(p.additionalData).forEach(([a, c]) => {
          s.append(a, String(c));
        });
        const t = new XMLHttpRequest();
        t.upload.addEventListener("progress", (a) => {
          a.lengthComputable && (e.progress = Math.round(a.loaded / a.total * 100), f("uploadProgress", { file: e.file, progress: e.progress }));
        }), t.addEventListener("load", () => {
          if (t.status >= 200 && t.status < 300)
            try {
              const a = JSON.parse(t.responseText);
              if (a.errors || a.error || a.validationErrors) {
                const c = a.message || a.error || (a.errors ? JSON.stringify(a.errors) : "Validation failed");
                o(new Error(c));
              } else
                r(a);
            } catch {
              r(t.responseText);
            }
          else if (t.status >= 400 && t.status < 500)
            try {
              const a = JSON.parse(t.responseText), c = a.message || a.error || (a.errors ? JSON.stringify(a.errors) : `HTTP ${t.status}: ${t.statusText}`);
              o(new Error(c));
            } catch {
              o(new Error(`HTTP ${t.status}: ${t.statusText}`));
            }
          else
            o(new Error(`HTTP ${t.status}: ${t.statusText}`));
        }), t.addEventListener("error", () => {
          o(new Error("Network error occurred"));
        }), t.open("POST", p.endpoint), p.headers && Object.entries(p.headers).forEach(([a, c]) => {
          t.setRequestHeader(a, c);
        }), t.send(s);
      });
    }
    function H(e) {
      if (e === 0) return "0 Bytes";
      const r = 1024, o = ["Bytes", "KB", "MB", "GB"], s = Math.floor(Math.log(e) / Math.log(r));
      return parseFloat((e / Math.pow(r, s)).toFixed(2)) + " " + o[s];
    }
    return (e, r) => {
      const o = L("field-label");
      return n(), i("div", null, [
        e.$slots.default || e.$slots.description ? (n(), z(o, {
          key: 0,
          required: e.required
        }, {
          description: T(() => [
            C(e.$slots, "description", {}, void 0, !0)
          ]),
          default: T(() => [
            C(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["required"])) : g("", !0),
        l("div", {
          class: _(["drag-drop-uploader", {
            "is-dragover": y.value,
            "is-uploading": u.value,
            "has-files": d.value.length > 0
          }]),
          onDragover: v(D, ["prevent"]),
          onDragleave: v(M, ["prevent"]),
          onDrop: v(b, ["prevent"]),
          onClick: F
        }, [
          l("input", {
            ref_key: "fileInput",
            ref: B,
            type: "file",
            multiple: e.multiple,
            accept: e.accepts,
            onChange: S,
            style: { display: "none" }
          }, null, 40, J),
          l("div", G, [
            d.value.length === 0 ? (n(), i("div", K, [
              r[0] || (r[0] = l("svg", {
                class: "drag-drop-icon",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
              }, [
                l("path", { d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" })
              ], -1)),
              r[1] || (r[1] = l("p", { class: "drag-drop-text" }, [
                l("strong", null, "Click to upload"),
                O(" or drag and drop files here ")
              ], -1)),
              e.accepts ? (n(), i("p", X, " Accepted formats: " + m(e.accepts), 1)) : g("", !0)
            ])) : (n(), i("div", Z, [
              (n(!0), i(P, null, x(d.value, (s, t) => (n(), i("div", {
                key: t,
                class: _(["file-item", {
                  "is-uploading": s.isUploading,
                  "is-success": s.isComplete,
                  "is-error": s.hasError
                }])
              }, [
                l("div", Q, [
                  l("span", W, m(s.name), 1),
                  l("span", Y, m(H(s.size)), 1)
                ]),
                s.isUploading ? (n(), i("div", j, [
                  l("progress", {
                    class: "progress is-small is-primary",
                    value: s.progress,
                    max: "100"
                  }, m(s.progress) + "% ", 9, ee)
                ])) : g("", !0),
                l("div", se, [
                  s.isComplete ? (n(), i("span", oe, " Complete ")) : s.hasError ? (n(), i("span", te, " Error ")) : s.isUploading ? (n(), i("span", re, m(s.progress) + "% ", 1)) : g("", !0)
                ]),
                s.isUploading ? g("", !0) : (n(), i("button", {
                  key: 1,
                  class: "delete is-small",
                  onClick: v((a) => U(t), ["stop"])
                }, null, 8, ae))
              ], 2))), 128))
            ]))
          ])
        ], 34),
        d.value.length > 0 ? (n(), i("div", le, [
          l("div", ne, [
            l("button", {
              class: _(["button is-primary", { "is-loading": u.value }]),
              onClick: N,
              disabled: u.value || !e.endpoint
            }, m(e.uploadButtonText), 11, ie)
          ]),
          l("div", de, [
            l("button", {
              class: "button",
              onClick: $,
              disabled: u.value
            }, " Clear ", 8, pe)
          ])
        ])) : g("", !0),
        A(q, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), me = /* @__PURE__ */ R(ce, [["__scopeId", "data-v-91722574"]]);
export {
  me as default
};
