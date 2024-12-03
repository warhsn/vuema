import { defineComponent as r, ref as d, resolveComponent as y, openBlock as f, createElementBlock as B, normalizeClass as m, createElementVNode as e, createVNode as u, renderSlot as _, toDisplayString as h } from "vue";
const g = { class: "file-label" }, b = ["accept"], C = { class: "file-cta" }, N = { class: "file-icon" }, S = { class: "file-label font-engr" }, v = { class: "file-name font-engr" }, i = "selected", x = "Choose a file…", E = /* @__PURE__ */ r({
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
    isExpanded: { type: Boolean },
    autocomplete: { type: Boolean },
    icon: {},
    iconType: {},
    iconPack: {},
    textIcon: { type: Boolean },
    leftIcon: {},
    iconClasses: {},
    leftIconType: {},
    rightIcon: {},
    error: {},
    hasAddons: { type: Boolean },
    isSmall: { type: Boolean },
    isMedium: { type: Boolean },
    isLarge: { type: Boolean },
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
    is12: { type: Boolean },
    isNarrow: { type: Boolean }
  },
  setup(I, { emit: p }) {
    const l = p, s = d(x);
    function c(o) {
      var n;
      const t = o.target;
      if ((n = t.files) != null && n.length) {
        let a = t.files[0];
        l(i, a), s.value = a.name;
        return;
      }
      l(i, null);
    }
    return (o, t) => {
      const n = y("b-icon");
      return f(), B("div", {
        class: m(["file has-name", {
          "is-boxed": o.isBoxed
        }])
      }, [
        e("label", g, [
          e("input", {
            onChange: c,
            class: "file-input",
            type: "file",
            accept: o.accepts
          }, null, 40, b),
          e("span", C, [
            e("span", N, [
              u(n, {
                icon: "upload",
                "icon-type": "fas"
              })
            ]),
            e("span", S, [
              _(o.$slots, "default")
            ])
          ]),
          e("span", v, h(s.value), 1)
        ])
      ], 2);
    };
  }
});
export {
  E as default
};
