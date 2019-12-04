'use strict';
console.log("Script started");
let text = document.querySelector(".mdc-text-field");
let topmenu = document.querySelector(".mathposition");

text.style.setProperty('--text', ((76)-56)/2 + 'px');
topmenu.style.setProperty('--toppadding', ((76)-44)/2 + 'px');

console.log("Script finished");