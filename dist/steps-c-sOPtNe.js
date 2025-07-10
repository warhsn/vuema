import { defineComponent as v, computed as C, resolveComponent as D, createElementBlock as l, openBlock as s, normalizeClass as r, createElementVNode as n, Fragment as g, renderList as w, createBlock as d, toDisplayString as p } from "vue";
import { u as V } from "./sizes-tLhbz8lD.js";
import { _ as z } from "./index-ChY6qX6v.js";
const A = ["onClick", "aria-current"], E = { class: "step-marker" }, F = {
  key: 1,
  class: "step-check"
}, L = {
  key: 2,
  class: "step-number"
}, N = { class: "step-details" }, T = { class: "step-title" }, I = ["aria-current"], M = { class: "step-marker" }, R = {
  key: 1,
  class: "step-check"
}, $ = {
  key: 2,
  class: "step-number"
}, j = { class: "step-details" }, q = { class: "step-title" }, G = /* @__PURE__ */ v({
  __name: "steps",
  props: {
    steps: {},
    currentStep: { default: 0 },
    isClickable: { type: Boolean, default: !1 },
    isVertical: { type: Boolean, default: !1 },
    hasArrowSeparator: { type: Boolean, default: !1 },
    hasBulletSeparator: { type: Boolean, default: !1 },
    hasDotSeparator: { type: Boolean, default: !1 },
    hasSucceedsSeparator: { type: Boolean, default: !1 },
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
  emits: ["stepClick"],
  setup(_, { emit: m }) {
    const t = _, B = m, h = V(t), k = C(() => ({
      ...h,
      "is-vertical": t.isVertical,
      "has-arrow-separator": t.hasArrowSeparator,
      "has-bullet-separator": t.hasBulletSeparator,
      "has-dot-separator": t.hasDotSeparator,
      "has-succeeds-separator": t.hasSucceedsSeparator
    })), c = (e) => {
      var i;
      return ((i = t.steps[e]) == null ? void 0 : i.isCompleted) || e < t.currentStep;
    }, f = (e) => e === t.currentStep, u = (e) => {
      var i;
      return ((i = t.steps[e]) == null ? void 0 : i.isDisabled) || !1;
    }, S = (e) => ({
      "is-completed": c(e),
      "is-active": f(e),
      "is-disabled": u(e)
    }), b = (e) => {
      u(e) || B("stepClick", e);
    };
    return (e, i) => {
      const y = D("b-icon");
      return s(), l("nav", {
        class: r(["steps", k.value]),
        role: "navigation",
        "aria-label": "steps"
      }, [
        n("ul", {
          class: r({ "is-vertical": e.isVertical })
        }, [
          (s(!0), l(g, null, w(e.steps, (a, o) => (s(), l("li", {
            key: o,
            class: r(["step-item", S(o)])
          }, [
            e.isClickable && !a.isDisabled ? (s(), l("a", {
              key: 0,
              onClick: (H) => b(o),
              class: "step-link",
              "aria-current": o === e.currentStep ? "step" : void 0
            }, [
              n("span", E, [
                a.icon ? (s(), d(y, {
                  key: 0,
                  icon: a.icon,
                  "icon-type": a.iconType
                }, null, 8, ["icon", "icon-type"])) : c(o) ? (s(), l("span", F, "✓")) : (s(), l("span", L, p(o + 1), 1))
              ]),
              n("span", N, [
                n("span", T, p(a.label), 1)
              ])
            ], 8, A)) : (s(), l("div", {
              key: 1,
              class: "step-content",
              "aria-current": o === e.currentStep ? "step" : void 0
            }, [
              n("span", M, [
                a.icon ? (s(), d(y, {
                  key: 0,
                  icon: a.icon,
                  "icon-type": a.iconType
                }, null, 8, ["icon", "icon-type"])) : c(o) ? (s(), l("span", R, "✓")) : (s(), l("span", $, p(o + 1), 1))
              ]),
              n("span", j, [
                n("span", q, p(a.label), 1)
              ])
            ], 8, I))
          ], 2))), 128))
        ], 2)
      ], 2);
    };
  }
}), P = /* @__PURE__ */ z(G, [["__scopeId", "data-v-a3fec671"]]);
export {
  P as default
};
