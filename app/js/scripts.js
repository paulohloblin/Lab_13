'use strict';
console.log("Script started");
let topbarheight = 70;
let tbheight_selector = document.querySelector(".top");
let bodypadding_selector = document.querySelector("body");
let logoheight_selector = document.querySelector(".logo");
let textfield = document.querySelector(".mdc-text-field");
let textfieldicon = document.querySelector(".mdc-text-field__icon");
let topmenu = document.querySelector(".mathposition");
let logo = document.querySelector(".logowrapper");

console.log(screen.availHeight);

tbheight_selector.style.setProperty('--topbarheight', topbarheight + 'px');
logoheight_selector.style.setProperty('--topbarheight', topbarheight + 'px');
bodypadding_selector.style.setProperty('--topbarheight', topbarheight + 'px');
textfield.style.setProperty('--text', ((topbarheight)-56)/2 + 'px');
topmenu.style.setProperty('--toppadding', ((topbarheight)-44)/2 + 'px');
logo.style.setProperty('--logomargin', ((topbarheight)-40)/2 + 'px');

textfieldicon.style.setProperty('--textfieldicon', ((56)-24)/2 + 'px');

console.log("Script finished");