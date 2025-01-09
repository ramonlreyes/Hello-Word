"use strict";

var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var helloContinents = Array.from(continents, function (c) {
  return "Hello ".concat(c);
});
var message = helloContinents.join('');
var element = /*#__PURE__*/React.createElement("div", {
  title: "Outerdiv"
}, /*#__PURE__*/React.createElement("h1", null, message));
var element2 = /*#__PURE__*/React.createElement("div", {
  title: "OuterOuterdiv"
}, /*#__PURE__*/React.createElement("h1", null, "Hi"));
ReactDOM.render(element, document.getElementById('content'));