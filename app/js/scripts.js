'use strict';
console.log("Script started");
let html = document.querySelector("html");
let div = document.querySelector(".logo");
let nav = document.querySelector(".top");
let body = document.querySelector("body");

let width = screen.width;
let height = screen.height;
let clientwidth = html.clientWidth;

console.log(clientwidth);
console.log(height);

body.style.setProperty('--topheight', (height/10) + 'px');
nav.style.setProperty('--topheight', (height/10) + 'px');
div.style.setProperty('--topheight', (height/10) + 'px');
div.style.setProperty('--leftsidewidth', ((width/100)*18) + 'px');

console.log("Script finished");

/*navleft.style.setProperty('--leftsidewidth', ((width/100)*18) + 'px');
main.style.setProperty('--rightsidewidth', clientwidth - ((width/100)*18) + 'px');
navleft.style.setProperty('--height', height + 'px');
main.style.setProperty('--height', height + 'px');

fake.style.setProperty('--topheight', (height/10) + 'px');*/