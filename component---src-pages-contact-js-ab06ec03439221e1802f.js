(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(151),i=t(156),c=t(153),u=t(160),l=t(154),s=t(149),f=t.n(s);function m(){var n=f()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  border-bottom: ",";\n"]);return m=function(){return n},n}var d=t(150).c.div(m(),function(n){var e=n.bordered,t=n.theme.colors;return e?"2px solid "+t.secondary:"none"}),p=[{icon:"svg/email.svg",text:"E-mail: scheffchukk@gmail.com"},{icon:"svg/phone-call.svg",text:"Phone: +48 793-208-003"},{icon:"svg/github.svg",text:"Github: scheffchukk",hyperlink:"https://github.com/scheffchukk"}];e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(d,null,p.map(function(n){return o.a.createElement(l.a,{href:n.hyperlink,target:"_blank",key:n.text},o.a.createElement(d,{bordered:!0},o.a.createElement(u.a,{src:Object(a.b)(n.icon),alt:""}),o.a.createElement(c.a,null,n.text)))}))))}},151:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(33),u=t.n(c);t.d(e,"a",function(){return u.a}),t.d(e,"b",function(){return c.withPrefix});t(152),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},152:function(n,e,t){var r;n.exports=(r=t(155))&&r.default||r},153:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  padding: 0;\n  margin: 0;\n\n  color: ",";\n  font-family: ",";\n\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return a=function(){return n},n}var i=t(150).c.p(a(),function(n){var e=n.reversed,t=n.theme.colors;return e?t.primary:t.secondary},function(n){return n.theme.font.family},function(n){var e=n.size;return e?e+"px":"22px"},function(n){return n.theme.sizes.desktop},function(n){var e=n.size;return e?e+"px":"28px"});e.a=i},154:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  color: inherit;\n  text-decoration: none;\n"]);return a=function(){return n},n}var i=t(150).c.a(a());e.a=i},155:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(55),u=t(2),l=function(n){var e=n.location,t=u.default.getResourcesForPathnameSync(e.pathname);return t?o.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},156:function(n,e,t){"use strict";var r=t(7),o=t.n(r),a=t(149),i=t.n(a),c=t(0),u=t.n(c),l=t(158),s=t(150);t(159);function f(){var n=i()(["\n  width: 25px;\n  height: 17px;\n  background: ",';\n\n  position: relative;\n\n  cursor: pointer;\n\n  ::after,\n  ::before {\n    content: "";\n\n    position: absolute;\n    top: 3px;\n    left: 0;\n\n    width: inherit;\n    height: 4px;\n    background: ',";\n  }\n\n  ::after {\n    top: 10px;\n  }\n\n  @media (min-width: ",") {\n    width: 36px;\n    height: 24px;\n\n    ::before,\n    ::after {\n      height: 6px;\n      top: 4px;\n    }\n\n    ::after {\n      top: 14px;\n    }\n  }\n"]);return f=function(){return n},n}var m=s.c.div(f(),function(n){var e=n.reverse,t=n.theme.colors;return e?t.primary:t.secondary},function(n){var e=n.reverse,t=n.theme.colors;return e?t.secondary:t.primary},function(n){return n.theme.sizes.desktop});function d(){var n=i()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 10px;\n  background: ",";\n  border-bottom: 2px solid ",";\n\n  position: sticky;\n  top: 0;\n\n  z-index: 1;\n\n  @media (min-width: ",") {\n    padding: 15px;\n    border-bottom: 3px solid ",";\n  }\n"]);return d=function(){return n},n}var p=s.c.header(d(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.sizes.desktop},function(n){return n.theme.colors.secondary});function h(){var n=i()(["\n  margin: 0;\n  color: ",";\n  font-family: ",";\n  text-align: center;\n  letter-spacing: 1.5px;\n\n  font-size: 32px;\n  @media (min-width: ",") {\n    font-size: 38px;\n  }\n"]);return h=function(){return n},n}var g=s.c.h1(h(),function(n){return n.theme.colors.secondary},function(n){return n.theme.font.family},function(n){return n.theme.sizes.desktop}),v=function(n){var e=n.onClick;return u.a.createElement(u.a.Fragment,null,u.a.createElement(p,null,u.a.createElement(g,null,"scheffchukk"),u.a.createElement("div",{onClick:e},u.a.createElement(m,null))))};function x(){var n=i()(["\n  background: ",";\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background: ",";\n  color: ",";\n\n  display: ",";\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  z-index: 1;\n\n  padding: 30px;\n"]);return x=function(){return n},n}var y=s.c.nav(x(),function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.navigationToggled?"flex":"none"});function b(){var n=i()(["\n  width: 100%;\n  height: 100%;\n\n  list-style: none;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  padding: 0;\n"]);return b=function(){return n},n}var k=s.c.ul(b());function w(){var n=i()(["\n  color: ",";\n  text-align: center;\n\n  @media (min-width: ",") {\n    margin-bottom: 20px;\n  }\n"]);return w=function(){return n},n}var E=s.c.li(w(),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop}),z=t(151);function j(){var n=i()(["\n  color: ",";\n  font-family: ",";\n  text-decoration: none;\n\n  font-size: 26px;\n\n  @media (min-width: ",") {\n    font-size: 32px;\n  }\n"]);return j=function(){return n},n}var C=Object(s.c)(z.a)(j(),function(n){return n.theme.colors.primary},function(n){return n.theme.font.family},function(n){return n.theme.sizes.desktop}),T=t(153),F=t(154),O=[{text:"Start",to:"/"},{text:"About",to:"/about/"},{text:"Offer",to:"/offer/"},{text:"Advantages",to:"/advantages/"},{text:"Projects",to:"/projects/"},{text:"Contact",to:"/contact/"}],N=function(n){var e=n.navigationToggled,t=n.onClick;return u.a.createElement(y,{navigationToggled:e},u.a.createElement("div",{className:"animated bounceInDown",onClick:t},u.a.createElement(m,{reverse:!0})),u.a.createElement(k,{className:"animated bounceInDown"},O.map(function(n){return u.a.createElement(E,{key:n.text},u.a.createElement(C,{to:n.to},n.text))})),u.a.createElement(u.a.Fragment,null,u.a.createElement(T.a,{size:"12",reversed:!0,style:{position:"absolute",top:"calc(100vh - 22px)",left:"10px"}},"Icons made by"," ",u.a.createElement(F.a,{href:"https://www.flaticon.com/authors/",title:""},"Users of www.flaticon.com")," ","from"," ",u.a.createElement(F.a,{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," ","is licensed by"," ",u.a.createElement(F.a,{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))))},R=(t(34),{font:{family:"Titillium Web"},sizes:{desktop:"1270px"}}),I=Object.assign({},R,{colors:{primary:"#ff0031",secondary:"#ffffff"}}),P=Object.assign({},R,{colors:{primary:"#ffffff",secondary:"#ff0031"}});function S(){var n=i()(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  padding: 10px;\n\n  min-height: calc(100vh - 70px);\n\n  background: ",";\n\n  @media (min-width: ",") {\n    min-height: calc(100vh - 91px);\n  }\n"]);return S=function(){return n},n}function q(){var n=i()(["\n    @import url('https://fonts.googleapis.com/css?family=Titillium+Web');\n\n\t\t*, *::before, *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t\t\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t}\n  "]);return q=function(){return n},n}t.d(e,"a",function(){return Y});var A=Object(s.b)(q()),D=s.c.div(S(),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop}),Y=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).state={navigationToggled:!1},e}o()(e,n);var t=e.prototype;return t.toggleNavigation=function(){this.setState(function(n){return{navigationToggled:!n.navigationToggled}})},t.render=function(){var n=this,e=this.props,t=e.isRed,r=e.children;return u.a.createElement(s.a,{theme:t?I:P},u.a.createElement(u.a.Fragment,null,u.a.createElement(l.Helmet,null,u.a.createElement("meta",{charset:"utf-8"}),u.a.createElement("meta",{name:"description",content:"Dmitro Szewczuk - Young Fullstack web developer"}),u.a.createElement("title",null,"scheffchuk"),u.a.createElement("html",{lang:"en"})),u.a.createElement(A,null),u.a.createElement(v,{onClick:function(){return n.toggleNavigation()}}),u.a.createElement(N,{navigationToggled:this.state.navigationToggled,onClick:function(){return n.toggleNavigation()}}),u.a.createElement(D,{className:"animated fadeInLeft"},r)))},e}(c.Component)},160:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  width: ",";\n  height: auto;\n\n  margin: 10px;\n"]);return a=function(){return n},n}var i=t(150).c.img(a(),function(n){var e=n.size;return e?e+"px":"64px"});e.a=i}}]);
//# sourceMappingURL=component---src-pages-contact-js-ab06ec03439221e1802f.js.map