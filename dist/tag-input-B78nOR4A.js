import { defineComponent as v, ref as g, resolveComponent as _, openBlock as i, createElementBlock as s, createVNode as h, withCtx as V, renderSlot as d, createElementVNode as l, Fragment as x, renderList as T, createTextVNode as b, toDisplayString as k, withDirectives as C, withKeys as N, vModelText as I } from "vue";
const q = { class: "tag-input" }, w = { class: "tags is-marginless" }, L = ["onClick"], S = { class: "tag-input-control" }, D = "update:modelValue", A = /* @__PURE__ */ v({
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
    leftIconType: {},
    rightIcon: {},
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
  setup(u, { emit: c }) {
    const p = u, a = g(""), y = c;
    function r(t) {
      y(D, t);
    }
    function B(t) {
      const n = t.target.value;
      let e = p.modelValue;
      e != null && e.includes(n) || e == null || e.push(n), r(e), a.value = "";
    }
    function m(t) {
      let o = p.modelValue;
      const n = o == null ? void 0 : o.indexOf(t);
      o == null || o.splice(n, 1), r(o);
    }
    return (t, o) => {
      const n = _("field-label");
      return i(), s("div", null, [
        h(n, { required: t.required }, {
          default: V(() => [
            d(t.$slots, "default"),
            d(t.$slots, "description")
          ]),
          _: 3
        }, 8, ["required"]),
        l("div", q, [
          l("div", w, [
            (i(!0), s(x, null, T(t.modelValue, (e, f) => (i(), s("span", {
              class: "tag",
              key: f
            }, [
              b(k(e) + " ", 1),
              l("button", {
                class: "delete is-small",
                onClick: (E) => m(e)
              }, null, 8, L)
            ]))), 128))
          ]),
          l("div", S, [
            C(l("input", {
              "onUpdate:modelValue": o[0] || (o[0] = (e) => a.value = e),
              type: "text",
              onKeyup: N(B, ["enter"])
            }, null, 544), [
              [I, a.value]
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
