!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=0)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e),n.d(e,"currentState",(function(){return d}));var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.items=[],this.subtotal=0,this.tip=0,this.tax=0}var e,n,o;return e=t,(n=[{key:"total",get:function(){return Number(this.subtotal)+Number(this.tip)+Number(this.tax)}}])&&i(e.prototype,n),o&&i(e,o),t}();var a=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.price=n,this.buyers=[]};function r(){var t=document.querySelector(".modal");t.parentNode.removeChild(t)}function c(){var t=document.getElementById("tip-custom"),e=document.getElementById("tip-amount");e.disabled=!t.checked,e.disabled||e.focus()}window.onclick=function(t){t.target.matches(".modal-screen")&&r()};var d={items:[],guests:[],subtotal:0,tip:0,tax:0,total:0};function u(t){t.preventDefault();for(var e=document.querySelector("form"),n=new FormData(e),i=n.get("item-name"),o=n.get("item-price"),c=n.getAll("item-guests"),u=c.length,l=new a(i,Number(1*o)/u),s=0;s<u;s++)d.items.push(l),p(l);c.forEach((function(t){return function(t,e){var n=d.guests.find((function(t){return t.name==e}));n.items.push(t);var i=document.querySelector(".".concat(e)),o=document.createElement("tr");o.innerHTML='\n    <td class="left" id="item-name">\n        '.concat(t.name,'\n    </td>\n    <td class="right" id="item-price">\n        $').concat(Number(t.price).toFixed(2),"      \n    </td> \n    "),i.appendChild(o),n.subtotal=0,n.items.forEach((function(t){return n.subtotal+=Number(t.price)})),document.querySelector(".subtotal.".concat(e," > td.right")).innerHTML="$".concat(n.subtotal.toFixed(2))}(l,t)})),r()}function l(t){t.preventDefault();var e=document.querySelector("form"),n=new FormData(e).get("guest-name"),i=new o(n);d.guests.push(i),r(),function(t){var e=document.querySelector("div.content#users"),n=document.createElement("div");n.className="box",n.id="user",n.innerHTML='\n        <div class="header row" id="users">'.concat(t.name,'</div>\n        <div class="content" id="user">\n            <table class="').concat(t.name,'" id="users ').concat(t.name,'">\n                <tr>\n                    <th>Item</th>\n                    <th>Price</th>\n                </tr>\n            </table>\n        </div>\n        <div class="footer" id="user">\n            <table>\n                <tr class="subtotal ').concat(t.name,'" >\n                    <td>Subtotal</td>\n                    <td class="right">$0.00</td>\n                </tr>\n\n                <tr class="tip ').concat(t.name,'">\n                    <td>Tip</td>\n                    <td class="right">$0.00</td>\n                </tr>\n                <tr class="tax ').concat(t.name,'">\n                    <td>Tax</td>\n                    <td class="right">$0.00</td>\n                </tr>\n                <tr class="total ').concat(t.name,'">\n                    <td>Total</td>\n                    <td class="right">$0.00</td>\n                </tr>\n            </table>\n        </div>\n    '),e.appendChild(n)}(i)}function s(t){t.preventDefault();var e=document.querySelector("form"),n=new FormData(e),i=n.get("tip-rate"),o=Number(n.get("tip-amount"));"custom"===i?function(t){d.tip=Number(t),document.querySelector(".tip > td.right").innerHTML="$".concat(d.tip.toFixed(2)),d.guests.forEach((function(e){var n=1*e.subtotal/d.subtotal,i=(t*n).toFixed(2);e.tip=i,document.querySelector(".tip.".concat(e.name," > td.right")).innerHTML="$".concat(e.tip)}))}(o):function(t){t=parseFloat(t)/100,d.tip=Number(d.subtotal)*t,document.querySelector(".tip > td.right").innerHTML="$".concat(d.tip.toFixed(2)),d.guests.forEach((function(e){e.tip=(e.subtotal*t).toFixed(2),document.querySelector(".tip.".concat(e.name," > td.right")).innerHTML="$".concat(e.tip)}))}(i),r()}function m(t){t.preventDefault();var e=document.querySelector("form"),n=new FormData(e);!function(t){d.tax=Number(t),document.querySelector(".tax > td.right").innerHTML="$".concat(d.tax.toFixed(2)),d.guests.forEach((function(e){var n=1*e.subtotal/d.subtotal,i=(t*n).toFixed(2);e.tax=i,document.querySelector(".tax.".concat(e.name," > td.right")).innerHTML="$".concat(e.tax)}))}(Number(n.get("tax-amount"))),r()}function p(t){var e=document.querySelector("table#items"),n=document.createElement("tr");n.innerHTML='\n    <td class="left" id="item-name">\n    '.concat(t.name,'\n    </td>\n    <td class="right" id="item-price">\n    $').concat(Number(t.price).toFixed(2),"      \n    </td> \n    "),e.appendChild(n),d.subtotal+=Number(t.price),document.querySelector(".subtotal > td.right").innerHTML="$".concat(d.subtotal.toFixed(2))}document.querySelector("button#items").addEventListener("click",(function(){var t,e;t=d.guests.map((function(t){return'\n        <div>\n        <input type="checkbox" name="item-guests" id="checkbox-'.concat(t.name,'" value="').concat(t.name,'">\n        <label for="item-guest">').concat(t.name,"</label>\n        </div>\n        ")})),(e=document.createElement("div")).className="modal",e.innerHTML='\n        <div class="modal-screen">\n        </div>\n        <div class="modal-form">\n            <form>\n                <div id="item-name">\n                    <label for="item-name">Item Name</label>\n                    <input type="text" id="item-name" name="item-name" required>\n                </div>\n                <div id="item-price">\n                    <label for="item-price">Price</label>\n                    <input type="text" id="item-price" name="item-price" required>\n                </div>\n                <div id="item-guests">\n                    Assign to guest(s): \n                    <div></div>\n                    <div></div>\n                    '.concat(t.join(""),'\n                </div>\n\n              <button id="submit"">Add Item</button>\n\n            </form>\n        </div>\n              '),document.body.appendChild(e),document.querySelector("input#item-name").focus(),document.querySelector("button#submit").addEventListener("click",u)})),document.querySelector("button#users").addEventListener("click",(function(){var t,e;t=d,(e=document.createElement("div")).className="modal",e.innerHTML='\n        <div class="modal-screen">\n        </div>\n        <div class="modal-form">\n            <form>\n                <div id="guest-name">\n                    <label for="guest-name">Guest Name</label>\n                    <input type="text" id="guest-name" name="guest-name" value="Guest'.concat(t.guests.length+1,'" placeholder="Enter guest name" required>\n                </div>\n                <button id="submit"">Add Guest</button>\n            </form>\n        </div>\n    '),document.body.appendChild(e),document.querySelector("input#guest-name").focus(),document.querySelector("button#submit").addEventListener("click",l)})),document.querySelector("button#tip").addEventListener("click",(function(){var t;(t=document.createElement("div")).className="modal",t.innerHTML='\n        <div class="modal-screen">\n        </div>\n        <div class="modal-form">\n            <form>\n                <div id="tip-rate">\n                    <h2>Select Tip Rate</h2>\n                    <div>\n                        <div>\n                            <input type="radio" id="tip15" name="tip-rate" value="15%">\n                            <label for="tip15">15%</label>\n                        </div>\n                        <div>\n                            <input type="radio" id="tip18" name="tip-rate" value="18%">\n                            <label for="tip18">18%</label>\n                        </div>\n                        <div>\n                            <input type="radio" id="tip20" name="tip-rate" value="20%">\n                            <label for="tip20">20%</label>\n                        </div>\n                        <div>\n                            <input type="radio" id="tip-custom" name="tip-rate" value="custom">\n                            <label for="tip-custom">Custom Amount</label>\n                            <input type="text" id="tip-amount" name="tip-amount" placeholder="Enter custom amount" disabled> \n                        </div>\n                    </div>\n                </div>\n    \n                <button id="submit"">Add Tip</button>\n            </form>\n        </div>\n    ',document.body.appendChild(t),document.getElementById("tip15").addEventListener("click",c),document.getElementById("tip18").addEventListener("click",c),document.getElementById("tip20").addEventListener("click",c),document.getElementById("tip-custom").addEventListener("click",c),document.querySelector("button#submit").addEventListener("click",s)})),document.querySelector("button#tax").addEventListener("click",(function(){var t;(t=document.createElement("div")).className="modal",t.innerHTML='\n        <div class="modal-screen">\n        </div>\n        <div class="modal-form">\n            <form>\n                <div id="tax-amount">\n                    <label for="tax-amount">Calculate Tax</label>\n                    <input type="text" id="tax-amount" name="tax-amount" placeholder="Enter tax amount" required>\n                </div>\n    \n                <button id="submit"">Add Tax</button>\n            </form>\n        </div>\n    ',document.body.appendChild(t),document.querySelector("button#submit").addEventListener("click",m)})),document.querySelector("button#calculate").addEventListener("click",(function(t){t.preventDefault(),d.total=d.subtotal+d.tip+d.tax,document.querySelector(".total > td.right").innerHTML="$".concat(d.total.toFixed(2)),d.guests.forEach((function(t){document.querySelector(".total.".concat(t.name," > td.right")).innerHTML="$".concat(t.total.toFixed(2))}))})),document.querySelector("button#instructions").addEventListener("click",(function(){var t;(t=document.createElement("div")).className="modal",t.innerHTML='\n        <div class="modal-screen">\n        </div>\n        <div class="modal-form">\n            <form>\n                <div id="instructions">\n                    <h2> How to Use </h2> \n                    <ol>\n                        <li> Use the "Add Guest" button to add all recipients to the bill. </li>\n                        <li> Next, add items to the bill and assign them to one or more guests. </li> \n                        <li> Once all items have been added, press "Add Tip" to choose a tip rate or enter a custom tip amount. </li> \n                        <li> Add the tax amount displayed on your bill or receipt. </li> \n                        <li> Finally, press "Calculate" to calculate the total amount of your bill as well as the individual totals owed by each guest. </li>\n                    </ol>\n                </div>\n    \n                <button id="submit">Done</button>\n\n            </form>\n        </div>\n    ',document.body.appendChild(t),document.querySelector("button#submit").addEventListener("click",(function(t){t.preventDefault(),r()}))}))}]);
//# sourceMappingURL=main.js.map