/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var o=n(698).default;function r(){"use strict";t.exports=r=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",h=s.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function d(t,e,n,o){var r=e&&e.prototype instanceof L?e:L,i=Object.create(r.prototype),a=new C(o||[]);return c(i,"_invoke",{value:_(t,n,a)}),i}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=d;var p="suspendedStart",y="suspendedYield",m="executing",g="completed",b={};function L(){}function w(){}function E(){}var x={};f(x,u,(function(){return this}));var M=Object.getPrototypeOf,k=M&&M(M(P([])));k&&k!==i&&a.call(k,u)&&(x=k);var S=E.prototype=L.prototype=Object.create(x);function T(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(r,i,c,s){var u=v(t[r],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==o(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var r;c(this,"_invoke",{value:function(t,o){function i(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(i,i):i()}})}function _(t,n,o){var r=p;return function(i,a){if(r===m)throw new Error("Generator is already running");if(r===g){if("throw"===i)throw a;return{value:e,done:!0}}for(o.method=i,o.arg=a;;){var c=o.delegate;if(c){var s=j(c,o);if(s){if(s===b)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===p)throw r=g,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=m;var u=v(t,n,o);if("normal"===u.type){if(r=o.done?g:y,u.arg===b)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(r=g,o.method="throw",o.arg=u.arg)}}}function j(t,n){var o=n.method,r=t.iterator[o];if(r===e)return n.delegate=null,"throw"===o&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),b;var i=v(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function P(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(o(t)+" is not iterable")}return w.prototype=E,c(S,"constructor",{value:E,configurable:!0}),c(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,h,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},T(O.prototype),f(O.prototype,l,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,o,r,i){void 0===i&&(i=Promise);var a=new O(d(t,e,o,r),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(S),f(S,h,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},n.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(o,r){return c.type="throw",c.arg=t,n.next=o,r&&(n.method="next",n.arg=e),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;q(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,o){return this.delegate={iterator:P(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=e),b}},n}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var o=n(61)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,a=void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),"symbol"===e(a)?a:String(a)),r)}var i,a}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var i=function(){function e(n,o){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===o?{behavior:"smooth",block:"start"}:o,this.scrollToSection=this.scrollToSection.bind(this)}return r(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),a=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return r(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),c=function(){function e(n,o){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(o),this.activeClass="ativo"}return r(e,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),s=function(){function e(n,o,r){t(this,e),this.botaoAbrir=document.querySelector(n),this.botaoFechar=document.querySelector(o),this.containerModal=document.querySelector(r),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaMoral=this.cliqueForaModal.bind(this)}return r(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"cliqueForaModal",value:function(t){t.target===this.containerModal&&this.toggleModal()}},{key:"addModalEvents",value:function(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}},{key:"init",value:function(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvents(),this}}]),e}(),u=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return r(e,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-190,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.criarTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function l(t,e,n){var o=document.documentElement,r="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(t){o.removeEventListener(t,i)})),n())}t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){o.addEventListener(t,i)}))})),t.setAttribute(r,""))}function h(t,e,n,o,r,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(o,r)}var f=n(687),d=n.n(f);function v(){var t=document.querySelector(".numeros"),e=new MutationObserver((function(t){t[0].target.classList.contains("ativo")&&(e.disconnect(),document.querySelectorAll("[data-numero]").forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),o=0,r=setInterval((function(){o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(r))}),25*Math.random())})))}));e.observe(t,{attributes:!0})}new i('[data-menu="suave"] a[href^="#"]').init(),new a('[data-anime="accordion"] dt').init(),new c('[data-tab="menu"] li','[data-tab="content"] section').init(),new s('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new u("[data-tooltip]").init(),function(){function t(t){var e=this;t.preventDefault(),this.classList.add("active"),l(this,["touchstart","click"],(function(){e.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((function(e){["touchstart","click"].forEach((function(n){e.addEventListener(n,t)}))}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function o(){e.classList.add("active"),t.classList.add("active"),l(e,n,(function(){e.classList.remove("active"),t.classList.remove("active")}))}t&&n.forEach((function(e){return t.addEventListener(e,o)}))}(),function(){var t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number);console.log(n);var o=new Date,r=o.getDay(),i=o.getHours(),a=-1!==e.indexOf(r),c=i>=n[0]&&i<n[1];a&&c&&t.classList.add("aberto")}(),function(){function t(){var n;return n=d().mark((function t(n){var o,r,i;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n);case 3:return o=t.sent,t.next=6,o.json();case 6:r=t.sent,i=document.querySelector(".numeros-grid"),r.forEach((function(t){var n=e(t);i.appendChild(n)})),v(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})),t=function(){var t=this,e=arguments;return new Promise((function(o,r){var i=n.apply(t,e);function a(t){h(i,o,r,a,c,"next",t)}function c(t){h(i,o,r,a,c,"throw",t)}a(void 0)}))},t.apply(this,arguments)}function e(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-numero>").concat(t.total,"</span>"),e}!function(e){t.apply(this,arguments)}("./animaisapi.json")}(),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((function(t){console.log(Error(t))})),function(){var t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function n(){t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}n(),t.length&&window.addEventListener("scroll",n)}()})()})();