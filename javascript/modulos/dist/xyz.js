(() => {
  function n(o) {
    console.log("y:" + o);
    return "fin y";
  }
  function r(o) {
    n("x");
    console.log("x:" + o);
    return "fin x";
  }
  function l(o) {
    return "fin xx";
  }
  function i(o) {
    console.log("z:" + o);
    return "fin z";
  }
  console.log(r("abc"));
  console.log(l("def"));
  console.log(n("ghi"));
  console.log(i("jkl"));
})();
//# sourceMappingURL=xyz.js.map
