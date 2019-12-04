'use strict';
console.log("Script started");
let html = document.querySelector("html");
let div = document.querySelector(".logo");
let div2 = document.querySelector(".navbar");
let nav = document.querySelector(".top");
let body = document.querySelector("body");
let text = document.querySelector(".mdc-text-field");
let topmenu = document.querySelector(".mathposition");

let width = screen.width;
let height = screen.height;
let clientwidth = html.clientWidth;

console.log(clientwidth);
console.log(height);


body.style.setProperty('--topheight', (height/10) + 'px');
nav.style.setProperty('--topheight', (height/10) + 'px');
div.style.setProperty('--topheight', (height/10) + 'px');
div.style.setProperty('--leftsidewidth', ((width/100)*18) + 'px');
text.style.setProperty('--text', ((height/10)-56)/2 + 'px');
topmenu.style.setProperty('--toppadding', ((height/10)-44)/2 + 'px');

/*navleft.style.setProperty('--leftsidewidth', ((width/100)*18) + 'px');
div2.style.setProperty('--rightsidewidth', clientwidth - ((width/100)*10) + 'px');
navleft.style.setProperty('--height', height + 'px');
main.style.setProperty('--height', height + 'px');

fake.style.setProperty('--topheight', (height/10) + 'px');*/

console.log("Script finished");