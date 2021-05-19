var debounce = function (e, o) {
  var c, a, s, i;
  return function () {
    (s = this), (a = [].slice.call(arguments, 0)), (i = new Date());
    var n = function () {
      var t = new Date() - i;
      t < o ? (c = setTimeout(n, o - t)) : ((c = null), e.apply(s, a));
    };
    c = c || setTimeout(n, o);
  };
},
contactButton = document.querySelector(".js-Contact-button"),
showContact = debounce(function (t) {
  (contactButton.className += " is-visible"),
    window.removeEventListener("scroll", showContact);
}, 500);
window.addEventListener("scroll", showContact, !1);