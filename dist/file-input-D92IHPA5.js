import { defineComponent as c, ref as d, createElementBlock as y, openBlock as B, createElementVNode as e, createVNode as f, normalizeClass as m, renderSlot as u, toDisplayString as h } from "vue";
import { _ as g } from "./field-error.vue_vue_type_script_setup_true_lang-C7PfoMZ6.js";
const _ = { class: "file-label" }, v = ["accept"], b = { class: "file-cta" }, C = { class: "file-label font-engr" }, I = { class: "file-name font-engr" }, i = "selected", w = "Choose a file…", k = /* @__PURE__ */ c({
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
  setup(x, { emit: p }) {
    const t = p, n = d(w);
    function r(o) {
      var s;
      const l = o.target;
      if ((s = l.files) != null && s.length) {
        let a = l.files[0];
        t(i, a), n.value = a.name;
        return;
      }
      t(i, null);
    }
    return (o, l) => (B(), y("div", null, [
      e("div", {
        class: m(["file has-name mb-0", {
          "is-boxed": o.isBoxed
        }])
      }, [
        e("label", _, [
          e("input", {
            onChange: r,
            class: "file-input",
            type: "file",
            accept: o.accepts
          }, null, 40, v),
          e("span", b, [
            l[0] || (l[0] = e("span", { class: "file-icon" }, [
              e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z" })
              ])
            ], -1)),
            e("span", C, [
              u(o.$slots, "default")
            ])
          ]),
          e("span", I, h(n.value), 1)
        ])
      ], 2),
      f(g, { error: o.error }, null, 8, ["error"])
    ]));
  }
});
export {
  k as default
};
