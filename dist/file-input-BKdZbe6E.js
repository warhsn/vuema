import { defineComponent as d, ref as y, createElementBlock as B, openBlock as f, createElementVNode as e, createVNode as m, normalizeClass as u, renderSlot as h, toDisplayString as g } from "vue";
import { _ as v } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
const _ = { class: "file-label" }, b = ["accept"], x = { class: "file-cta" }, C = { class: "file-label font-engr" }, I = { class: "file-name font-engr" }, p = "selected", w = "Choose a file…", k = /* @__PURE__ */ d({
  __name: "file-input",
  props: {
    endpoint: {},
    accepts: {},
    selfContained: {},
    isBoxed: { type: Boolean },
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
  setup(l, { emit: c }) {
    const n = c, s = y(w);
    function r(t) {
      var a;
      const o = t.target;
      if ((a = o.files) != null && a.length) {
        let i = o.files[0];
        n(p, i), s.value = i.name;
        return;
      }
      n(p, null);
    }
    return (t, o) => (f(), B("div", null, [
      e("div", {
        class: u(["file has-name mb-0", {
          "is-boxed": l.isBoxed
        }])
      }, [
        e("label", _, [
          e("input", {
            onChange: r,
            class: "file-input",
            type: "file",
            accept: l.accepts
          }, null, 40, b),
          e("span", x, [
            o[0] || (o[0] = e("span", { class: "file-icon" }, [
              e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z" })
              ])
            ], -1)),
            e("span", C, [
              h(t.$slots, "default")
            ])
          ]),
          e("span", I, g(s.value), 1)
        ])
      ], 2),
      m(v, { error: l.error }, null, 8, ["error"])
    ]));
  }
});
export {
  k as default
};
