const h = () => {
  for (var r = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = a.length, e = 0; e < t; e++)
    r += a.charAt(Math.floor(Math.random() * t));
  return r;
};
export {
  h as _
};
