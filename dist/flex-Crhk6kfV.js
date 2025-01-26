import { openBlock as n, createElementBlock as l, normalizeStyle as o, normalizeClass as i, renderSlot as r } from "vue";
import { _ as s } from "./index-BM2bubGl.js";
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
  return n(), l("div", {
    style: o({
      width: e.width || "",
      "min-width": e.minWidth || ""
    }),
    class: i(["is-flex", { "flex-column": e.column }])
  }, [
    r(t.$slots, "default")
  ], 6);
}
const h = /* @__PURE__ */ s(a, [["render", c]]);
export {
  h as default
};
