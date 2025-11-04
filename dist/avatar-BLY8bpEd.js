import { defineComponent as o, createElementBlock as n, openBlock as r, normalizeStyle as a, normalizeClass as c, toDisplayString as u, unref as d } from "vue";
function g(e) {
  const i = e.trim();
  if (!i)
    return "";
  const t = i.split(/\s+/), l = t[0].charAt(0);
  if (t.length === 1)
    return l;
  const s = t[t.length - 1].charAt(0);
  return l + s;
}
const h = ["width", "height", "src"], f = /* @__PURE__ */ o({
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
  setup(e) {
    return (i, t) => (r(), n("figure", {
      class: "image is-clickable",
      style: a(`width: ${e.size}px; height: ${e.size}px;`)
    }, [
      e.imageUrl ? (r(), n("img", {
        key: 0,
        width: `${e.size}px`,
        height: `${e.size}px`,
        src: e.imageUrl,
        class: c({
          "is-rounded": e.isRound
        })
      }, null, 10, h)) : (r(), n("div", {
        key: 1,
        style: a(
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
      }, u(d(g)(e.name ?? "")), 5))
    ], 4));
  }
});
export {
  f as default
};
