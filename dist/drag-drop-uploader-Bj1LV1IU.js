import { defineComponent as H, ref as v, resolveComponent as I, createElementBlock as i, openBlock as n, createBlock as L, createCommentVNode as m, createElementVNode as l, createVNode as z, withCtx as C, renderSlot as E, withModifiers as B, normalizeClass as _, createTextVNode as A, toDisplayString as y, Fragment as O, renderList as q } from "vue";
import { _ as P } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
import { _ as R } from "./index-sOG1cr8I.js";
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
}, ne = { class: "control" }, ie = ["disabled"], de = { class: "control" }, pe = ["disabled"], ce = /* @__PURE__ */ H({
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
  emits: ["files-selected", "file-added", "upload-progress", "file-uploaded", "upload-error", "upload-completed", "upload-failed"],
  setup(p, { emit: w }) {
    const c = p, d = v([]), h = v(!1), f = v(!1), k = v(), g = w;
    function D(s) {
      s.dataTransfer && (s.dataTransfer.dropEffect = "copy"), h.value = !0;
    }
    function M() {
      h.value = !1;
    }
    function x(s) {
      var r;
      if (h.value = !1, (r = s.dataTransfer) != null && r.files) {
        const o = Array.from(s.dataTransfer.files);
        T(o);
      }
    }
    function b() {
      var s;
      (s = k.value) == null || s.click();
    }
    function F(s) {
      const r = s.target;
      if (r.files) {
        const o = Array.from(r.files);
        T(o);
      }
    }
    function T(s) {
      const r = s.filter((e) => !d.value.some(
        (t) => t.name === e.name && t.size === e.size
      )), o = r.map((e) => ({
        file: e,
        name: e.name,
        size: e.size,
        progress: 0,
        isUploading: !1,
        isComplete: !1,
        hasError: !1
      }));
      c.multiple ? d.value.push(...o) : d.value = o.slice(0, 1), g("files-selected", r);
    }
    function S(s) {
      d.value.splice(s, 1);
    }
    function U() {
      d.value = [];
    }
    async function $() {
      if (!c.endpoint) return;
      f.value = !0;
      const s = [], r = [];
      try {
        for (const o of d.value)
          if (!o.isComplete) {
            o.isUploading = !0, o.hasError = !1;
            try {
              const e = await N(o);
              o.isComplete = !0, o.isUploading = !1, s.push(e), g("file-uploaded", { file: o.file, response: e });
            } catch (e) {
              o.hasError = !0, o.isUploading = !1, o.errorMessage = e instanceof Error ? e.message : "Upload failed", r.push({ file: o.file, error: o.errorMessage }), g("upload-error", { file: o.file, error: o.errorMessage });
            }
          }
        r.length === 0 && s.length > 0 ? g("upload-completed", s) : r.length > 0 && g("upload-failed", r);
      } finally {
        f.value = !1;
      }
    }
    async function N(s) {
      return new Promise((r, o) => {
        const e = new FormData();
        e.append("file", s.file), c.additionalData && Object.entries(c.additionalData).forEach(([a, u]) => {
          e.append(a, String(u));
        });
        const t = new XMLHttpRequest();
        t.upload.addEventListener("progress", (a) => {
          a.lengthComputable && (s.progress = Math.round(a.loaded / a.total * 100), g("upload-progress", { file: s.file, progress: s.progress }));
        }), t.addEventListener("load", () => {
          if (t.status >= 200 && t.status < 300)
            try {
              const a = JSON.parse(t.responseText);
              if (a.errors || a.error || a.validationErrors) {
                const u = a.message || a.error || (a.errors ? JSON.stringify(a.errors) : "Validation failed");
                o(new Error(u));
              } else
                r(a);
            } catch {
              r(t.responseText);
            }
          else if (t.status >= 400 && t.status < 500)
            try {
              const a = JSON.parse(t.responseText), u = a.message || a.error || (a.errors ? JSON.stringify(a.errors) : `HTTP ${t.status}: ${t.statusText}`);
              o(new Error(u));
            } catch {
              o(new Error(`HTTP ${t.status}: ${t.statusText}`));
            }
          else
            o(new Error(`HTTP ${t.status}: ${t.statusText}`));
        }), t.addEventListener("error", () => {
          o(new Error("Network error occurred"));
        }), t.open("POST", c.endpoint), c.headers && Object.entries(c.headers).forEach(([a, u]) => {
          t.setRequestHeader(a, u);
        }), t.send(e);
      });
    }
    function V(s) {
      if (s === 0) return "0 Bytes";
      const r = 1024, o = ["Bytes", "KB", "MB", "GB"], e = Math.floor(Math.log(s) / Math.log(r));
      return parseFloat((s / Math.pow(r, e)).toFixed(2)) + " " + o[e];
    }
    return (s, r) => {
      const o = I("field-label");
      return n(), i("div", null, [
        s.$slots.default || s.$slots.description ? (n(), L(o, {
          key: 0,
          required: p.required
        }, {
          description: C(() => [
            E(s.$slots, "description", {}, void 0, !0)
          ]),
          default: C(() => [
            E(s.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["required"])) : m("", !0),
        l("div", {
          class: _(["drag-drop-uploader", {
            "is-dragover": h.value,
            "is-uploading": f.value,
            "has-files": d.value.length > 0
          }]),
          onDragover: B(D, ["prevent"]),
          onDragleave: B(M, ["prevent"]),
          onDrop: B(x, ["prevent"]),
          onClick: b
        }, [
          l("input", {
            ref_key: "fileInput",
            ref: k,
            type: "file",
            multiple: p.multiple,
            accept: p.accepts,
            onChange: F,
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
                A(" or drag and drop files here ")
              ], -1)),
              p.accepts ? (n(), i("p", X, " Accepted formats: " + y(p.accepts), 1)) : m("", !0)
            ])) : (n(), i("div", Z, [
              (n(!0), i(O, null, q(d.value, (e, t) => (n(), i("div", {
                key: t,
                class: _(["file-item", {
                  "is-uploading": e.isUploading,
                  "is-success": e.isComplete,
                  "is-error": e.hasError
                }])
              }, [
                l("div", Q, [
                  l("span", W, y(e.name), 1),
                  l("span", Y, y(V(e.size)), 1)
                ]),
                e.isUploading ? (n(), i("div", j, [
                  l("progress", {
                    class: "progress is-small is-primary",
                    value: e.progress,
                    max: "100"
                  }, y(e.progress) + "% ", 9, ee)
                ])) : m("", !0),
                l("div", se, [
                  e.isComplete ? (n(), i("span", oe, " Complete ")) : e.hasError ? (n(), i("span", te, " Error ")) : e.isUploading ? (n(), i("span", re, y(e.progress) + "% ", 1)) : m("", !0)
                ]),
                e.isUploading ? m("", !0) : (n(), i("button", {
                  key: 1,
                  class: "delete is-small",
                  onClick: B((a) => S(t), ["stop"])
                }, null, 8, ae))
              ], 2))), 128))
            ]))
          ])
        ], 34),
        d.value.length > 0 ? (n(), i("div", le, [
          l("div", ne, [
            l("button", {
              class: _(["button is-primary", { "is-loading": f.value }]),
              onClick: $,
              disabled: f.value || !p.endpoint
            }, y(p.uploadButtonText), 11, ie)
          ]),
          l("div", de, [
            l("button", {
              class: "button",
              onClick: U,
              disabled: f.value
            }, " Clear ", 8, pe)
          ])
        ])) : m("", !0),
        z(P, { error: p.error }, null, 8, ["error"])
      ]);
    };
  }
}), me = /* @__PURE__ */ R(ce, [["__scopeId", "data-v-c0f44a95"]]);
export {
  me as default
};
