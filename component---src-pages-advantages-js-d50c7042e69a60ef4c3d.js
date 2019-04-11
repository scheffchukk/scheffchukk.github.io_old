(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(151),a=t(156),c=t(160),u=t(159),s=t(161),f=function(n){var e=n.data,t=e.red,r=e.src,a=e.text,f=e.subtext;return o.a.createElement(s.a,{extended:!0,red:t,radius:"15"},o.a.createElement(u.a,{size:"48",src:Object(i.b)(r)}),o.a.createElement("div",null,o.a.createElement(c.a,{red:t},a),o.a.createElement(c.a,{size:"14",red:t},f)))},l=t(157),d=t(162),m=[{red:!0,iconOnLeft:!0,src:"svg/smartphone.svg",text:"Responsive design",subtext:"My websites are designed to be good-looking even on tablets or smartphones."},{red:!1,iconOnLeft:!1,src:"svg/gearwheels-couple.svg",text:"Newest technologies",subtext:"I won't write you website, that works on 10 years technology. Except if you want to."},{red:!0,iconOnLeft:!0,src:"svg/programming-code-signs.svg",text:"Effective, clean code",subtext:"My code is clear and maintainable, soeven after long break, I we can cooperate"},{red:!1,iconOnLeft:!1,src:"svg/chatting-oval-speech-bubbles.svg",text:"Clear communication",subtext:"I haven't problems with clear communication, I do what you want in my way of doing."}];e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null,o.a.createElement(d.a,{className:"animated fadeInLeft"},m.map(function(n){return o.a.createElement(f,{data:n,key:n.text})})),o.a.createElement(i.a,{to:"/projects/",className:"animated fadeInUp"},o.a.createElement(l.a,null,"My projects"))))}},151:function(n,e,t){"use strict";var r=t(0),o=t.n(r),i=t(4),a=t.n(i),c=t(33),u=t.n(c);t.d(e,"a",function(){return u.a}),t.d(e,"b",function(){return c.withPrefix});t(152),o.a.createContext({});a.a.object,a.a.string.isRequired,a.a.func,a.a.func},152:function(n,e,t){var r;n.exports=(r=t(155))&&r.default||r},153:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function i(){var n=o()(["\n  padding: 0;\n  margin: 0;\n\n  color: ",";\n  font-family: ",";\n\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return i=function(){return n},n}var a=t(150).c.p(i(),function(n){var e=n.reversed,t=n.theme.colors;return e?t.primary:t.secondary},function(n){return n.theme.font.family},function(n){var e=n.size;return e?e+"px":"22px"},function(n){return n.theme.sizes.desktop},function(n){var e=n.size;return e?e+"px":"28px"});e.a=a},154:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function i(){var n=o()(["\n  color: inherit;\n  text-decoration: none;\n"]);return i=function(){return n},n}var a=t(150).c.a(i());e.a=a},155:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),o=t.n(r),i=t(4),a=t.n(i),c=t(55),u=t(2),s=function(n){var e=n.location,t=u.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json))};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},e.default=s},156:function(n,e,t){"use strict";var r=t(7),o=t.n(r),i=t(149),a=t.n(i),c=t(0),u=t.n(c),s=t(150);t(158);function f(){var n=a()(["\n  width: 25px;\n  height: 17px;\n  background: ",';\n\n  position: relative;\n\n  cursor: pointer;\n\n  ::after,\n  ::before {\n    content: "";\n\n    position: absolute;\n    top: 3px;\n    left: 0;\n\n    width: inherit;\n    height: 4px;\n    background: ',";\n  }\n\n  ::after {\n    top: 10px;\n  }\n\n  @media (min-width: ",") {\n    width: 36px;\n    height: 24px;\n\n    ::before,\n    ::after {\n      height: 6px;\n      top: 4px;\n    }\n\n    ::after {\n      top: 14px;\n    }\n  }\n"]);return f=function(){return n},n}var l=s.c.div(f(),function(n){var e=n.reverse,t=n.theme.colors;return e?t.primary:t.secondary},function(n){var e=n.reverse,t=n.theme.colors;return e?t.secondary:t.primary},function(n){return n.theme.sizes.desktop});function d(){var n=a()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 10px;\n  background: ",";\n  border-bottom: 2px solid ",";\n\n  position: sticky;\n  top: 0;\n\n  z-index: 1;\n\n  @media (min-width: ",") {\n    padding: 15px;\n    border-bottom: 3px solid ",";\n  }\n"]);return d=function(){return n},n}var m=s.c.header(d(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.sizes.desktop},function(n){return n.theme.colors.secondary});function p(){var n=a()(["\n  margin: 0;\n  color: ",";\n  font-family: ",";\n  text-align: center;\n  letter-spacing: 1.5px;\n\n  font-size: 32px;\n  @media (min-width: ",") {\n    font-size: 38px;\n  }\n"]);return p=function(){return n},n}var h=s.c.h1(p(),function(n){return n.theme.colors.secondary},function(n){return n.theme.font.family},function(n){return n.theme.sizes.desktop}),g=function(n){var e=n.onClick;return u.a.createElement(u.a.Fragment,null,u.a.createElement(m,null,u.a.createElement(h,null,"scheffchukk"),u.a.createElement("div",{onClick:e},u.a.createElement(l,null))))};function x(){var n=a()(["\n  background: ",";\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background: ",";\n  color: ",";\n\n  display: ",";\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  z-index: 1;\n\n  padding: 30px;\n"]);return x=function(){return n},n}var v=s.c.nav(x(),function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.navigationToggled?"flex":"none"});function y(){var n=a()(["\n  width: 100%;\n  height: 100%;\n\n  list-style: none;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: space-between;\n\n  padding: 0;\n"]);return y=function(){return n},n}var b=s.c.ul(y());function w(){var n=a()(["\n  color: ",";\n  text-align: center;\n\n  margin-bottom: 10px;\n  @media (min-width: ",") {\n    margin-bottom: 20px;\n  }\n"]);return w=function(){return n},n}var k=s.c.li(w(),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop}),E=t(151);function z(){var n=a()(["\n  color: ",";\n  font-family: ",";\n  text-decoration: none;\n\n  font-size: 26px;\n\n  @media (min-width: ",") {\n    font-size: 32px;\n  }\n"]);return z=function(){return n},n}var j=Object(s.c)(E.a)(z(),function(n){return n.theme.colors.primary},function(n){return n.theme.font.family},function(n){return n.theme.sizes.desktop}),C=t(153),O=t(154),T=[{text:"Main",to:"/"},{text:"About",to:"/about/"},{text:"Offer",to:"/offer/"},{text:"Advantages",to:"/advantages/"},{text:"Projects",to:"/projects/"},{text:"Contact",to:"/contact/"}],I=function(n){var e=n.navigationToggled,t=n.onClick;return u.a.createElement(v,{navigationToggled:e},u.a.createElement("div",{className:"animated bounceInDown",onClick:t},u.a.createElement(l,{reverse:!0})),u.a.createElement(b,{className:"animated bounceInDown delay-1s"},T.map(function(n){return u.a.createElement(k,{key:n.text},u.a.createElement(j,{to:n.to},n.text))})),u.a.createElement(u.a.Fragment,null,u.a.createElement(C.a,{size:"12",reversed:!0,style:{position:"absolute",top:"calc(100vh - 22px)",left:"10px"}},"Icons made by"," ",u.a.createElement(O.a,{href:"https://www.flaticon.com/authors/",title:""},"Users of www.flaticon.com")," ","from"," ",u.a.createElement(O.a,{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," ","is licensed by"," ",u.a.createElement(O.a,{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))))},N=(t(34),{font:{family:"Titillium Web"},sizes:{desktop:"1270px"}}),R=Object.assign({},N,{colors:{primary:"#ff0031",secondary:"#ffffff"}}),F=Object.assign({},N,{colors:{primary:"#ffffff",secondary:"#ff0031"}});function L(){var n=a()(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  padding: 10px;\n\n  min-height: calc(100vh - 70px);\n\n  background: ",";\n\n  @media (min-width: ",") {\n    min-height: calc(100vh - 91px);\n  }\n"]);return L=function(){return n},n}function M(){var n=a()(["\n    @import url('https://fonts.googleapis.com/css?family=Titillium+Web');\n\n\t\t*, *::before, *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t\t\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t}\n  "]);return M=function(){return n},n}t.d(e,"a",function(){return P});var q=Object(s.b)(M()),A=s.c.div(L(),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop}),P=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).state={navigationToggled:!1},e}o()(e,n);var t=e.prototype;return t.toggleNavigation=function(){this.setState(function(n){return{navigationToggled:!n.navigationToggled}})},t.render=function(){var n=this,e=this.props,t=e.isRed,r=e.children;return u.a.createElement(s.a,{theme:t?R:F},u.a.createElement(u.a.Fragment,null,u.a.createElement(q,null),u.a.createElement(g,{onClick:function(){return n.toggleNavigation()}}),u.a.createElement(I,{navigationToggled:this.state.navigationToggled,onClick:function(){return n.toggleNavigation()}}),u.a.createElement(A,{className:t?"animated fadeInLeft":""},r)))},e}(c.Component)},157:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function i(){var n=o()(["\n  width: 196px;\n  height: 47px;\n\n  border-radius: 50px;\n\n  font-family: ",";\n  font-size: 19px;\n  color: ",";\n\n  background: ",";\n  border: 2px solid ",";\n  outline: none;\n\n  cursor: pointer;\n  transition: transform 0.5s linear;\n  :hover {\n    transform: translateY(-5px);\n\n    color: ",";\n\n    background: ",";\n    border: 2px solid ",";\n  }\n\n  @media (min-width: ",") {\n    font-size: 26px;\n    width: 260px;\n    height: 70px;\n  }\n"]);return i=function(){return n},n}var a=t(150).c.button(i(),function(n){return n.theme.font.family},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop});e.a=a},159:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function i(){var n=o()(["\n  width: ",";\n  height: auto;\n\n  margin: 10px;\n"]);return i=function(){return n},n}var a=t(150).c.img(i(),function(n){var e=n.size;return e?e+"px":"64px"});e.a=a},160:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function i(){var n=o()(["\n  padding: 0;\n  margin: 0;\n\n  color: ",";\n  font-family: ",";\n\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return i=function(){return n},n}var a=t(150).c.p(i(),function(n){var e=n.red,t=n.theme.colors;return e?t.secondary:t.primary},function(n){return n.theme.font.family},function(n){var e=n.size;return e?e+"px":"22px"},function(n){return n.theme.sizes.desktop},function(n){var e=n.size;return e?1.5*e+"px":"32px"});e.a=a},161:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function i(){var n=o()(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 10px;\n  padding: 5px;\n\n  border: 2px solid\n    ",";\n\n  background: ",";\n\n  border-radius: ",";\n\n  transition: transform 0.5s linear;\n  :hover {\n    transform: ",";\n  }\n\n  width: ",";\n  height: ",";\n\n  @media (min-width: ",") {\n    border: 4px solid\n      ",";\n\n    padding: 15px;\n    margin: 20px;\n\n    width: ",";\n    height: ",";\n\n    border-radius: ",";\n  }\n"]);return i=function(){return n},n}var a=t(150).c.div(i(),function(n){var e=n.red,t=n.theme.colors;return e?t.secondary:t.primary},function(n){var e=n.red,t=n.theme.colors;return e?t.primary:t.secondary},function(n){return n.radius+"px"},function(n){return n.red?"translateX(-5px)":"translateX(5px)"},function(n){n.extended;return"300px"},function(n){return n.extended?"125px":"100px"},function(n){return n.theme.sizes.desktop},function(n){var e=n.red,t=n.theme.colors;return e?t.secondary:t.primary},function(n){return n.extended?"425px":"450px"},function(n){return n.extended?"175px":"125px"},function(n){return 2*n.radius+"px"});e.a=a},162:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function i(){var n=o()(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1000px;\n  align-items: center;\n  justify-content: center;\n"]);return i=function(){return n},n}var a=t(150).c.div(i());e.a=a}}]);
//# sourceMappingURL=component---src-pages-advantages-js-d50c7042e69a60ef4c3d.js.map