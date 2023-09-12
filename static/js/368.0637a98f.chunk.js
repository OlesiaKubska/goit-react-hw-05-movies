/*! For license information please see 368.0637a98f.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[368],{368:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Z}});var n,o,i,a,c,u,s,h=r(861),f=r(439),l=r(791),p=r(689),v=r(690),y=r(745),d=r(7),g=r.n(d),m=r(168),w=r(867),x=w.ZP.div(n||(n=(0,m.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 20px 0;\n    padding: 30px;\n    color: #000080;\n    position: relative;\n\n    &::after {\n        content: '';\n        display: block;\n        width: 100%;\n        height: 1px;\n        background-color: #000080;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n    }\n"]))),b=w.ZP.img(o||(o=(0,m.Z)(["\n    max-width: 300px;\n    height: auto;\n    margin-right: 30px;\n"]))),L=w.ZP.div(i||(i=(0,m.Z)(["\n    flex: 1;\n"]))),E=w.ZP.h2(a||(a=(0,m.Z)(["\n    font-size: 24px;\n    margin-bottom: 40px;\n"]))),_=w.ZP.p(c||(c=(0,m.Z)(["\n    font-size: 18px;\n    margin-bottom: 40px;\n"]))),j=w.ZP.p(u||(u=(0,m.Z)(["\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 40px;\n"]))),O=w.ZP.p(s||(s=(0,m.Z)(["\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 40px;\n"]))),k=r(184);x.propTypes={movieDetails:g().shape({title:g().string.isRequired,overview:g().string.isRequired,poster_path:g().string.isRequired,vote_average:g().number.isRequired,genres:g().arrayOf(g().object)})};var P=function(t){var e=t.movieDetails,r=e||{},n=r.title,o=r.overview,i=r.poster_path,a=r.genres,c=10*r.vote_average;return(0,k.jsx)(k.Fragment,{children:e&&(0,k.jsxs)(x,{children:[(0,k.jsx)(b,{src:"https://image.tmdb.org/t/p/w500/".concat(i),alt:n}),(0,k.jsxs)(L,{children:[(0,k.jsx)(E,{children:n}),(0,k.jsxs)(_,{children:["User Score: ",c,"%"]}),(0,k.jsx)(j,{children:"Overview"}),(0,k.jsx)("p",{children:o}),(0,k.jsx)(O,{children:"Genres"}),(0,k.jsx)("p",{children:a.map((function(t){return t.name})).join(", ")})]})]})})};function T(){T=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new Z(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var l="suspendedStart",p="executing",v="completed",y={};function d(){}function g(){}function m(){}var w={};s(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(S([])));b&&b!==r&&n.call(b,a)&&(w=b);var L=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,r,n){var o=l;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===l)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(_.prototype),s(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,Z.prototype={constructor:Z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}var Z=function(){var t=(0,p.UO)().movieId,e=(0,l.useState)(null),r=(0,f.Z)(e,2),n=r[0],o=r[1],i=(0,l.useState)(!0),a=(0,f.Z)(i,2),c=a[0],u=a[1],s=(0,l.useState)(null),d=(0,f.Z)(s,2),g=d[0],m=d[1];return(0,l.useEffect)((function(){var e;!function(){(e=e||(0,h.Z)(T().mark((function e(){var r;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.TP)(t);case 3:r=e.sent,o(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(e.t0.message);case 10:return e.prev=10,u(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))).apply(this,arguments)}()}),[t]),c?(0,k.jsx)(y.Z,{}):g?(0,k.jsxs)("p",{children:["Error: ",g]}):(0,k.jsx)(P,{movieDetails:n})}},690:function(t,e,r){"use strict";r.d(e,{Df:function(){return u},TP:function(){return s}});var n,o,i=r(861),a=r(243);function c(){c=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new Z(n||[]);return o(a,"_invoke",{value:O(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",v="executing",y="completed",d={};function g(){}function m(){}function w(){}var x={};h(x,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(S([])));L&&L!==r&&n.call(L,a)&&(x=L);var E=w.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=l(e,r,n);if("normal"===s.type){if(o=n.done?y:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=l(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=h(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},_(j.prototype),h(j.prototype,u,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(E),h(E,s,"Generator"),h(E,a,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,Z.prototype={constructor:Z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"d720ab11f572566eb478fc23a44c048f",include_adult:!1};var u=function(){return(n=n||(0,i.Z)(c().mark((function t(){var e,r,n,o=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:1,t.prev=1,t.next=4,a.Z.get("/trending/movie/day",{params:{page:e}});case 4:return r=t.sent,n=r.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)},s=function(t){return(o=o||(0,i.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("/movie/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}},888:function(t,e,r){"use strict";var n=r(47);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},7:function(t,e,r){t.exports=r(888)()},47:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=368.0637a98f.chunk.js.map