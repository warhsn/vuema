import { defineComponent as u, computed as o, createElementBlock as i, openBlock as a, normalizeClass as l, normalizeStyle as c, toDisplayString as d, unref as m } from "vue";
function g(s) {
  const e = s.trim();
  if (!e)
    return "";
  const t = e.split(/\s+/), r = t[0].charAt(0);
  if (t.length === 1)
    return r;
  const n = t[t.length - 1].charAt(0);
  return r + n;
}
const p = ["src"], x = /* @__PURE__ */ u({
  __name: "avatar",
  props: {
    name: {},
    size: { default: 48 },
    radius: {},
    isRound: { type: Boolean },
    backgroundColour: { default: "grey" },
    textColor: { default: "white" },
    imageUrl: {}
  },
  setup(s) {
    const e = s, t = o(() => ({
      width: `${e.size}px`,
      height: `${e.size}px`
    })), r = o(() => ({
      width: `${e.size}px`,
      height: `${e.size}px`,
      borderRadius: e.isRound ? "50%" : "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: e.backgroundColour,
      color: e.textColor
    })), n = o(() => ({
      [`is-${e.size}x${e.size}`]: !0
    }));
    return (f, h) => (a(), i("figure", {
      class: l(["image is-clickable", n.value])
    }, [
      e.imageUrl ? (a(), i("img", {
        key: 0,
        src: e.imageUrl,
        style: c(t.value),
        class: l({
          "is-rounded": e.isRound
        })
      }, null, 14, p)) : (a(), i("div", {
        key: 1,
        style: c(r.value)
      }, d(m(g)(e.name ?? "")), 5))
    ], 2));
  }
});
export {
  x as default
};
