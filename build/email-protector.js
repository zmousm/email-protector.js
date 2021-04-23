!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"EmailProtector",(function(){return l}));var r={isString:function(e){return"string"==typeof e||e instanceof String},isValidEmail:function(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(e))},regExpEscape:function(e){return String(e).replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},reverseString:function(e){return String(e).split("").reverse().join("")},getRandomString:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"abcdefghijklmnopqrstuvwxyz";return Array.from({length:e},(function(){return t[Math.floor(Math.random()*t.length)]})).join()},getRandomEmail:function(){return"".concat(r.getRandomString(6),"@").concat(r.getRandomString(10),".").concat(r.getRandomString(3))},getUniqID:function(){return"_".concat(Date.now().toString(36)+Math.random().toString(36).substr(2))}},o=r;function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={},l={defaultConfig:{code:13,cssReverse:!0,hiddenSpan:!0,htmlComments:!0},config:{},params:{},rot:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:13;return String(e).replace(/[a-z]/gi,(function(e){var n=e<="Z"?90:122,r=e.charCodeAt(0)+t%26;return String.fromCharCode(r<=n?r:r-26)}))},append:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=f.prepareParams(t),a=f.prepareConfig(n);window.addEventListener("load",(function(){var t=document.getElementById(e);if(!t)throw new TypeError("EmailProtector: element with ".concat(e," ID not found"));var n=document.createElement("A");n.id=o.getUniqID(),t.appendChild(n),f.setupLink(n.id,r,a)}))},write:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=f.prepareParams(e),r=f.prepareConfig(t),a=o.getUniqID();document.write('<a id="'.concat(a,'"></a>')),f.setupLink(a,n,r)},setGlobalParams:function(e){l.params={},l.params=f.prepareParams(e)},setGlobalConfig:function(e){l.config={},l.config=f.prepareConfig(e)},resetParams:function(){l.params={}},resetConfig:function(){return Object.assign(l.config,l.defaultConfig)},decode:function(e,t){var n=e||window.event,r=n.target||n.srcElement;return r.dataset.emailDecoded||(r.href=r.href.replace(/\b(\w{6}:)?[\w.]+(@|%40)\w+(\.\w+)+\b/gi,(function(e){return l.rot(e,t)})),r.dataset.emailDecoded=!0),!0}};f.prepareParams=function(e){var t=e;if(o.isString(t)&&(t={email:t}),!(t instanceof Object))throw new TypeError("EmailProtector: params should be a string or an object");if(t=u(u({},l.params),t),!o.isValidEmail(t.email))throw new TypeError("EmailProtector: ".concat(t.email," is not a valid email address"));return t},f.prepareConfig=function(e){return u(u(u({},l.defaultConfig),l.config),e instanceof Object?e:{})},f.setupLink=function(e,t,n){var r=n.code%26,a=document.createDocumentFragment();if(n.linkLabel)a.appendChild(document.createTextNode(n.linkLabel));else{var i=l.rot(t.email,r),c=o.getRandomEmail(),u=document.createElement("STYLE");n.cssReverse&&(i=o.reverseString(i),u.appendChild(document.createTextNode("\n        #".concat(e," {\n          unicode-bidi: bidi-override;\n          direction: rtl;\n        }\n      "))));var d=document.createTextNode(i);if(a.appendChild(d),n.hiddenSpan){var p=document.createElement("span");p.appendChild(document.createTextNode(c)),a.insertBefore(p,d.splitText(i.indexOf("@"))),u.appendChild(document.createTextNode("\n        #".concat(e," span {\n          display: none;\n        }\n      ")))}n.htmlComments&&(Array.from(a.childNodes).forEach((function(e){f.extendTextNodeWithComments(e,["@","."])})),a.insertBefore(document.createComment(" mailto:".concat(c," ")),a.firstChild)),u.firstChild&&document.head.appendChild(u)}var s=l.rot("mailto:",26-r),m=f.prepareEmailLinkParams(t),g=document.getElementById(e);g.href="".concat(s).concat(t.email).concat(m),g.appendChild(a),g.addEventListener("mousedown",(function(e){return l.decode(e,r)}))},f.extendTextNodeWithComments=function(e,t){if(e.nodeType!==Node.TEXT_NODE)return!1;var n=[].concat(t),r=new RegExp(n.map((function(e){return o.regExpEscape(e)})).join("|"),"g"),a=e.textContent.match(r)||[],i=e;return a.forEach((function(e){var t=document.createComment(" pre ".concat(e," ")),n=document.createComment(" post ".concat(e," ")),r=i.textContent.indexOf(e);if(r>=0){var o=i.splitText(r);i.parentNode.insertBefore(t,o);var a=o.splitText(e.length);i.parentNode.insertBefore(n,a),i=a}})),!0},f.prepareEmailLinkParams=function(e){var t=Object.entries(e).reduce((function(e,t){var n=a(t,2),r=n[0],o=n[1];return r.match(/^cc|bcc|subject|body$/gi)?"".concat(e,"&").concat(r,"=").concat(encodeURIComponent(o)):e}),"");return t.length>0?"?".concat(t.substr(1)):""}}]));
//# sourceMappingURL=email-protector.js.map