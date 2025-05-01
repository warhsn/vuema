import { defineComponent as i, computed as l, createElementBlock as o, openBlock as r, normalizeClass as t, normalizeStyle as n, toDisplayString as c } from "vue";
const u = ["src"], g = /* @__PURE__ */ i({
  __name: "avatar",
  props: {
    name: {},
    size: { default: "48" },
    radius: {},
    isRound: { type: Boolean },
    backgroundColour: { default: "grey" },
    textColor: { default: "white" },
    imageUrl: {}
  },
  setup(s) {
    const e = s, a = l(() => ({
      "is-48x48": e.size === "48"
    }));
    return (d, m) => (r(), o("figure", {
      class: t(["image is-clickable", a.value])
    }, [
      e.imageUrl ? (r(), o("img", {
        key: 0,
        src: e.imageUrl,
        class: t({
          "is-rounded": e.isRound
        })
      }, null, 10, u)) : (r(), o("div", {
        key: 1,
        style: n(
          `
                width: ${e.size}px; 
                height: ${e.size}px; 
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${e.backgroundColour};
                color: ${e.textColor};`
        )
      }, c(e.name), 5))
    ], 2));
  }
});
export {
  g as default
};
