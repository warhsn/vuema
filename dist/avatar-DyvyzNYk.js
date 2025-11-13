import { defineComponent as l, createElementBlock as o, openBlock as c, normalizeStyle as r, createElementVNode as u, toDisplayString as s, unref as d } from "vue";
function g(e) {
  const i = e.trim();
  if (!i)
    return "";
  const t = i.split(/\s+/), n = t[0].charAt(0);
  if (t.length === 1)
    return n;
  const a = t[t.length - 1].charAt(0);
  return n + a;
}
const f = /* @__PURE__ */ l({
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
    return (i, t) => (c(), o("figure", {
      class: "image is-clickable",
      style: r(`width: ${e.size}px; height: ${e.size}px;`)
    }, [
      u("div", {
        style: r(
          `
                width: ${e.size}px;
                height: ${e.size}px;
                border-radius: ${e.isRound ? "50%" : "0"};
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${e.backgroundColour};
                color: ${e.textColor};
                ${e.imageUrl ? `background-image: url('${e.imageUrl}'); background-size: cover; background-position: center;` : ""}`
        )
      }, s(e.imageUrl ? "" : d(g)(e.name ?? "")), 5)
    ], 4));
  }
});
export {
  f as default
};
