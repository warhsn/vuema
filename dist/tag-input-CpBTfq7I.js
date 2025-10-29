import { defineComponent as g, ref as v, resolveComponent as h, createElementBlock as s, openBlock as p, createVNode as _, createElementVNode as l, withCtx as x, renderSlot as c, Fragment as V, renderList as C, createTextVNode as I, toDisplayString as T, withDirectives as b, withKeys as k, vModelText as N } from "vue";
const q = { class: "tag-input" }, w = { class: "tags is-marginless" }, L = ["onClick"], S = { class: "tag-input-control" }, D = "update:modelValue", A = /* @__PURE__ */ g({
  __name: "tag-input",
  props: {
    tags: {},
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
  setup(a, { emit: u }) {
    const r = a, i = v(""), y = u;
    function d(t) {
      y(D, t);
    }
    function B(t) {
      const n = t.target.value;
      let e = r.modelValue;
      e != null && e.includes(n) || e == null || e.push(n), d(e), i.value = "";
    }
    function m(t) {
      let o = r.modelValue;
      const n = o == null ? void 0 : o.indexOf(t);
      o == null || o.splice(n, 1), d(o);
    }
    return (t, o) => {
      const n = h("field-label");
      return p(), s("div", null, [
        _(n, { required: a.required }, {
          default: x(() => [
            c(t.$slots, "default"),
            c(t.$slots, "description")
          ]),
          _: 3
        }, 8, ["required"]),
        l("div", q, [
          l("div", w, [
            (p(!0), s(V, null, C(a.modelValue, (e, f) => (p(), s("span", {
              class: "tag",
              key: f
            }, [
              I(T(e) + " ", 1),
              l("button", {
                class: "delete is-small",
                onClick: (E) => m(e)
              }, null, 8, L)
            ]))), 128))
          ]),
          l("div", S, [
            b(l("input", {
              "onUpdate:modelValue": o[0] || (o[0] = (e) => i.value = e),
              type: "text",
              onKeyup: k(B, ["enter"])
            }, null, 544), [
              [N, i.value]
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  A as default
};
