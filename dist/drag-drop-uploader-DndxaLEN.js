import { defineComponent as I, ref as v, resolveComponent as P, createElementBlock as p, openBlock as d, createBlock as z, createCommentVNode as m, createElementVNode as n, createVNode as A, withCtx as T, renderSlot as w, withModifiers as B, normalizeClass as k, createTextVNode as q, toDisplayString as y, Fragment as R, renderList as J } from "vue";
import { _ as O } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { _ as X } from "./index-C_3BK7Ut.js";
const G = ["multiple", "accept"], K = { class: "drag-drop-content" }, W = {
  key: 0,
  class: "drag-drop-prompt"
}, Z = {
  key: 0,
  class: "drag-drop-help"
}, Q = {
  key: 1,
  class: "file-list"
}, Y = { class: "file-info" }, j = { class: "file-name" }, ee = { class: "file-size" }, se = {
  key: 0,
  class: "file-progress"
}, oe = ["value"], te = { class: "file-status" }, re = {
  key: 0,
  class: "tag is-success is-small"
}, ae = {
  key: 1,
  class: "tag is-danger is-small"
}, le = {
  key: 2,
  class: "tag is-info is-small"
}, ne = ["onClick"], ie = {
  key: 1,
  class: "field is-grouped mt-3"
}, de = { class: "control" }, pe = ["disabled"], ce = { class: "control" }, ue = ["disabled"], fe = /* @__PURE__ */ I({
  __name: "drag-drop-uploader",
  props: {
    endpoint: {},
    accepts: { default: "*/*" },
    uploadButtonText: { default: "Upload" },
    multiple: { type: Boolean, default: !0 },
    additionalData: {},
    headers: {},
    clearOnSuccess: { type: Boolean, default: !1 },
    presignedUrlCallback: {},
    onUploadComplete: {},
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
  emits: ["files-selected", "file-added", "upload-progress", "file-uploaded", "upload-error", "upload-completed", "upload-failed"],
  setup(c, { emit: U }) {
    const i = c, u = v([]), h = v(!1), g = v(!1), C = v(), f = U;
    function M(e) {
      e.dataTransfer && (e.dataTransfer.dropEffect = "copy"), h.value = !0;
    }
    function x() {
      h.value = !1;
    }
    function D(e) {
      var a;
      if (h.value = !1, (a = e.dataTransfer) != null && a.files) {
        const o = Array.from(e.dataTransfer.files);
        _(o);
      }
    }
    function b() {
      var e;
      (e = C.value) == null || e.click();
    }
    function F(e) {
      const a = e.target;
      if (a.files) {
        const o = Array.from(a.files);
        _(o);
      }
    }
    function _(e) {
      const a = e.filter((s) => !u.value.some(
        (r) => r.name === s.name && r.size === s.size
      )), o = a.map((s) => ({
        file: s,
        name: s.name,
        size: s.size,
        progress: 0,
        isUploading: !1,
        isComplete: !1,
        hasError: !1
      }));
      i.multiple ? u.value.push(...o) : u.value = o.slice(0, 1), f("files-selected", a);
    }
    function L(e) {
      u.value.splice(e, 1);
    }
    function E() {
      u.value = [];
    }
    async function S() {
      if (!i.endpoint && !i.presignedUrlCallback) return;
      g.value = !0;
      const e = [], a = [];
      try {
        for (const o of u.value)
          if (!o.isComplete) {
            o.isUploading = !0, o.hasError = !1;
            try {
              const s = await H(o);
              o.isComplete = !0, o.isUploading = !1, e.push(s), f("file-uploaded", { file: o.file, response: s });
            } catch (s) {
              o.hasError = !0, o.isUploading = !1, o.errorMessage = s instanceof Error ? s.message : "Upload failed", a.push({ file: o.file, error: o.errorMessage }), f("upload-error", { file: o.file, error: o.errorMessage });
            }
          }
        a.length === 0 && e.length > 0 ? (f("upload-completed", e), i.clearOnSuccess && E()) : a.length > 0 && f("upload-failed", a);
      } finally {
        g.value = !1;
      }
    }
    async function H(e) {
      return i.presignedUrlCallback ? $(e) : N(e);
    }
    async function $(e) {
      const { url: a, key: o } = await i.presignedUrlCallback(e.file);
      return new Promise((s, r) => {
        const t = new XMLHttpRequest();
        t.upload.addEventListener("progress", (l) => {
          l.lengthComputable && (e.progress = Math.round(l.loaded / l.total * 100), f("upload-progress", { file: e.file, progress: e.progress }));
        }), t.addEventListener("load", async () => {
          if (t.status >= 200 && t.status < 300)
            try {
              if (i.onUploadComplete) {
                const l = await i.onUploadComplete({ file: e.file, key: o });
                s(l);
              } else
                s({ key: o });
            } catch (l) {
              r(l instanceof Error ? l : new Error("Upload complete callback failed"));
            }
          else
            r(new Error(`Upload failed: HTTP ${t.status}`));
        }), t.addEventListener("error", () => {
          r(new Error("Network error occurred"));
        }), t.open("PUT", a), t.setRequestHeader("Content-Type", e.file.type), t.send(e.file);
      });
    }
    async function N(e) {
      return new Promise((a, o) => {
        const s = new FormData();
        s.append("file", e.file), i.additionalData && Object.entries(i.additionalData).forEach(([t, l]) => {
          s.append(t, String(l));
        });
        const r = new XMLHttpRequest();
        r.upload.addEventListener("progress", (t) => {
          t.lengthComputable && (e.progress = Math.round(t.loaded / t.total * 100), f("upload-progress", { file: e.file, progress: e.progress }));
        }), r.addEventListener("load", () => {
          if (r.status >= 200 && r.status < 300)
            try {
              const t = JSON.parse(r.responseText);
              if (t.errors || t.error || t.validationErrors) {
                const l = t.message || t.error || (t.errors ? JSON.stringify(t.errors) : "Validation failed");
                o(new Error(l));
              } else
                a(t);
            } catch {
              a(r.responseText);
            }
          else if (r.status >= 400 && r.status < 500)
            try {
              const t = JSON.parse(r.responseText), l = t.message || t.error || (t.errors ? JSON.stringify(t.errors) : `HTTP ${r.status}: ${r.statusText}`);
              o(new Error(l));
            } catch {
              o(new Error(`HTTP ${r.status}: ${r.statusText}`));
            }
          else
            o(new Error(`HTTP ${r.status}: ${r.statusText}`));
        }), r.addEventListener("error", () => {
          o(new Error("Network error occurred"));
        }), r.open("POST", i.endpoint), i.headers && Object.entries(i.headers).forEach(([t, l]) => {
          r.setRequestHeader(t, l);
        }), r.send(s);
      });
    }
    function V(e) {
      if (e === 0) return "0 Bytes";
      const a = 1024, o = ["Bytes", "KB", "MB", "GB"], s = Math.floor(Math.log(e) / Math.log(a));
      return parseFloat((e / Math.pow(a, s)).toFixed(2)) + " " + o[s];
    }
    return (e, a) => {
      const o = P("field-label");
      return d(), p("div", null, [
        e.$slots.default || e.$slots.description ? (d(), z(o, {
          key: 0,
          required: c.required
        }, {
          description: T(() => [
            w(e.$slots, "description", {}, void 0, !0)
          ]),
          default: T(() => [
            w(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["required"])) : m("", !0),
        n("div", {
          class: k(["drag-drop-uploader", {
            "is-dragover": h.value,
            "is-uploading": g.value,
            "has-files": u.value.length > 0
          }]),
          onDragover: B(M, ["prevent"]),
          onDragleave: B(x, ["prevent"]),
          onDrop: B(D, ["prevent"]),
          onClick: b
        }, [
          n("input", {
            ref_key: "fileInput",
            ref: C,
            type: "file",
            multiple: c.multiple,
            accept: c.accepts,
            onChange: F,
            style: { display: "none" }
          }, null, 40, G),
          n("div", K, [
            u.value.length === 0 ? (d(), p("div", W, [
              a[0] || (a[0] = n("svg", {
                class: "drag-drop-icon",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
              }, [
                n("path", { d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" })
              ], -1)),
              a[1] || (a[1] = n("p", { class: "drag-drop-text" }, [
                n("strong", null, "Click to upload"),
                q(" or drag and drop files here ")
              ], -1)),
              c.accepts ? (d(), p("p", Z, " Accepted formats: " + y(c.accepts), 1)) : m("", !0)
            ])) : (d(), p("div", Q, [
              (d(!0), p(R, null, J(u.value, (s, r) => (d(), p("div", {
                key: r,
                class: k(["file-item", {
                  "is-uploading": s.isUploading,
                  "is-success": s.isComplete,
                  "is-error": s.hasError
                }])
              }, [
                n("div", Y, [
                  n("span", j, y(s.name), 1),
                  n("span", ee, y(V(s.size)), 1)
                ]),
                s.isUploading ? (d(), p("div", se, [
                  n("progress", {
                    class: "progress is-small is-primary",
                    value: s.progress,
                    max: "100"
                  }, y(s.progress) + "% ", 9, oe)
                ])) : m("", !0),
                n("div", te, [
                  s.isComplete ? (d(), p("span", re, " Complete ")) : s.hasError ? (d(), p("span", ae, " Error ")) : s.isUploading ? (d(), p("span", le, y(s.progress) + "% ", 1)) : m("", !0)
                ]),
                s.isUploading ? m("", !0) : (d(), p("button", {
                  key: 1,
                  class: "delete is-small",
                  onClick: B((t) => L(r), ["stop"])
                }, null, 8, ne))
              ], 2))), 128))
            ]))
          ])
        ], 34),
        u.value.length > 0 ? (d(), p("div", ie, [
          n("div", de, [
            n("button", {
              class: k(["button is-primary", { "is-loading": g.value }]),
              onClick: S,
              disabled: g.value || !c.endpoint && !c.presignedUrlCallback
            }, y(c.uploadButtonText), 11, pe)
          ]),
          n("div", ce, [
            n("button", {
              class: "button",
              onClick: E,
              disabled: g.value
            }, " Clear ", 8, ue)
          ])
        ])) : m("", !0),
        A(O, { error: c.error }, null, 8, ["error"])
      ]);
    };
  }
}), he = /* @__PURE__ */ X(fe, [["__scopeId", "data-v-7674c409"]]);
export {
  he as default
};
