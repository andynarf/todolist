!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],d=t.base?i[0]+t.base:i[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:m(p,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,g=0;function m(e,t){var n,o,r;if(t.singleton){var i=g++;n=h||(h=l(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=l(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=d(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){var o=n(3),r=n(4),i=n(5);t=o(!1);var a=r(i);t.push([e.i,"body{padding:0;margin:0;background-color:rgba(0,0,0,0.1);font-family:'Titillium Web', sans-serif}.container{padding:10px;width:380px;margin:0 auto}.header{width:380px;height:200px;background-image:url("+a+");background-size:100% 200%;background-repeat:no-repeat;border-radius:15px 15px 0 0;position:relative}.clear{width:30px;height:30px;position:absolute;right:20px;top:20px}.clear i{font-size:30px;color:#FFF}.clear i:hover{cursor:pointer;text-shadow:1px 3px 5px #000;transform:rotate(45deg)}#date{position:absolute;bottom:10px;left:10px;color:#FFF;font-size:25px;font-family:'Titillium Web', sans-serif}.content{width:380px;height:350px;max-height:350px;background-color:#FFF;overflow:auto}.content::-webkit-scrollbar{display:none}.content ul{padding:0;margin:0}.item{width:380px;height:45px;min-height:45px;position:relative;border-bottom:1px solid rgba(0,0,0,0.1);list-style:none;padding:0;margin:0}.item i.co{position:absolute;font-size:25px;padding-left:5px;left:15px;top:10px}.item i.co:hover{cursor:pointer}.fa-check-circle{color:#6eb200}.item p.text{position:absolute;padding:0;margin:0;font-size:20px;left:50px;top:5px;background-color:#FFF;max-width:285px}.lineThrough{text-decoration:line-through;color:#ccc}.item i.de{position:absolute;font-size:25px;right:15px;top:10px}.item i.de:hover{color:#af0000;cursor:pointer}#form{display:flex;flex-wrap:wrap}.formspace{width:100%;height:20px}#description{height:50px}.dropbtn{background-color:#4CAF50;color:white;font-size:16px;border:none}.dropdown{position:relative;float:right;padding-right:45px;padding-top:10px}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;right:0;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1}.dropdown-content a{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content a:hover{background-color:#ddd}.dropdown:hover .dropdown-content{display:block}.dropdown:hover .dropbtn{background-color:#3e8e41}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"badf9de8f248abb427d137fc0d4c81ed.jpg"},function(e,t,n){"use strict";n.r(t);n(0);document.getElementById("skeletonid").innerHTML='\n<div class="container">\n<div class="header">\n  <div id="date"></div>\n</div>\n<div class="content">\n  <ul id="list"></ul>\n</div>\n<div class="add-to-do">\n  <container id="form">\n    <input\n      placeholder="ToDo"\n      id="input"\n      class="formspace"\n      type="text"\n      requiered\n    />\n    <label for="priority">Select Priority:</label>\n    <select id="priority" name="priority" class="formspace" required>\n      <option value="low">Low</option>\n      <option value="medium">Medium</option>\n      <option value="high">High</option>\n    </select>\n    <textarea\n      placeholder="Add a description here"\n      id="description"\n      class="formspace"\n      required\n    ></textarea>\n    <button name="submit" id="submit" class="formspace">Submit</button>\n  </container>\n</div>\n</div>\n';var o=document.getElementById("date"),r=document.getElementById("list"),i=document.getElementById("input"),a=document.getElementById("priority"),c=document.getElementById("description"),d=document.getElementById("submit"),l=JSON.parse(window.localStorage.getItem("TODOS"));null==l&&(l=[]);var s=window.localStorage.getItem("ids");function u(e){window.localStorage.setItem("TODOS",JSON.stringify(e)),window.localStorage.setItem("ids",s)}null==s&&(s=0);var p=new Date;o.innerHTML=p.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"});var f=function(e,t,n,o,i,a){if(!o){var c=n?"lineThrough":"",d='\n    <li class="item">\n    <i class="fa '.concat(n?"fa-check-circle":"fa-circle-thin",' co" job="complete" id="').concat(t,'"></i>\n    <p class="text ').concat(c,' co"> ').concat(e,'  </p>\n    <div class="dropdown">\n    <button class="dropbtn">Details</button>\n    <div class="dropdown-content">\n      <a href="#"><b>Priority:</b> ').concat(i.value,'</a>\n      <a href="#"><b>Description:</b> ').concat(a,'</a>\n    </div>\n  </div> \n    <i class="fa fa-trash-o de" job="delete" id="').concat(t,'" ></i>\n    </li>');r.insertAdjacentHTML("beforeend",d)}};d.addEventListener("click",(function(e){var t=i.value,n=c.value;t&&(f(t,s,!1,!1,a,n),l.push({name:t,id:s,done:!1,trash:!1,priority:a.value,description:n}),s++,u(l),console.log(l)),i.value="",c.value=""}));r.addEventListener("click",(function(e){var t=e.target,n=t.attributes.job.value;"complete"==n?(!function(e){e.classList.toggle("fa-check-circle"),e.classList.toggle("fa-circle-thin"),e.parentNode.querySelector(".text").classList.toggle("lineThrough"),l[e.id].done=!l[e.id].done}(t),u(l)):"delete"==n&&(!function(e){e.parentNode.parentNode.removeChild(e.parentNode),l[e.id].trash=!0,u(l),console.log(l)}(t),u(l))})),document.addEventListener("DOMContentLoaded",(function(){l.forEach((function(e){f(e.name,e.id,e.done,e.trash,e.priority,e.description)}))}))}]);