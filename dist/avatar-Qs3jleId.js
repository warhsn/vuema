import { defineComponent as a, createElementBlock as r, openBlock as i, normalizeStyle as o, normalizeClass as u, toDisplayString as d, unref as g } from "vue";
function h(s) {
  const e = s.trim();
  if (!e)
    return "";
  const t = e.split(/\s+/), n = t[0].charAt(0);
  if (t.length === 1)
    return n;
  const l = t[t.length - 1].charAt(0);
  return n + l;
}
const m = ["width", "height", "src"], c = /* @__PURE__ */ a({
  __name: "avatar",
  props: {
    name: {},
    size: { default: 48 },
    radius: {},
    isRound: { type: Boolean, default: !0 },
    backgroundColour: { default: "grey" },
    textColor: { default: "white" },
    imageUrl: {}
  },
  setup(s) {
    return (e, t) => (i(), r("figure", {
      class: "image is-clickable",
      style: o(`width: ${e.size}px; height: ${e.size}px;`)
    }, [
      e.imageUrl ? (i(), r("img", {
        key: 0,
        width: `${e.size}px`,
        height: `${e.size}px`,
        src: e.imageUrl,
        class: u({
          "is-rounded": e.isRound
        })
      }, null, 10, m)) : (i(), r("div", {
        key: 1,
        style: o(
          `
                width: ${e.size}px; 
                height: ${e.size}px; 
                border-radius: ${e.isRound ? "50%" : "0"};
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${e.backgroundColour};
                color: ${e.textColor};`
        )
      }, d(g(h)(e.name ?? "")), 5))
    ], 4));
  }
});
export {
  c as default
};
