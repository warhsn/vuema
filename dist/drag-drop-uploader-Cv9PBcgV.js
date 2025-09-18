import { defineComponent as I, ref as h, resolveComponent as L, createElementBlock as i, openBlock as n, createBlock as z, createCommentVNode as f, createElementVNode as l, createVNode as A, withCtx as T, renderSlot as C, withModifiers as v, normalizeClass as _, createTextVNode as O, toDisplayString as g, Fragment as P, renderList as x } from "vue";
import { _ as q } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { _ as R } from "./index-DgsojaaH.js";
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
  emits: ["filesSelected", "uploadProgress", "file-uploaded", "upload-error", "upload-completed"],
  setup(E, { emit: w }) {
    const p = E, d = h([]), y = h(!1), u = h(!1), B = h(), m = w;
    function D(e) {
      e.dataTransfer && (e.dataTransfer.dropEffect = "copy"), y.value = !0;
    }
    function b() {
      y.value = !1;
    }
    function M(e) {
      var s;
      if (y.value = !1, (s = e.dataTransfer) != null && s.files) {
        const r = Array.from(e.dataTransfer.files);
        k(r);
      }
    }
    function F() {
      var e;
      (e = B.value) == null || e.click();
    }
    function S(e) {
      const s = e.target;
      if (s.files) {
        const r = Array.from(s.files);
        k(r);
      }
    }
    function k(e) {
      const s = e.filter((o) => !d.value.some(
        (t) => t.name === o.name && t.size === o.size
      )), r = s.map((o) => ({
        file: o,
        name: o.name,
        size: o.size,
        progress: 0,
        isUploading: !1,
        isComplete: !1,
        hasError: !1
      }));
      p.multiple ? d.value.push(...r) : d.value = r.slice(0, 1), m("filesSelected", s);
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
      const e = [];
      try {
        for (const s of d.value)
          if (!s.isComplete) {
            s.isUploading = !0, s.hasError = !1;
            try {
              const r = await V(s);
              s.isComplete = !0, s.isUploading = !1, e.push(r), m("file-uploaded", { file: s.file, response: r });
            } catch (r) {
              s.hasError = !0, s.isUploading = !1, s.errorMessage = r instanceof Error ? r.message : "Upload failed", m("upload-error", { file: s.file, error: s.errorMessage });
            }
          }
        m("upload-completed", e);
      } finally {
        u.value = !1;
      }
    }
    async function V(e) {
      return new Promise((s, r) => {
        const o = new FormData();
        o.append("file", e.file), p.additionalData && Object.entries(p.additionalData).forEach(([a, c]) => {
          o.append(a, String(c));
        });
        const t = new XMLHttpRequest();
        t.upload.addEventListener("progress", (a) => {
          a.lengthComputable && (e.progress = Math.round(a.loaded / a.total * 100), m("uploadProgress", { file: e.file, progress: e.progress }));
        }), t.addEventListener("load", () => {
          if (t.status >= 200 && t.status < 300)
            try {
              const a = JSON.parse(t.responseText);
              if (a.errors || a.error || a.validationErrors) {
                const c = a.message || a.error || (a.errors ? JSON.stringify(a.errors) : "Validation failed");
                r(new Error(c));
              } else
                s(a);
            } catch {
              s(t.responseText);
            }
          else if (t.status >= 400 && t.status < 500)
            try {
              const a = JSON.parse(t.responseText), c = a.message || a.error || (a.errors ? JSON.stringify(a.errors) : `HTTP ${t.status}: ${t.statusText}`);
              r(new Error(c));
            } catch {
              r(new Error(`HTTP ${t.status}: ${t.statusText}`));
            }
          else
            r(new Error(`HTTP ${t.status}: ${t.statusText}`));
        }), t.addEventListener("error", () => {
          r(new Error("Network error occurred"));
        }), t.open("POST", p.endpoint), p.headers && Object.entries(p.headers).forEach(([a, c]) => {
          t.setRequestHeader(a, c);
        }), t.send(o);
      });
    }
    function H(e) {
      if (e === 0) return "0 Bytes";
      const s = 1024, r = ["Bytes", "KB", "MB", "GB"], o = Math.floor(Math.log(e) / Math.log(s));
      return parseFloat((e / Math.pow(s, o)).toFixed(2)) + " " + r[o];
    }
    return (e, s) => {
      const r = L("field-label");
      return n(), i("div", null, [
        e.$slots.default || e.$slots.description ? (n(), z(r, {
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
        }, 8, ["required"])) : f("", !0),
        l("div", {
          class: _(["drag-drop-uploader", {
            "is-dragover": y.value,
            "is-uploading": u.value,
            "has-files": d.value.length > 0
          }]),
          onDragover: v(D, ["prevent"]),
          onDragleave: v(b, ["prevent"]),
          onDrop: v(M, ["prevent"]),
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
              s[0] || (s[0] = l("svg", {
                class: "drag-drop-icon",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
              }, [
                l("path", { d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" })
              ], -1)),
              s[1] || (s[1] = l("p", { class: "drag-drop-text" }, [
                l("strong", null, "Click to upload"),
                O(" or drag and drop files here ")
              ], -1)),
              e.accepts ? (n(), i("p", X, " Accepted formats: " + g(e.accepts), 1)) : f("", !0)
            ])) : (n(), i("div", Z, [
              (n(!0), i(P, null, x(d.value, (o, t) => (n(), i("div", {
                key: t,
                class: _(["file-item", {
                  "is-uploading": o.isUploading,
                  "is-success": o.isComplete,
                  "is-error": o.hasError
                }])
              }, [
                l("div", Q, [
                  l("span", W, g(o.name), 1),
                  l("span", Y, g(H(o.size)), 1)
                ]),
                o.isUploading ? (n(), i("div", j, [
                  l("progress", {
                    class: "progress is-small is-primary",
                    value: o.progress,
                    max: "100"
                  }, g(o.progress) + "% ", 9, ee)
                ])) : f("", !0),
                l("div", se, [
                  o.isComplete ? (n(), i("span", oe, " Complete ")) : o.hasError ? (n(), i("span", te, " Error ")) : o.isUploading ? (n(), i("span", re, g(o.progress) + "% ", 1)) : f("", !0)
                ]),
                o.isUploading ? f("", !0) : (n(), i("button", {
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
            }, g(e.uploadButtonText), 11, ie)
          ]),
          l("div", de, [
            l("button", {
              class: "button",
              onClick: $,
              disabled: u.value
            }, " Clear ", 8, pe)
          ])
        ])) : f("", !0),
        A(q, { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), me = /* @__PURE__ */ R(ce, [["__scopeId", "data-v-75ae4fbc"]]);
export {
  me as default
};
