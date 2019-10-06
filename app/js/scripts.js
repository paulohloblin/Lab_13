'use strict';
var html = document.querySelector("html");
var div = document.querySelector(".logo");
var nav = document.querySelector(".top");
var navleft = document.querySelector(".left");
var main = document.querySelector("main");
var fake = document.querySelector(".fake");

console.log(navleft);
console.log(main);

var width = screen.width;
var height = screen.height;
var clientwidth = html.clientWidth;

console.log(clientwidth);
console.log(height);

nav.style.setProperty('--topheight', (height/10) + 'px');
div.style.setProperty('--topheight', (height/10) + 'px');
div.style.setProperty('--leftsidewidth', ((width/100)*18) + 'px');

navleft.style.setProperty('--leftsidewidth', ((width/100)*18) + 'px');
main.style.setProperty('--rightsidewidth', clientwidth - ((width/100)*18) + 'px');
navleft.style.setProperty('--height', height + 'px');
main.style.setProperty('--height', height + 'px');

fake.style.setProperty('--topheight', (height/10) + 'px');