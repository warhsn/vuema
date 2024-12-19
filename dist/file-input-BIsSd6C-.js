import { defineComponent as r, ref as y, openBlock as d, createElementBlock as B, normalizeClass as f, createElementVNode as e, renderSlot as m, toDisplayString as u } from "vue";
const h = { class: "file-label" }, g = ["accept"], _ = { class: "file-cta" }, v = { class: "file-label font-engr" }, C = { class: "file-name font-engr" }, i = "selected", b = "Choose a file…", x = /* @__PURE__ */ r({
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
  setup(I, { emit: p }) {
    const t = p, n = y(b);
    function c(o) {
      var s;
      const l = o.target;
      if ((s = l.files) != null && s.length) {
        let a = l.files[0];
        t(i, a), n.value = a.name;
        return;
      }
      t(i, null);
    }
    return (o, l) => (d(), B("div", {
      class: f(["file has-name", {
        "is-boxed": o.isBoxed
      }])
    }, [
      e("label", h, [
        e("input", {
          onChange: c,
          class: "file-input",
          type: "file",
          accept: o.accepts
        }, null, 40, g),
        e("span", _, [
          l[0] || (l[0] = e("span", { class: "file-icon" }, [
            e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              e("path", { d: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z" })
            ])
          ], -1)),
          e("span", v, [
            m(o.$slots, "default")
          ])
        ]),
        e("span", C, u(n.value), 1)
      ])
    ], 2));
  }
});
export {
  x as default
};
