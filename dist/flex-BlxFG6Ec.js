import { createElementBlock as n, openBlock as l, normalizeClass as o, normalizeStyle as i, renderSlot as r } from "vue";
import { _ as s } from "./index-B9d6EJw8.js";
const a = {
  props: {
    column: {
      type: Boolean,
      default: !1
    },
    width: {
      type: String
    },
    minWidth: {
      type: String
    }
  }
};
function c(t, d, e, m, f, u) {
  return l(), n("div", {
    style: i({
      width: e.width || "",
      "min-width": e.minWidth || ""
    }),
    class: o(["is-flex", { "flex-column": e.column }])
  }, [
    r(t.$slots, "default")
  ], 6);
}
const h = /* @__PURE__ */ s(a, [["render", c]]);
export {
  h as default
};
