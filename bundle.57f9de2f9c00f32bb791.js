webpackJsonp([0],[,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=(n.n(o),n(12));document.getElementById("home-link").addEventListener("click",function(){Object(r.a)("#home",{offset:-120})}),document.getElementById("contact-link").addEventListener("click",function(){Object(r.a)("#contact",{offset:-100})}),document.getElementById("about-link").addEventListener("click",function(){Object(r.a)("#about",{offset:-100})})},function(t,e,n){var o=n(6);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0};r.transform=void 0;n(10)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(7);e=t.exports=n(8)(!1),e.push([t.i,'body,html{box-sizing:border-box;font-family:Helvetica,sans-serif;overflow-x:hidden;background-color:#fafafa}*,:after,:before{margin:0;padding:0;box-sizing:inherit}.text-center{text-align:center}.menu{font-family:Raleway,sans-serif;list-style:none;padding:20px 0;border-bottom:1px solid rgba(0,0,0,.0975);width:100%;display:flex;justify-content:center;background:#fff}.nav-container{position:fixed;top:0;left:0;z-index:1;width:100%}.menu-item{font-size:18px;display:inline-block;margin:0 20px;cursor:pointer;padding:8px 6px 6px;position:relative;letter-spacing:.06em}.menu-item:after{content:"";display:block;margin:auto;width:0;height:2px;background:transparent;transition:width .2s ease,background-color .5s ease}.menu-item:hover:after{width:100%;background:#000}main{padding:0 2.5vw;padding-top:70px;margin-bottom:30px}#home .container{background-image:url('+o(n(9))+");background-size:cover;margin-bottom:30px;background-position:top;height:100vh;position:relative;margin-top:3vw}.heading{display:flex;justify-content:center;margin-bottom:20px}.heading span{font-family:Raleway,sans-serif;padding:20px;font-size:30px;border:2px solid #000}.text-box{display:flex;justify-content:center}.info{margin-top:20px}.text{font-size:18px;line-height:24px}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.welcome-text{font-family:Raleway,sans-serif;color:#fff;position:absolute;top:40%;left:50%;transform:translate(-50%);font-size:5em;border:1px solid #fff;padding:20px}#about,#contact{background:#fff;border:1px solid rgba(0,0,0,.0975);padding:50px 100px;margin-bottom:30px}",""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){t.exports=n.p+"assets/images/garib-nawaz.jpg"},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=b[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));b[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],f=i[3],u={css:s,media:c,sourceMap:f};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=y[y.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=v(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",f(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",f(e,t.attrs),i(t,e),e}function f(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var f=g++;n=h||(h=s(e)),o=l.bind(null,n,f,!1),r=l.bind(null,n,f,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function l(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=x(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var b={},m=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){if(void 0===e[n]){var o=t.call(this,n);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[n]=o}return e[n]}}(function(t){return document.querySelector(t)}),h=null,g=0,y=[],x=n(11);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=b[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete b[c.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){"use strict";var o=function(t,e,n,o){return(t/=o/2)<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(){return window.scrollY||window.pageYOffset}function e(t){return t.getBoundingClientRect().top+c}function n(t){m||(m=t),v=t-m,h=l(v,c,p,b),window.scrollTo(0,h),v<b?window.requestAnimationFrame(n):i()}function i(){window.scrollTo(0,c+p),s&&d&&(s.setAttribute("tabindex","-1"),s.focus()),"function"==typeof g&&g(),m=!1}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(b=a.duration||1e3,u=a.offset||0,g=a.callback,l=a.easing||o,d=a.a11y||!1,c=t(),void 0===i?"undefined":r(i)){case"number":s=void 0,d=!1,f=c+i;break;case"object":s=i,f=e(s);break;case"string":s=document.querySelector(i),f=e(s)}switch(p=f-c+u,r(a.duration)){case"number":b=a.duration;break;case"function":b=a.duration(p)}window.requestAnimationFrame(n)}var s=void 0,c=void 0,f=void 0,u=void 0,l=void 0,d=void 0,p=void 0,b=void 0,m=void 0,v=void 0,h=void 0,g=void 0;return a}();e.a=i}],[4]);
//# sourceMappingURL=bundle.57f9de2f9c00f32bb791.js.map